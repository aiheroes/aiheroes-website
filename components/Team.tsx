import React from 'react';
import { Link } from 'react-router-dom';
import type { Content } from '../types';
import { Image } from './Image';

interface TeamProps {
  content: Content['team'];
}

export const Team: React.FC<TeamProps> = ({ content }) => {
  return (
    <section id="team" className="w-full bg-brand-light overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto">
        {/* Desktop: Side-by-side | Mobile: Stacked */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Column - has its own ID for navbar theme detection on mobile */}
          <div id="team-image" className="relative w-full lg:w-[45%] h-[50vh] lg:h-[80vh] overflow-hidden">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
            />
            {/* Gradient overlay for navbar legibility on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Content Column - has its own ID for navbar theme detection */}
          <div id="team-content" className="w-full lg:w-[55%] flex items-center bg-brand-light">
            <div className="px-6 lg:px-16 py-12 lg:py-0">
              {/* Location Label */}
              <p className="text-brand-red text-xs font-medium tracking-[0.2em] uppercase mb-4">
                {content.location}
              </p>

              {/* Title */}
              <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-brand-dark mb-6 leading-tight">
                {content.title}
              </h2>

              {/* Body */}
              <p className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed mb-8 max-w-lg text-pretty whitespace-pre-line">
                {content.body}
              </p>

              {/* CTA Link */}
              <Link
                to={content.cta.href}
                className="inline-flex items-center text-brand-dark font-medium group"
              >
                <span className="border-b border-brand-dark/30 group-hover:border-brand-dark transition-colors duration-300">
                  {content.cta.text}
                </span>
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
