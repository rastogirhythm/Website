// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rastogirhythm.github.io',
    markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  base: '/Website',
});
