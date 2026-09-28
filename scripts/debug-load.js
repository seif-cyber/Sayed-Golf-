import puppeteer from 'puppeteer-core';
import { spawn } from 'child_process';
import fs from 'fs';

async function checkLoad() {
  const browserPaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  const executablePath = browserPaths.find(p => fs.existsSync(p));

  const server = spawn('npx', ['vite', 'preview', '--port', '5173'], { shell: true });
  await new Promise(r => setTimeout(r, 2500));

  const browser = await puppeteer.launch({ executablePath, headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err));

  await page.goto('http://localhost:5173');

  for (let i = 0; i < 8; i++) {
    await new Promise(r => setTimeout(r, 1000));
    const info = await page.evaluate(() => {
      const hasLoading = document.body.innerText.includes('جاري تجهيز المجسم');
      const canvas = document.querySelector('canvas');
      return { hasLoading, title: document.title };
    });
    console.log(`Sec ${i+1}:`, info);
  }

  await browser.close();
  server.kill();
  process.exit(0);
}
checkLoad();
