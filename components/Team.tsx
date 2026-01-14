import React, { useState, useEffect } from 'react';
import { Content } from '../types';

interface TeamProps {
  content: Content['team'];
}

export const Team: React.FC<TeamProps> = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [content.slides.length]);

  return (
    <section id="team" className="w-full h-screen relative overflow-hidden bg-brand-dark">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {content.slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content Panel - Frosted glass effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="backdrop-blur-md bg-brand-dark/70 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-serif text-white mb-3">
                  {content.title}
                </h2>
                <p className="text-base md:text-lg text-white/80 font-light leading-relaxed whitespace-pre-line">
                  {content.intro}
                </p>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {content.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/30 w-3 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
