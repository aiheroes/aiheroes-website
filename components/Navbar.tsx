import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Language, Content, NavChild } from '../types';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  // Category labels for mega-menu
  const categoryLabels = lang === 'nl'
    ? { training: 'Training', strategy: 'Strategie', awareness: 'Bewustwording & Compliance', bespoke: 'Maatwerk' }
    : { training: 'Training', strategy: 'Strategy', awareness: 'Awareness & Compliance', bespoke: 'Bespoke' };

  // Group services by category
  const groupServicesByCategory = (services: NavChild[]) => {
    const training = services.filter(s => s.category === 'training');
    const strategy = services.filter(s => s.category === 'strategy');
    const awareness = services.filter(s => s.category === 'awareness');
    const bespoke = services.filter(s => s.category === 'bespoke');
    return { training, strategy, awareness, bespoke };
  };

  // Background styles based on theme
  const getBackgroundClass = (theme: 'dark' | 'light', blur: boolean) => {
    if (blur) {
      return theme === 'dark'
        ? 'backdrop-blur-md bg-brand-dark/60'
        : 'backdrop-blur-md bg-white/70';
    }
    return theme === 'dark'
      ? 'bg-gradient-to-b from-black/60 to-transparent'
      : 'bg-transparent';
  };

  const getTextClass = (theme: 'dark' | 'light') => {
    return theme === 'dark' ? 'text-white' : 'text-brand-dark';
  };

  // Legacy support for non-split mode
  const textClass = textColor === 'white' ? 'text-white' : 'text-brand-dark';
  const logoVariant = 'square';

  // Determine if we should use split mode (only on mobile, when splitPosition is set)
  const useSplitMode = splitPosition !== null && topTheme !== bottomTheme;

  // Pre-compute clip paths to avoid TypeScript narrowing issues
  const topClipPath = splitPosition !== null ? `inset(0 0 ${100 - splitPosition}% 0)` : undefined;
  const bottomClipPath = splitPosition !== null ? `inset(${splitPosition}% 0 0 0)` : undefined;

  // Dropdown item component
  const DropdownItem: React.FC<{ item: NavChild; onClick?: () => void; hoverColor?: 'red' | 'blue' }> = ({ item, onClick, hoverColor = 'red' }) => (
    <Link
      to={item.href}
      onClick={onClick}
      className="block px-3 py-2 hover:bg-stone-100 rounded transition-colors group"
    >
      <span className={`font-medium text-sm text-brand-dark transition-colors ${hoverColor === 'blue' ? 'group-hover:text-brand-blue' : 'group-hover:text-brand-red'}`}>
        {item.label}
      </span>
      {item.description && (
        <span className="block text-xs text-stone-500 mt-0.5">
          {item.description}
        </span>
      )}
    </Link>
  );

  // Services mega-menu content
  const ServicesMegaMenu: React.FC = () => {
    const services = content.services.children || [];
    const grouped = groupServicesByCategory(services);

    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
        <div className="bg-white rounded-lg shadow-xl border border-stone-200 w-[500px] p-5">
        <div className="grid grid-cols-2 gap-4">
          {/* Training Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 px-3">
              {categoryLabels.training}
            </h3>
            <div className="space-y-0.5">
              {grouped.training.map((item, idx) => (
                <DropdownItem key={idx} item={item} onClick={() => setOpenDropdown(null)} />
              ))}
            </div>
          </div>

          {/* Strategy & Bespoke Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 px-3">
              {categoryLabels.strategy}
            </h3>
            <div className="space-y-0.5">
              {grouped.strategy.map((item, idx) => (
                <DropdownItem key={idx} item={item} onClick={() => setOpenDropdown(null)} />
              ))}
            </div>

            {/* Bespoke - below strategy with blue hover */}
            <div className="border-t border-stone-200 mt-4 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 px-3">
                {categoryLabels.bespoke}
              </h3>
              <div className="space-y-0.5">
                {grouped.bespoke.map((item, idx) => (
                  <DropdownItem key={idx} item={item} onClick={() => setOpenDropdown(null)} hoverColor="blue" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Awareness & Compliance Row */}
        <div className="mt-4 pt-4 border-t border-stone-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 px-3">
            {categoryLabels.awareness}
          </h3>
          <div className="grid grid-cols-2 gap-0.5">
            {grouped.awareness.map((item, idx) => (
              <DropdownItem key={idx} item={item} onClick={() => setOpenDropdown(null)} />
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  };

  // Simple dropdown for About and Resources
  const SimpleDropdown: React.FC<{ items: NavChild[] }> = ({ items }) => (
    <div className="absolute top-full left-0 pt-2 z-50">
      <div className="bg-white rounded-lg shadow-xl border border-stone-200 min-w-[280px] py-2">
        {items.map((item, idx) => (
          <DropdownItem key={idx} item={item} onClick={() => setOpenDropdown(null)} />
        ))}
      </div>
    </div>
  );

  // Desktop nav button with dropdown (hover to open)
  const NavDropdownButton: React.FC<{
    label: string;
    type: DropdownType;
    theme: 'dark' | 'light';
  }> = ({ label, type, theme }) => {
    const isOpen = openDropdown === type;
    const textColorClass = theme === 'dark' ? 'text-white' : 'text-brand-dark';

    return (
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(type)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          className={`flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity ${textColorClass}`}
        >
          {label}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && type === 'services' && <ServicesMegaMenu />}
        {isOpen && type === 'about' && <SimpleDropdown items={content.about.children || []} />}
        {isOpen && type === 'resources' && <SimpleDropdown items={content.resources.children || []} />}
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
        <Link to="/" className="flex items-center cursor-pointer">
          <div className="mr-3">
            <Logo className="h-10 w-10" variant={logoVariant} />
          </div>
          <span className={`text-xl font-sans font-bold tracking-tight ${logoTextClass}`}>
            AI Heroes
          </span>
        </Link>

        {/* Desktop Nav - Mega Menu */}
        <div ref={dropdownRef} className={`hidden md:flex items-center space-x-8 ${navTextClass}`}>
          <NavDropdownButton label={content.services.label} type="services" theme={theme} />
          <NavDropdownButton label={content.about.label} type="about" theme={theme} />
          <NavDropdownButton label={content.resources.label} type="resources" theme={theme} />

          <button
            onClick={handleContactClick}
            className={`text-sm font-medium hover:opacity-80 transition-opacity ${theme === 'dark' ? 'text-white' : 'text-brand-dark'}`}
          >
            {content.contact.label}
          </button>

          <div className="flex gap-2 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setLang('nl')}
              className={`transition-colors ${lang === 'nl' ? 'text-brand-red' : 'opacity-50 hover:opacity-100'}`}
            >
              NL
            </button>
            <span className={slashClass}>/</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${lang === 'en' ? 'text-brand-red' : 'opacity-50 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className={`md:hidden flex items-center ${navTextClass}`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    );
  };

  const baseNavClass = `fixed top-0 left-0 right-0 z-50 p-6 ${hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`;

  // Mobile accordion section
  const MobileAccordion: React.FC<{
    label: string;
    type: DropdownType;
    items: NavChild[]
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

  // Mobile services accordion with categories
  const MobileServicesAccordion: React.FC = () => {
    const isExpanded = mobileExpanded === 'services';
    const services = content.services.children || [];
    const grouped = groupServicesByCategory(services);

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
          <div className="pb-4 pl-4 space-y-4">
            {/* Training */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                {categoryLabels.training}
              </h4>
              <div className="space-y-2">
                {grouped.training.map((item, idx) => (
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
            </div>

            {/* Strategy */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                {categoryLabels.strategy}
              </h4>
              <div className="space-y-2">
                {grouped.strategy.map((item, idx) => (
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
            </div>

            {/* Awareness & Compliance */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                {categoryLabels.awareness}
              </h4>
              <div className="space-y-2">
                {grouped.awareness.map((item, idx) => (
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
            </div>

            {/* Bespoke - blue hover */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                {categoryLabels.bespoke}
              </h4>
              <div className="space-y-2">
                {grouped.bespoke.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    className="block text-lg text-stone-600 hover:text-brand-blue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Determine the single-layer theme
  const singleLayerTheme: 'dark' | 'light' = textColor === 'white' ? 'dark' : 'light';

  // When mobile menu is open, always use light theme (dark text) with solid background
  const mobileMenuOpenClass = isOpen ? 'bg-brand-light text-brand-dark' : '';

  return (
    <>
      {isOpen ? (
        /* Mobile menu open - solid light background, dark text */
        <nav className={`${baseNavClass} bg-brand-light`}>
          {renderNavContent('light')}
        </nav>
      ) : useSplitMode ? (
        <>
          {/* Layer 1: Top portion (clips from top to splitPosition) */}
          <nav
            className={`${baseNavClass} ${getBackgroundClass(topTheme, useBlur)} ${getTextClass(topTheme)}`}
            style={{ clipPath: topClipPath }}
          >
            {renderNavContent(topTheme)}
          </nav>

          {/* Layer 2: Bottom portion (clips from splitPosition to bottom) */}
          <nav
            className={`${baseNavClass} ${getBackgroundClass(bottomTheme, useBlur)} ${getTextClass(bottomTheme)}`}
            style={{ clipPath: bottomClipPath }}
          >
            {renderNavContent(bottomTheme)}
          </nav>
        </>
      ) : (
        /* Single layer mode (no split) */
        <nav
          className={`${baseNavClass} transition-all duration-300 ${getBackgroundClass(singleLayerTheme, useBlur)} ${textClass}`}
        >
          {renderNavContent(singleLayerTheme)}
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-light transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden pt-24 px-6 overflow-y-auto`}>
        <div className="max-w-md mx-auto">
          {/* Accordion Sections */}
          <MobileServicesAccordion />
          <MobileAccordion
            label={content.about.label}
            type="about"
            items={content.about.children || []}
          />
          <MobileAccordion
            label={content.resources.label}
            type="resources"
            items={content.resources.children || []}
          />

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            className="w-full py-4 text-2xl font-serif font-medium text-brand-dark text-left border-b border-stone-200"
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
