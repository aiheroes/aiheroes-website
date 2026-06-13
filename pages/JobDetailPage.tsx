import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { ApplicationForm } from '../components/ApplicationForm';
import { CONTENT } from '../constants';
import type { Language, JobPosition } from '../types';
import { MapPin, Clock, Briefcase, GraduationCap, Code, Mic, ArrowLeft } from 'lucide-react';

const DOMAIN = 'https://aiheroes.io';

const departmentIcons: Record<string, React.FC<{ className?: string }>> = {
  training: Mic,
  consulting: GraduationCap,
  software: Code,
  general: Briefcase
};

// Map the free-text "type" field onto a schema.org employmentType enum value.
const employmentType = (type: string): string => {
  const t = type.toLowerCase();
  if (/stage|intern/.test(t)) return 'INTERN';
  if (/(parttime|part-time|part time)/.test(t) && !/full/.test(t)) return 'PART_TIME';
  return 'FULL_TIME';
};

// Build a Google for Jobs compatible JobPosting structured-data object.
const buildJobJsonLd = (position: JobPosition, lang: Language, path: string) => {
  const reqLabel = lang === 'nl' ? 'Wat vragen we?' : 'What we’re looking for';
  const offerLabel = lang === 'nl' ? 'Wat bieden we?' : 'What we offer';
  const descriptionHtml =
    position.description.map(p => `<p>${p}</p>`).join('') +
    `<p><strong>${reqLabel}</strong></p>` +
    `<ul>${position.requirements.map(r => `<li>${r}</li>`).join('')}</ul>` +
    `<p><strong>${offerLabel}</strong></p>` +
    `<ul>${position.offerings.map(o => `<li>${o}</li>`).join('')}</ul>`;

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: position.title,
    description: descriptionHtml,
    datePosted: position.datePosted,
    employmentType: employmentType(position.type),
    url: `${DOMAIN}${path}`,
    directApply: true,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'AI Heroes B.V.',
      sameAs: DOMAIN,
      logo: `${DOMAIN}/og-image.png`
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Aarhusweg 4-16',
        addressLocality: 'Groningen',
        postalCode: '9723 JJ',
        addressCountry: 'NL'
      }
    }
  };
};

export const JobDetailPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const content = CONTENT[lang].careersPage;
  const position = content.positions.items.find(p => p.id === slug);

  const listingPath = lang === 'nl' ? '/nl/vacatures' : '/en/careers';

  // Unknown slug -> send back to the listing rather than rendering a broken page.
  if (!position) {
    return <Navigate to={listingPath} replace />;
  }

  const path = `${listingPath}/${position.id}`;
  const Icon = departmentIcons[position.department] || Briefcase;
  const accentColor = position.department === 'training' ? 'red' : 'blue';
  const accentText = position.department === 'training' ? 'text-brand-red' : 'text-brand-blue';
  const jsonLd = buildJobJsonLd(position, lang, path);

  return (
    <PageLayout
      lang={lang}
      title={position.title}
      subtitle={position.summary}
      seoDescription={`${position.summary} ${position.location}. ${lang === 'nl' ? 'Solliciteer bij AI Heroes.' : 'Apply at AI Heroes.'}`}
      accentColor={accentColor}
      pillarBadge={position.departmentLabel}
      showContactForm={false}
      jsonLd={jsonLd}
    >
      <Link
        to={listingPath}
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-brand-blue transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'nl' ? 'Alle vacatures' : 'All positions'}
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-10">
        <div className={`w-10 h-10 ${position.department === 'training' ? 'bg-brand-red' : 'bg-brand-blue'}/10 flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${accentText}`} />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500">
          <span className={`font-medium ${accentText}`}>{position.departmentLabel}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{position.location}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{position.hours}</span>
          <span>{position.type}</span>
        </div>
      </div>

      {/* Description */}
      {position.description.map((p, i) => (
        <p key={i} className="text-lg text-stone-700 leading-relaxed mb-4">{p}</p>
      ))}

      {/* Requirements */}
      <h2 className="font-bold text-brand-dark mt-10 mb-3 text-sm uppercase tracking-wider">
        {lang === 'nl' ? 'Wat vragen we?' : 'What we’re looking for'}
      </h2>
      <ul className="space-y-2 mb-8">
        {position.requirements.map((req, i) => (
          <li key={i} className="text-stone-700 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-blue before:rounded-full">
            {req}
          </li>
        ))}
      </ul>

      {/* Offerings */}
      <h2 className="font-bold text-brand-dark mt-10 mb-3 text-sm uppercase tracking-wider">
        {lang === 'nl' ? 'Wat bieden we?' : 'What we offer'}
      </h2>
      <ul className="space-y-2 mb-12">
        {position.offerings.map((offer, i) => (
          <li key={i} className="text-stone-700 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-red before:rounded-full">
            {offer}
          </li>
        ))}
      </ul>

      {/* Application form */}
      <div className="border-t border-stone-200 pt-12">
        <ApplicationForm
          lang={lang}
          content={content.applicationForm}
          positions={content.positions.items}
          preselectedPosition={position.title}
        />
      </div>
    </PageLayout>
  );
};
