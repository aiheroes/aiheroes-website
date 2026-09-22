import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import type { Language, Content, NavChild } from '../types';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
  textColor?: 'white' | 'dark';
  hidden?: boolean;
  useBlur?: boolean;
  splitPosition?: number | null;
  topTheme?: 'dark' | 'light';
  bottomTheme?: 'dark' | 'light';
}

type DropdownType = 'build' | 'how' | 'about' | null;

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  content,
  textColor = 'white',
  hidden = false,
  useBlur = false,
  splitPosition = null,
  topTheme = 'dark' as const,
  bottomTheme = 'dark' as const
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '/en';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        panelRef.current && !panelRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Get language-aware home URL
  const homeUrl = lang === 'en' ? '/en' : '/';

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenDropdown(null);

    // If already on homepage, scroll to top (hero section)
    if (isHomePage) {
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector('.snap-container')?.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(homeUrl);
    }
  };

  // Background styles based on theme
  const getBackgroundClass = (theme: 'dark' | 'light', blur: boolean) => {
    if (blur) {
      return theme === 'dark'
        ? 'navbar-blur navbar-blur-dark'
        : 'navbar-blur navbar-blur-light';
    }
    return theme === 'dark'
      ? 'navbar-clear navbar-clear-dark'
      : 'navbar-clear navbar-clear-light';
  };

  const getTextClass = (theme: 'dark' | 'light') => {
    return theme === 'dark' ? 'text-white' : 'text-brand-dark';
  };

  // Legacy support for non-split mode
  const textClass = textColor === 'white' ? 'text-white' : 'text-brand-dark';

  // Determine if we should use split mode
  const useSplitMode = splitPosition !== null && topTheme !== bottomTheme;

  // Pre-compute clip paths
  const topClipPath = splitPosition !== null ? `inset(0 0 ${100 - splitPosition}% 0)` : undefined;
  const bottomClipPath = splitPosition !== null ? `inset(${splitPosition}% 0 0 0)` : undefined;

  const panelRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const openIntentRef = useRef<ReturnType<typeof setTimeout>>();
  const [panelCenter, setPanelCenter] = useState<number | null>(null);

  // Measure center of the nav triggers
  useEffect(() => {
    const measure = () => {
      if (triggersRef.current) {
        const rect = triggersRef.current.getBoundingClientRect();
        setPanelCenter(rect.left + rect.width / 2);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handleNavEnter = (type: DropdownType) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (openIntentRef.current) clearTimeout(openIntentRef.current);
    // If already open, switch instantly. If closed, add small intent delay.
    if (openDropdown !== null) {
      setOpenDropdown(type);
    } else {
      openIntentRef.current = setTimeout(() => setOpenDropdown(type), 150);
    }
  };

  const handleNavAreaLeave = () => {
    if (openIntentRef.current) { clearTimeout(openIntentRef.current); openIntentRef.current = undefined; }
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 100);
  };

  const handlePanelEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handlePanelLeave = () => {
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 100);
  };

  const featured = content.featured;

  // Panel: a plain list of links with descriptions, plus an optional top link.
  const LinkList: React.FC<{ items: NavChild[]; hover?: string }> = ({ items, hover = 'group-hover:text-brand-red' }) => (
    <div className="space-y-0.5">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.href}
          onClick={() => setOpenDropdown(null)}
          className="block px-3 py-2.5 rounded hover:bg-stone-50 transition-colors group"
        >
          <span className={`block text-sm font-medium text-brand-dark ${hover} transition-colors`}>{item.label}</span>
          {item.description && (
            <span className="block text-xs text-stone-400 mt-0.5">{item.description}</span>
          )}
        </Link>
      ))}
    </div>
  );

  // "Wat we bouwen": the three entries, with the startsprint highlighted below.
  const BuildContent: React.FC = () => (
    <>
      <div className="mb-3 pb-3 border-b border-stone-100">
        <Link
          to={content.build.href}
          onClick={() => setOpenDropdown(null)}
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-brand-red transition-colors"
        >
          {content.build.label} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <LinkList items={content.build.children ?? []} />
      <div className="mt-3 pt-3 border-t border-stone-100">
        <Link
          to={featured.href}
          onClick={() => setOpenDropdown(null)}
          className="group flex items-center gap-3 px-3 py-2.5 rounded bg-stone-50 hover:bg-brand-red/5 transition-colors border-l-2 border-brand-red"
        >
          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-brand-dark group-hover:text-brand-red transition-colors">
              {featured.label}
            </span>
            <span className="block text-xs text-stone-400 mt-0.5">
              {featured.description}
            </span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all flex-shrink-0" />
        </Link>
      </div>
    </>
  );

  // "Hoe we werken": the startsprint, the standard and the phases.
  const HowContent: React.FC = () => (
    <>
      <div className="mb-3 pb-3 border-b border-stone-100">
        <Link
          to={content.how.href}
          onClick={() => setOpenDropdown(null)}
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-brand-blue transition-colors"
        >
          {content.how.label} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <LinkList items={content.how.children ?? []} hover="group-hover:text-brand-blue" />
    </>
  );

  // "Over ons": grouped columns (Bedrijf / Media & community / Kennis)
  const AboutContent: React.FC = () => (
    <>
      <div className="mb-4 pb-3 border-b border-stone-100">
        <Link
          to={content.about.href}
          onClick={() => setOpenDropdown(null)}
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-brand-red transition-colors"
        >
          {content.about.label} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {(content.about.columns ?? []).map((col, i) => (
          <div key={i}>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">{col.heading}</div>
            <div className="space-y-0.5">
              {col.items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-2 py-1.5 rounded hover:bg-stone-50 transition-colors group"
                >
                  <span className="block text-sm text-brand-dark group-hover:text-brand-red transition-colors">{item.label}</span>
                  {item.description && (
                    <span className="block text-xs text-stone-400 mt-0.5">{item.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Which content to show (persists briefly after close for exit animation)
  const [shownDropdown, setShownDropdown] = useState<DropdownType>(null);
  useEffect(() => {
    if (openDropdown) setShownDropdown(openDropdown);
  }, [openDropdown]);

  const isDropdownVisible = openDropdown !== null;
  const activePanel = shownDropdown;
  const panelWidth = activePanel === 'about' ? 640 : 400;

  // Dropdown panel JSX, inlined (not a component) so React doesn't remount it
  const dropdownPanel = (
    <div
      ref={panelRef}
      className="fixed pt-2 z-50"
      onMouseEnter={handlePanelEnter}
      onMouseLeave={handlePanelLeave}
      style={{
        top: 72,
        left: panelCenter ?? '50%',
        transform: 'translateX(-50%)',
        maxWidth: 'calc(100vw - 3rem)',
        width: panelWidth,
        opacity: isDropdownVisible ? 1 : 0,
        pointerEvents: isDropdownVisible ? 'auto' : 'none',
        transition: 'width 250ms cubic-bezier(0.4,0,0.2,1), opacity 150ms ease-out',
      }}
    >
      <div className="bg-white rounded-lg shadow-xl border border-stone-200 overflow-hidden">
        {activePanel === 'build' && (
          <div className="p-4">
            <BuildContent />
          </div>
        )}
        {activePanel === 'how' && (
          <div className="p-4">
            <HowContent />
          </div>
        )}
        {activePanel === 'about' && (
          <div className="p-5">
            <AboutContent />
          </div>
        )}
      </div>
    </div>
  );

  // Desktop nav button (no dropdown children, panel is unified)
  const NavTrigger: React.FC<{
    label: string;
    type: DropdownType;
    theme: 'dark' | 'light';
    href: string;
  }> = ({ label, type, theme, href }) => {
    const isActive = openDropdown === type;
    const textColorClass = theme === 'dark' ? 'text-white' : 'text-brand-dark';

    return (
      <div
        onMouseEnter={() => handleNavEnter(type)}
        onMouseLeave={handleNavAreaLeave}
      >
        <Link
          to={href}
          className={`flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity py-2 ${textColorClass}`}
          onClick={() => setOpenDropdown(null)}
        >
          {label}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
        </Link>
      </div>
    );
  };

  const menuLabel = lang === 'nl' ? 'Menu' : 'Menu';
  const closeLabel = lang === 'nl' ? 'Sluiten' : 'Close';

  // Render nav content for a given theme
  const renderNavContent = (theme: 'dark' | 'light') => {
    const navTextClass = getTextClass(theme);
    const logoColor = theme === 'dark' ? 'white' as const : 'fullcolor' as const;
    const slashClass = theme === 'dark' ? 'text-white/30' : 'text-brand-dark/30';

    return (
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href={homeUrl} onClick={handleLogoClick} className="flex items-center cursor-pointer">
          <Logo className="h-12 md:h-20 w-auto" variant="wordmark" colorVariant={logoColor} />
        </a>

        {/* Desktop Nav */}
        <div ref={dropdownRef} className={`hidden md:flex items-center space-x-8 ${navTextClass}`}>
          <div ref={triggersRef} className="flex items-center space-x-8">
            <NavTrigger label={content.build.label} type="build" theme={theme} href={content.build.href} />
            <NavTrigger label={content.how.label} type="how" theme={theme} href={content.how.href} />
            <Link
              to={content.cases.href}
              onClick={() => setOpenDropdown(null)}
              className="text-sm font-medium hover:opacity-80 transition-opacity py-2"
            >
              {content.cases.label}
            </Link>
            <NavTrigger label={content.about.label} type="about" theme={theme} href={content.about.href} />
          </div>

          <Link
            to={content.cta.href}
            onClick={() => setOpenDropdown(null)}
            className="bg-brand-red text-white px-5 py-2 text-sm font-medium rounded-sm hover:bg-red-600 transition-colors"
          >
            {content.cta.label}
          </Link>

          <div className="flex gap-2 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setLang('nl')}
              className={`transition-colors ${lang === 'nl' ? 'underline underline-offset-4' : 'opacity-50 hover:opacity-100'}`}
            >
              NL
            </button>
            <span className={slashClass}>/</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${lang === 'en' ? 'underline underline-offset-4' : 'opacity-50 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className={`md:hidden flex items-center ${navTextClass}`}>
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? closeLabel : menuLabel} aria-expanded={isOpen}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    );
  };

  // When mobile menu is open, never hide the navbar
  const shouldHide = hidden && !isOpen;
  const baseNavClass = `fixed top-0 left-0 right-0 z-50 px-6 py-4 md:p-6 transition-all duration-300 ease-out ${shouldHide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;

  // Mobile accordion: label plus a flat list of links (optionally with a highlighted last item)
  const MobileAccordion: React.FC<{
    label: string;
    type: DropdownType;
    items: NavChild[];
    highlight?: NavChild;
  }> = ({ label, type, items, highlight }) => {
    const isExpanded = mobileExpanded === type;

    return (
      <div className="border-b border-stone-200">
        <button
          onClick={() => setMobileExpanded(isExpanded ? null : type)}
          aria-expanded={isExpanded}
          className="w-full flex justify-between items-center py-4 text-2xl font-serif font-medium text-brand-dark"
        >
          {label}
          <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden" inert={!isExpanded}>
            <div className="pb-4 pl-4 space-y-3">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="block text-lg text-stone-600 hover:text-brand-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {highlight && (
                <Link
                  to={highlight.href}
                  className="block text-lg text-brand-red font-medium pt-2 border-t border-stone-200"
                  onClick={() => setIsOpen(false)}
                >
                  {highlight.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Determine the single-layer theme
  const singleLayerTheme: 'dark' | 'light' = textColor === 'white' ? 'dark' : 'light';

  return (
    <>
      {isOpen ? (
        /* Mobile menu open - solid light background, dark text */
        <nav className={`${baseNavClass} bg-brand-light`}>
          {renderNavContent('light')}
        </nav>
      ) : useSplitMode ? (
        <>
          {/* Layer 1: Top portion */}
          <nav
            className={`${baseNavClass} ${getBackgroundClass(topTheme, useBlur)} ${getTextClass(topTheme)}`}
            style={{ clipPath: topClipPath }}
          >
            {renderNavContent(topTheme)}
          </nav>

          {/* Layer 2: Bottom portion */}
          <nav
            className={`${baseNavClass} ${getBackgroundClass(bottomTheme, useBlur)} ${getTextClass(bottomTheme)}`}
            style={{ clipPath: bottomClipPath }}
          >
            {renderNavContent(bottomTheme)}
          </nav>
        </>
      ) : (
        /* Single layer mode */
        <nav
          className={`${baseNavClass} ${getBackgroundClass(singleLayerTheme, useBlur)} ${textClass}`}
        >
          {renderNavContent(singleLayerTheme)}
        </nav>
      )}

      {/* Unified dropdown panel (fixed position, outside nav flow) */}
      <div className="hidden md:block">
        {dropdownPanel}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-light transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden pt-24 px-6 overflow-y-auto`}>
        <div className="max-w-md mx-auto">
          {/* Accordions are rendered as function calls (not <Comp/>) so the panel DOM
              nodes persist across renders and the grid-rows open/close transition runs. */}
          {MobileAccordion({ label: content.build.label, type: 'build', items: content.build.children ?? [], highlight: { label: featured.label, href: featured.href } })}
          {MobileAccordion({ label: content.how.label, type: 'how', items: content.how.children ?? [] })}

          {/* Cases (direct link, no accordion) */}
          <Link
            to={content.cases.href}
            onClick={() => setIsOpen(false)}
            className="flex justify-between items-center py-4 text-2xl font-serif font-medium text-brand-dark border-b border-stone-200"
          >
            {content.cases.label}
            <ArrowRight className="w-5 h-5 text-stone-400" />
          </Link>

          {MobileAccordion({ label: content.about.label, type: 'about', items: (content.about.columns ?? []).flatMap((c) => c.items) })}

          {/* Call to action */}
          <Link
            to={content.cta.href}
            onClick={() => setIsOpen(false)}
            className="block w-full bg-brand-red text-white text-center py-4 text-xl font-medium mt-6"
          >
            {content.cta.label}
          </Link>

          {/* Language Switcher */}
          <div className="mt-8 flex gap-4 text-lg font-sans border-t border-stone-300 pt-8">
            <button
              onClick={() => { setLang('nl'); setIsOpen(false); }}
              className={lang === 'nl' ? 'font-bold text-brand-red' : 'text-stone-500'}
            >
              NL
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={() => { setLang('en'); setIsOpen(false); }}
              className={lang === 'en' ? 'font-bold text-brand-red' : 'text-stone-500'}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
