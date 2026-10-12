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
  'eigen-beheer': { title: 'Software in eigen beheer', href: '/nl/eigen-beheer', accent: 'dark', topic: 'Software in eigen beheer' },
};
