import React, { useState, useEffect, useRef } from 'react';
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

const LANG_STORAGE_KEY = 'aiheroes-lang';

function getInitialLanguage(): Language {
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

// Section config: id, theme (dark bg = white text, light bg = dark text)
const SECTIONS: { id: string; theme: 'dark' | 'light' }[] = [
  { id: 'hero', theme: 'dark' },
  { id: 'services', theme: 'light' },
  { id: 'approach', theme: 'dark' },
  { id: 'team', theme: 'dark' },
  { id: 'social-proof', theme: 'dark' },
  { id: 'contact', theme: 'light' },
  { id: 'footer', theme: 'dark' },
];

export function HomePage() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [splitPosition, setSplitPosition] = useState<number | null>(null);
  const [topTheme, setTopTheme] = useState<'dark' | 'light'>('dark');
  const [bottomTheme, setBottomTheme] = useState<'dark' | 'light'>('dark');
  const content = CONTENT[lang];
  const scrollRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const navHeight = 80;

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

    // Hide nav on footer
    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      setHideNav(footerRect.top < 80);
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
        setLang={setLang}
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
        <section id="hero" className="md:snap-start h-screen w-full overflow-hidden">
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

        {/* Team (Dark - has its own dark panel) */}
        <section id="team" className="md:snap-start md:h-screen w-full flex items-center overflow-hidden">
           <Team content={content.team} />
        </section>

        {/* Social Proof (Dark) */}
        <section id="social-proof" className="md:snap-start h-screen w-full flex items-center bg-brand-dark overflow-hidden">
           <SocialProof content={content.socialProof} />
        </section>

        {/* Contact (Light) */}
        <section id="contact" className="md:snap-start h-screen w-full flex items-center bg-brand-light overflow-hidden relative z-10">
          <Contact content={content.contact} />
        </section>

        {/* Footer (Dark) */}
        <section id="footer" ref={footerRef} className="md:snap-end w-full relative z-20">
          <Footer content={content.footer} nav={content.nav} lang={lang} setLang={setLang} />
        </section>
      </main>
    </div>
  );
}
