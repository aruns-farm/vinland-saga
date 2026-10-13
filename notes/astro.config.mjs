// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to wherever the blog will live (needed for RSS + sitemap URLs).
export default defineConfig({
  site: 'https://notes.ketils.farm',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-default', wrap: false },
  },
});
