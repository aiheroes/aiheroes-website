// Shared helpers for the case template (docs/relaunch/pages/C0-case-mal.md): loading the
// caseStudies collection in proof-rule order, labels, and the name a place may show.
import { getCollection, type CollectionEntry } from 'astro:content';
import { ENTRIES, type Entry } from '../../data/site';
import type { IconName } from './hs';

export type CaseStudy = CollectionEntry<'caseStudies'>;
export type CasePlace = 'home' | 'overview' | 'page';

export const SECTOR_LABEL: Record<CaseStudy['data']['sector'], string> = {
  zorg: 'Zorg',
  'e-commerce': 'E-commerce',
  'mkb-administratie': 'Administratie',
  'energie-en-investeren': 'Energie en investeren',
  'publieke-sector': 'Publieke sector',
  sport: 'Sport',
  software: 'Software',
  overig: '',
};

/** Icon on the entry plane of a card without a photo. */
export const SECTOR_ICON: Record<CaseStudy['data']['sector'], IconName> = {
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
export const ENTRY_NEXT: Record<Entry, string> = {
  nieuw: 'Iets nodig dat er nog niet is? Begin met een startsprint: in zes dagen een werkend prototype op je eigen data, met de business case erbij.',
  vervangen: 'Ook een pakket dat niet meer past? Begin met een startsprint: in zes dagen een architectuur, een migratieplan en de business case.',
  'eigen-beheer': 'Moet het ook binnen Europa draaien? Begin met een startsprint: in zes dagen een hostingontwerp, een risicobeoordeling en de business case.',
};

export const entryLabel = (e: Entry) => ENTRIES[e].title;
export const entryAccent = (e: Entry) => ENTRIES[e].accent;

/** All Dutch cases, current team first (proof rule, never shown as a label), then by order. */
export async function getCases(): Promise<CaseStudy[]> {
  const all = await getCollection('caseStudies', (c) => c.data.lang === 'nl' && !c.data.draft);
  return all.sort((a, b) => Number(b.data.currentTeam) - Number(a.data.currentTeam) || a.data.order - b.data.order);
}

/** Client name, or the name-free label where this place is anonymous. */
export function displayName(c: CaseStudy, place: CasePlace): string {
  return c.data.anonymous[place] && c.data.anonymousLabel ? c.data.anonymousLabel : c.data.client;
}

export function formatStat(s: { value: number; decimals: number; suffix: string }): string {
  return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: s.decimals, maximumFractionDigits: s.decimals }).format(s.value) + s.suffix;
}

/** Headline without the hand-set break marks and punch asterisks. */
export const plainHeadline = (h: string) => h.replace(/\s*\|\s*/g, ' ').replace(/\*/g, '').trim();
