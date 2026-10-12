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
  sameAs: ['https://www.linkedin.com/company/aiheroes'],
  founder: [
    { '@type': 'Person', '@id': 'https://aiheroes.io/#frans-hoorn', name: 'Frans Hoorn', jobTitle: 'Co-Founder, business case en strategie' },
    { '@type': 'Person', '@id': 'https://aiheroes.io/#david-homan', name: 'David Homan', jobTitle: 'Co-Founder, software en compliance' },
    { '@type': 'Person', '@id': 'https://aiheroes.io/#jan-brusse', name: 'Jan Brusse', jobTitle: 'Co-Founder, training en adoptie' },
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
          description: 'Zes dagen, vast bedrag vanaf €8.000. Uitkomst: een werkend prototype of een bouwplan, altijd met de business case erbij.',
          url: 'https://aiheroes.io/nl/startsprint',
        },
        price: '8000',
        priceCurrency: 'EUR',
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
        name: 'Software in eigen beheer',
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

export function serviceSchema(opts: { name: string; description: string; path: string; serviceType?: string; price?: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    serviceType: opts.serviceType ?? opts.name,
    provider: ORG,
    areaServed: { '@type': 'Country', name: 'Nederland' },
    ...(opts.price
      ? { offers: { '@type': 'Offer', price: String(opts.price), priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', minPrice: String(opts.price), priceCurrency: 'EUR' } } }
      : {}),
  };
}

export function personRef(id: string) {
  return { '@id': `${DOMAIN}/#${id}` };
}

export function articleSchema(opts: { title: string; description: string; path: string; published: Date; updated?: Date; authorId: string; authorName: string; image?: string }) {
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
    inLanguage: 'nl',
    ...(opts.image ? { image: abs(opts.image) } : {}),
  };
}
