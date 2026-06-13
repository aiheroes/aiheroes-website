import { DienstenNL } from '../../../pages/nl/Diensten';
import { ServicesEN } from '../../../pages/en/Services';
import type { Language } from '../../data/types';

// Wraps the existing interactive services-overview React pages as Astro islands.
// The FAQPage JSON-LD is baked at build time in the .astro page; these keep the
// expandable services, FAQ accordion and sticky CTA interactivity intact.
export default function DienstenIsland({ lang }: { lang: Language }) {
  return lang === 'nl' ? <DienstenNL /> : <ServicesEN />;
}
