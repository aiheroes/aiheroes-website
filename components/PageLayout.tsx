import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { PageContactForm } from './PageContactForm';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { useSEO, calculateAlternatePath } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
  lang: Language;
  title: string;
  subtitle?: string;
  seoDescription?: string;
  accentColor?: 'red' | 'blue';
  showContactForm?: boolean;
  pillarBadge?: string;
  noindex?: boolean;
  ctaLabel?: string;
  trustedBy?: string[];
  heroExtra?: React.ReactNode;
  jsonLd?: object | object[];
  seoTitle?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  lang,
  title,
  subtitle,
  seoDescription,
  accentColor = 'red',
  showContactForm = true,
  pillarBadge,
  noindex,
  ctaLabel,
  trustedBy,
  heroExtra,
  jsonLd,
  seoTitle
}) => {
  const location = useLocation();

  // SEO - use provided description or fall back to subtitle or generic
  const description = seoDescription || subtitle || `${title} - AI Heroes`;
  useSEO({
    title,
    description,
    lang,
    path: location.pathname,
    noindex,
    jsonLd,
    seoTitle
  });
  const content = CONTENT[lang];
  const heroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  // Navbar theme state
  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [splitPosition, setSplitPosition] = useState<number | null>(null);
  const [topTheme, setTopTheme] = useState<'dark' | 'light'>('dark');
  const [bottomTheme, setBottomTheme] = useState<'dark' | 'light'>('dark');
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Generate the alternate language URL
  const getAlternateUrl = (): string => {
    return calculateAlternatePath(location.pathname, lang);
  };

  // Handle language change - navigate to alternate URL
  const handleLangChange = (newLang: Language) => {
    if (newLang !== lang) {
      window.location.href = getAlternateUrl();
    }
  };

  // Track scroll to show sticky CTA when hero is out of view
  useEffect(() => {
    const handleStickyCtaScroll = () => {
      if (!heroRef.current || !showContactForm) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const contactSection = document.getElementById('contact-form');

      // Show sticky CTA only when:
      // 1. Hero is completely scrolled past
      // 2. Contact form is not yet in view
      const heroScrolledOut = heroRect.bottom < 0;
      const contactInView = contactSection
        ? contactSection.getBoundingClientRect().top < window.innerHeight
        : false;

      setShowStickyCta(heroScrolledOut && !contactInView);
    };
    window.addEventListener('scroll', handleStickyCtaScroll);
    handleStickyCtaScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleStickyCtaScroll);
  }, [showContactForm]);

  // Track scroll to change navbar theme with split effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const footerRect = footerRef.current?.getBoundingClientRect();
      const navHeight = 80;

      // First check footer - if footer top is within navbar, split for footer
      if (footerRect && footerRect.top > 0 && footerRect.top < navHeight) {
        const position = (footerRect.top / navHeight) * 100;
        setSplitPosition(position);
        setTopTheme('light');  // Content is light
        setBottomTheme('dark');  // Footer is dark
        setNavColor(position > 50 ? 'dark' : 'white');
        setUseBlur(true);
        return;
      }

      // If fully in footer
      if (footerRect && footerRect.top <= 0) {
        setSplitPosition(null);
        setTopTheme('dark');
        setBottomTheme('dark');
        setNavColor('white');
        setUseBlur(true);
        return;
      }

      // Check if the hero bottom edge is within the navbar (creates a split)
      if (heroRect.bottom > 0 && heroRect.bottom < navHeight) {
        // Calculate split position as percentage
        const position = (heroRect.bottom / navHeight) * 100;
        setSplitPosition(position);
        setTopTheme('dark');  // Hero is dark
        setBottomTheme('light');  // Content is light
        setNavColor(position > 50 ? 'white' : 'dark');
        setUseBlur(true);
      } else if (heroRect.bottom <= 0) {
        // Fully past hero - in light content area
        setSplitPosition(null);
        setTopTheme('light');
        setBottomTheme('light');
        setNavColor('dark');
        setUseBlur(true);
      } else {
        // Still in hero area
        setSplitPosition(null);
        setTopTheme('dark');
        setBottomTheme('dark');
        setNavColor('white');
        setUseBlur(heroRect.top < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accentBorder = accentColor === 'red' ? 'border-brand-red' : 'border-brand-blue';

  // Scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark overflow-x-hidden">
      {/* Navigation - theme changes based on scroll with split effect */}
      <Navbar
        lang={lang}
        setLang={handleLangChange}
        content={content.nav}
        textColor={navColor}
        useBlur={useBlur}
        splitPosition={splitPosition}
        topTheme={topTheme}
        bottomTheme={bottomTheme}
      />

      {/* Hero Section */}
      <header
        ref={heroRef}
        className={`pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark border-b-4 ${accentBorder}`}
      >
        <div className="max-w-4xl mx-auto px-6">
          {pillarBadge && (
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/70 border border-white/30 px-3 py-1 mb-4">
              {pillarBadge}
            </span>
          )}
          <h1 className="text-[clamp(1.875rem,_1.25rem+1.5vw,_3.75rem)] font-serif text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-8">{subtitle}</p>
          )}
          {showContactForm && (
            <button
              onClick={scrollToContact}
              className={`group ${accentColor === 'red' ? 'bg-brand-red' : 'bg-brand-blue'} text-white px-8 py-4 font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl`}
            >
              <span>{ctaLabel || (lang === 'nl' ? 'Start gesprek' : 'Start conversation')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
          {trustedBy && trustedBy.length > 0 && (
            <div className="mt-10 pt-6 border-t border-white/15">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                {lang === 'nl' ? 'Vertrouwd door' : 'Trusted by'}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {trustedBy.map((name, idx) => (
                  <span key={idx} className="text-sm text-white/60 font-medium">{name}</span>
                ))}
              </div>
            </div>
          )}
          {heroExtra}
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {children}
        </div>
      </main>

      {/* Contact Form Section */}
      {showContactForm && (
        <section id="contact-form" className="py-16 md:py-24 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-6">
            <PageContactForm lang={lang} accentColor={accentColor} preselectedTopic={pillarBadge} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer ref={footerRef}>
        <Footer
          content={content.footer}
          nav={content.nav}
          lang={lang}
          alternateUrl={getAlternateUrl()}
        />
      </footer>

      {/* Sticky CTA - only show when hero button is scrolled out */}
      {showContactForm && (
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={scrollToContact}
            className={`group ${accentColor === 'red' ? 'bg-brand-blue hover:shadow-brand-blue/30' : 'bg-brand-red hover:shadow-brand-red/30'} text-white px-6 py-4 shadow-2xl transition-all duration-300 flex items-center gap-3 font-medium hover:scale-105`}
          >
            <span>{ctaLabel || (lang === 'nl' ? 'Start gesprek' : 'Start conversation')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};
