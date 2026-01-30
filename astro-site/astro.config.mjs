// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rhythmrastogi.com', // Update with actual domain
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
