import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署到 GitHub Pages 時由 workflow 自動帶入 SITE 與 BASE（configure-pages 的輸出）。
// 組織站（applemanortw.github.io）或自訂網域時 BASE 為空，等同根目錄 '/'。
const site = process.env.SITE || 'https://applemanortw.github.io';
const base = process.env.BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
