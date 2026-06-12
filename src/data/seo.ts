// Routes that carry <meta name="robots" content="noindex"> and therefore
// must also be excluded from the generated sitemap (a page that is both
// noindexed and sitemapped sends a contradictory signal crawlers handle badly).
// Keep this list in sync with every page that passes `noindex` to its layout.
export const NOINDEX_PATHS = [
  '/hanze',
  '/nl/menu',
  '/nl/legal/privacy',
  '/nl/legal/voorwaarden',
  '/en/legal/privacy',
  '/en/legal/terms',
];
