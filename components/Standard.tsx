import React from 'react';
import type { Content } from '../types';

interface StandardProps {
  content: Content['standard'];
}

// Solid brand blocks with white text (no side stripes); colour is rhythm, not meaning.
const TILE_BG = ['bg-brand-red', 'bg-brand-blue', 'bg-brand-dark', 'bg-brand-blue'];

// "Bij elke bouw inbegrepen": the four things every build includes. This is where
// business case, compliance and training live on the homepage, as parts of a build
// rather than as products of their own.
export const Standard: React.FC<StandardProps> = ({ content }) => {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-brand-red text-xs font-medium tracking-[0.2em] uppercase mb-4">{content.subtitle}</p>
          <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-brand-dark leading-tight">
            {content.title}
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {content.items.map((item, i) => (
            <li key={item.title} className={`${TILE_BG[i % TILE_BG.length]} text-white p-6 md:p-8 flex flex-col min-h-[16rem] lg:min-h-[22rem]`}>
              <span className="font-serif text-4xl md:text-5xl text-white/50 leading-none">{String(i + 1).padStart(2, '0')}</span>
              <div className="mt-auto pt-10">
                <h3 className="font-serif text-xl md:text-2xl leading-snug mb-3 text-balance">{item.title}</h3>
                <p className="text-base leading-relaxed text-white text-pretty">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
