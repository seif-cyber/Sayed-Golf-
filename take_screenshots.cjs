const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIST_DIR = path.join(__dirname, 'dist');
const BASE_PATH = '/Sayed-Golf-/';
const PORT = 8089;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith(BASE_PATH)) {
    reqPath = reqPath.slice(BASE_PATH.length);
  }
  if (!reqPath || reqPath === '/') {
    reqPath = 'index.html';
  }

  const filePath = path.join(DIST_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const indexPath = path.join(DIST_DIR, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexPath).pipe(res);
  }
});

server.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}${BASE_PATH}`);
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const artifactDir = 'C:\\Users\\SIF\\.gemini\\antigravity\\brain\\60c9f338-8a61-4d36-85ee-4606aee845b3';

    // Desktop
    const pageDesktop = await browser.newPage();
    await pageDesktop.setViewport({ width: 1440, height: 900 });
    await pageDesktop.goto(`http://localhost:${PORT}${BASE_PATH}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await pageDesktop.screenshot({ path: path.join(artifactDir, 'screenshot_desktop.png') });
    console.log('Saved desktop screenshot');

    // Mobile
    const pageMobile = await browser.newPage();
    await pageMobile.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await pageMobile.goto(`http://localhost:${PORT}${BASE_PATH}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await pageMobile.screenshot({ path: path.join(artifactDir, 'screenshot_mobile.png') });
    console.log('Saved mobile screenshot');

    await browser.close();
  } catch (err) {
    console.error('Error taking screenshots:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});
