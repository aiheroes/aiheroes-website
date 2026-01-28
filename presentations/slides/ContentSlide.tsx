import { useState } from 'react';
import Slide from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  title: string;
  subtitle?: string;
  items?: string[];
  /** Show items one by one on click */
  progressive?: boolean;
  /** Accent color for title underline */
  accent?: 'red' | 'blue' | 'taupe';
}

const accentColors = {
  red: 'bg-brand-red',
  blue: 'bg-brand-blue',
  taupe: 'bg-brand-taupe',
};

export default function ContentSlide({
  title,
  subtitle,
  items = [],
  progressive = false,
  accent = 'red',
  background = 'bg-brand-light',
  notes,
}: Props) {
  const [visibleItems, setVisibleItems] = useState(progressive ? 0 : items.length);

  const handleClick = () => {
    if (progressive && visibleItems < items.length) {
      setVisibleItems(visibleItems + 1);
    }
  };

  return (
    <Slide
      background={background}
      padding="xl"
      notes={notes}
      className={progressive && visibleItems < items.length ? 'cursor-pointer' : ''}
      onClick={handleClick}
    >
      <div className="max-w-4xl">
        {/* Title */}
        <div className="mb-12">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-dark mb-4 leading-tight">
            {title}
          </h2>
          <div className={`h-1.5 w-24 ${accentColors[accent]}`} />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-xl md:text-2xl text-brand-dark/70 mb-12 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Content items */}
        {items.length > 0 && (
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex gap-4 transition-all duration-500 ${
                  index < visibleItems
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`}
              >
                <div className={`flex-shrink-0 w-2 h-2 rounded-full ${accentColors[accent]} mt-3`} />
                <span className="font-sans text-xl md:text-2xl text-brand-dark leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Progressive reveal indicator */}
        {progressive && visibleItems < items.length && (
          <div className="mt-12 text-brand-dark/30 font-sans text-sm flex items-center gap-2">
            <span>Click to continue</span>
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </Slide>
  );
}
