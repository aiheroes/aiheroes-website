import React from 'react';
import type { Content } from '../types';

interface ApproachProps {
  content: Content['approach'];
}

export const Approach: React.FC<ApproachProps> = ({ content }) => {
  const renderText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      if (line === '') return <span key={i} className="block h-10 md:h-14" />;
      const parts = line.split(/(<red>.*?<\/red>|<blue>.*?<\/blue>)/g);
      return (
        <span key={i} className="block leading-[1.4]">
          {parts.map((part, j) => {
            if (part.startsWith('<red>')) {
              return (
                <span key={j} className="underline decoration-brand-red decoration-[4px] underline-offset-[6px] md:decoration-[6px] md:underline-offset-[10px]">
                  {part.replace(/<\/?red>/g, '')}
                </span>
              );
            }
            if (part.startsWith('<blue>')) {
              return (
                <span key={j} className="underline decoration-brand-blue decoration-[4px] underline-offset-[6px] md:decoration-[6px] md:underline-offset-[10px]">
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

  return (
    <section className="w-full py-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
           <p className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-white leading-[1.4] tracking-tight text-balance">
             {renderText(content.p2)}
           </p>
        </div>
      </div>
    </section>
  );
};
