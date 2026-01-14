import React from 'react';
import { Content, Language } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  content: Content['footer'];
  nav: Content['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ content, nav, lang, setLang }) => {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
       const element = document.getElementById(href.substring(1));
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    }
  };

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
                  <a href={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
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
                  <a href={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={nav.resources.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                   {nav.resources.label}
                </a>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="text-stone-400 hover:text-white transition-colors text-sm text-left">
                   {nav.contact.label}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Connect</h4>
            <ul className="space-y-2 mb-6">
              <li>
                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors text-sm">LinkedIn</a>
              </li>
              <li>
                 <a href="mailto:hello@aiheroes.io" className="text-stone-400 hover:text-white transition-colors text-sm">hello@aiheroes.io</a>
              </li>
            </ul>

            <h4 className="font-serif text-lg mb-4 text-white">Legal</h4>
             <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">{content.legal.privacy}</a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">{content.legal.terms}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>{content.copyright} {content.madeIn}</p>
          
          <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <button onClick={() => setLang('nl')} className={`hover:text-white transition-colors ${lang === 'nl' ? 'text-white font-bold' : ''}`}>NL</button>
                <span className="text-stone-700">|</span>
                <button onClick={() => setLang('en')} className={`hover:text-white transition-colors ${lang === 'en' ? 'text-white font-bold' : ''}`}>EN</button>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
