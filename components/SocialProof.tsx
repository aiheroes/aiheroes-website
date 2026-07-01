import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Content } from '../types';

interface SocialProofProps {
  content: Content['socialProof'];
}

// useLayoutEffect on the client, no-op on the server (island is SSR'd to HTML).
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// How long each reference stays before the mobile carousel auto-advances.
const AUTO_ADVANCE_MS = 7000;

export const SocialProof: React.FC<SocialProofProps> = ({ content }) => {
  const logos = [
    "Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Locatiqs"
  ];

  const testimonials = content.testimonials;
  const hasMultiple = testimonials.length > 1;
  const backLabel = content.back ?? 'Terug';
  const readMore = content.readMore ?? 'Lees meer';

  // Desktop/tablet shows the whole wall at once; only the mobile carousel rotates.
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Which reference is opened full-screen (old single-quote style); null = wall.
  const [expanded, setExpanded] = useState<number | null>(null);

  const goTo = (index: number) => {
    const count = testimonials.length;
    setActive(((index % count) + count) % count);
  };

  const activeTestimonial = testimonials[active];

  // Track viewport so the auto-advance timer only runs while the mobile carousel
  // is the visible layout (the desktop wall never rotates).
  useIsoLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Auto-advance the mobile carousel with a filling progress bar on the active
  // dot. requestAnimationFrame writes the width straight to the fill node (no
  // per-frame re-render) and auto-pauses on hidden tabs.
  const progressRef = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const fill = progressRef.current;
    if (!hasMultiple || !isMobile || expanded !== null) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // No motion: show the active dot as a solid, fully-filled pill.
      if (fill) fill.style.width = '100%';
      return;
    }
    // Paused (hover/focus): freeze the fill where the last frame left it.
    if (paused) return;

    if (fill) fill.style.width = '0%';
    let raf = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / AUTO_ADVANCE_MS);
      if (fill) fill.style.width = `${p * 100}%`;
      if (p >= 1) {
        goTo(active + 1);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused, hasMultiple, isMobile, expanded]);

  const arrowBtn =
    "flex items-center justify-center rounded-full text-stone-500 hover:text-white hover:bg-stone-800 transition-colors duration-300 shrink-0";

  const openExpanded = (idx: number) => setExpanded(idx);
  const closeExpanded = () => setExpanded(null);

  return (
    <section
      className="w-full min-h-screen pt-28 md:pt-32 pb-16 md:pb-24 flex flex-col justify-center items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 w-full flex flex-col items-center">

        {expanded !== null ? (
          /* Expanded: the full review in the large single-quote style. */
          <div className="w-full max-w-4xl mx-auto animate-fadeIn">
            <button
              type="button"
              onClick={closeExpanded}
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-400 hover:text-white transition-colors duration-300 mb-10 md:mb-14"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </button>

            <figure className="relative text-center px-2 md:px-10">
              <span className="text-7xl md:text-9xl text-stone-800 absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 font-serif z-0">
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-[clamp(1.4rem,_1rem+1.7vw,_2.6rem)] font-serif italic text-white leading-[1.35] tracking-tight text-balance">
                {testimonials[expanded].text}
              </blockquote>
              <figcaption className="mt-8 md:mt-10 relative z-10">
                {testimonials[expanded].author && (
                  <span className="block font-sans font-bold text-white tracking-wide text-sm md:text-base">{testimonials[expanded].author}</span>
                )}
                <span className="block font-serif text-stone-400 text-base md:text-lg mt-1">{testimonials[expanded].role}</span>
              </figcaption>
            </figure>
          </div>
        ) : (
          <>
            {content.heading && (
              <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-white text-center leading-tight mb-10 md:mb-16">
                {content.heading}
              </h2>
            )}

            {/* Desktop / tablet: the full wall of references, all visible at once.
                CSS multi-column masonry; each card opens the full review on click. */}
            <div className="hidden md:block w-full mb-14 lg:mb-16">
              <div className="columns-2 lg:columns-3 gap-5 lg:gap-6">
                {testimonials.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => openExpanded(idx)}
                    aria-label={t.author ? `Lees de volledige review van ${t.author}` : 'Lees de volledige review'}
                    className="group block w-full text-left break-inside-avoid mb-5 lg:mb-6 rounded-2xl border border-stone-800 bg-stone-900/40 p-6 lg:p-7 cursor-pointer transition-colors duration-300 hover:border-stone-600 hover:bg-stone-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                  >
                    <span className="block font-serif italic text-stone-100 text-lg lg:text-xl leading-snug text-balance">
                      <span className="text-stone-600">&ldquo;</span>{t.highlight ?? t.text}<span className="text-stone-600">&rdquo;</span>
                    </span>
                    <span className="block mt-5">
                      {t.author && (
                        <span className="block font-sans font-bold text-white tracking-wide text-sm">{t.author}</span>
                      )}
                      <span className="block font-serif text-stone-400 text-sm mt-1">{t.role}</span>
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 group-hover:text-stone-200 transition-colors duration-300">
                      {readMore}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile: one reference at a time, auto-advancing. Tap to read in full. */}
            <div className="md:hidden w-full max-w-xl mb-10">
              <button
                type="button"
                key={active}
                onClick={() => openExpanded(active)}
                aria-label={activeTestimonial.author ? `Lees de volledige review van ${activeTestimonial.author}` : 'Lees de volledige review'}
                className="block w-full text-center px-2 animate-fadeIn min-h-[12rem] cursor-pointer"
              >
                <span className="relative flex flex-col justify-center min-h-[12rem]">
                  <span className="text-6xl text-stone-800 absolute -top-4 left-1/2 -translate-x-1/2 font-serif z-0">
                    &ldquo;
                  </span>
                  <span className="relative z-10 block text-[clamp(1.25rem,_1rem+2vw,_1.75rem)] font-serif italic text-white leading-[1.4] tracking-tight text-balance">
                    {activeTestimonial.highlight ?? activeTestimonial.text}
                  </span>
                  <span className="mt-6 relative z-10 block">
                    {activeTestimonial.author && (
                      <span className="block font-sans font-bold text-white tracking-wide text-sm">{activeTestimonial.author}</span>
                    )}
                    <span className="block font-serif text-stone-400 text-base mt-1">{activeTestimonial.role}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
                      {readMore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </span>
              </button>

              {hasMultiple && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    aria-label="Vorige"
                    className={`${arrowBtn} w-9 h-9`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex items-center gap-2.5">
                    {testimonials.map((_, idx) => {
                      const isActive = idx === active;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => goTo(idx)}
                          aria-label={`Ga naar referentie ${idx + 1}`}
                          aria-current={isActive ? 'true' : undefined}
                          className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
                            isActive ? 'w-6 bg-stone-600' : 'w-2 bg-stone-600 hover:bg-stone-400'
                          }`}
                        >
                          {isActive && (
                            <span
                              ref={progressRef}
                              aria-hidden="true"
                              className="absolute inset-y-0 left-0 w-0 bg-white rounded-full pointer-events-none"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    aria-label="Volgende"
                    className={`${arrowBtn} w-9 h-9`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>

            {/* Logos */}
            <div className="border-t border-stone-800 pt-8 md:pt-12 w-full max-w-5xl">
              <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500 mb-5 md:mb-8">
                {content.title}
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
                {logos.map((logo, idx) => (
                  <span key={idx} className="text-lg md:text-2xl font-serif text-stone-300 cursor-default">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
};
