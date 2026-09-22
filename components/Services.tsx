import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Content, EntryCard } from '../types';

interface ServicesProps {
  content: Content['services'];
}

// Colour is rhythm, not meaning: the three entries cycle red, blue, dark.
const CARD_STYLE = [
  {
    accent: 'border-l-brand-red',
    tagColor: 'text-brand-red',
    arrowBg: 'bg-brand-red',
    arrowRestBg: 'bg-brand-red/10',
    arrowRestText: 'text-brand-red',
    arrowBorder: 'border-brand-red',
    glowColor: 'rgba(217, 83, 79, 0.25)',
  },
  {
    accent: 'border-l-brand-blue',
    tagColor: 'text-brand-blue',
    arrowBg: 'bg-brand-blue',
    arrowRestBg: 'bg-brand-blue/10',
    arrowRestText: 'text-brand-blue',
    arrowBorder: 'border-brand-blue',
    glowColor: 'rgba(37, 99, 235, 0.20)',
  },
  {
    accent: 'border-l-stone-700',
    tagColor: 'text-stone-600',
    arrowBg: 'bg-brand-dark',
    arrowRestBg: 'bg-stone-200',
    arrowRestText: 'text-brand-dark',
    arrowBorder: 'border-brand-dark',
    glowColor: 'rgba(28, 25, 23, 0.15)',
  },
];

interface GlowCardProps {
  card: EntryCard;
  cta: string;
  staggerIndex: number;
  revealed: boolean;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, cta, staggerIndex, revealed }) => {
  const style = CARD_STYLE[staggerIndex % CARD_STYLE.length];
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [arrowHovered, setArrowHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  return (
    <Link
      ref={cardRef}
      to={card.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setArrowHovered(false); }}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
      className={`
        group relative
        bg-white border-l-[5px] ${style.accent}
        shadow-[0_1px_3px_rgba(0,0,0,0.04)]
        hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]
        transition-all duration-500 ease-out
        md:hover:-translate-y-0.5
        block overflow-hidden
        md:opacity-100 md:translate-y-0
        ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{ transitionDelay: `${staggerIndex * 150}ms` }}
    >
      {/* Mouse-following glow (desktop) */}
      <div
        className="hidden md:block absolute w-80 h-80 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${style.glowColor} 0%, transparent 65%)`,
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Auto-animating glow (mobile): two overlapping orbs with different periods for organic movement */}
      <div
        className="md:hidden absolute pointer-events-none"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${style.glowColor.replace(/[\d.]+\)$/, '0.2)')} 0%, transparent 70%)`,
          animation: revealed ? `glow-drift-x 7s ease-in-out ${staggerIndex * 0.9}s infinite, glow-drift-y1 11s ease-in-out ${staggerIndex * 0.5}s infinite` : 'none',
          opacity: revealed ? 1 : 0,
        }}
      />
      <div
        className="md:hidden absolute pointer-events-none"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${style.glowColor.replace(/[\d.]+\)$/, '0.15)')} 0%, transparent 70%)`,
          animation: revealed ? `glow-drift-x2 9s ease-in-out ${staggerIndex * 1.3}s infinite, glow-drift-y 6s ease-in-out ${staggerIndex * 0.7}s infinite` : 'none',
          opacity: revealed ? 1 : 0,
        }}
      />

      <div className="relative p-6 md:p-8 lg:p-10 flex flex-col h-full">
        <p className={`text-xs font-bold uppercase tracking-widest ${style.tagColor} mb-3 md:mb-4`}>
          {card.tag}
        </p>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-brand-dark mb-3 md:mb-4 leading-tight text-balance">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-stone-600 leading-relaxed text-pretty">
          {card.description}
        </p>

        <div className="mt-5 md:mt-6 flex justify-end">
          <span
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
            className={`inline-flex items-center h-10 rounded-full transition-all duration-300 ease-out overflow-hidden border-2 ${
              arrowHovered
                ? `bg-white ${style.arrowRestText} ${style.arrowBorder} pl-5 pr-4 gap-3`
                : isHovered
                  ? `${style.arrowBg} text-white border-transparent w-10 justify-center`
                  : `${style.arrowRestBg} ${style.arrowRestText} border-transparent w-10 justify-center`
            } ${revealed ? 'md:animate-none animate-[arrow-pulse_0.6s_ease-out]' : ''}`}
            style={revealed ? { animationDelay: `${staggerIndex * 150 + 500}ms`, animationFillMode: 'both' } : undefined}
          >
            {arrowHovered && (
              <span className="text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                {cta}
              </span>
            )}
            <ArrowRight className="w-4 h-4 shrink-0" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="w-full min-h-screen py-24 bg-brand-light relative flex flex-col justify-center">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-4 md:px-6 lg:px-8 w-full flex flex-col justify-center">

        {/* Header */}
        <div className="mb-10 md:mb-16 md:text-center">
          <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-brand-dark">
            {content.title}
          </h2>
          <p className="mt-3 text-base md:text-lg text-stone-500">{content.intro}</p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {content.items.map((card, i) => (
            <GlowCard
              key={card.entry}
              card={card}
              cta={content.cta}
              staggerIndex={i}
              revealed={revealed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
