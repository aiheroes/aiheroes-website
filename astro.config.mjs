// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { NOINDEX_PATHS } from './src/data/seo.ts';
import { lastmodByPath, lastmodFor } from './scripts/lastmod.mjs';

// <lastmod> per page from the git history of its source (scripts/lastmod.mjs).
const LASTMOD = lastmodByPath();

// https://astro.build/config
export default defineConfig({
  site: 'https://aiheroes.io',
  // output: 'static' is the default — pure SSG, deployed to dist/ on Vercel.
  trailingSlash: 'never',
  // Emit page.html instead of page/index.html. With directory output, the host's
  // pretty-URL handling 301s every no-slash URL to /path/, contradicting the no-slash
  // canonicals/sitemap/hreflang. File output serves /path directly with a 200.
  build: { format: 'file' },
  server: { port: 3001 }, // 3000 is shared with sister project ivosw
  integrations: [
    react(),
    mdx(),
    // Noindexed pages must not appear in the sitemap (contradictory signal).
    sitemap({
      filter: (page) => !NOINDEX_PATHS.includes(new URL(page).pathname),
      serialize(item) {
        const date = lastmodFor(LASTMOD, new URL(item.url).pathname);
        if (date) item.lastmod = date;
        return item;
      },
    }),
  ],
  vite: {
    // Tailwind 4 the recommended way for Astro (NOT @astrojs/tailwind, which is the v3 pattern).
    plugins: [tailwindcss()],
  },
});
