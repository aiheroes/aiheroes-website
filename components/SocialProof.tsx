import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Content } from '../types';

interface SocialProofProps {
  content: Content['socialProof'];
}

// useLayoutEffect on the client, no-op on the server (island is SSR'd to HTML).
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const SocialProof: React.FC<SocialProofProps> = ({ content }) => {
  const logos = [
    "Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Locatiqs"
  ];

  const testimonials = content.testimonials;
  const hasMultiple = testimonials.length > 1;
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const count = testimonials.length;
    setActive(((index % count) + count) % count);
  };

  const testimonial = testimonials[active];

  // Auto-fit: shrink the quote until the whole section fits its viewport
  // height, so long testimonials never clip inside the h-screen section.
  const fitRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);

  useIsoLayoutEffect(() => {
    const fit = () => {
      const box = fitRef.current;
      const q = quoteRef.current;
      if (!box || !q) return;
      q.style.fontSize = '';
      const base = parseFloat(getComputedStyle(q).fontSize) || 24;
      let size = base;
      // Coarse: jump close using the overflow ratio, then fine-tune by 1px.
      for (let i = 0; i < 6 && box.scrollHeight > box.clientHeight && size > 13; i++) {
        size = Math.max(13, Math.floor(size * (box.clientHeight / box.scrollHeight)));
        q.style.fontSize = `${size}px`;
      }
      let guard = 0;
      while (box.scrollHeight > box.clientHeight && size > 13 && guard < 40) {
        size -= 1;
        q.style.fontSize = `${size}px`;
        guard++;
      }
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [active, testimonial.text]);

  const arrowBtn =
    "flex items-center justify-center rounded-full text-stone-500 hover:text-white hover:bg-stone-800 transition-colors duration-300 shrink-0";

  return (
    <section className="w-full h-full py-8 md:py-20 flex flex-col justify-center items-center overflow-hidden">
      <div ref={fitRef} className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 w-full flex flex-col items-center h-full justify-center pt-28 md:pt-0">

        {/* Testimonial slider */}
        <div className="relative w-full max-w-5xl mx-auto mb-6 md:mb-16">

          {/* Slide row (desktop arrows flank the quote) */}
          <div className="relative">
            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  aria-label="Vorige"
                  className={`${arrowBtn} hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12`}
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  aria-label="Volgende"
                  className={`${arrowBtn} hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12`}
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            {/* Slide */}
            <div key={active} className="relative text-center px-2 sm:px-8 md:px-20 lg:px-32 animate-fadeIn">
              <span className="text-6xl md:text-9xl text-stone-800 absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 font-serif z-0">
                &ldquo;
              </span>
              <h3 ref={quoteRef} className="relative z-10 text-[clamp(1.25rem,_0.9rem+1.5vw,_3.5rem)] font-serif italic text-white leading-[1.3] tracking-tight text-balance">
                {testimonial.text}
              </h3>
              <div className="mt-4 md:mt-10 relative z-10">
                <cite className="not-italic">
                  {testimonial.author && (
                    <span className="block font-sans font-bold text-white tracking-wide text-sm md:text-base">{testimonial.author}</span>
                  )}
                  <span className="block font-serif text-stone-400 text-base md:text-lg mt-1">{testimonial.role}</span>
                </cite>
              </div>
            </div>
          </div>

          {/* Controls: dots always, arrows inline on mobile */}
          {hasMultiple && (
            <div className="flex items-center justify-center gap-4 md:gap-3 mt-5 md:mt-10">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Vorige"
                className={`${arrowBtn} md:hidden w-9 h-9`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2.5">
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

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Volgende"
                className={`${arrowBtn} md:hidden w-9 h-9`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        {/* Logos Second */}
        <div className="border-t border-stone-800 pt-5 md:pt-12 w-full max-w-5xl">
          <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 md:mb-8">
            {content.title}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
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
