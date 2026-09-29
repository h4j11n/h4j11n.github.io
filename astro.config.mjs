import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://h4j11n.github.io',
  output: 'static', trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/archives/2026/': '/archives/',
    '/archives/2026/05/': '/archives/',
    '/categories/NeuronSpark-2026/': '/tags/比赛复盘/',
    '/2026/05/30/hello-world/': '/archives/',
  },
});
