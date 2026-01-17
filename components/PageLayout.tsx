import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { PageContactForm } from './PageContactForm';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
  lang: Language;
  title: string;
  subtitle?: string;
  accentColor?: 'red' | 'blue';
  showContactForm?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  lang,
  title,
  subtitle,
  accentColor = 'red',
  showContactForm = true
}) => {
  const location = useLocation();
  const content = CONTENT[lang];
  const heroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  // Navbar theme state
  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [splitPosition, setSplitPosition] = useState<number | null>(null);
  const [topTheme, setTopTheme] = useState<'dark' | 'light'>('dark');
  const [bottomTheme, setBottomTheme] = useState<'dark' | 'light'>('dark');

  // Generate the alternate language URL
  const getAlternateUrl = (): string => {
    let path = location.pathname;
    if (lang === 'nl') {
      path = path.replace(/^\/nl\//, '/en/')
        .replace('/diensten/', '/services/')
        .replace('/over-ons/', '/about/')
        .replace('/ai-voor-developers', '/ai-for-developers')
        .replace('/aanpak', '/approach')
        .replace('/ai-geletterdheid', '/ai-literacy')
        .replace('/ai-strategie-gids', '/ai-strategy-guide')
        .replace('/voorwaarden', '/terms')
        .replace('/pers', '/press');
      return path;
    } else {
      path = path.replace(/^\/en\//, '/nl/')
        .replace('/services/', '/diensten/')
        .replace('/about/', '/over-ons/')
        .replace('/ai-for-developers', '/ai-voor-developers')
        .replace('/approach', '/aanpak')
        .replace('/ai-literacy', '/ai-geletterdheid')
        .replace('/ai-strategy-guide', '/ai-strategie-gids')
        .replace('/terms', '/voorwaarden')
        .replace('/press', '/pers');
      return path;
    }
  };

  // Handle language change - navigate to alternate URL
  const handleLangChange = (newLang: Language) => {
    if (newLang !== lang) {
      window.location.href = getAlternateUrl();
    }
  };

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

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
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
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
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
        <section className="py-16 md:py-24 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-6">
            <PageContactForm lang={lang} accentColor={accentColor} />
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
    </div>
  );
};
