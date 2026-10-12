// Campaign pages (docs/relaunch/pages/A0-campagne-template.md): one record per appearance, rendered by
// HsCampaign. A page stays as long as the item is online; after that it gets a 301 to /nl/pers and the
// mention stays on the press page.

import type { FounderId } from './team';

export interface Campaign {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  /** Headline in the house style, one *punch* word. */
  headline: string;
  lede: string;
  medium: { name: string; logo: string; channels: { name: string; src: string }[] };
  /** First broadcast or publication. */
  date: string;
  dateLabel: string;
  media: { type: 'video'; youtubeId: string; uploadDate: string; title: string };
  whatYouSaw: string;
  people: FounderId[];
  accent: 'red' | 'blue' | 'dark';
  /** English copy for /en/<slug>. */
  en: CampaignText;
}

export type CampaignText = Pick<Campaign, 'title' | 'seoTitle' | 'description' | 'headline' | 'lede' | 'dateLabel' | 'whatYouSaw'> & { mediaTitle: string };

export const CAMPAIGNS: Record<string, Campaign> = {
  'de-ai-storm': {
    slug: 'de-ai-storm',
    title: 'AI Heroes in De AI Storm',
    seoTitle: 'AI Heroes in De AI Storm terugkijken (RTL 7, RTL Z en Videoland)',
    description: 'Kijk AI Heroes terug in De AI Storm op RTL 7, RTL Z en Videoland. Jan Brusse over AI-adoptie in het mkb, en wat AI Heroes voor jouw organisatie bouwt.',
    headline: 'AI Heroes in | De AI *Storm*',
    lede: 'In De AI Storm laten Nederlandse organisaties zien hoe ze AI inzetten. Mede-oprichter Jan Brusse vertelt over AI-adoptie in het mkb.',
    medium: {
      name: 'De AI Storm',
      logo: '/broadcasters/ai-storm-wit.png',
      channels: [
        { name: 'RTL 7', src: '/broadcasters/rtl7.svg' },
        { name: 'RTL Z', src: '/broadcasters/rtlz.svg' },
        { name: 'Videoland', src: '/broadcasters/videoland.png' },
      ],
    },
    date: '2026-06-07',
    dateLabel: '7 juni 2026',
    media: { type: 'video', youtubeId: 'uq8MIcgzUR4', uploadDate: '2026-05-17', title: 'AI Heroes in De AI Storm' },
    whatYouSaw: 'De AI Storm laat in vier afleveringen zien hoe organisaties AI inzetten als gereedschap: om processen te vereenvoudigen, fouten te verminderen en ruimte te maken voor het werk dat ertoe doet. In onze aflevering vertelt Jan Brusse over AI-adoptie in het mkb.',
    people: ['jan-brusse'],
    accent: 'dark',
    en: {
      title: 'AI Heroes in De AI Storm',
      seoTitle: 'Watch AI Heroes in De AI Storm (RTL 7, RTL Z and Videoland)',
      description: 'Watch AI Heroes in the Dutch TV series De AI Storm on RTL 7, RTL Z and Videoland. Jan Brusse on AI adoption in SMEs, and what AI Heroes builds for your organisation.',
      headline: 'AI Heroes in | De AI *Storm*',
      lede: 'In De AI Storm, Dutch organisations show how they put AI to work. Co-founder Jan Brusse talks about AI adoption in SMEs.',
      dateLabel: '7 June 2026',
      mediaTitle: 'AI Heroes in De AI Storm',
      whatYouSaw: 'In four episodes, De AI Storm shows how organisations use AI as a tool: to simplify processes, reduce errors and make room for the work that matters. In our episode, Jan Brusse talks about AI adoption in SMEs. The episode is in Dutch.',
    },
  },
};

/** A campaign's copy in the page's language. */
export function campaignText(c: Campaign, lang: 'nl' | 'en'): CampaignText {
  return lang === 'en' ? c.en : { ...c, mediaTitle: c.media.title };
}
