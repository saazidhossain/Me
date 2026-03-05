import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  site: 'https://saazidhossain.github.io',
  // base is intentionally not set here so internal links work as absolute paths.
  // For a GitHub Pages project page at /Me/, configure a custom domain
  // or uncomment: base: '/Me'
  output: 'static',
});
