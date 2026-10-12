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
  /** The menu button's label while the menu is open. */
  closeLabel: string;
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
  closeLabel: 'Sluiten',
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
          { label: 'Maatwerksoftware', href: '/nl/maatwerk-software' },
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
          { label: 'AI-geletterdheids­training', href: '/nl/ai-geletterdheid-training' },
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


const EN: NavContent = {
  home: '/en',
  items: [
    {
      key: 'build', label: 'What we build', accent: 'red', subs: [
        { label: 'A new AI tool', href: '/en/new-ai-tool' },
        { label: 'Replace old software', href: '/en/replace-software' },
        { label: 'Software you control', href: '/en/self-hosted' },
      ],
    },
    {
      key: 'how', label: 'How we work', href: '/en/how-we-work', accent: 'blue', subs: [
        { label: 'First step: the start sprint', href: '/en/start-sprint' },
        { label: 'Cost and return up front', href: '/en/business-case' },
        { label: 'Compliance and security', href: '/en/compliance' },
        { label: 'AI training for your team', href: '/en/training' },
      ],
    },
    {
      key: 'about', label: 'About', href: '/en/about', accent: 'dark', subs: [
        { label: 'About AI Heroes', href: '/en/about' },
        { label: 'The team', href: '/en/about/team' },
        { label: 'Careers', href: '/en/careers' },
        { label: 'AI Salon evenings', href: '/en/ai-salon' },
        { label: 'On TV: De AI Storm', href: '/en/de-ai-storm' },
        { label: 'Press', href: '/en/press' },
        { label: 'Insights', href: '/en/insights' },
      ],
    },
    { key: 'cases', label: 'Cases', href: '/en/cases' },
  ],
  cta: { label: 'Plan a start sprint', href: '/en/start-sprint' },
  langLabel: 'NL',
  langName: 'Nederlands',
  menuLabel: 'Menu',
  closeLabel: 'Close',
  footer: {
    tagline: 'We build AI tools your team uses every day. Business case, compliance and training included.',
    columns: [
      {
        heading: 'A new AI tool', href: '/en/new-ai-tool', links: [
          { label: 'AI customer service', href: '/en/ai-customer-service' },
          { label: 'AI agents and workflows', href: '/en/ai-agents' },
          { label: 'Automate administration', href: '/en/automate-administration' },
          { label: 'Company wiki', href: '/en/company-wiki' },
          { label: 'Digital twin', href: '/en/digital-twin' },
          { label: 'Connect AI to your systems', href: '/en/ai-integration' },
          { label: 'Extra developers', href: '/en/extra-developers' },
          { label: 'Custom software', href: '/en/custom-software' },
        ],
      },
      {
        heading: 'Replace old software', href: '/en/replace-software', links: [
          { label: 'Replace a SaaS package', href: '/en/replace-saas' },
          { label: 'Replace Excel', href: '/en/replace-excel' },
          { label: 'Legacy software', href: '/en/legacy-software' },
        ],
      },
      {
        heading: 'Software you control', href: '/en/self-hosted', links: [
          { label: 'AI on your own servers', href: '/en/ai-on-your-own-servers' },
          { label: 'European alternative to ChatGPT', href: '/en/european-chatgpt-alternative' },
        ],
      },
      {
        heading: 'How we work', href: '/en/how-we-work', links: [
          { label: 'The start sprint', href: '/en/start-sprint' },
          { label: 'Cost and return up front', href: '/en/business-case' },
          { label: 'AI implementation costs', href: '/en/ai-implementation-costs' },
          { label: 'Compliance and security', href: '/en/compliance' },
          { label: 'AI training for your team', href: '/en/training' },
          { label: 'In-company AI training', href: '/en/incompany-ai-training' },
          { label: 'AI literacy training', href: '/en/ai-literacy-training' },
          { label: 'Digital sovereignty', href: '/en/digital-sovereignty' },
        ],
      },
      {
        heading: 'Company', href: '/en/about', links: [
          { label: 'About AI Heroes', href: '/en/about' },
          { label: 'The team', href: '/en/about/team' },
          { label: 'Cases', href: '/en/cases' },
          { label: 'Careers', href: '/en/careers' },
          { label: 'AI Salon', href: '/en/ai-salon' },
          { label: 'De AI Storm', href: '/en/de-ai-storm' },
          { label: 'Press', href: '/en/press' },
          { label: 'Insights', href: '/en/insights' },
          { label: 'AI agency Groningen', href: '/en/ai-agency-groningen' },
          { label: 'AI agency Netherlands', href: '/en/ai-agency-netherlands' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy', href: '/en/legal/privacy' },
      { label: 'Terms', href: '/en/legal/terms' },
      { label: 'AI assistant', href: '/en/legal/ai-assistant' },
    ],
    copyright: `© ${new Date().getFullYear()} AI Heroes`,
    madeIn: 'Proudly made in Groningen, AI Capital of Europe',
  },
};

export const NAV: Record<Lang, NavContent> = { nl: NL, en: EN };

export function navFor(lang: Lang): NavContent {
  return NAV[lang];
}
