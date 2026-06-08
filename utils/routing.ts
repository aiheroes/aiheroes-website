import { Language } from '../types';

export const LANG_STORAGE_KEY = 'aiheroes-lang';

/**
 * Detect the visitor's preferred language the same way the homepage does:
 * saved preference (localStorage) -> browser language -> Dutch default.
 */
export function detectVisitorLang(): Language {
  // Guard browser globals so this is safe during static prerendering (runs in Node).
  if (typeof window === 'undefined') return 'nl';
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'nl' || stored === 'en') return stored;
  } catch {
    // localStorage can throw (private mode, blocked cookies); fall through to browser detection.
  }
  const browserLang = (navigator.language || (navigator as any).userLanguage || '').toLowerCase();
  return browserLang.startsWith('nl') ? 'nl' : 'en';
}

// Path segments that only exist in one language, derived from the NL<->EN slug map
// in hooks/useSEO.ts. Used to infer the language of a prefix-less URL.
const NL_ONLY_SEGMENTS = new Set([
  'diensten', 'over-ons', 'ai-voor-developers', 'maatwerk-ai-oplossingen',
  'digitale-onafhankelijkheid', 'ai-implementatiebegeleiding', 'procesanalyse',
  'ai-integratie', 'aanpak', 'ai-geletterdheid', 'ai-strategie-gids',
  'voorwaarden', 'vacatures', 'pers', 'menu',
]);

const EN_ONLY_SEGMENTS = new Set([
  'services', 'about', 'ai-for-developers', 'custom-ai-solutions',
  'digital-independence', 'ai-implementation-guidance', 'process-analysis',
  'ai-integration', 'approach', 'ai-literacy', 'ai-strategy-guide',
  'terms', 'careers', 'press',
]);

/**
 * Infer the language of a path from its slugs, or null if every segment is
 * language-neutral (the slug is identical in NL and EN, e.g. "ai-salon").
 */
export function detectLangFromPath(pathname: string): Language | null {
  for (const segment of pathname.split('/')) {
    if (NL_ONLY_SEGMENTS.has(segment)) return 'nl';
    if (EN_ONLY_SEGMENTS.has(segment)) return 'en';
  }
  return null;
}

/**
 * Resolve a prefix-less URL (e.g. "/over-ons", "/about", "/ai-salon") to its
 * correct language-prefixed path. Returns null when the path is already
 * language-prefixed (/nl/... or /en/...), which means it's a genuine 404.
 *
 * Language is inferred from the slug when it is language-specific; otherwise we
 * fall back to the visitor's preferred language. A trailing slash is dropped so
 * the result matches the route definitions in App.tsx.
 */
export function resolveBarePath(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;                         // "/" has its own route
  if (segments[0] === 'nl' || segments[0] === 'en') return null;  // already prefixed -> real 404
  const lang = detectLangFromPath(pathname) ?? detectVisitorLang();
  return `/${lang}/${segments.join('/')}`;
}
