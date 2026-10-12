// AI Salon Groningen: the one source for editions, speakers, sponsors and the programme. The NL page
// (src/pages/nl/ai-salon.astro), its Event schema and the legacy EN island (pages/AISalonPage.tsx)
// all read from here, so a new speaker or date is changed once. The AI Salon is the exception to the
// content freeze (docs/relaunch-2026.md): update it live and carry the same change into `relaunch`.

export interface SalonSpeaker {
  name: string;
  /** Organisation and role in a few words. */
  org?: string;
  /** Talk title; null until announced. */
  topic: string | null;
  photo: string | null;
}

export interface SalonSponsor {
  name: string;
  src: string;
  href?: string;
}

export interface SalonEdition {
  number: number;
  title: string;
  /** ISO date of the evening. */
  date: string;
  dateLabel: string;
  shortDate: string;
  venue: string | null;
  city: string;
  status: 'open' | 'soldout' | 'past';
  lumaEventId?: string;
  lumaUrl?: string;
  speakers?: SalonSpeaker[];
  sponsors?: SalonSponsor[];
  note?: string;
}

export const SALON_EMAIL = 'salon@aiheroes.io';

/** The global network and the other Dutch chapters (the Brabant link is still to be confirmed). */
export const SALON_NETWORK = {
  name: 'AI Salon',
  url: 'https://www.aisalon.ai',
  chapters: [
    { name: 'Amsterdam', url: 'https://www.aisalon.ai' },
    { name: 'Brabant', url: undefined as string | undefined },
  ],
};

export const SALON_FOLLOW = { label: 'Volg AI Heroes op LinkedIn', url: 'https://www.linkedin.com/company/aiheroes' };

/** The next edition. */
export const SALON_NEXT: SalonEdition = {
  number: 2,
  title: 'Editie #2',
  date: '2026-11-05',
  dateLabel: 'donderdag 5 november 2026',
  shortDate: 'Do 5 nov',
  venue: null,
  city: 'Groningen',
  status: 'open',
  lumaEventId: 'evt-IyAX8Koq2RAY8V3',
  lumaUrl: 'https://luma.com/AI-Salon-Gro-2',
  speakers: [
    // Founder and director of Energiso (energy management, ISO 50001). Portrait from energiso.nl.
    { name: 'Ilse Gosliga', org: 'Energiso', topic: null, photo: '/speakers/ilse-gosliga.jpg' },
    // Entrepreneur and business coach in Groningen. Confirmed 2026-10-05; portrait and topic requested.
    { name: 'Alex van Ginneken', org: 'Ondernemer en businesscoach', topic: null, photo: null },
  ],
  // Edition #2 starts with a clean sponsor list; add entries here as they confirm.
  sponsors: [],
  note: 'De locatie volgt binnenkort.',
};

/** Start, programme and end of the next evening (local time). */
export const SALON_TIMES = { doors: '17:30', start: '18:00', end: '21:00' };

export const SALON_AGENDA = [
  { time: '17:30', title: 'Inloop' },
  { time: '18:00', title: 'Twee talks van zo’n twintig minuten' },
  { time: '18:40', title: 'Pitches van een minuut', note: 'Pitchen? Mail salon@aiheroes.io.' },
  { time: '19:00', title: 'Eten, drinken en netwerken', note: 'Tot 21:00.' },
];

/** Total speaker tiles per edition (confirmed plus open) and sponsor tiles. */
export const SALON_SPEAKER_SLOTS = 2;
export const SALON_SPONSOR_SLOTS = 6;

export const SALON_EDITIONS: SalonEdition[] = [
  {
    number: 1,
    title: 'Kick-off',
    date: '2026-09-03',
    dateLabel: 'donderdag 3 september 2026',
    shortDate: 'Do 3 sep',
    venue: 'Chordify',
    city: 'Groningen',
    status: 'soldout',
    speakers: [
      { name: 'Ruben Molenaars', org: 'Mindr-ai', topic: 'Keeping our minds sharp in the age of AI', photo: '/speakers/ruben-molenaars.jpg' },
      { name: 'Lilian Peters', org: 'UMCG, FemHealthData', topic: 'FemHealthData: using AI to improve women’s health', photo: '/speakers/lilian-peters.jpg' },
    ],
    sponsors: [
      { name: 'DryDock', src: '/sponsors/drydock.svg' },
      { name: 'Chordify', src: '/sponsors/chordify.png' },
      { name: 'Helm', src: '/sponsors/helm.svg' },
    ],
    note: 'Uitverkocht, met ruim 70 gasten.',
  },
  SALON_NEXT,
];
