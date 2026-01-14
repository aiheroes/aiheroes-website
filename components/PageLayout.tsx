import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Language } from '../types';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { CONTENT } from '../constants';
import { PageContactForm } from './PageContactForm';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const content = CONTENT[lang];

  // Generate the alternate language URL
  const getAlternateUrl = (): string => {
    const path = location.pathname;
    if (lang === 'nl') {
      // Convert /nl/... to /en/...
      return path.replace(/^\/nl\//, '/en/').replace('/diensten/', '/services/').replace('/over-ons/', '/about/').replace('/resources/', '/resources/');
    } else {
      // Convert /en/... to /nl/...
      return path.replace(/^\/en\//, '/nl/').replace('/services/', '/diensten/').replace('/about/', '/over-ons/');
    }
  };

  const accentBorder = accentColor === 'red' ? 'border-brand-red' : 'border-brand-blue';
  const accentBg = accentColor === 'red' ? 'bg-brand-red' : 'bg-brand-blue';

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-10 mr-3" variant="square" />
            <span className="text-xl font-sans font-bold tracking-tight text-brand-dark">
              AI Heroes
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-stone-600 hover:text-brand-dark flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              {lang === 'nl' ? 'Home' : 'Home'}
            </Link>

            <span className="h-4 w-px bg-stone-300"></span>

            {/* Static Language Switch */}
            <div className="flex gap-2 text-xs font-bold uppercase tracking-wider">
              <Link
                to={lang === 'nl' ? location.pathname : getAlternateUrl()}
                className={`transition-colors ${lang === 'nl' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-600'}`}
              >
                NL
              </Link>
              <span className="text-stone-300">/</span>
              <Link
                to={lang === 'en' ? location.pathname : getAlternateUrl()}
                className={`transition-colors ${lang === 'en' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-600'}`}
              >
                EN
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-light pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <ArrowLeft className="w-5 h-5" />
              Home
            </Link>
            <div className="flex gap-4 text-lg mt-4">
              <Link
                to={lang === 'nl' ? location.pathname : getAlternateUrl()}
                className={lang === 'nl' ? 'font-bold' : 'text-stone-400'}
                onClick={() => setIsMenuOpen(false)}
              >
                NL
              </Link>
              <Link
                to={lang === 'en' ? location.pathname : getAlternateUrl()}
                className={lang === 'en' ? 'font-bold' : 'text-stone-400'}
                onClick={() => setIsMenuOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className={`pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark border-b-4 ${accentBorder}`}>
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
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center">
              <Logo className="h-8 w-8 mr-3" variant="square" />
              <span className="font-bold">AI Heroes</span>
            </div>
            <div className="text-sm text-white/60">
              {content.footer.copyright} {content.footer.madeIn}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
