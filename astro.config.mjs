import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署到 GitHub Pages 時由 workflow 設定 SITE 與 BASE；本機預覽用預設值。
const site = process.env.SITE ?? 'https://doraak47.github.io';
const base = process.env.BASE ?? '/applemanor';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
