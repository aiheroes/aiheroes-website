import { useEffect } from 'react';
import { Language } from '../types';

interface SEOConfig {
  title: string;
  description: string;
  lang: Language;
  path: string; // Current path without domain, e.g. "/nl/diensten/ai-foundations"
  alternatePath?: string; // The equivalent path in the other language
  noindex?: boolean; // Set to true for pages that should not be indexed (e.g. legal pages)
  jsonLd?: object | object[]; // Structured data (schema.org) injected as a <script type="application/ld+json"> tag
  seoTitle?: string; // Overrides the visible title for the <title> tag only (keyword targeting without changing the on-page H1)
}

const DOMAIN = 'https://aiheroes.io';

// Helper to get or create a meta tag
const setMetaTag = (property: string, content: string, isName = false) => {
  const attribute = isName ? 'name' : 'property';
  let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, property);
    document.head.appendChild(element);
  }

  element.content = content;
};

// Helper to get or create a link tag
const setLinkTag = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let element = document.querySelector(selector) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }

  element.href = href;
};

// Inject (or clear) a single JSON-LD structured-data script. Marked with a data
// attribute so it can be updated/removed on navigation without touching other tags.
const setJsonLd = (data?: object | object[]) => {
  let element = document.querySelector('script[data-seo-jsonld]') as HTMLScriptElement | null;

  if (!data) {
    if (element) element.remove();
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo-jsonld', '');
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

export const useSEO = ({ title, description, lang, path, alternatePath, noindex, jsonLd, seoTitle }: SEOConfig) => {
  useEffect(() => {
    // Full title with brand (seoTitle overrides the visible H1 for the <title> tag only)
    const fullTitle = `${seoTitle || title} | AI Heroes`;
    const fullUrl = `${DOMAIN}${path}`;

    // Calculate alternate URL
    const altPath = alternatePath || calculateAlternatePath(path, lang);
    const altUrl = `${DOMAIN}${altPath}`;

    // Set document title
    document.title = fullTitle;

    // Set html lang attribute
    document.documentElement.lang = lang;

    // Primary meta tags
    setMetaTag('title', fullTitle, true);
    setMetaTag('description', description, true);

    // Robots directive for noindex pages
    if (noindex) {
      setMetaTag('robots', 'noindex, follow', true);
    }

    // Open Graph
    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:url', fullUrl);
    setMetaTag('og:locale', lang === 'nl' ? 'nl_NL' : 'en_US');
    setMetaTag('og:type', 'website');
    setMetaTag('og:site_name', 'AI Heroes');
    setMetaTag('og:image', `${DOMAIN}/og-image.png`);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:url', fullUrl);
    setMetaTag('twitter:image', `${DOMAIN}/og-image.png`);

    // Canonical URL
    setLinkTag('canonical', fullUrl);

    // Hreflang tags
    if (lang === 'nl') {
      setLinkTag('alternate', fullUrl, 'nl');
      setLinkTag('alternate', altUrl, 'en');
      setLinkTag('alternate', fullUrl, 'x-default');
    } else {
      setLinkTag('alternate', altUrl, 'nl');
      setLinkTag('alternate', fullUrl, 'en');
      setLinkTag('alternate', altUrl, 'x-default'); // Default to Dutch
    }

    // Structured data (e.g. JobPosting). Cleared on unmount so it never leaks
    // onto pages that don't set it.
    setJsonLd(jsonLd);
    return () => setJsonLd(undefined);

  }, [title, description, lang, path, alternatePath, noindex, jsonLd, seoTitle]);
};

// Calculate the alternate language path based on URL patterns
export function calculateAlternatePath(path: string, currentLang: Language): string {
  if (currentLang === 'nl') {
    // NL -> EN
    return path
      .replace(/^\/nl\//, '/en/')
      .replace(/^\/$/, '/en')
      .replace('/diensten', '/services')
      .replace('/over-ons', '/about')
      .replace('/ai-voor-developers', '/ai-for-developers')
      .replace('/maatwerk-ai-oplossingen', '/custom-ai-solutions')
      .replace('/ai-bureau-nederland', '/ai-agency-netherlands')
      .replace('/digitale-onafhankelijkheid', '/digital-independence')
      .replace('/ai-implementatiebegeleiding', '/ai-implementation-guidance')
      .replace('/procesanalyse', '/process-analysis')
      .replace('/ai-integratie', '/ai-integration')
      .replace('/aanpak', '/approach')
      .replace('/ai-geletterdheid', '/ai-literacy')
      .replace('/ai-strategie-gids', '/ai-strategy-guide')
      .replace('/voorwaarden', '/terms')
      .replace('/vacatures', '/careers')
      .replace('/pers', '/press');
  } else {
    // EN -> NL
    return path
      .replace(/^\/en\//, '/nl/')
      .replace(/^\/en$/, '/')
      .replace('/services', '/diensten')
      .replace('/about', '/over-ons')
      .replace('/ai-for-developers', '/ai-voor-developers')
      .replace('/custom-ai-solutions', '/maatwerk-ai-oplossingen')
      .replace('/ai-agency-netherlands', '/ai-bureau-nederland')
      .replace('/digital-independence', '/digitale-onafhankelijkheid')
      .replace('/ai-implementation-guidance', '/ai-implementatiebegeleiding')
      .replace('/process-analysis', '/procesanalyse')
      .replace('/ai-integration', '/ai-integratie')
      .replace('/approach', '/aanpak')
      .replace('/ai-literacy', '/ai-geletterdheid')
      .replace('/ai-strategy-guide', '/ai-strategie-gids')
      .replace('/terms', '/voorwaarden')
      .replace('/careers', '/vacatures')
      .replace('/press', '/pers');
  }
}
