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
 * Whole-path pairs for the relaunch (docs/relaunch/00-opzet.md): the new Dutch URLs are flat and
 * cannot be derived segment by segment. `null` means the page has no English counterpart yet.
 * Until the English block (phase 7) the English side is the existing English page; the reverse
 * lookup takes the first pair, so list the main Dutch page for an English URL first.
 */
export const PATH_PAIRS: Array<[nl: string, en: string | null]> = [
  ['/nl/wat-we-bouwen', '/en/services'],
  ['/nl/nieuwe-ai-toepassing', '/en/services/software'],
  ['/nl/software-vervangen', '/en/services/replace-software'],
  ['/nl/eigen-beheer', '/en/services/eu-consultancy'],
  ['/nl/hoe-we-werken', '/en/about/approach'],
  ['/nl/startsprint', '/en/start-sprint'],
  ['/nl/business-case', '/en/services/consulting'],
  ['/nl/compliance', null],
  ['/nl/training', '/en/services/training'],
  ['/nl/kennis', '/en/resources'],
  ['/nl/ai-bureau-groningen', '/en/services/ai-agency-groningen'],
  ['/nl/ai-bureau-nederland', '/en/services/ai-agency-netherlands'],
  ['/nl/incompany-ai-training', '/en/services/incompany-ai-training'],
  ['/nl/ai-geletterdheid-training', '/en/services/ai-literacy-training'],
  ['/nl/digitale-soevereiniteit', '/en/services/eu-training'],
  ['/nl/wat-kost-ai-implementatie', '/en/resources/ai-implementation-costs'],
  ['/nl/kennis/ai-act', '/en/resources/eu-ai-act-compliance'],
  ['/nl/kennis/ai-geletterdheid', '/en/resources/ai-literacy'],
  ['/nl/kennis/ai-beleid', '/en/resources/ai-policy-guide'],
  ['/nl/kennis/top-10-ai-bureaus', '/en/resources/top-10-ai-consultancy-netherlands'],
  ['/nl/kennis/waar-begin-je-met-ai', '/en/resources/ai-strategy-guide'],
  ['/nl/kennis/europese-alternatieven-chatgpt', '/en/resources/european-chatgpt-alternatives'],
  ['/nl/ai-op-eigen-servers', '/en/resources/sovereign-ai'],
  ['/nl/ai-klantenservice', null],
  ['/nl/ai-agents', null],
  ['/nl/administratie-automatiseren', null],
  ['/nl/company-wiki', null],
  ['/nl/digital-twin', null],
  ['/nl/ai-integratie', null],
  ['/nl/extra-developers', null],
  ['/nl/maatwerk-software', null],
  ['/nl/saas-vervangen', null],
  ['/nl/excel-vervangen', null],
  ['/nl/verouderde-software', null],
  ['/nl/europees-alternatief-chatgpt', null],
  ['/nl/kennis/iso-42001', null],
  ['/nl/kennis/ai-security', null],
  ['/nl/kennis/ai-en-avg', null],
  ['/nl/kennis/menselijk-toezicht', null],
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
