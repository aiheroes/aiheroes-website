// The three founders: contact cards, author boxes, the team page and Person schema. Bios are written
// by Claude and approved once by each founder (docs/relaunch/01-besluiten.md §5).

export type FounderId = 'frans-hoorn' | 'david-homan' | 'jan-brusse';

export interface Founder {
  id: FounderId;
  name: string;
  first: string;
  role: string;
  /** One line under the photo on the contact block: what you talk to this founder about. */
  hint: string;
  bio: string;
  photo: string;
  calendar: string;
  /** Profile URL; rendered and used as sameAs only once it is filled in. */
  linkedin?: string;
}

export const FOUNDERS: Record<FounderId, Founder> = {
  'frans-hoorn': {
    id: 'frans-hoorn',
    name: 'Frans Hoorn',
    first: 'Frans',
    role: 'Co-Founder, business case en strategie',
    hint: 'Business case en scoping',
    bio: 'Frans leidt de startsprint en de business case: wat kost het, wat levert het op en wanneer verdient het zich terug. Hij combineert strategisch denken met een scherp oog voor hoe mensen software echt gebruiken.',
    photo: '/team/frans.webp',
    calendar: 'https://calendar.app.google/juFpF3MDmikH4BVS8',
  },
  'david-homan': {
    id: 'david-homan',
    name: 'David Homan',
    first: 'David',
    role: 'Co-Founder, software en compliance',
    hint: 'Bouw, hosting en compliance',
    bio: 'David leidt de bouw, van prototype tot een systeem dat in je eigen landschap draait. AI Act-classificatie, logging, security en hosting zitten bij hem vanaf de tekentafel in het ontwerp.',
    photo: '/team/david.webp',
    calendar: 'https://calendar.app.google/GcA1oBNwzyFZtW5W6',
  },
  'jan-brusse': {
    id: 'jan-brusse',
    name: 'Jan Brusse',
    first: 'Jan',
    role: 'Co-Founder, training en adoptie',
    hint: 'Adoptie en training bij je team',
    bio: 'Jan zorgt dat het team dat met een systeem gaat werken er ook mee kan werken, met training op het systeem zelf en op de werkvloer. Hij maakt technologie toegankelijk, van AI-geletterdheid tot de directiesessie over digitale soevereiniteit.',
    photo: '/team/jan.webp',
    calendar: 'https://calendar.app.google/un3fLvb7ht4f7PBWA',
  },
};

export const FOUNDER_ORDER: FounderId[] = ['frans-hoorn', 'david-homan', 'jan-brusse'];

export function personSchema(id: FounderId) {
  const f = FOUNDERS[id];
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://aiheroes.io/#${f.id}`,
    name: f.name,
    jobTitle: f.role,
    image: `https://aiheroes.io${f.photo}`,
    worksFor: { '@id': 'https://aiheroes.io/#organization' },
    ...(f.linkedin ? { sameAs: [f.linkedin] } : {}),
  };
}
