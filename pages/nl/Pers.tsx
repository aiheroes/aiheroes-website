import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../components/Logo';
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
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark border-b-4 border-brand-red">
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
                  AI Heroes is een full-service AI agency uit Groningen — het toekomstige centrum van AI in Europa. Van change management tot technische implementatie: training, consulting en software onder één dak.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  We helpen 50+ organisaties met AI — van teams die nog niet weten wat AI is, tot bedrijven die klaar zijn om te bouwen. Waar je ook staat, we kunnen helpen.
                </p>
              </div>
              <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
                <h3 className="font-bold text-brand-dark mb-3">Kerngegevens</h3>
                <ul className="space-y-2 text-stone-600 text-sm">
                  <li><strong>Opgericht:</strong> 2019</li>
                  <li><strong>Hoofdkantoor:</strong> Groningen, Nederland — toekomstig AI-centrum van Europa</li>
                  <li><strong>Focus:</strong> AI Training, Consulting & Software</li>
                  <li><strong>Contact:</strong> hello@aiheroes.io · 050-200 3373</li>
                  <li><strong>Team:</strong> <Link to="/nl/over-ons/team" className="text-brand-blue hover:underline">Drie oprichters, elk specialist in een pijler</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Logo Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Logo</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Ons logo leest als een lijndiagram. Het kader verbindt de letters "AI" met "HEROES" in een doorlopende lijn — als een circuit dat onze drie pijlers vertegenwoordigt. De rode lijn begint bij de I (training, het startpunt), loopt door het kader (software, de infrastructuur) en eindigt in de A: een pijl omhoog (advies, vooruitgang). De opwaartse pijl verwijst ook naar de verzendknop van een AI-prompt. Het traject kan bij elke pijler beginnen — de lijn loopt rond.
            </p>

            <h3 className="text-xl font-serif text-brand-dark mb-4">Woordmerk</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-8 border border-stone-200 flex flex-col items-center">
                <div className="bg-brand-light p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto" variant="wordmark" colorVariant="fullcolor" />
                </div>
                <span className="text-sm text-stone-500">Op licht</span>
              </div>
              <div className="bg-brand-dark p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto text-white" variant="wordmark" />
                </div>
                <span className="text-sm text-white/70">Op donker</span>
              </div>
              <div className="bg-brand-red p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto text-white" variant="wordmark" />
                </div>
                <span className="text-sm text-white/80">Op rood</span>
              </div>
              <div className="bg-brand-blue p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto text-white" variant="wordmark" />
                </div>
                <span className="text-sm text-white/80">Op blauw</span>
              </div>
            </div>

            <h3 className="text-xl font-serif text-brand-dark mb-4">Beeldmerk</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-8 border border-stone-200 flex flex-col items-center">
                <div className="bg-brand-light p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20" variant="icon" colorVariant="fullcolor" />
                </div>
                <span className="text-sm text-stone-500">Op licht</span>
              </div>
              <div className="bg-brand-dark p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20 text-white" variant="icon" />
                </div>
                <span className="text-sm text-white/70">Op donker</span>
              </div>
              <div className="bg-brand-red p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20 text-white" variant="icon" />
                </div>
                <span className="text-sm text-white/80">Op rood</span>
              </div>
              <div className="bg-brand-blue p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20 text-white" variant="icon" />
                </div>
                <span className="text-sm text-white/80">Op blauw</span>
              </div>
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
              Elke kleur in ons palet vertegenwoordigt een pijler van AI Heroes. Samen vormen ze de identiteit van ons merk.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group">
                <div className="bg-brand-red h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Foundry Red</h4>
                  <p className="text-xs text-stone-500 font-mono">#D9534F</p>
                  <p className="text-xs text-stone-400 mt-1">Training</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-blue h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Catalyst Blue</h4>
                  <p className="text-xs text-stone-500 font-mono">#2563EB</p>
                  <p className="text-xs text-stone-400 mt-1">Consulting</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-dark h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Forged Black</h4>
                  <p className="text-xs text-stone-500 font-mono">#1C1917</p>
                  <p className="text-xs text-stone-400 mt-1">Software</p>
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
                  <p className="font-serif text-2xl text-brand-dark">AI werkt als je weet hoe</p>
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
                  AI <span className="underline decoration-brand-red decoration-4">werkt</span> als je weet <span className="underline decoration-brand-blue decoration-4">hoe</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Training</p>
                  <p className="text-stone-700 font-medium">
                    We leren je team wat AI kan. En wat niet.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 border-l-4 border-brand-blue">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Advies</p>
                  <p className="text-stone-700 font-medium">
                    We brengen je kansen in kaart en maken een concreet plan.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 border-l-4 border-brand-dark">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Software</p>
                  <p className="text-stone-700 font-medium">
                    We bouwen AI-oplossingen. Met je team of zelfstandig.
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
