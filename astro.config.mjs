import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://saazidhossain.github.io',
  base: '/Me',
  integrations: [
    react(),
    tailwind(),
  ],
  output: 'static',
});
