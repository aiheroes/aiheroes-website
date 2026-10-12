// Facts that recur across the site (docs/relaunch/02-bouwplan.md §2). Page copy reads them from
// here, so a price or a term changes in one place.

export const SITE = {
  name: 'AI Heroes',
  legalName: 'AI Heroes B.V.',
  kvk: '42051968',
  vat: 'NL869486263B01',
  address: { street: 'Aarhusweg 4-16', postcode: '9723 JJ', city: 'Groningen', country: 'NL' },
  email: 'info@aiheroes.io',
  phone: '050-200 3373',
  phoneHref: 'tel:+31502003373',
  since: 2019,

  /** The front door: same duration and price for all three entries. */
  sprint: { days: 6, daysWord: 'zes', price: '€8.000', priceValue: 8000, startWithin: 'twee weken' },
  /** A build after the sprint, in two-week sprints. */
  build: { from: '€15.000', fromValue: 15000, sprintWeeks: 2 },
  /** Standalone training, a supporting role. */
  training: { from: '€2.500', fromValue: 2500, unit: 'per dagdeel' },
  /** Reply promise for the contact form; chat escalation answers within 4 office hours. */
  reply: '24 uur',
  escalationReply: '4 uur binnen kantooruren',

  /** Brand figures since 2019 (docs/relaunch/01-besluiten.md §2): always shown with the year. */
  proof: { orgs: '50+', trained: '1.000+' },
} as const;

export type Entry = 'nieuw' | 'vervangen' | 'eigen-beheer';

/** The three entries: names, colours and pillar pages, the same everywhere. */
export const ENTRIES: Record<Entry, { title: string; href: string; accent: 'red' | 'blue' | 'dark'; topic: string }> = {
  nieuw: { title: 'Nieuwe AI-toepassing', href: '/nl/nieuwe-ai-toepassing', accent: 'red', topic: 'Nieuwe AI-toepassing' },
  vervangen: { title: 'Oude software vervangen', href: '/nl/software-vervangen', accent: 'blue', topic: 'Oude software vervangen' },
  'eigen-beheer': { title: 'Lokale AI', href: '/nl/eigen-beheer', accent: 'dark', topic: 'Lokale AI' },
};

/** The entries in English (docs/relaunch phase 7); same keys, colours and order. */
export const ENTRIES_EN: typeof ENTRIES = {
  nieuw: { title: 'A new AI tool', href: '/en/new-ai-tool', accent: 'red', topic: 'A new AI tool' },
  vervangen: { title: 'Replace old software', href: '/en/replace-software', accent: 'blue', topic: 'Replace old software' },
  'eigen-beheer': { title: 'Self-hosted AI', href: '/en/self-hosted', accent: 'dark', topic: 'Self-hosted AI' },
};

export function entriesFor(lang: 'nl' | 'en'): typeof ENTRIES {
  return lang === 'en' ? ENTRIES_EN : ENTRIES;
}

/** The recurring facts as English copy writes them (thousands with a comma, "half day"). */
export const SITE_EN = {
  sprint: { days: 6, daysWord: 'six', price: '€8,000', startWithin: 'two weeks' },
  build: { from: '€15,000', sprintWeeks: 2 },
  training: { from: '€2,500', unit: 'per half day' },
  reply: '24 hours',
  escalationReply: '4 office hours',
  proof: { orgs: '50+', trained: '1,000+' },
  /** International notation for English pages. */
  phone: '+31 50 200 3373',
} as const;
