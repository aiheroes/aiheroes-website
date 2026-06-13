import { VacaturesNL } from '../../../pages/nl/Vacatures';
import { CareersEN } from '../../../pages/en/Careers';
import type { Language } from '../../data/types';

// Careers listing pages render their own chrome (PageLayout), full-bleed growth/
// culture/process sections, and the ApplicationForm. Rendered as an island; the
// JobPosting schema lives on the per-job detail routes, not the listing.
export default function CareersIsland({ lang }: { lang: Language }) {
  return lang === 'nl' ? <VacaturesNL /> : <CareersEN />;
}
