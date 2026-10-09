// 把 incoming/ 裡的 AI 生成圖裁成正方形、縮到 1200px、轉 WebP，放到 public/images/products/。
// 檔名開頭的商品編號（S01、P02、G03…）或 slug 都可以對應。
import sharp from 'sharp';
import { readFileSync, readdirSync, mkdirSync, statSync } from 'node:fs';
import { resolve, basename, extname } from 'node:path';

const products = JSON.parse(readFileSync(resolve('src/data/products.json'), 'utf8'));
const inDir = resolve('incoming');
const outDir = resolve('public/images/products');
mkdirSync(outDir, { recursive: true });

const files = readdirSync(inDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
if (files.length === 0) { console.log('incoming/ 沒有圖片'); process.exit(0); }

let done = 0;
for (const f of files) {
  const stem = basename(f, extname(f)).toLowerCase();
  const p = products.find((x) => stem.startsWith(x.id.toLowerCase()) || stem.includes(x.slug));
  if (!p) { console.warn(`略過 ${f}：檔名對不到任何商品`); continue; }
  const out = resolve(outDir, `${p.slug}.webp`);
  await sharp(resolve(inDir, f))
    .rotate()
    .resize(1200, 1200, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82 })
    .toFile(out);
  const kb = Math.round(statSync(out).size / 1024);
  console.log(`${f} → ${p.slug}.webp (${kb} KB)`);
  done++;
}
console.log(`完成 ${done} 張`);
