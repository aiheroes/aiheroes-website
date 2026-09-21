import React from 'react';
import type { Content } from '../types';
import { MeetingChooser } from './MeetingChooser';
import { ContactForm } from './ContactForm';

interface ContactProps {
  content: Content['contact'];
  contactFormContent: Content['contactForm'];
}

export const Contact: React.FC<ContactProps> = ({ content, contactFormContent }) => {
  return (
    <div id="contact" className="w-full flex-grow flex flex-col justify-center pt-24 pb-12 md:pt-40 md:pb-24">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
             <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-brand-dark mb-2 md:mb-6">{contactFormContent.title}</h2>
             <p className="text-sm md:text-xl text-stone-600 leading-relaxed mb-4 md:mb-8 text-pretty">
               {contactFormContent.subtitle}
             </p>
             <p className="text-sm md:text-xl text-stone-600 leading-relaxed text-pretty">
               {contactFormContent.emailLabel}
             </p>
             <p className="text-sm md:text-xl text-stone-600 leading-relaxed text-pretty mt-1 md:mt-2">
               <a
                 href={`mailto:${contactFormContent.email}`}
                 className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
               >
                 {contactFormContent.email}
                 <span className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-brand-red"></span>
               </a>
               {' · '}
               <a
                 href={contactFormContent.phoneHref}
                 className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
               >
                 {contactFormContent.phone}
                 <span className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-brand-blue"></span>
               </a>
             </p>
              <MeetingChooser
                label={contactFormContent.meetingLabel}
                meetings={contactFormContent.meetings}
                className="mt-4 md:mt-6"
              />

             <p className="mt-8 md:mt-12 pt-4 border-t border-stone-300/60 max-w-xs text-[11px] text-stone-500 leading-relaxed">
               AI Heroes B.V. <span className="text-stone-400">·</span> KvK 42051968 <span className="text-stone-400">·</span> BTW NL869486263B01
             </p>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white p-4 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <ContactForm content={content} accent="blue" compact />
          </div>
        </div>
      </div>
    </div>
  );
};
