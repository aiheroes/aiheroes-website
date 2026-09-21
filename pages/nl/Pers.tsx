import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { LogoShowcase } from '../../components/LogoShowcase';
import { Footer } from '../../components/Footer';
import { CONTENT } from '../../constants';
import { ArrowLeft } from 'lucide-react';
import { DarkBox } from '../../src/components/DarkBox';
import { useSEO } from '../../hooks/useSEO';

export const PersNL: React.FC = () => {
  const content = CONTENT['nl'];

  const location = useLocation();
  useSEO({
    title: 'Pers & Media',
    description: 'AI Heroes pers & media: huisstijl, logo, merkkleuren en richtlijnen. Brand assets en perscontact voor media.',
    lang: 'nl',
    path: location.pathname
  });

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 w-auto" variant="wordmark" colorVariant="fullcolor" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-stone-600 hover:text-brand-dark flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 pb-12 md:pt-40 md:pb-24 bg-brand-dark border-b-4 border-brand-red">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Pers & Media</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Huisstijl, richtlijnen en informatie voor pers en media.
          </p>
        </div>
      </header>

      {/* Brand Bible Section */}
      <main className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* About Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Over AI Heroes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Wij ontwerpen, bouwen en implementeren, en zorgen dat het werkt: met een sluitende business case, compliance vanaf de tekentafel en een team dat ermee overweg kan. Vanuit Groningen, AI-hoofdstad van Europa.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Drie manieren om binnen te komen: iets nieuws bouwen, vervangen wat niet meer voldoet, of AI in eigen beheer draaien. De voordeur is altijd de startsprint: één week, vast bedrag, daarna weet je of het kan, wat het kost en hoe het eruitziet.
                </p>
              </div>
              <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
                <h3 className="font-bold text-brand-dark mb-3">Kerngegevens</h3>
                <ul className="space-y-2 text-stone-600 text-sm">
                  <li><strong>Opgericht:</strong> 2019</li>
                  <li><strong>Statutaire naam:</strong> AI Heroes B.V.</li>
                  <li><strong>Hoofdkantoor:</strong> Groningen, Nederland (AI-hoofdstad van Europa)</li>
                  <li><strong>Bezoekadres:</strong> Aarhusweg 4-16, 9723 JJ Groningen</li>
                  <li><strong>KvK:</strong> 42051968</li>
                  <li><strong>BTW:</strong> NL869486263B01</li>
                  <li><strong>Focus:</strong> Software en AI die in productie draait</li>
                  <li><strong>Contact:</strong> hello@aiheroes.io · 050-200 3373</li>
                  <li><strong>Team:</strong> <Link to="/nl/over-ons/team" className="text-brand-blue hover:underline">Drie oprichters: business case, bouw en adoptie</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Logo Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Logo</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Ons logo leest als een lijndiagram. Het kader verbindt de letters "AI" met "HEROES" in een doorlopende lijn, als een circuit: van ambitie naar implementatie. De rode lijn begint bij de I (de vraag waarmee je binnenkomt), loopt door het kader (de bouw) en eindigt in de A: een pijl omhoog, het systeem dat draait. De opwaartse pijl verwijst ook naar de verzendknop van een AI-prompt.
            </p>

            <h3 className="text-xl font-serif text-brand-dark mb-4">Woordmerk</h3>
            <div className="mb-8">
              <LogoShowcase
                variant="wordmark"
                labels={{ groupLabel: 'Achtergrond', light: 'Op licht', dark: 'Op donker', red: 'Op rood', blue: 'Op blauw' }}
              />
            </div>

            <h3 className="text-xl font-serif text-brand-dark mb-4">Beeldmerk</h3>
            <div className="mb-8">
              <LogoShowcase
                variant="icon"
                labels={{ groupLabel: 'Achtergrond', light: 'Op licht', dark: 'Op donker', red: 'Op rood', blue: 'Op blauw' }}
              />
            </div>

            <div className="bg-stone-50 p-6 border-l-4 border-brand-blue">
              <h3 className="font-bold text-brand-dark mb-2">Richtlijnen voor logogebruik</h3>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Handhaaf minimale vrije ruimte gelijk aan de hoogte van het logo</li>
                <li>• Roteer, vervor of verander het logo niet</li>
                <li>• Wijzig de logokleuren niet buiten goedgekeurde varianten</li>
                <li>• Minimale grootte: 32px hoogte voor digitaal, 10mm voor print</li>
              </ul>
            </div>
          </section>

          {/* Colors Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Merkkleuren</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Ons palet heeft vier kleuren. Samen vormen ze de identiteit van ons merk.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group">
                <div className="bg-brand-red h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Foundry Red</h4>
                  <p className="text-xs text-stone-500 font-mono">#D9534F</p>
                  <p className="text-xs text-stone-400 mt-1">Accent en actie</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-blue h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Catalyst Blue</h4>
                  <p className="text-xs text-stone-500 font-mono">#2563EB</p>
                  <p className="text-xs text-stone-400 mt-1">Accent en verdieping</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-dark h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Forged Black</h4>
                  <p className="text-xs text-stone-500 font-mono">#1C1917</p>
                  <p className="text-xs text-stone-400 mt-1">Tekst en donkere vlakken</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-light h-32 rounded-t-lg border border-stone-200 border-b-0"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Rooftop White</h4>
                  <p className="text-xs text-stone-500 font-mono">#FDFCF8</p>
                  <p className="text-xs text-stone-400 mt-1">Achtergronden & logo</p>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Typografie</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              We gebruiken een combinatie van serif en sans-serif lettertypen om professionaliteit te balanceren met toegankelijkheid.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-stone-200">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-4">Koppen</p>
                <p className="text-5xl font-serif text-brand-dark mb-4">Playfair Display</p>
                <p className="text-stone-600 text-sm">
                  Gebruikt voor koppen en display tekst. Elegante schreven stralen expertise en autoriteit uit.
                </p>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="font-serif text-2xl text-brand-dark">Van ambitie naar implementatie</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-stone-200">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-4">Lopende tekst</p>
                <p className="text-5xl font-sans font-light text-brand-dark mb-4">Inter</p>
                <p className="text-stone-600 text-sm">
                  Gebruikt voor lopende tekst en UI-elementen. Schoon en zeer leesbaar op alle formaten.
                </p>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="font-sans text-base text-brand-dark">Wij geven praktische workshops waar je iets aan hebt. Skills die voor je werken.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Taglines Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Taglines & Boodschap</h2>

            <div className="space-y-6">
              <div className="bg-brand-dark p-8 text-white">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Primaire Tagline</p>
                <p className="text-3xl md:text-4xl font-serif">
                  Van <span className="underline decoration-brand-red decoration-4">ambitie</span> naar <span className="underline decoration-brand-blue decoration-4">implementatie</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Iets nieuws bouwen</p>
                  <p className="text-stone-700 font-medium">
                    Van idee naar systeem in productie. In zes dagen een werkend prototype.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 border-l-4 border-brand-blue">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Vervangen wat niet meer voldoet</p>
                  <p className="text-stone-700 font-medium">
                    Verouderde of te dure software eruit, iets dat past ervoor in de plaats.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 border-l-4 border-brand-dark">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">In eigen beheer draaien</p>
                  <p className="text-stone-700 font-medium">
                    Op je eigen servers of bij een Europese partij, met de AI Act ingebouwd.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Press Contact */}
          <section>
            <DarkBox accentColor="red" className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Perscontact</h2>
              <p className="leading-relaxed mb-6 max-w-xl">
                Voor persvragen, interviewverzoeken of aanvullende merkbestanden kun je direct contact met ons opnemen.
              </p>
              <a
                href="mailto:hello@aiheroes.io"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
              >
                Contact Pers
              </a>
            </DarkBox>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer
        content={content.footer}
        nav={content.nav}
        lang="nl"
        alternateUrl="/en/press"
      />
    </div>
  );
};
