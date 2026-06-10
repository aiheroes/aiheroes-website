// Site-wide Organization schema (rendered on the homepages). Ported from index.html.
export const PROFESSIONAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AI Heroes',
  legalName: 'AI Heroes B.V.',
  taxID: '42051968',
  vatID: 'NL869486263B01',
  description:
    'Full-service AI agency met drie pijlers: training, consulting en software. Van change management tot technische implementatie, vanuit Groningen voor heel Europa.',
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
  sameAs: ['https://www.linkedin.com/company/aiheroes'],
  founder: [
    { '@type': 'Person', name: 'Frans Hoorn', jobTitle: 'Co-Founder, Consulting' },
    { '@type': 'Person', name: 'David Homan', jobTitle: 'Co-Founder, Software' },
    { '@type': 'Person', name: 'Jan Brusse', jobTitle: 'Co-Founder, Training' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Training',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Foundations Workshop', description: '1-dag workshop om je team te leren werken met AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilot Training', description: 'Microsoft 365 Copilot productiviteitstraining' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI voor Developers', description: 'AI-tools en technieken voor softwareontwikkelaars' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Consulting',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Case Analyse', description: 'Strategische analyse om AI-kansen in je organisatie te identificeren' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Readiness Scan', description: 'Beoordeling van AI-gereedheid met concreet actieplan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Roadmap', description: 'Strategisch AI-implementatieplan met business cases en prioritering' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Software & Implementatie',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI op Maat', description: 'Custom AI-software op maat van prototype tot productie' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Proof of Concept', description: 'Snel werkend AI-prototype om je idee te valideren' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Systeemintegratie', description: 'AI-modellen integreren in bestaande bedrijfssystemen' } },
        ],
      },
    ],
  },
};
