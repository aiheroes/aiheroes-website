import React from 'react';
import type { Entry, Language } from '../types';
import { CONTENT } from '../constants';
import { MeetingChooser } from './MeetingChooser';
import { ContactForm } from './ContactForm';

interface PageContactFormProps {
  lang: Language;
  accentColor?: 'red' | 'blue';
  /** Preselects the entry chip when the visitor arrives from a build page. */
  entry?: Entry;
}

// Contact section at the bottom of every static page: heading, direct contact,
// the meeting chooser and the one shared form.
export const PageContactForm: React.FC<PageContactFormProps> = ({ lang, accentColor = 'red', entry }) => {
  const contactFormContent = CONTENT[lang].contactForm;

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-2">{contactFormContent.title}</h2>
      <p className="text-stone-600 mb-4">{contactFormContent.subtitle}</p>
      <p className="text-stone-600 mb-4">
        {contactFormContent.emailLabel}{' '}
        <a
          href={`mailto:${contactFormContent.email}`}
          className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
        >
          {contactFormContent.email}
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"></span>
        </a>
        {' · '}
        <a
          href={contactFormContent.phoneHref}
          className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
        >
          {contactFormContent.phone}
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"></span>
        </a>
      </p>
      <MeetingChooser
        label={contactFormContent.meetingLabel}
        meetings={contactFormContent.meetings}
        className="mb-8"
      />

      <ContactForm content={CONTENT[lang].contact} entry={entry} accent={accentColor} />
    </div>
  );
};
