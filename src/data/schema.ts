// Site-wide Organization schema (rendered on every page via BaseLayout).
export const PROFESSIONAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://aiheroes.io/#organization',
  name: 'AI Heroes',
  legalName: 'AI Heroes B.V.',
  taxID: '42051968',
  vatID: 'NL869486263B01',
  description:
    'AI Heroes bouwt AI-toepassingen die je team elke dag gebruikt, voor organisaties die verder willen dan een pilot. Ontwerpen, bouwen en implementeren, met een sluitende business case, compliance vanaf de tekentafel en training van het team dat ermee werkt. Vanuit Groningen, voor heel Europa.',
  url: 'https://aiheroes.io',
  logo: 'https://aiheroes.io/logo.svg',
  image: 'https://aiheroes.io/og-image.png',
  email: 'info@aiheroes.io',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aarhusweg 4-16',
    postalCode: '9723 JJ',
    addressLocality: 'Groningen',
    addressCountry: 'NL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 53.2194, longitude: 6.5665 },
  areaServed: { '@type': 'Place', name: 'European Union' },
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
  // Extend as directory profiles get claimed (Wikidata QID, Clutch, Sortlist, ensun —
  // see docs/seo-offsite-checklist.md). Only verified, live profile URLs belong here.
  // The Google entry is the Business Profile's Knowledge Graph id (kgmid), the stable form of
  // its share link; it ties this site to the Groningen entity, not the Amsterdam namesake.
  sameAs: [
    'https://www.linkedin.com/company/aiheroes',
    'https://github.com/AIHeroes',
    'https://www.google.com/search?kgmid=/g/11l2p250xl',
  ],
  // What the company is an authority on, for search and AI assistants (entity understanding).
  knowsAbout: [
    'Artificial intelligence',
    'AI applications for businesses',
    'AI agents and workflow automation',
    'AI customer service and voice assistants',
    'Replacing legacy software and SaaS',
    'Self-hosted AI and European hosting',
    'Digital sovereignty',
    'EU AI Act compliance',
    'AI literacy (EU AI Act Article 4)',
    'ISO/IEC 42001',
    'AI business cases',
    'AI training for teams',
  ],
  founder: [
    { '@type': 'Person', '@id': 'https://aiheroes.io/#frans-hoorn', name: 'Frans Hoorn', jobTitle: 'Co-Founder, business case en strategie', sameAs: ['https://www.linkedin.com/in/frans-hoorn-057b082a/'] },
    { '@type': 'Person', '@id': 'https://aiheroes.io/#david-homan', name: 'David Homan', jobTitle: 'Co-Founder, software en compliance', sameAs: ['https://www.linkedin.com/in/davidnhoman/'] },
    { '@type': 'Person', '@id': 'https://aiheroes.io/#jan-brusse', name: 'Jan Brusse', jobTitle: 'Co-Founder, training en adoptie', sameAs: ['https://www.linkedin.com/in/jan-brusse-42a5a3139/'] },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wat we bouwen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Startsprint',
          description: 'Zes dagen, vaste prijs, vanaf €8.000. Uitkomst: een werkend prototype of een bouwplan, altijd met de business case erbij. Gaat de bouw door, dan gaat dit bedrag van de bouwprijs af.',
          url: 'https://aiheroes.io/nl/startsprint',
        },
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: '8000', priceCurrency: 'EUR' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bouw',
          description: 'Een vaste prijs per project, vanaf €15.000, in mijlpalen met een demo bij elke mijlpaal. Na oplevering beheer en doorontwikkeling, apart geprijsd in de business case.',
          url: 'https://aiheroes.io/nl/hoe-we-werken',
        },
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: '15000', priceCurrency: 'EUR' },
      },
      {
        '@type': 'OfferCatalog',
        name: 'Nieuwe AI-toepassing',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maatwerksoftware en AI', description: 'Assistenten, werkstromen, spraak-AI, interne tools en klantportalen, van prototype tot werkend systeem', url: 'https://aiheroes.io/nl/nieuwe-ai-toepassing' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Oude software vervangen',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software vervangen', description: 'Verouderde maatwerksystemen en te dure SaaS vervangen door eigen software, gekoppeld aan ERP, CRM en het bestaande landschap', url: 'https://aiheroes.io/nl/software-vervangen' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Lokale AI',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soevereine AI en hosting', description: 'AI en software op eigen servers of bij een Europese partij, zonder Amerikaanse cloud, met de AI Act ingebouwd', url: 'https://aiheroes.io/nl/eigen-beheer' } },
        ],
      },
    ],
  },
};

// WebSite entity (homepage only, NL + EN): names the site and grounds it to the
// organization for search engines and AI assistants.
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://aiheroes.io/#website',
  name: 'AI Heroes',
  url: 'https://aiheroes.io',
  inLanguage: ['nl', 'en'],
  publisher: { '@id': 'https://aiheroes.io/#organization' },
};

// ---------- Builders for the new pages (docs/relaunch/02-bouwplan.md §4.3) ----------

const DOMAIN = 'https://aiheroes.io';
const ORG = { '@id': `${DOMAIN}/#organization` };
const abs = (path: string) => (path.startsWith('http') ? path : `${DOMAIN}${path}`);

export interface Crumb {
  label: string;
  href: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: abs(c.href) })),
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** A published price is always a minimum ("vanaf"), so offers carry a minPrice and no exact price. */
export type OfferSpec = { name: string; minPrice: number; description: string; unitText?: string };

/** The published prices as offers, per language. A service lists the ones that apply to it, so a
 *  pillar or landing never carries the sprint price as the price of the whole service (2026-10-13). */
export const OFFERS: Record<'nl' | 'en', Record<'sprint' | 'build' | 'training', OfferSpec>> = {
  nl: {
    sprint: { name: 'Startsprint', minPrice: 8000, description: 'Zes dagen, vaste prijs, vanaf €8.000: een werkend prototype of bouwplan met de business case. Gaat de bouw door, dan gaat dit bedrag van de bouwprijs af.' },
    build: { name: 'Bouw', minPrice: 15000, description: 'Een vaste prijs per project, vanaf €15.000, in mijlpalen met een demo bij elke mijlpaal.' },
    training: { name: 'Training', minPrice: 2500, unitText: 'per dagdeel', description: 'Incompany AI-training, vanaf €2.500 per dagdeel.' },
  },
  en: {
    sprint: { name: 'Start sprint', minPrice: 8000, description: 'Six days, fixed price, from €8,000: a working prototype or build plan with the business case. If the build goes ahead, this amount is deducted from the build price.' },
    build: { name: 'Build', minPrice: 15000, description: 'A fixed price per project, from €15,000, in milestones with a demo at every milestone.' },
    training: { name: 'Training', minPrice: 2500, unitText: 'per half day', description: 'In-company AI training, from €2,500 per half day.' },
  },
};

export function serviceSchema(opts: { name: string; description: string; path: string; serviceType?: string; offers?: OfferSpec[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    serviceType: opts.serviceType ?? opts.name,
    provider: ORG,
    areaServed: { '@type': 'Country', name: 'Nederland' },
    ...(opts.offers?.length
      ? {
          offers: opts.offers.map((o) => ({
            '@type': 'Offer',
            name: o.name,
            description: o.description,
            priceCurrency: 'EUR',
            priceSpecification: { '@type': 'PriceSpecification', minPrice: String(o.minPrice), priceCurrency: 'EUR', ...(o.unitText ? { unitText: o.unitText } : {}) },
          })),
        }
      : {}),
  };
}

export function personRef(id: string) {
  return { '@id': `${DOMAIN}/#${id}` };
}

export function articleSchema(opts: { title: string; description: string; path: string; published: Date; updated?: Date; authorId: string; authorName: string; image?: string; lang?: 'nl' | 'en' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    datePublished: opts.published.toISOString().slice(0, 10),
    dateModified: (opts.updated ?? opts.published).toISOString().slice(0, 10),
    author: { '@type': 'Person', '@id': `${DOMAIN}/#${opts.authorId}`, name: opts.authorName },
    publisher: ORG,
    inLanguage: opts.lang ?? 'nl',
    ...(opts.image ? { image: abs(opts.image) } : {}),
  };
}
