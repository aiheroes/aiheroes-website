import React from 'react';
import { Content } from '../types';

interface SocialProofProps {
  content: Content['socialProof'];
}

export const SocialProof: React.FC<SocialProofProps> = ({ content }) => {
  const logos = [
    "Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Locatiqs"
  ];

  return (
    <section className="w-full h-full py-12 md:py-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center h-full justify-center">
        
        {/* Testimonial First - Centered, extra padding for narrow look on desktop */}
        <div className="relative max-w-5xl mx-auto text-center mb-10 md:mb-16 px-4 md:px-24 lg:px-32">
           <span className="text-7xl md:text-9xl text-stone-800 absolute -top-8 left-1/2 -translate-x-1/2 font-serif z-0">
             &ldquo;
           </span>
           <h3 className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-[1.3] tracking-tight text-balance">
             {content.testimonial.text}
           </h3>
           <div className="mt-6 md:mt-10 relative z-10">
             <cite className="not-italic">
               <span className="block font-sans font-bold text-white tracking-wide text-sm md:text-base">{content.testimonial.author}</span>
               <span className="block font-serif text-stone-400 text-base md:text-lg mt-1">{content.testimonial.role}</span>
             </cite>
           </div>
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
