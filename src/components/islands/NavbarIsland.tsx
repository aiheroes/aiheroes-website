// Single source of truth for the navbar: the legacy React Navbar, hydrated as a
// small island on every static page (the island pages already render it inside
// their own page components). The scroll-split theming below is the same logic
// as PageLayout.tsx, but reads the static DOM landmarks (#page-hero, <footer>)
// instead of React refs.
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../../components/Navbar';
import { CONTENT } from '../../data/content';
import type { Lang } from '../../data/i18n';
import type { Language } from '../../data/types';

interface Props {
  lang: Lang;
  /** Build-time alternate-language URL for the NL/EN toggle. */
  alternateUrl: string;
}

export default function NavbarIsland({ lang, alternateUrl }: Props) {
  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [splitPosition, setSplitPosition] = useState<number | null>(null);
  const [topTheme, setTopTheme] = useState<'dark' | 'light'>('dark');
  const [bottomTheme, setBottomTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('page-hero');
      const footer = document.querySelector('footer');
      const navHeight = 80;

      // Pages without a dark hero (404, utility pages) sit on light background.
      if (!hero) {
        setSplitPosition(null);
        setTopTheme('light');
        setBottomTheme('light');
        setNavColor('dark');
        setUseBlur(window.scrollY > 8);
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const footerRect = footer?.getBoundingClientRect();

      // Footer top crossing the navbar: split light content / dark footer
      if (footerRect && footerRect.top > 0 && footerRect.top < navHeight) {
        const position = (footerRect.top / navHeight) * 100;
        setSplitPosition(position);
        setTopTheme('light');
        setBottomTheme('dark');
        setNavColor(position > 50 ? 'dark' : 'white');
        setUseBlur(true);
        return;
      }

      // Fully in footer
      if (footerRect && footerRect.top <= 0) {
        setSplitPosition(null);
        setTopTheme('dark');
        setBottomTheme('dark');
        setNavColor('white');
        setUseBlur(true);
        return;
      }

      // Hero bottom crossing the navbar: split dark hero / light content
      if (heroRect.bottom > 0 && heroRect.bottom < navHeight) {
        const position = (heroRect.bottom / navHeight) * 100;
        setSplitPosition(position);
        setTopTheme('dark');
        setBottomTheme('light');
        setNavColor(position > 50 ? 'white' : 'dark');
        setUseBlur(true);
      } else if (heroRect.bottom <= 0) {
        // Fully past hero: light content area
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    if (newLang !== lang) window.location.href = alternateUrl;
  };

  return (
    <Navbar
      lang={lang}
      setLang={handleLangChange}
      content={CONTENT[lang].nav}
      textColor={navColor}
      useBlur={useBlur}
      splitPosition={splitPosition}
      topTheme={topTheme}
      bottomTheme={bottomTheme}
    />
  );
}
