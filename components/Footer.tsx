import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Content, Language } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  content: Content['footer'];
  nav: Content['nav'];
  lang: Language;
  setLang?: (lang: Language) => void;
  alternateUrl?: string; // For subpages: URL to switch language
}

export const Footer: React.FC<FooterProps> = ({ content, nav, lang, setLang, alternateUrl }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
       const element = document.getElementById(href.substring(1));
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    }
  };

  const pressUrl = lang === 'nl' ? '/nl/pers' : '/en/press';
  const pressLabel = lang === 'nl' ? 'Pers' : 'Press';

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 mt-auto border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <Logo className="h-8 w-8" variant="white" />
                <span className="font-sans font-bold tracking-tight uppercase text-white text-lg">AI Heroes</span>
             </div>
             <p className="text-stone-400 text-sm leading-relaxed mb-6">
               {content.tagline}
             </p>
          </div>

          {/* Navigation / Expertises */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">{nav.services.label}</h4>
            <ul className="space-y-2">
              {nav.services.children?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              {nav.resources.children?.map((item, idx) => (
                <li key={`resource-${idx}`}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">{nav.about.label}</h4>
            <ul className="space-y-2">
              {nav.about.children?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={pressUrl} className="text-stone-400 hover:text-white transition-colors text-sm">
                  {pressLabel}
                </Link>
              </li>
              <li>
                {isHomePage ? (
                  <button onClick={() => scrollTo('#contact')} className="text-stone-400 hover:text-white transition-colors text-sm text-left">
                    {nav.contact.label}
                  </button>
                ) : (
                  <Link to="/#contact" className="text-stone-400 hover:text-white transition-colors text-sm">
                    {nav.contact.label}
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Case Studies & Legal */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">{content.caseStudies.title}</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to={`/${lang}/cases/medux`} className="text-stone-400 hover:text-white transition-colors text-sm">Medux</Link>
              </li>
              <li>
                <Link to={`/${lang}/cases/olx`} className="text-stone-400 hover:text-white transition-colors text-sm">OLX</Link>
              </li>
              <li>
                <Link to={`/${lang}/cases/trabu`} className="text-stone-400 hover:text-white transition-colors text-sm">Trabu</Link>
              </li>
              <li>
                <Link to={`/${lang}/cases/innoenergy`} className="text-stone-400 hover:text-white transition-colors text-sm">InnoEnergy</Link>
              </li>
            </ul>

            <h4 className="font-serif text-lg mb-4 text-white">Legal</h4>
             <ul className="space-y-2">
              <li>
                <Link to={`/${lang}/legal/privacy`} className="text-stone-400 hover:text-white transition-colors text-sm">{content.legal.privacy}</Link>
              </li>
              <li>
                <Link to={lang === 'nl' ? '/nl/legal/voorwaarden' : '/en/legal/terms'} className="text-stone-400 hover:text-white transition-colors text-sm">{content.legal.terms}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>{content.copyright} {content.madeIn}</p>

          <div className="flex items-center gap-6">
              <div className="flex gap-3">
                {alternateUrl ? (
                  // Link-based language switch for subpages
                  <>
                    {lang === 'nl' ? (
                      <span className="text-white font-bold">NL</span>
                    ) : (
                      <Link to={alternateUrl} className="hover:text-white transition-colors">NL</Link>
                    )}
                    <span className="text-stone-700">|</span>
                    {lang === 'en' ? (
                      <span className="text-white font-bold">EN</span>
                    ) : (
                      <Link to={alternateUrl} className="hover:text-white transition-colors">EN</Link>
                    )}
                  </>
                ) : (
                  // Button-based language switch for homepage
                  <>
                    <button onClick={() => setLang?.('nl')} className={`hover:text-white transition-colors ${lang === 'nl' ? 'text-white font-bold' : ''}`}>NL</button>
                    <span className="text-stone-700">|</span>
                    <button onClick={() => setLang?.('en')} className={`hover:text-white transition-colors ${lang === 'en' ? 'text-white font-bold' : ''}`}>EN</button>
                  </>
                )}
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
