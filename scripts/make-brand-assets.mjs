// 產生 favicon、apple-touch-icon、OG 分享圖、LINE QR code（WebP）
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

mkdirSync(resolve('public/images'), { recursive: true });

const tree = (color, size = 32) => `
  <circle cx="16" cy="12" r="8.5" fill="none" stroke="${color}" stroke-width="1.8"/>
  <circle cx="12" cy="10" r="1.2" fill="${color}"/><circle cx="19.5" cy="9" r="1.2" fill="${color}"/><circle cx="16" cy="15" r="1.2" fill="${color}"/>
  <path d="M16 20.5V29M11 29h10M16 24l-3.5-2.5M16 26l3.5-2.5" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;

// favicon.svg
writeFileSync(resolve('public/favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#3F6B4A"/><g transform="translate(0 .5)">${tree('#FFFFFF')}</g></svg>`);

// apple-touch-icon.png 180x180
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 32 32"><rect width="32" height="32" fill="#3F6B4A"/><g transform="translate(0 .5)">${tree('#FFFFFF')}</g></svg>`))
  .png().toFile(resolve('public/apple-touch-icon.png'));

// og.png 1200x630
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#F7F4EE"/>
  <g transform="translate(96 150) scale(5)">${tree('#3F6B4A')}</g>
  <text x="300" y="250" font-family="Noto Serif TC, serif" font-size="88" font-weight="600" fill="#2B2A26">蘋果莊園</text>
  <text x="300" y="320" font-family="Noto Sans TC, sans-serif" font-size="34" letter-spacing="6" fill="#3F6B4A">APPLE MANOR</text>
  <text x="300" y="420" font-family="Noto Sans TC, sans-serif" font-size="36" fill="#6F6B63">堅持草本 · 崇尚自然</text>
  <text x="300" y="480" font-family="Noto Sans TC, sans-serif" font-size="26" fill="#6F6B63">天然草本手工皂 · 植物調理 · 居家樂活 · 精緻禮盒</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(resolve('public/og.png'));
console.log('brand assets done');
