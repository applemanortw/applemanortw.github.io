// 產生一致尺寸的佔位圖（商品尚未有 AI 圖時使用）。真實圖片請用 npm run images 匯入。
import sharp from 'sharp';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const products = JSON.parse(readFileSync(resolve('src/data/products.json'), 'utf8'));
const outDir = resolve('src/assets/products');
mkdirSync(outDir, { recursive: true });
const force = process.argv.includes('--force');

const shapeFor = (p) => {
  const c = p.color;
  if (p.category === 'soap') {
    return `<circle cx="600" cy="600" r="300" fill="${c}" filter="url(#sh)"/>
      <circle cx="600" cy="600" r="190" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="3" stroke-dasharray="10 10"/>`;
  }
  if (p.category === 'plant') {
    return `<rect x="440" y="300" width="320" height="600" rx="60" fill="${c}" filter="url(#sh)"/>`;
  }
  if (p.category === 'bath') {
    return `<rect x="420" y="260" width="360" height="680" rx="40" fill="${c}" filter="url(#sh)"/>`;
  }
  return `<rect x="300" y="420" width="600" height="400" rx="24" fill="${c}" filter="url(#sh)"/>`;
};

for (const p of products) {
  const out = resolve(outDir, `${p.slug}.webp`);
  if (existsSync(out) && !force) continue;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F9F7F2"/><stop offset="1" stop-color="#EDE8DF"/></linearGradient>
      <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#000" flood-opacity=".18"/></filter>
    </defs>
    <rect width="1200" height="1200" fill="url(#bg)"/>
    ${shapeFor(p)}
  </svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 80 }).toFile(out);
  console.log('placeholder', p.slug);
}
