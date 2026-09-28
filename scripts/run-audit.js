import puppeteer from 'puppeteer-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('./test-results');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
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

console.log(`Using browser: ${executablePath}`);

async function runAudit() {
  console.log('Starting Vite preview server...');
  const server = spawn('npx', ['vite', 'preview', '--port', '5173'], {
    shell: true,
    stdio: 'pipe'
  });

  // Wait 3 seconds for the server to be ready
  await new Promise(r => setTimeout(r, 3000));

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--enable-webgl', '--ignore-gpu-blocklist']
  });

  const page = await browser.newPage();
  
  const consoleLogs = [];
  const errors = [];
  const networkFailures = [];
  const successfulRequests = [];

  page.on('console', msg => {
    const text = msg.text();
    const type = msg.type();
    consoleLogs.push({ type, text });
    if (type === 'error') {
      errors.push(text);
    }
  });

  page.on('pageerror', err => {
    errors.push(err.toString());
  });

  page.on('response', res => {
    const url = res.url();
    const status = res.status();
    if (status >= 400) {
      networkFailures.push({ url, status });
    } else {
      successfulRequests.push({ url, status });
    }
  });

  try {
    console.log('Navigating to http://localhost:5173 ...');
    // Set Desktop viewport
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait 3 seconds for Three.js GLTF model and GSAP to load
    await new Promise(r => setTimeout(r, 3500));

    // Verify canvas presence
    const canvasDetails = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        glContext: !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
      };
    });

    console.log('Canvas Details:', JSON.stringify(canvasDetails));

    // Capture Desktop - Hero View
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_1_hero.png') });
    console.log('Saved screenshot: desktop_1_hero.png');

    // Scroll to Services
    await page.evaluate(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_2_services.png') });
    console.log('Saved screenshot: desktop_2_services.png');

    // Scroll to Contact
    await page.evaluate(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_3_contact.png') });
    console.log('Saved screenshot: desktop_3_contact.png');

    // Switch to Mobile Viewport (iPhone 14 / modern smartphone)
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_1_hero.png') });
    console.log('Saved screenshot: mobile_1_hero.png');

    // Mobile - Scroll to Brands & Services
    await page.evaluate(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_2_services.png') });
    console.log('Saved screenshot: mobile_2_services.png');

    // Collect Summary Report
    const report = {
      timestamp: new Date().toISOString(),
      canvasValid: !!canvasDetails,
      canvasDetails,
      totalSuccessfulRequests: successfulRequests.length,
      networkFailures,
      errors,
      consoleLogsCount: consoleLogs.length
    };

    fs.writeFileSync(
      path.join(SCREENSHOT_DIR, 'audit-summary.json'),
      JSON.stringify(report, null, 2),
      'utf8'
    );

    console.log('\n--- AUDIT SUMMARY ---');
    console.log(`Canvas Mounted: ${!!canvasDetails}`);
    console.log(`Network Failures (404/500): ${networkFailures.length}`);
    if (networkFailures.length > 0) {
      console.log('Failed URLs:', networkFailures);
    }
    console.log(`Console Errors: ${errors.length}`);
    if (errors.length > 0) {
      console.log('Errors:', errors);
    }
    console.log('---------------------\n');

  } catch (err) {
    console.error('Audit execution error:', err);
  } finally {
    await browser.close();
    server.kill();
    // Force kill node on windows if needed
    process.exit(0);
  }
}

runAudit();
