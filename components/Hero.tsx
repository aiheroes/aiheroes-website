import React from 'react';
import { Content } from '../types';
import { Button } from './Button';

interface HeroProps {
  content: Content['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              const content = part.replace(/<\/?red>/g, '');
              return (
                <span key={j} className="underline decoration-brand-red decoration-[6px] underline-offset-[8px] md:underline-offset-[12px]">
                  {content}
                </span>
              );
            }
            if (part.startsWith('<blue>')) {
              const content = part.replace(/<\/?blue>/g, '');
              return (
                 <span key={j} className="underline decoration-brand-blue decoration-[6px] underline-offset-[8px] md:underline-offset-[12px]">
                  {content}
                </span>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
          alt="Grand Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight mb-8 animate-fade-in-up shadow-sm">
            {renderHeadline(content.headline)}
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 mb-12 leading-relaxed max-w-2xl font-light animate-fade-in-up [animation-delay:200ms] whitespace-pre-line drop-shadow-md">
            {content.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up [animation-delay:400ms]">
            <Button onClick={() => scrollTo('contact')} variant="primary" icon>
              {content.primaryBtn}
            </Button>
            <Button onClick={() => scrollTo('services')} variant="outline">
              {content.secondaryBtn}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};
