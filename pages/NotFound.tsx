import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { ArrowLeft } from 'lucide-react';
import type { Language } from '../types';
import { detectVisitorLang } from '../utils/routing';

const CONTENT = {
  nl: {
    title: 'Pagina niet gevonden',
    description: 'De pagina die je zoekt bestaat niet of is verplaatst.',
    button: 'Terug naar home'
  },
  en: {
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or has been moved.",
    button: 'Back to homepage'
  }
};

export const NotFound: React.FC = () => {
  const location = useLocation();

  // Detect language from the URL prefix, falling back to the visitor's preference.
  const detectLanguage = (): Language => {
    if (location.pathname.startsWith('/en')) return 'en';
    if (location.pathname.startsWith('/nl')) return 'nl';
    return detectVisitorLang();
  };

  const [lang] = useState<Language>(detectLanguage);
  const content = CONTENT[lang];
  const homeUrl = lang === 'en' ? '/en' : '/';

  // Set noindex meta tag to prevent search engines from indexing 404 pages
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    document.title = `404 - ${content.title} | AI Heroes`;

    return () => {
      document.head.removeChild(meta);
    };
  }, [content.title]);

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Simple header */}
      <nav className="p-6">
        <Link to={homeUrl} className="flex items-center">
          <Logo className="h-8 w-auto" variant="wordmark" colorVariant="white" />
        </Link>
      </nav>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-serif text-brand-red mb-4">404</h1>
          <h2 className="text-2xl font-serif text-white mb-4">{content.title}</h2>
          <p className="text-white/60 mb-8">
            {content.description}
          </p>
          <Link
            to={homeUrl}
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-medium hover:bg-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {content.button}
          </Link>
        </div>
      </main>
    </div>
  );
};
