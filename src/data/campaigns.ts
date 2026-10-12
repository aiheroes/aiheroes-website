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
}

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
  },
};
