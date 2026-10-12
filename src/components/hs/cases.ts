// Shared helpers for the case template (docs/relaunch/pages/C0-case-mal.md): loading the
// caseStudies collection in proof-rule order, labels, and the name a place may show. Every helper
// takes the language; Dutch is the default.
import { getCollection, type CollectionEntry } from 'astro:content';
import { ENTRIES, entriesFor, type Entry } from '../../data/site';
import type { Lang } from '../../data/i18n';
import type { IconName } from './hs';

export type CaseStudy = CollectionEntry<'caseStudies'>;
export type CasePlace = 'home' | 'overview' | 'page';
type Sector = CaseStudy['data']['sector'];

export const SECTOR_LABELS: Record<Lang, Record<Sector, string>> = {
  nl: {
    zorg: 'Zorg',
    'e-commerce': 'E-commerce',
    'mkb-administratie': 'Administratie',
    'energie-en-investeren': 'Energie en investeren',
    'publieke-sector': 'Publieke sector',
    sport: 'Sport',
    software: 'Software',
    overig: '',
  },
  en: {
    zorg: 'Healthcare',
    'e-commerce': 'E-commerce',
    'mkb-administratie': 'Administration',
    'energie-en-investeren': 'Energy and investment',
    'publieke-sector': 'Public sector',
    sport: 'Sport',
    software: 'Software',
    overig: '',
  },
};
/** Dutch labels, kept for the Dutch pages that import them directly. */
export const SECTOR_LABEL = SECTOR_LABELS.nl;
export const sectorLabel = (s: Sector, lang: Lang = 'nl') => SECTOR_LABELS[lang][s];

/** Icon on the entry plane of a card without a photo. */
export const SECTOR_ICON: Record<Sector, IconName> = {
  zorg: 'peoples',
  'e-commerce': 'shopping-bag',
  'mkb-administratie': 'file-text',
  'energie-en-investeren': 'lightning',
  'publieke-sector': 'every-user',
  sport: 'stopwatch',
  software: 'code',
  overig: 'earth',
};

/** The line under "Plan een startsprint" on a case, per first entry. */
export const ENTRY_NEXT_BY_LANG: Record<Lang, Record<Entry, string>> = {
  nl: {
    nieuw: 'Iets nodig dat er nog niet is? Begin met een startsprint: in zes dagen een werkend prototype op je eigen data, met de business case erbij.',
    vervangen: 'Ook een pakket dat niet meer past? Begin met een startsprint: in zes dagen een architectuur, een migratieplan en de business case.',
    'eigen-beheer': 'Moet het ook binnen Europa draaien? Begin met een startsprint: in zes dagen een hostingontwerp, een risicobeoordeling en de business case.',
  },
  en: {
    nieuw: 'Need something that does not exist yet? Begin with a start sprint: a working prototype on your own data in six days, with the business case.',
    vervangen: 'A package that no longer fits? Begin with a start sprint: an architecture, a migration plan and the business case in six days.',
    'eigen-beheer': 'Does it need to run within Europe too? Begin with a start sprint: a hosting design, a risk assessment and the business case in six days.',
  },
};
export const ENTRY_NEXT = ENTRY_NEXT_BY_LANG.nl;

/** Interface strings of the case template and the case cards. */
export const CASE_UI = {
  nl: {
    question: 'De *vraag*',
    built: 'Wat we *bouwden*',
    timeline: 'Zo *ging* het',
    step: 'Stap',
    standard: 'Bij deze bouw *inbegrepen*',
    standardLink: 'Wat bij elke bouw inbegrepen is',
    live: 'Bekijk het *live*',
    liveButton: 'Bekijk het live',
    liveText: (name: string) => `Wat we bouwden voor ${name} draait live. Kijk zelf.`,
    more: 'Meer cases zoals *deze*',
    all: 'Alle cases',
    contact: 'Iets vergelijkbaars laten bouwen?',
    sprint: 'Plan een startsprint',
    readCase: 'Lees de case',
  },
  en: {
    question: 'The *question*',
    built: 'What we *built*',
    timeline: 'How it *went*',
    step: 'Step',
    standard: '*Included* in this build',
    standardLink: 'What every build includes',
    live: 'See it *live*',
    liveButton: 'See it live',
    liveText: (name: string) => `What we built for ${name} is live. Take a look.`,
    more: 'More cases *like this*',
    all: 'All cases',
    contact: 'Want something similar built?',
    sprint: 'Plan a start sprint',
    readCase: 'Read the case',
  },
} satisfies Record<Lang, Record<string, unknown>>;

export const entryLabel = (e: Entry, lang: Lang = 'nl') => entriesFor(lang)[e].title;
export const entryAccent = (e: Entry) => ENTRIES[e].accent;
/** A stand-in case photo takes the colour of its first entry: red or blue duotone, black and white for the dark entry. */
export const entryPhotoTone = (e: Entry) => ({ red: 'red', blue: 'blue', dark: 'bw' } as const)[ENTRIES[e].accent];
export const caseHref = (slug: string, lang: Lang = 'nl') => `/${lang}/cases/${slug}`;

/** All cases in one language, current team first (proof rule, never shown as a label), then by order. */
export async function getCases(lang: Lang = 'nl'): Promise<CaseStudy[]> {
  const all = await getCollection('caseStudies', (c) => c.data.lang === lang && !c.data.draft);
  return all.sort((a, b) => Number(b.data.currentTeam) - Number(a.data.currentTeam) || a.data.order - b.data.order);
}

/** Client name, or the name-free label where this place is anonymous. */
export function displayName(c: CaseStudy, place: CasePlace): string {
  return c.data.anonymous[place] && c.data.anonymousLabel ? c.data.anonymousLabel : c.data.client;
}

/** A figure as the language writes it: 7,8 and 4.000 in Dutch, 7.8 and 4,000 in English. */
export function formatStat(s: { value: number; decimals: number; suffix: string }, lang: Lang = 'nl'): string {
  return new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'nl-NL', { minimumFractionDigits: s.decimals, maximumFractionDigits: s.decimals }).format(s.value) + s.suffix;
}

/** Headline without the hand-set break marks and punch asterisks. */
export const plainHeadline = (h: string) => h.replace(/\s*\|\s*/g, ' ').replace(/\*/g, '').trim();
