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
    'AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Ontwerpen, bouwen en implementeren, met een sluitende business case, compliance vanaf de tekentafel en training van het team dat ermee werkt. Vanuit Groningen, voor heel Europa.',
  url: 'https://aiheroes.io',
  logo: 'https://aiheroes.io/logo.svg',
  image: 'https://aiheroes.io/og-image.png',
  email: 'hello@aiheroes.io',
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
    { '@type': 'Person', name: 'Frans Hoorn', jobTitle: 'Co-Founder, Business case & scoping' },
    { '@type': 'Person', name: 'David Homan', jobTitle: 'Co-Founder, Bouw & compliance' },
    { '@type': 'Person', name: 'Jan Brusse', jobTitle: 'Co-Founder, Adoptie & training' },
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
          description: 'Eén week, vast bedrag. Uitkomst: een werkend prototype of een bouwplan, altijd met de business case op één A4.',
          url: 'https://aiheroes.io/nl/startsprint',
        },
        price: '8000',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Iets nieuws bouwen',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maatwerksoftware en AI', description: 'Assistenten, werkstromen, spraak-AI, interne tools en klantportalen, van prototype tot systeem in productie', url: 'https://aiheroes.io/nl/diensten/software' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Vervangen wat niet meer voldoet',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software vervangen', description: 'Verouderde maatwerksystemen en te dure SaaS vervangen door eigen software, gekoppeld aan ERP, CRM en het bestaande landschap', url: 'https://aiheroes.io/nl/diensten/software-vervangen' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'In eigen beheer draaien',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soevereine AI en hosting', description: 'AI en software op eigen servers of bij een Europese partij, zonder Amerikaanse cloud, met de AI Act ingebouwd', url: 'https://aiheroes.io/nl/diensten/eu-consultancy' } },
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
