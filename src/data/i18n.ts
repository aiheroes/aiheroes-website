// Single source of truth for the bilingual URL structure.
// Replaces three previous copies of this knowledge:
//   - calculateAlternatePath() in hooks/useSEO.ts (the 23-pair slug map)
//   - the NL/EN-only segment lists of the old SPA router
// Drives: page routing, the <head> hreflang block (BaseLayout), and sitemap alternates.

export type Lang = 'nl' | 'en';

export const LANGS: Lang[] = ['nl', 'en'];

// NL path segment -> EN path segment. Only segments that DIFFER between languages
// are listed; language-neutral slugs (ai-salon, resources, ai-foundations, medux, …)
// are identical on both sides and need no entry.
export const SEGMENT_NL_TO_EN: Record<string, string> = {
  diensten: 'services',
  startsprint: 'start-sprint',
  'software-vervangen': 'replace-software',
  consultancy: 'consulting',
  'over-ons': 'about',
  'ai-voor-developers': 'ai-for-developers',
  'maatwerk-ai-oplossingen': 'custom-ai-solutions',
  'ai-assistent': 'ai-assistant',
  'ai-bureau-nederland': 'ai-agency-netherlands',
  'ai-consultancy-groningen': 'ai-agency-groningen',
  'ai-geletterdheid-training': 'ai-literacy-training',
  'ai-implementatiebegeleiding': 'ai-implementation-guidance',
  procesanalyse: 'process-analysis',
  'ai-integratie': 'ai-integration',
  aanpak: 'approach',
  'ai-geletterdheid': 'ai-literacy',
  'ai-strategie-gids': 'ai-strategy-guide',
  'wat-kost-ai-implementatie': 'ai-implementation-costs',
  'ai-implementatie-mkb': 'ai-implementation-sme',
  'ai-beleid-opstellen': 'ai-policy-guide',
  'soevereine-ai': 'sovereign-ai',
  'europese-chatgpt-alternatieven': 'european-chatgpt-alternatives',
  'top-10-ai-consultancy-nederland': 'top-10-ai-consultancy-netherlands',
  voorwaarden: 'terms',
  vacatures: 'careers',
  pers: 'press',
};

export const SEGMENT_EN_TO_NL: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENT_NL_TO_EN).map(([nl, en]) => [en, nl])
);

/**
 * Whole-path pairs for the relaunch (docs/relaunch/00-opzet.md): the new URLs are flat and cannot
 * be derived segment by segment. `null` means a page has no counterpart. Pages not listed (over-ons,
 * team, vacatures, pers, ai-salon, cases, legal) still map through SEGMENT_NL_TO_EN.
 */
export const PATH_PAIRS: Array<[nl: string, en: string | null]> = [
  // Pillars
  ['/nl/wat-we-bouwen', '/en/what-we-build'],
  ['/nl/nieuwe-ai-toepassing', '/en/new-ai-tool'],
  ['/nl/software-vervangen', '/en/replace-software'],
  ['/nl/eigen-beheer', '/en/self-hosted'],
  ['/nl/hoe-we-werken', '/en/how-we-work'],
  ['/nl/startsprint', '/en/start-sprint'],
  ['/nl/business-case', '/en/business-case'],
  ['/nl/compliance', '/en/compliance'],
  ['/nl/training', '/en/training'],
  ['/nl/kennis', '/en/insights'],
  // Landings
  ['/nl/ai-klantenservice', '/en/ai-customer-service'],
  ['/nl/ai-agents', '/en/ai-agents'],
  ['/nl/administratie-automatiseren', '/en/automate-administration'],
  ['/nl/company-wiki', '/en/company-wiki'],
  ['/nl/digital-twin', '/en/digital-twin'],
  ['/nl/ai-integratie', '/en/ai-integration'],
  ['/nl/extra-developers', '/en/extra-developers'],
  ['/nl/maatwerk-software', '/en/custom-software'],
  ['/nl/saas-vervangen', '/en/replace-saas'],
  ['/nl/excel-vervangen', '/en/replace-excel'],
  ['/nl/verouderde-software', '/en/legacy-software'],
  ['/nl/ai-op-eigen-servers', '/en/ai-on-your-own-servers'],
  ['/nl/europees-alternatief-chatgpt', '/en/european-chatgpt-alternative'],
  ['/nl/wat-kost-ai-implementatie', '/en/ai-implementation-costs'],
  ['/nl/ai-bureau-groningen', '/en/ai-agency-groningen'],
  ['/nl/ai-bureau-nederland', '/en/ai-agency-netherlands'],
  ['/nl/incompany-ai-training', '/en/incompany-ai-training'],
  ['/nl/ai-geletterdheid-training', '/en/ai-literacy-training'],
  ['/nl/digitale-soevereiniteit', '/en/digital-sovereignty'],
  // Knowledge
  ['/nl/kennis/ai-act', '/en/insights/ai-act'],
  ['/nl/kennis/ai-geletterdheid', '/en/insights/ai-literacy'],
  ['/nl/kennis/ai-beleid', '/en/insights/ai-policy'],
  ['/nl/kennis/iso-42001', '/en/insights/iso-42001'],
  ['/nl/kennis/ai-security', '/en/insights/ai-security'],
  ['/nl/kennis/ai-en-avg', '/en/insights/ai-and-gdpr'],
  ['/nl/kennis/menselijk-toezicht', '/en/insights/human-oversight'],
  ['/nl/kennis/top-10-ai-bureaus', '/en/insights/top-10-ai-agencies'],
  ['/nl/kennis/waar-begin-je-met-ai', '/en/insights/where-to-start-with-ai'],
  ['/nl/kennis/europese-alternatieven-chatgpt', '/en/insights/european-chatgpt-alternatives'],
];

/** The other language's version of a path, or null when it has none (yet). */
export function counterpart(path: string, lang: Lang): string | null {
  const pair = lang === 'nl' ? PATH_PAIRS.find(([nl]) => nl === path) : PATH_PAIRS.find(([, en]) => en === path);
  if (pair) return lang === 'nl' ? pair[1] : pair[0];
  return alternatePath(path, lang);
}

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
  const pair = lang === 'nl' ? PATH_PAIRS.find(([nl]) => nl === path) : PATH_PAIRS.find(([, en]) => en === path);
  if (pair) return (lang === 'nl' ? pair[1] : pair[0]) ?? (lang === 'nl' ? '/en' : '/');

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
