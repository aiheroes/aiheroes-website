import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content, Language } from '../types';
import { Button } from './Button';

interface HeroProps {
  content: Content['hero'];
  lang: Language;
}

const SLIDE_DURATION = 6000;
const FADE_DURATION = 800;

export const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [displaySlide, setDisplaySlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const slides = content.slides;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Find the nearest scrollable ancestor (e.g., snap-container on HomePage)
      const scrollContainer = element.closest('.snap-container');
      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        scrollContainer.scrollTo({
          top: scrollContainer.scrollTop + elementRect.top - containerRect.top,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const startProgressAnimation = useCallback(() => {
    setProgress(0);
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index === activeSlide || isFading) return;

    // Clear existing timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setIsFading(true);
    setProgress(0);

    // After fade out, swap content
    setTimeout(() => {
      setDisplaySlide(index);
      setActiveSlide(index);
      // After swap, fade back in
      setTimeout(() => {
        setIsFading(false);
        startProgressAnimation();
      }, 50);
    }, FADE_DURATION / 2);
  }, [activeSlide, isFading, startProgressAnimation]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeSlide, slides.length, goToSlide]);

  // Start initial progress animation
  useEffect(() => {
    startProgressAnimation();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCtaClick = (slide: typeof slides[0]) => {
    const target = slide.ctaTarget;
    if (target.startsWith('#')) {
      // Parse hash and optional query params (e.g. #contact?topic=0)
      const [hash, query] = target.split('?');
      scrollTo(hash.replace('#', ''));

      // If topic param is present, preselect it in the contact form
      if (query) {
        const params = new URLSearchParams(query);
        const topicIndex = params.get('topic');
        if (topicIndex !== null) {
          setTimeout(() => {
            const idx = parseInt(topicIndex, 10);
            window.dispatchEvent(new CustomEvent('selectTopic', {
              detail: { topicIndex: idx, chipColor: idx >= 2 ? 'blue' : 'red' }
            }));
          }, 300);
        }
      }
    } else {
      // Navigate to a different page
      navigate(target);
    }
  };

  const renderHeadline = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      const parts = line.split(/(<red>.*?<\/red>|<blue>.*?<\/blue>)/g);
      return (
        <span key={i} className="block leading-[1.3] pb-2">
          {parts.map((part, j) => {
            if (part.startsWith('<red>')) {
              return (
                <span key={j} className="underline decoration-brand-red decoration-[6px] underline-offset-[8px] md:underline-offset-[12px]">
                  {part.replace(/<\/?red>/g, '')}
                </span>
              );
            }
            if (part.startsWith('<blue>')) {
              return (
                <span key={j} className="underline decoration-brand-blue decoration-[6px] underline-offset-[8px] md:underline-offset-[12px]">
                  {part.replace(/<\/?blue>/g, '')}
                </span>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  const currentSlide = slides[displaySlide];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Images — all layered, opacity-controlled for crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 z-0 transition-opacity ease-in-out"
          style={{
            opacity: idx === displaySlide ? 1 : 0,
            transitionDuration: `${FADE_DURATION}ms`
          }}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-[1] bg-stone-950/30"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-24 pb-28 md:pt-32 md:pb-40">
          <div
            className="transition-opacity ease-in-out"
            style={{
              opacity: isFading ? 0 : 1,
              transitionDuration: `${FADE_DURATION / 2}ms`
            }}
          >
            {/* Pillar label */}
            <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest mb-3 md:mb-6">
              {currentSlide.label}
            </p>

            <h1 className="text-[clamp(2.25rem,_1.5rem+3vw,_6rem)] font-serif font-medium text-white tracking-tight mb-5 md:mb-8">
              {renderHeadline(currentSlide.headline)}
            </h1>

            <p className="text-[clamp(1.125rem,_1rem+0.5vw,_1.5rem)] text-stone-200 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light whitespace-pre-line drop-shadow-md text-pretty">
              {currentSlide.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => handleCtaClick(currentSlide)} variant={displaySlide === 0 ? 'primary' : 'outline'} icon>
                {currentSlide.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation — Rewire-style labeled segments */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {slides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="relative text-left py-3 md:py-5 pr-4 group cursor-pointer"
                >
                  {/* Progress line / active indicator */}
                  <div className="absolute top-0 left-0 right-4 h-[3px]">
                    {isActive ? (
                      <div
                        className="h-full bg-white transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    ) : idx < activeSlide ? (
                      <div className="h-full bg-white/40 w-full" />
                    ) : (
                      <div className="h-full bg-white/0 group-hover:bg-white/30 transition-colors w-full" />
                    )}
                  </div>

                  <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                  }`}>
                    {slide.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
