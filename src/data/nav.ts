// Menu and footer of the new site (docs/relaunch/02-bouwplan.md §3). One source for the bar, the
// mobile menu and the footer; constants.ts only still feeds the legacy pages.

import type { Lang } from './i18n';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  key: string;
  label: string;
  /** Left out when the label only opens its sub-bar ("Wat we bouwen"). */
  href?: string;
  accent?: 'red' | 'blue' | 'dark';
  subs?: NavLink[];
}

export interface FooterColumn {
  heading: string;
  href?: string;
  links: NavLink[];
}

export interface NavContent {
  home: string;
  items: NavItem[];
  cta: NavLink;
  /** The other language's home, used when a page has no counterpart yet. */
  langLabel: string;
  langName: string;
  menuLabel: string;
  footer: {
    tagline: string;
    columns: FooterColumn[];
    legal: NavLink[];
    copyright: string;
    madeIn: string;
  };
}

const NL: NavContent = {
  home: '/',
  items: [
    {
      key: 'build', label: 'Wat we bouwen', accent: 'red', subs: [
        { label: 'Nieuwe AI-toepassing', href: '/nl/nieuwe-ai-toepassing' },
        { label: 'Oude software vervangen', href: '/nl/software-vervangen' },
        { label: 'Software in eigen beheer', href: '/nl/eigen-beheer' },
      ],
    },
    {
      key: 'how', label: 'Hoe we werken', href: '/nl/hoe-we-werken', accent: 'blue', subs: [
        { label: 'Eerste stap: de startsprint', href: '/nl/startsprint' },
        { label: 'Kosten en opbrengst vooraf', href: '/nl/business-case' },
        { label: 'Compliance en security', href: '/nl/compliance' },
        { label: 'AI-training voor je team', href: '/nl/training' },
      ],
    },
    {
      key: 'about', label: 'Over ons', href: '/nl/over-ons', accent: 'dark', subs: [
        { label: 'Over AI Heroes', href: '/nl/over-ons' },
        { label: 'Het team', href: '/nl/over-ons/team' },
        { label: 'Vacatures', href: '/nl/vacatures' },
        { label: 'AI Salon-avonden', href: '/nl/ai-salon' },
        { label: 'Op tv: De AI Storm', href: '/nl/de-ai-storm' },
        { label: 'Voor de pers', href: '/nl/pers' },
        { label: 'Kennis', href: '/nl/kennis' },
      ],
    },
    { key: 'cases', label: 'Cases', href: '/nl/cases' },
  ],
  cta: { label: 'Plan een startsprint', href: '/nl/startsprint' },
  langLabel: 'EN',
  langName: 'English',
  menuLabel: 'Menu',
  footer: {
    tagline: 'Wij bouwen AI-toepassingen die je team elke dag gebruikt. Business case, compliance en training inbegrepen.',
    columns: [
      {
        heading: 'Nieuwe AI-toepassing', href: '/nl/nieuwe-ai-toepassing', links: [
          { label: 'AI-klantenservice', href: '/nl/ai-klantenservice' },
          { label: 'AI-agents en workflows', href: '/nl/ai-agents' },
          { label: 'Administratie automatiseren', href: '/nl/administratie-automatiseren' },
          { label: 'Company wiki', href: '/nl/company-wiki' },
          { label: 'Digital twin', href: '/nl/digital-twin' },
          { label: 'AI koppelen aan je systemen', href: '/nl/ai-integratie' },
          { label: 'Extra developers', href: '/nl/extra-developers' },
          { label: 'Maatwerk software', href: '/nl/maatwerk-software' },
        ],
      },
      {
        heading: 'Oude software vervangen', href: '/nl/software-vervangen', links: [
          { label: 'SaaS-pakket vervangen', href: '/nl/saas-vervangen' },
          { label: 'Excel vervangen', href: '/nl/excel-vervangen' },
          { label: 'Verouderde software', href: '/nl/verouderde-software' },
        ],
      },
      {
        heading: 'Software in eigen beheer', href: '/nl/eigen-beheer', links: [
          { label: 'AI op eigen servers', href: '/nl/ai-op-eigen-servers' },
          { label: 'Europees alternatief voor ChatGPT', href: '/nl/europees-alternatief-chatgpt' },
        ],
      },
      {
        heading: 'Hoe we werken', href: '/nl/hoe-we-werken', links: [
          { label: 'De startsprint', href: '/nl/startsprint' },
          { label: 'Kosten en opbrengst vooraf', href: '/nl/business-case' },
          { label: 'Wat kost AI-implementatie', href: '/nl/wat-kost-ai-implementatie' },
          { label: 'Compliance en security', href: '/nl/compliance' },
          { label: 'AI-training voor je team', href: '/nl/training' },
          { label: 'Incompany AI-training', href: '/nl/incompany-ai-training' },
          { label: 'AI-geletterdheidstraining', href: '/nl/ai-geletterdheid-training' },
          { label: 'Digitale soevereiniteit', href: '/nl/digitale-soevereiniteit' },
        ],
      },
      {
        heading: 'Bedrijf', href: '/nl/over-ons', links: [
          { label: 'Over AI Heroes', href: '/nl/over-ons' },
          { label: 'Het team', href: '/nl/over-ons/team' },
          { label: 'Cases', href: '/nl/cases' },
          { label: 'Vacatures', href: '/nl/vacatures' },
          { label: 'AI Salon', href: '/nl/ai-salon' },
          { label: 'De AI Storm', href: '/nl/de-ai-storm' },
          { label: 'Voor de pers', href: '/nl/pers' },
          { label: 'Kennis', href: '/nl/kennis' },
          { label: 'AI-bureau Groningen', href: '/nl/ai-bureau-groningen' },
          { label: 'AI-bureau Nederland', href: '/nl/ai-bureau-nederland' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy', href: '/nl/legal/privacy' },
      { label: 'Voorwaarden', href: '/nl/legal/voorwaarden' },
      { label: 'AI-assistent', href: '/nl/legal/ai-assistent' },
    ],
    copyright: `© ${new Date().getFullYear()} AI Heroes`,
    madeIn: 'Met trots gemaakt in Groningen, AI-hoofdstad van Europa',
  },
};

export const NAV: Partial<Record<Lang, NavContent>> = { nl: NL };

export function navFor(lang: Lang): NavContent {
  return NAV[lang] ?? NL;
}
