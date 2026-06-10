// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://aiheroes.io',
  // output: 'static' is the default — pure SSG, deployed to dist/ on Netlify.
  trailingSlash: 'never',
  server: { port: 3001 }, // 3000 is shared with sister project ivosw
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
  vite: {
    // Tailwind 4 the recommended way for Astro (NOT @astrojs/tailwind, which is the v3 pattern).
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Reuse existing React page/components as islands without a Router.
        'react-router-dom': fileURLToPath(new URL('./src/lib/react-router-shim.tsx', import.meta.url)),
      },
    },
  },
});
