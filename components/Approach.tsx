import React from 'react';
import { Content } from '../types';

interface ApproachProps {
  content: Content['approach'];
}

export const Approach: React.FC<ApproachProps> = ({ content }) => {
  return (
    <section className="w-full py-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
           {/* The Full Text Block - White/Light Text for Dark Background */}
           <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.4] tracking-tight whitespace-pre-line text-balance">
             {content.p2}
           </p>
        </div>
      </div>
    </section>
  );
};
