// Single source of truth for the bilingual URL structure.
// Replaces three previous copies of this knowledge:
//   - calculateAlternatePath() in hooks/useSEO.ts (the 23-pair slug map)
//   - NL_ONLY_SEGMENTS / EN_ONLY_SEGMENTS in utils/routing.ts
// Drives: page routing, the <head> hreflang block (BaseLayout), and sitemap alternates.

export type Lang = 'nl' | 'en';

export const LANGS: Lang[] = ['nl', 'en'];

// NL path segment -> EN path segment. Only segments that DIFFER between languages
// are listed; language-neutral slugs (ai-salon, resources, ai-foundations, medux, …)
// are identical on both sides and need no entry.
export const SEGMENT_NL_TO_EN: Record<string, string> = {
  diensten: 'services',
  'over-ons': 'about',
  'ai-voor-developers': 'ai-for-developers',
  'maatwerk-ai-oplossingen': 'custom-ai-solutions',
  'ai-bureau-nederland': 'ai-agency-netherlands',
  'digitale-onafhankelijkheid': 'digital-independence',
  'ai-implementatiebegeleiding': 'ai-implementation-guidance',
  procesanalyse: 'process-analysis',
  'ai-integratie': 'ai-integration',
  aanpak: 'approach',
  'ai-geletterdheid': 'ai-literacy',
  'ai-strategie-gids': 'ai-strategy-guide',
  voorwaarden: 'terms',
  vacatures: 'careers',
  pers: 'press',
};

export const SEGMENT_EN_TO_NL: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENT_NL_TO_EN).map(([nl, en]) => [en, nl])
);

/**
 * Translate a path to its equivalent in the other language. Pure / build-time.
 * Mirrors the old calculateAlternatePath() but is driven by the segment map so the
 * two can never drift. Operates per path-segment (exact match), which is safer than
 * the old chained string .replace().
 */
export function alternatePath(path: string, lang: Lang): string {
  // Homepage special cases: NL home is unprefixed ("/"), EN home is "/en".
  if (path === '/') return '/en';
  if (path === '/en' || path === '/en/') return '/';

  const map = lang === 'nl' ? SEGMENT_NL_TO_EN : SEGMENT_EN_TO_NL;
  const segments = path.split('/').filter(Boolean); // ['nl','diensten','ai-foundations']
  const out = segments.map((seg) => map[seg] ?? seg);
  // Swap the language prefix.
  if (out[0] === 'nl' || out[0] === 'en') {
    out[0] = lang === 'nl' ? 'en' : 'nl';
  }
  return '/' + out.join('/');
}

export interface HreflangSet {
  nl: string;
  en: string;
  xDefault: string; // x-default points to Dutch
}

/** Build the hreflang URLs (path-only) for the current page. */
export function hreflangPaths(path: string, lang: Lang): HreflangSet {
  const alt = alternatePath(path, lang);
  const nl = lang === 'nl' ? path : alt;
  const en = lang === 'nl' ? alt : path;
  return { nl, en, xDefault: nl };
}
