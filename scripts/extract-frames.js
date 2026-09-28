import puppeteer from 'puppeteer-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const FRAMES_DIR = path.resolve('./public/frames');
if (!fs.existsSync(FRAMES_DIR)) {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

// Find Chrome or Edge executable
const browserPaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];
const executablePath = browserPaths.find(p => fs.existsSync(p));

if (!executablePath) {
  console.error('No suitable browser executable found.');
  process.exit(1);
}

console.log(`Starting Frame Extractor with browser: ${executablePath}`);

async function run() {
  console.log('Starting Vite server on port 5174...');
  const server = spawn('npx', ['vite', '--port', '5174'], {
    shell: true,
    stdio: 'pipe'
  });

  // Wait until Vite server is actually responding
  const http = (await import('http')).default;
  let serverReady = false;
  for (let attempt = 0; attempt < 30; attempt++) {
    await new Promise(r => setTimeout(r, 1000));
    try {
      await new Promise((resolve, reject) => {
        const req = http.get('http://localhost:5174/extract-frames.html', (res) => {
          if (res.statusCode === 200) {
            serverReady = true;
            resolve();
          } else {
            reject(new Error(`Status: ${res.statusCode}`));
          }
        });
        req.on('error', reject);
        req.setTimeout(1000, () => { req.destroy(); reject(new Error('timeout')); });
      });
      if (serverReady) {
        console.log('Vite server is ready!');
        break;
      }
    } catch (e) {
      // Keep waiting
    }
  }

  if (!serverReady) {
    throw new Error('Vite server failed to start within 30 seconds.');
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--window-size=1650,950'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900 });

  page.on('console', msg => {
    console.log('[Browser Console]', msg.text());
  });

  page.on('pageerror', err => {
    console.error('[Browser Error]', err.toString());
  });

  try {
    console.log('Opening http://localhost:5174/extract-frames.html ...');
    await page.goto('http://localhost:5174/extract-frames.html', { waitUntil: 'networkidle2', timeout: 60000 });

    // Wait until model and HDR are fully loaded
    console.log('Waiting for model and HDR to load in browser...');
    await page.waitForFunction(() => window.__READY_FOR_EXTRACTION__ || window.__EXTRACTION_ERROR__, { timeout: 60000 });

    const error = await page.evaluate(() => window.__EXTRACTION_ERROR__);
    if (error) {
      throw new Error(`Extraction initialization error: ${error}`);
    }

    const totalFrames = await page.evaluate(() => window.__TOTAL_FRAMES__ || 100);
    console.log(`Ready! Starting rendering of ${totalFrames} frames...`);

    const startTime = Date.now();

    for (let i = 0; i < totalFrames; i++) {
      const dataUrl = await page.evaluate((idx) => window.__RENDER_FRAME__(idx), i);
      const base64Data = dataUrl.replace(/^data:image\/webp;base64,/, '');
      const frameNum = String(i + 1).padStart(4, '0');
      const filename = `frame_${frameNum}.webp`;
      const filePath = path.join(FRAMES_DIR, filename);

      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

      if ((i + 1) % 10 === 0 || i === totalFrames - 1) {
        console.log(`Rendered frame [${i + 1}/${totalFrames}] -> ${filename}`);
      }
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n🎉 Successfully rendered and saved ${totalFrames} frames to public/frames/ in ${elapsed}s!`);

  } catch (err) {
    console.error('Frame extraction failed:', err);
  } finally {
    await browser.close();
    server.kill();
    process.exit(0);
  }
}

run();
