import { useEffect } from 'react';
import { Language } from '../types';

interface SEOConfig {
  title: string;
  description: string;
  lang: Language;
  path: string; // Current path without domain, e.g. "/nl/diensten/ai-foundations"
  alternatePath?: string; // The equivalent path in the other language
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

export const useSEO = ({ title, description, lang, path, alternatePath }: SEOConfig) => {
  useEffect(() => {
    // Full title with brand
    const fullTitle = `${title} | AI Heroes`;
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

    // Open Graph
    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:url', fullUrl);
    setMetaTag('og:locale', lang === 'nl' ? 'nl_NL' : 'en_US');

    // Twitter
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:url', fullUrl);

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

  }, [title, description, lang, path, alternatePath]);
};

// Calculate the alternate language path based on URL patterns
function calculateAlternatePath(path: string, currentLang: Language): string {
  if (currentLang === 'nl') {
    // NL -> EN
    return path
      .replace(/^\/nl\//, '/en/')
      .replace(/^\/$/, '/en')
      .replace('/diensten', '/services')
      .replace('/over-ons', '/about')
      .replace('/ai-voor-developers', '/ai-for-developers')
      .replace('/specialistische-tracks', '/specialized-tracks')
      .replace('/aanpak', '/approach')
      .replace('/ai-geletterdheid', '/ai-literacy')
      .replace('/ai-strategie-gids', '/ai-strategy-guide')
      .replace('/voorwaarden', '/terms')
      .replace('/pers', '/press');
  } else {
    // EN -> NL
    return path
      .replace(/^\/en\//, '/nl/')
      .replace(/^\/en$/, '/')
      .replace('/services', '/diensten')
      .replace('/about', '/over-ons')
      .replace('/ai-for-developers', '/ai-voor-developers')
      .replace('/specialized-tracks', '/specialistische-tracks')
      .replace('/approach', '/aanpak')
      .replace('/ai-literacy', '/ai-geletterdheid')
      .replace('/ai-strategy-guide', '/ai-strategie-gids')
      .replace('/terms', '/voorwaarden')
      .replace('/press', '/pers');
  }
}
