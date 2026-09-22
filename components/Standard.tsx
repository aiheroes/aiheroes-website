import React from 'react';
import type { Content } from '../types';

interface StandardProps {
  content: Content['standard'];
}

// "Bij elke bouw inbegrepen": the four things every build includes. This is where
// business case, compliance and training live on the homepage, as parts of a build
// rather than as products of their own.
export const Standard: React.FC<StandardProps> = ({ content }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-brand-dark leading-tight mb-3">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-stone-600">{content.subtitle}</p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {content.items.map((item, i) => (
            <li key={item.title} className="border-t-2 border-stone-200 pt-5">
              <span className="block font-serif text-3xl text-stone-300 mb-3">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed text-pretty">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
