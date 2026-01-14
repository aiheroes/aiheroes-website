import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language, Content } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
  textColor?: 'white' | 'dark';
  hidden?: boolean;
  useBlur?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  content,
  textColor = 'white',
  hidden = false,
  useBlur = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
       const element = document.getElementById(href.substring(1));
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    }
  };

  // Background styles based on context
  const getBackgroundClass = () => {
    if (useBlur) {
      return textColor === 'white'
        ? 'backdrop-blur-md bg-brand-dark/60'
        : 'backdrop-blur-md bg-white/70';
    }
    return textColor === 'white'
      ? 'bg-gradient-to-b from-black/60 to-transparent'
      : 'bg-transparent';
  };

  const textClass = textColor === 'white' ? 'text-white' : 'text-brand-dark';
  const logoVariant = 'square';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300 ${getBackgroundClass()} ${textClass} ${hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="mr-3">
              <Logo className="h-10 w-10" variant={logoVariant} />
            </div>
            <span className={`text-xl font-sans font-bold tracking-tight ${textColor === 'dark' ? 'text-brand-dark' : 'text-white'}`}>
              AI Heroes
            </span>
          </div>

          {/* Desktop Nav - Minimalist */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('#services')} className="text-sm font-medium hover:underline underline-offset-4">{content.services.label}</button>
            <button onClick={() => handleNavClick('#team')} className="text-sm font-medium hover:underline underline-offset-4">{content.about.label}</button>
            <button onClick={() => handleNavClick('#contact')} className="text-sm font-medium hover:underline underline-offset-4">{content.contact.label}</button>

            <span className={`h-4 w-px ${textColor === 'white' ? 'bg-white/50' : 'bg-brand-dark/20'}`}></span>

            <div className="flex gap-2 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => setLang('nl')}
                className={`transition-colors ${lang === 'nl' ? 'text-brand-red' : 'opacity-50 hover:opacity-100'}`}
              >
                NL
              </button>
              <span className={textColor === 'white' ? 'text-white/30' : 'text-brand-dark/30'}>/</span>
              <button
                onClick={() => setLang('en')}
                className={`transition-colors ${lang === 'en' ? 'text-brand-red' : 'opacity-50 hover:opacity-100'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-light transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden pt-32 px-6 overflow-y-auto`}>
         <div className="flex flex-col gap-8 text-3xl font-serif font-medium text-brand-dark">
            <button onClick={() => handleNavClick('#services')} className="text-left">{content.services.label}</button>
            <button onClick={() => handleNavClick('#team')} className="text-left">{content.about.label}</button>
            <button onClick={() => handleNavClick('#contact')} className="text-left">{content.contact.label}</button>

            <div className="mt-8 flex gap-4 text-lg font-sans">
               <button onClick={() => { setLang('nl'); setIsOpen(false); }} className={lang === 'nl' ? 'underline' : 'opacity-50'}>NL</button>
               <button onClick={() => { setLang('en'); setIsOpen(false); }} className={lang === 'en' ? 'underline' : 'opacity-50'}>EN</button>
           </div>
         </div>
      </div>
    </>
  );
};
