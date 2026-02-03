import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTENT } from '../constants';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Approach } from '../components/Approach';
import { Team } from '../components/Team';
import { SocialProof } from '../components/SocialProof';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';

const LANG_STORAGE_KEY = 'aiheroes-lang';

function getInitialLanguage(forcedLang?: Language): Language {
  // If a language is forced (e.g., from /en route), use that
  if (forcedLang) {
    return forcedLang;
  }
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'nl' || stored === 'en') {
    return stored;
  }
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  if (browserLang.toLowerCase().startsWith('nl')) {
    return 'nl';
  }
  return 'en';
}

interface HomePageProps {
  defaultLang?: Language;
}

// Section config: id, theme (dark bg = white text, light bg = dark text)
// Desktop uses 'team' (full section), mobile uses split 'team-image'/'team-content'
const SECTIONS_DESKTOP: { id: string; theme: 'dark' | 'light' }[] = [
  { id: 'hero', theme: 'dark' },
  { id: 'services', theme: 'light' },
  { id: 'approach', theme: 'dark' },
  { id: 'team', theme: 'light' }, // On desktop, whole team section is light
  { id: 'social-proof', theme: 'dark' },
  { id: 'contact', theme: 'light' },
  { id: 'footer', theme: 'dark' },
];

const SECTIONS_MOBILE: { id: string; theme: 'dark' | 'light' }[] = [
  { id: 'hero', theme: 'dark' },
  { id: 'services', theme: 'light' },
  { id: 'approach', theme: 'dark' },
  { id: 'team-image', theme: 'dark' },   // Team image needs dark navbar (mobile stacked)
  { id: 'team-content', theme: 'light' }, // Team text needs light navbar
  { id: 'social-proof', theme: 'dark' },
  { id: 'contact', theme: 'light' },
  { id: 'footer', theme: 'dark' },
];

// SEO content per language
const SEO_CONTENT = {
  nl: {
    title: 'Praktische AI Workshops & Training',
    description: 'Wij geven praktische AI workshops waar je iets aan hebt. Van AI Foundations tot Copilot training - skills die voor je werken. Sinds 2019 trainen we teams bij Postcodeloterij, Prosus en meer.'
  },
  en: {
    title: 'Practical AI Workshops & Training',
    description: 'We give practical AI workshops that actually help. From AI Foundations to Copilot training - skills that work for you. Since 2019 we have trained teams at Postcodeloterij, Prosus and more.'
  }
};

export function HomePage({ defaultLang }: HomePageProps = {}) {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(() => getInitialLanguage(defaultLang));
  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [splitPosition, setSplitPosition] = useState<number | null>(null);
  const [topTheme, setTopTheme] = useState<'dark' | 'light'>('dark');
  const [bottomTheme, setBottomTheme] = useState<'dark' | 'light'>('dark');
  const [showStickyCta, setShowStickyCta] = useState(false);
  const content = CONTENT[lang];
  const scrollRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  // Sync language state when defaultLang prop changes (e.g., navigating between / and /en)
  useEffect(() => {
    if (defaultLang && defaultLang !== lang) {
      setLang(defaultLang);
    }
  }, [defaultLang]);

  // Handle language change - navigate to correct URL
  const handleLangChange = (newLang: Language) => {
    if (newLang !== lang) {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      navigate(newLang === 'nl' ? '/' : '/en');
    }
  };

  // SEO for homepage
  useSEO({
    title: SEO_CONTENT[lang].title,
    description: SEO_CONTENT[lang].description,
    lang,
    path: lang === 'nl' ? '/' : '/en',
    alternatePath: lang === 'nl' ? '/en' : '/'
  });

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Track scroll to show sticky CTA when hero is out of view
  useEffect(() => {
    const handleStickyCtaScroll = () => {
      if (!heroSectionRef.current) return;

      const heroRect = heroSectionRef.current.getBoundingClientRect();
      const contactSection = document.getElementById('contact');

      // Show sticky CTA only when:
      // 1. Hero is completely scrolled past
      // 2. Contact form is not yet in view
      const heroScrolledOut = heroRect.bottom < 0;
      const contactInView = contactSection
        ? contactSection.getBoundingClientRect().top < window.innerHeight
        : false;

      setShowStickyCta(heroScrolledOut && !contactInView);
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleStickyCtaScroll);
      handleStickyCtaScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleStickyCtaScroll);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const navHeight = 80;
    // Use mobile sections (with team-image) on screens < 1024px (lg breakpoint)
    const SECTIONS = window.innerWidth < 1024 ? SECTIONS_MOBILE : SECTIONS_DESKTOP;

    // Find which section is currently under the navbar and check for splits
    let currentTheme: 'dark' | 'light' = 'dark';
    let needsBlur = false;
    let foundSplit = false;

    for (let i = 0; i < SECTIONS.length; i++) {
      const section = SECTIONS[i];
      const element = document.getElementById(section.id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();

      // Check if this section's bottom edge is within the navbar (creates a split)
      if (rect.bottom > 0 && rect.bottom < navHeight) {
        const position = (rect.bottom / navHeight) * 100;
        setSplitPosition(position);
        setTopTheme(section.theme);
        setBottomTheme(SECTIONS[i + 1]?.theme || section.theme);
        foundSplit = true;
        // Use the dominant section for blur/color (the one covering more of the navbar)
        currentTheme = position > 50 ? section.theme : (SECTIONS[i + 1]?.theme || section.theme);
        needsBlur = true; // Always blur during transition
        break;
      }

      // Check if this section fully covers the navbar
      if (rect.top <= 0 && rect.bottom >= navHeight) {
        currentTheme = section.theme;
        needsBlur = rect.top < 0;
        break;
      }
    }

    if (!foundSplit) {
      setSplitPosition(null);
      setTopTheme(currentTheme);
      setBottomTheme(currentTheme);
    }

    setNavColor(currentTheme === 'dark' ? 'white' : 'dark');
    setUseBlur(needsBlur);

    // Hide nav on footer with hysteresis to prevent flickering
    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      // Hide when footer top enters navbar area, show when it's clearly below
      if (footerRect.top < 60) {
        setHideNav(true);
      } else if (footerRect.top > 100) {
        setHideNav(false);
      }
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="h-screen w-full overflow-y-scroll md:snap-y md:snap-proximity scroll-smooth snap-container bg-brand-light text-brand-dark"
    >
      <Navbar
        lang={lang}
        setLang={handleLangChange}
        content={content.nav}
        textColor={navColor}
        hidden={hideNav}
        useBlur={useBlur}
        splitPosition={splitPosition}
        topTheme={topTheme}
        bottomTheme={bottomTheme}
      />

      <main className="w-full">
        {/* Hero (Dark) */}
        <section ref={heroSectionRef} id="hero" className="md:snap-start h-screen w-full overflow-hidden">
          <Hero content={content.hero} />
        </section>

        {/* Services (Light) */}
        <section id="services" className="md:snap-start md:h-screen w-full flex items-center bg-brand-light overflow-y-auto md:overflow-hidden scrollbar-hide">
          <Services content={content.services} lang={lang} />
        </section>

        {/* Approach (Dark) */}
        <section id="approach" className="md:snap-start h-screen w-full flex items-center bg-brand-dark overflow-hidden">
           <Approach content={content.approach} />
        </section>

        {/* Team (Light) */}
        <section id="team" className="md:snap-start md:h-screen w-full flex items-center bg-brand-light overflow-hidden">
           <Team content={content.team} />
        </section>

        {/* Social Proof (Dark) */}
        <section id="social-proof" className="md:snap-start h-screen w-full flex items-center bg-brand-dark overflow-hidden">
           <SocialProof content={content.socialProof} />
        </section>

        {/* Contact (Light) */}
        <section id="contact" className="md:snap-start h-screen w-full flex items-center bg-brand-light overflow-hidden relative z-10">
          <Contact content={content.contact} contactFormContent={content.contactForm} />
        </section>

        {/* Footer (Dark) */}
        <section id="footer" ref={footerRef} className="md:snap-end w-full relative z-20">
          <Footer content={content.footer} nav={content.nav} lang={lang} setLang={handleLangChange} />
        </section>
      </main>

      {/* Sticky CTA - only show when hero is scrolled out */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToContact}
          className="group bg-brand-red hover:shadow-brand-red/30 text-white px-6 py-4 shadow-2xl transition-all duration-300 flex items-center gap-3 font-medium hover:scale-105"
        >
          <span>{lang === 'nl' ? 'Start gesprek' : 'Start conversation'}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
