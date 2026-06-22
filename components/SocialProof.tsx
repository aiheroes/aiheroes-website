import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Content } from '../types';

interface SocialProofProps {
  content: Content['socialProof'];
}

export const SocialProof: React.FC<SocialProofProps> = ({ content }) => {
  const logos = [
    "Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Locatiqs"
  ];

  const testimonials = content.testimonials;
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const count = testimonials.length;
    setActive(((index % count) + count) % count);
  };

  const testimonial = testimonials[active];

  return (
    <section className="w-full h-full py-12 md:py-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 w-full flex flex-col items-center h-full justify-center">

        {/* Testimonial slider */}
        <div className="relative w-full max-w-5xl mx-auto mb-10 md:mb-16">

          {testimonials.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Vorige"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-stone-500 hover:text-white hover:bg-stone-800 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Volgende"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-stone-500 hover:text-white hover:bg-stone-800 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </>
          )}

          {/* Slide - Centered, extra padding for narrow look on desktop */}
          <div key={active} className="relative text-center px-12 md:px-24 lg:px-32 animate-fadeIn">
             <span className="text-7xl md:text-9xl text-stone-800 absolute -top-8 left-1/2 -translate-x-1/2 font-serif z-0">
               &ldquo;
             </span>
             <h3 className="relative z-10 text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif italic text-white leading-[1.3] tracking-tight text-balance">
               {testimonial.text}
             </h3>
             <div className="mt-6 md:mt-10 relative z-10">
               <cite className="not-italic">
                 <span className="block font-sans font-bold text-white tracking-wide text-sm md:text-base">{testimonial.author}</span>
                 <span className="block font-serif text-stone-400 text-base md:text-lg mt-1">{testimonial.role}</span>
               </cite>
             </div>
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2.5 mt-8 md:mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-label={`Ga naar testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === active ? 'w-6 bg-white' : 'w-2 bg-stone-600 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Logos Second */}
        <div className="border-t border-stone-800 pt-8 md:pt-12 w-full max-w-5xl">
          <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500 mb-6 md:mb-8">
            {content.title}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-4 md:gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
             {logos.map((logo, idx) => (
                <span key={idx} className="text-lg md:text-2xl font-serif text-stone-300 cursor-default">
                   {logo}
                </span>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};
