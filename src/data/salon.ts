// AI Salon Groningen: the one source for editions, speakers, sponsors and the programme. The NL page
// (src/pages/nl/ai-salon.astro), its Event schema and the legacy EN island (pages/AISalonPage.tsx)
// all read from here, so a new speaker or date is changed once. The AI Salon is the exception to the
// content freeze (docs/relaunch-2026.md): update it live and carry the same change into `relaunch`.

export interface SalonSpeaker {
  name: string;
  /** Organisation and role in a few words. */
  org?: string;
  /** The same in English, when it differs. */
  orgEn?: string;
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
  /** English labels for /en/ai-salon. */
  en?: { title: string; dateLabel: string; shortDate: string; note?: string };
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

export const SALON_FOLLOW = { label: 'Volg AI Heroes op LinkedIn', labelEn: 'Follow AI Heroes on LinkedIn', url: 'https://www.linkedin.com/company/aiheroes' };
/** The Luma calendar: every edition, and a way to be told about the next one. */
export const SALON_CALENDAR = { label: 'Volg de Luma-kalender', labelEn: 'Follow the Luma calendar', url: 'https://luma.com/aisalon-groningen' };

/** The next edition. */
export const SALON_NEXT: SalonEdition = {
  number: 2,
  title: 'Editie #2',
  date: '2026-11-05',
  dateLabel: 'donderdag 5 november 2026',
  shortDate: 'Do 5 nov',
  venue: 'Plus Ultra, Zernikelaan 14',
  city: 'Groningen',
  status: 'open',
  lumaEventId: 'evt-IyAX8Koq2RAY8V3',
  lumaUrl: 'https://luma.com/AI-Salon-Gro-2',
  speakers: [
    // AIMZ (AI on existing building management systems) and founder/director of Energiso (energy
    // management, ISO 50001); both companies on request (2026-10-15). Portrait from energiso.nl.
    { name: 'Ilse Gosliga', org: 'AIMZ · Energiso', topic: 'Buildings that learn: 26% less energy, no renovation', photo: '/speakers/ilse-gosliga.jpg' },
    // Business coach in Groningen since 2016, 150+ entrepreneurs; runs the workshop 'Ondernemen met AI'.
    // Portrait cropped from alexvanginneken.com. His title is not known yet (2026-10-12): the page shows
    // "Onderwerp volgt" until it is.
    { name: 'Alex van Ginneken', org: 'Ondernemer en businesscoach', orgEn: 'Entrepreneur and business coach', topic: null, photo: '/speakers/alex-van-ginneken.jpg' },
  ],
  // Kadans hosts the evening in its Plus Ultra building (confirmed 2026-10-15). Researchable, which
  // made the introduction, follows once Frans has mailed them.
  sponsors: [
    { name: 'Kadans Science Partner', src: '/sponsors/kadans.svg', href: 'https://www.kadans.com/properties/plus-ultra-groningen/' },
  ],
  note: 'Bij Kadans Science Partner, op de begane grond van Plus Ultra op de Zernike Campus.',
  en: { title: 'Edition #2', dateLabel: 'Thursday 5 November 2026', shortDate: 'Thu 5 Nov', note: 'Hosted by Kadans Science Partner, on the ground floor of Plus Ultra on the Zernike Campus.' },
};

/** Start, programme and end of the next evening (local time). */
export const SALON_TIMES = { doors: '17:30', start: '18:00', end: '21:00' };

export const SALON_AGENDA = [
  { time: '17:30', title: 'Inloop', en: { title: 'Doors open' } },
  { time: '18:00', title: 'Twee talks van zo’n twintig minuten', en: { title: 'Two talks of around twenty minutes' } },
  { time: '18:40', title: 'Pitches van een minuut', note: 'Pitchen? Mail salon@aiheroes.io.', en: { title: 'One-minute pitches', note: 'Want to pitch? Email salon@aiheroes.io.' } },
  { time: '19:00', title: 'Eten, drinken en netwerken', note: 'Tot 21:00.', en: { title: 'Food, drinks and networking', note: 'Until 21:00.' } },
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
      { name: 'Ruben Molenaars', org: 'YourMindr', topic: 'Keeping our minds sharp in the age of AI', photo: '/speakers/ruben-molenaars.jpg' },
      { name: 'Lilian Peters', org: 'UMCG, FemHealthData', topic: 'FemHealthData: using AI to improve women’s health', photo: '/speakers/lilian-peters.jpg' },
    ],
    sponsors: [
      { name: 'DryDock', src: '/sponsors/drydock.svg' },
      { name: 'Chordify', src: '/sponsors/chordify.png' },
      { name: 'Helm', src: '/sponsors/helm.svg' },
    ],
    note: 'Uitverkocht, met ruim 70 gasten.',
    en: { title: 'Kick-off', dateLabel: 'Thursday 3 September 2026', shortDate: 'Thu 3 Sep', note: 'Sold out, with more than 70 guests.' },
  },
  SALON_NEXT,
];

/** An edition's labels in the page's language. */
export function editionText(e: SalonEdition, lang: 'nl' | 'en') {
  if (lang === 'en' && e.en) return e.en;
  return { title: e.title, dateLabel: e.dateLabel, shortDate: e.shortDate, note: e.note };
}
