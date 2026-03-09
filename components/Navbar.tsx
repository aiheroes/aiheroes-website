import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Language, Content, NavChild } from '../types';
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

type DropdownType = 'services' | 'about' | 'resources' | null;

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
  const isHomePage = location.pathname === '/';

  // Handle hash navigation after arriving at homepage
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

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

  const handleContactClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    if (isHomePage) {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#contact');
    }
  };

  // Get language-aware home URL
  const homeUrl = lang === 'en' ? '/en' : '/';

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenDropdown(null);

    // If already on homepage, scroll to top (hero section)
    if (isHomePage || location.pathname === '/en') {
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: try both window and any scroll container
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector('.snap-container')?.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage
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
  const logoVariant = 'square';

  // Determine if we should use split mode
  const useSplitMode = splitPosition !== null && topTheme !== bottomTheme;

  // Pre-compute clip paths
  const topClipPath = splitPosition !== null ? `inset(0 0 ${100 - splitPosition}% 0)` : undefined;
  const bottomClipPath = splitPosition !== null ? `inset(${splitPosition}% 0 0 0)` : undefined;

  // Pillar metadata for mega-menu column headers
  const pillarMeta = lang === 'nl'
    ? { training: { label: 'TRAINING', subtitle: 'Workshops die bijblijven', href: '/nl/diensten#training' }, consulting: { label: 'CONSULTANCY', subtitle: 'Van inzicht naar strategie', href: '/nl/diensten#consulting' }, software: { label: 'SOFTWARE', subtitle: 'Van plan naar oplossing', href: '/nl/diensten#software' } }
    : { training: { label: 'TRAINING', subtitle: 'Workshops that stick', href: '/en/services#training' }, consulting: { label: 'CONSULTING', subtitle: 'From insight to strategy', href: '/en/services#consulting' }, software: { label: 'SOFTWARE', subtitle: 'From plan to solution', href: '/en/services#software' } };

  const allServicesLabel = lang === 'nl' ? 'Bekijk alle diensten' : 'View all services';
  const allServicesHref = lang === 'nl' ? '/nl/diensten' : '/en/services';

  // Group children by category
  const trainingItems = content.services.children?.filter(c => c.category === 'training') || [];
  const consultingItems = content.services.children?.filter(c => c.category === 'consulting') || [];
  const softwareItems = content.services.children?.filter(c => c.category === 'software') || [];

  const panelRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const openIntentRef = useRef<ReturnType<typeof setTimeout>>();
  const [panelCenter, setPanelCenter] = useState<number | null>(null);

  // Measure center of the 3 nav triggers
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

  // Featured nav link (EU / Digital Independence)
  const featured = content.featured;

  // EU flag inline SVG for featured link
  const EuFlagIcon: React.FC<{ className?: string }> = ({ className }) => {
    const stars = Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      return { x: 405 + 140 * Math.cos(angle), y: 270 + 140 * Math.sin(angle) };
    });
    return (
      <svg viewBox="0 0 810 540" className={className} aria-label="EU Flag">
        <rect width="810" height="540" fill="#003399" />
        {stars.map((s, i) => (
          <polygon key={i} points={`${s.x},${s.y - 20} ${s.x + 6},${s.y - 6} ${s.x + 19},${s.y - 6} ${s.x + 9},${s.y + 3} ${s.x + 12},${s.y + 17} ${s.x},${s.y + 9} ${s.x - 12},${s.y + 17} ${s.x - 9},${s.y + 3} ${s.x - 19},${s.y - 6} ${s.x - 6},${s.y - 6}`} fill="#FFCC00" />
        ))}
      </svg>
    );
  };

  // Services content
  const ServicesContent: React.FC = () => (
    <>
      <div className="mb-4 pb-3 border-b border-stone-100">
        <Link
          to={allServicesHref}
          onClick={() => setOpenDropdown(null)}
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-brand-red transition-colors"
        >
          {allServicesLabel} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <Link to={pillarMeta.training.href} onClick={() => setOpenDropdown(null)} className="block mb-3">
            <span className="text-xs font-bold tracking-wider text-brand-red">{pillarMeta.training.label}</span>
            <span className="block text-xs text-stone-400 mt-0.5">{pillarMeta.training.subtitle}</span>
          </Link>
          <div className="space-y-0.5">
            {trainingItems.map((item, idx) => (
              <Link key={idx} to={item.href} onClick={() => setOpenDropdown(null)}
                className="block px-2 py-1.5 text-sm text-brand-dark hover:text-brand-red hover:bg-stone-50 rounded transition-colors"
              >{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <Link to={pillarMeta.consulting.href} onClick={() => setOpenDropdown(null)} className="block mb-3">
            <span className="text-xs font-bold tracking-wider text-brand-blue">{pillarMeta.consulting.label}</span>
            <span className="block text-xs text-stone-400 mt-0.5">{pillarMeta.consulting.subtitle}</span>
          </Link>
          <div className="space-y-0.5">
            {consultingItems.map((item, idx) => (
              <Link key={idx} to={item.href} onClick={() => setOpenDropdown(null)}
                className="block px-2 py-1.5 text-sm text-brand-dark hover:text-brand-blue hover:bg-stone-50 rounded transition-colors"
              >{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <Link to={pillarMeta.software.href} onClick={() => setOpenDropdown(null)} className="block mb-3">
            <span className="text-xs font-bold tracking-wider text-stone-700">{pillarMeta.software.label}</span>
            <span className="block text-xs text-stone-400 mt-0.5">{pillarMeta.software.subtitle}</span>
          </Link>
          <div className="space-y-0.5">
            {softwareItems.map((item, idx) => (
              <Link key={idx} to={item.href} onClick={() => setOpenDropdown(null)}
                className="block px-2 py-1.5 text-sm text-brand-dark hover:text-stone-900 hover:bg-stone-50 rounded transition-colors"
              >{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
      {featured && (
        <div className="mt-4 pt-4 border-t border-stone-100">
          <Link
            to={featured.href}
            onClick={() => setOpenDropdown(null)}
            className="group flex items-center gap-3 px-3 py-2.5 rounded hover:bg-stone-50 transition-colors border-l-2 border-transparent hover:border-l-2"
            style={{ borderImage: 'linear-gradient(to bottom, #E63946, #1D4ED8) 1' }}
          >
            <EuFlagIcon className="w-6 h-4 flex-shrink-0 rounded-[2px]" />
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
      )}
    </>
  );

  // Simple list content for About / Resources
  const SimpleListContent: React.FC<{ items: NavChild[] }> = ({ items }) => (
    <div className="space-y-1">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.href}
          onClick={() => setOpenDropdown(null)}
          className="block px-3 py-2.5 hover:bg-stone-50 rounded transition-colors group"
        >
          <span className="font-medium text-sm text-brand-dark transition-colors group-hover:text-brand-red">
            {item.label}
          </span>
          {item.description && (
            <span className="block text-xs text-stone-500 mt-0.5">{item.description}</span>
          )}
        </Link>
      ))}
    </div>
  );

  // Which content to show (persists briefly after close for exit animation)
  const [shownDropdown, setShownDropdown] = useState<DropdownType>(null);
  useEffect(() => {
    if (openDropdown) setShownDropdown(openDropdown);
  }, [openDropdown]);

  const isDropdownVisible = openDropdown !== null;
  const activePanel = shownDropdown;
  const panelWidth = activePanel === 'services' ? 720 : 340;

  // Top link labels for about/resources panels (matching "Bekijk alle diensten" style)
  const panelTopLinks = lang === 'nl'
    ? { about: { label: 'Over AI Heroes', href: '/nl/over-ons' }, resources: { label: 'Alle resources bekijken', href: '/nl/resources' } }
    : { about: { label: 'About AI Heroes', href: '/en/about' }, resources: { label: 'View all resources', href: '/en/resources' } };

  // Dropdown panel JSX — inlined (not a component) so React doesn't remount it
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
        {activePanel === 'services' && (
          <div className="p-5">
            <ServicesContent />
          </div>
        )}
        {activePanel === 'about' && (
          <div className="p-5">
            <div className="mb-4 pb-3 border-b border-stone-100">
              <span className="text-sm text-stone-500">
                {panelTopLinks.about.label}
              </span>
            </div>
            <SimpleListContent items={content.about.children || []} />
          </div>
        )}
        {activePanel === 'resources' && (
          <div className="p-5">
            <div className="mb-4 pb-3 border-b border-stone-100">
              <span className="text-sm text-stone-500">
                {panelTopLinks.resources.label}
              </span>
            </div>
            <SimpleListContent items={content.resources.children || []} />
          </div>
        )}
      </div>
    </div>
  );

  // Desktop nav button (no dropdown children — panel is unified)
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

  // Render nav content for a given theme
  const renderNavContent = (theme: 'dark' | 'light') => {
    const navTextClass = getTextClass(theme);
    const logoTextClass = theme === 'dark' ? 'text-white' : 'text-brand-dark';
    const slashClass = theme === 'dark' ? 'text-white/30' : 'text-brand-dark/30';

    return (
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href={homeUrl} onClick={handleLogoClick} className="flex items-center cursor-pointer">
          <div className="mr-3">
            <Logo className="h-10 w-10" variant={logoVariant} />
          </div>
          <span className={`text-xl font-sans font-bold tracking-tight ${logoTextClass}`}>
            AI Heroes
          </span>
        </a>

        {/* Desktop Nav */}
        <div ref={dropdownRef} className={`hidden md:flex items-center space-x-8 ${navTextClass}`}>
          <div ref={triggersRef} className="flex items-center space-x-8">
            <NavTrigger label={content.services.label} type="services" theme={theme} href={content.services.href} />
            <NavTrigger label={content.about.label} type="about" theme={theme} href={content.about.href} />
            <NavTrigger label={content.resources.label} type="resources" theme={theme} href={content.resources.href} />
          </div>

          <button
            onClick={handleContactClick}
            className="bg-white text-brand-dark px-5 py-2 text-sm font-medium rounded-sm hover:bg-stone-200 transition-colors"
          >
            {content.contact.label}
          </button>

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
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    );
  };

  // When mobile menu is open, never hide the navbar
  const shouldHide = hidden && !isOpen;
  const baseNavClass = `fixed top-0 left-0 right-0 z-50 p-6 transition-transform duration-300 ease-out ${shouldHide ? '-translate-y-full' : 'translate-y-0'}`;

  // Mobile: sub-expanded state for pillar groups inside Diensten
  const [mobilePillarExpanded, setMobilePillarExpanded] = useState<string | null>(null);

  // Mobile services accordion with sub-pillars
  const MobileServicesAccordion: React.FC = () => {
    const isExpanded = mobileExpanded === 'services';

    return (
      <div className="border-b border-stone-200">
        <button
          onClick={() => setMobileExpanded(isExpanded ? null : 'services')}
          className="w-full flex justify-between items-center py-4 text-2xl font-serif font-medium text-brand-dark"
        >
          {content.services.label}
          <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {isExpanded && (
          <div className="pb-4 space-y-1">
            {/* Training sub-group */}
            <MobilePillarGroup
              label={pillarMeta.training.label}
              items={trainingItems}
              pillarKey="training"
            />
            {/* Consulting sub-group */}
            <MobilePillarGroup
              label={pillarMeta.consulting.label}
              items={consultingItems}
              pillarKey="consulting"
            />
            {/* Software sub-group */}
            <MobilePillarGroup
              label={pillarMeta.software.label}
              items={softwareItems}
              pillarKey="software"
            />
            {/* Featured cross-pillar link */}
            {featured && (
              <div className="pl-4 pt-3 mt-2 border-t border-stone-200">
                <Link
                  to={featured.href}
                  className="flex items-center gap-3 py-3 group"
                  onClick={() => setIsOpen(false)}
                >
                  <EuFlagIcon className="w-6 h-4 flex-shrink-0 rounded-[2px]" />
                  <div>
                    <span className="text-lg text-brand-dark group-hover:text-brand-red transition-colors">
                      {featured.label}
                    </span>
                    <span className="block text-xs text-stone-400 mt-0.5">
                      {featured.description}
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const MobilePillarGroup: React.FC<{ label: string; items: NavChild[]; pillarKey: string }> = ({ label, items, pillarKey }) => {
    const isPillarExpanded = mobilePillarExpanded === pillarKey;
    const hoverColor = pillarKey === 'training' ? 'text-brand-red' : pillarKey === 'consulting' ? 'text-brand-blue' : 'text-stone-900';

    return (
      <div className="pl-4">
        <button
          onClick={() => setMobilePillarExpanded(isPillarExpanded ? null : pillarKey)}
          className="w-full flex justify-between items-center py-3 text-xs font-bold uppercase tracking-wider text-stone-500"
        >
          {label}
          <ChevronDown className={`w-4 h-4 transition-transform ${isPillarExpanded ? 'rotate-180' : ''}`} />
        </button>

        {isPillarExpanded && (
          <div className="pb-3 pl-2 space-y-2">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className={`block text-lg text-stone-600 hover:${hoverColor} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mobile simple accordion
  const MobileAccordion: React.FC<{
    label: string;
    type: DropdownType;
    items: NavChild[];
  }> = ({ label, type, items }) => {
    const isExpanded = mobileExpanded === type;

    return (
      <div className="border-b border-stone-200">
        <button
          onClick={() => setMobileExpanded(isExpanded ? null : type)}
          className="w-full flex justify-between items-center py-4 text-2xl font-serif font-medium text-brand-dark"
        >
          {label}
          <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {isExpanded && (
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
          </div>
        )}
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
          {/* Diensten accordion with sub-pillars */}
          <MobileServicesAccordion />

          {/* Over ons */}
          <MobileAccordion
            label={content.about.label}
            type="about"
            items={content.about.children || []}
          />

          {/* Resources */}
          <MobileAccordion
            label={content.resources.label}
            type="resources"
            items={content.resources.children || []}
          />

          {/* Contact CTA Button */}
          <button
            onClick={handleContactClick}
            className="block w-full bg-brand-red text-white text-center py-4 text-xl font-medium mt-6"
          >
            {content.contact.label}
          </button>

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
