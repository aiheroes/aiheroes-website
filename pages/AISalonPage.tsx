import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageContactForm } from '../components/PageContactForm';
import { CONTENT } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { Language } from '../types';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';

const LANG_STORAGE_KEY = 'aiheroes-lang';

interface AISalonPageProps {
  lang: Language;
}

type Copy = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    lead: string;
    date: string;
    meta: string;
    cta: string;
  };
  about: {
    body: string;
  };
  format: {
    heading: string;
    cards: { title: string; body: string }[];
  };
  agenda: {
    heading: string;
    note: string;
    rows: { time: string; title: string }[];
  };
  dates: {
    heading: string;
    firstLabel: string;
    day: string;
    monthYear: string;
    meta: string;
    cta: string;
    cadence: string;
  };
  sponsors: {
    heading: string;
    lead: string;
    tiers: { name: string; meta: string; body: string; slots: number; recommended?: boolean }[];
    emptySlot: string;
  };
  venue: {
    heading: string;
    body: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  signup: {
    heading: string;
    lead: string;
    topic: string;
  };
  hostLine: string;
};

const CONTENT_AI_SALON: Record<Language, Copy> = {
  nl: {
    meta: {
      title: 'AI Salon Groningen',
      description:
        'AI Salon Groningen: een bimaandelijkse avond voor de Groningse AI-community. Twee talks, open pitches, eten en drinken. Eerste editie 3 september 2026.',
    },
    hero: {
      title: 'AI Salon Groningen',
      lead: 'Een avond voor de Groningse AI-community. Twee korte talks, open pitches, eten en drinken.',
      date: '3 september 2026',
      meta: 'Eerste editie · Gratis · Beperkt aantal plekken',
      cta: 'Reserveer je plek',
    },
    about: {
      body: 'De AI Salon is een wereldwijd netwerk van AI-bouwers, onderzoekers en investeerders, met chapters in meer dan 50 steden. Wij hosten de Groningse editie. Iedere twee maanden komen we samen met de mensen die hier aan AI werken: founders, developers, onderzoekers, studenten.',
    },
    format: {
      heading: 'Het programma',
      cards: [
        {
          title: 'Twee talks van 20 minuten',
          body: 'Praktijkverhalen van mensen die met AI bouwen of onderzoek doen.',
        },
        {
          title: 'Open 1-minuut pitches',
          body: 'Iedereen mag op het podium. 60 seconden, geen pitchdeck.',
        },
        {
          title: 'Eten en drinken',
          body: 'Inbegrepen. Na afloop blijft iedereen aan de bar hangen.',
        },
      ],
    },
    agenda: {
      heading: 'Avond in vogelvlucht',
      note: 'Indicatieve tijden.',
      rows: [
        { time: '18:30', title: 'Inloop' },
        { time: '19:15', title: 'Welkom en talk 1' },
        { time: '20:00', title: 'Pitches en pauze' },
        { time: '20:45', title: 'Talk 2' },
        { time: '21:15', title: 'Mingle' },
      ],
    },
    dates: {
      heading: 'Wanneer',
      firstLabel: 'Eerste editie',
      day: '03',
      monthYear: 'September 2026',
      meta: 'Donderdagavond, Groningen centrum',
      cta: 'Reserveer je plek',
      cadence: 'Daarna iedere twee maanden. Vervolgdata kondigen we per editie aan.',
    },
    sponsors: {
      heading: 'Sponsors',
      lead: 'De Salon is gratis dankzij sponsors. We zoeken een kleine groep founding partners voor het eerste jaar.',
      tiers: [
        {
          name: 'Founding Partner',
          meta: '2 plekken · op aanvraag',
          body: 'Logo en welkomstmoment per editie. Voor de eerste zes edities.',
          slots: 2,
          recommended: true,
        },
        {
          name: 'Supporting Partner',
          meta: '4 plekken · op aanvraag',
          body: 'Logo in de zaal. Per editie of voor het hele jaar.',
          slots: 4,
        },
        {
          name: 'Community Partner',
          meta: '6 plekken · in natura',
          body: 'Voor onderwijs, meetups en non-profits. Op uitnodiging.',
          slots: 6,
        },
      ],
      emptySlot: 'Open',
    },
    venue: {
      heading: 'Locatie',
      body: 'Een plek in het centrum van Groningen. De locatie kondigen we in augustus aan.',
    },
    faq: {
      heading: 'Veelgestelde vragen',
      items: [
        {
          q: 'Voor wie is het?',
          a: 'Voor iedereen die in of met AI werkt in en rond Groningen. Founders, developers, onderzoekers, studenten, beleidsmakers, designers.',
        },
        {
          q: 'Is het echt gratis?',
          a: 'Ja, inclusief eten en drinken. Mogelijk gemaakt door sponsors. Plekken zijn beperkt, dus reserveer op tijd.',
        },
        {
          q: 'In welke taal?',
          a: 'De talks zijn in het Engels. Vragen en pitches in het Nederlands mogen ook.',
        },
        {
          q: 'Hoe reserveer ik?',
          a: 'Vul het formulier onderaan in. Je hoort het zodra reserveringen openen.',
        },
        {
          q: 'Ik wil zelf spreken of sponsoren.',
          a: 'Geef het door in het bericht onderaan, dan plannen we een korte call.',
        },
      ],
    },
    signup: {
      heading: 'Reserveer je plek',
      lead: 'Vul je gegevens in. Je hoort het zodra reserveringen open zijn.',
      topic: 'AI Salon: early-bird aanmelding',
    },
    hostLine: 'Georganiseerd door AI Heroes, Groningen.',
  },
  en: {
    meta: {
      title: 'AI Salon Groningen',
      description:
        'AI Salon Groningen: a bimonthly evening for the Groningen AI community. Two talks, open pitches, food and drinks. First edition September 3, 2026.',
    },
    hero: {
      title: 'AI Salon Groningen',
      lead: 'An evening for the Groningen AI community. Two short talks, open pitches, food and drinks.',
      date: 'September 3, 2026',
      meta: 'First edition · Free · Limited seats',
      cta: 'Reserve your spot',
    },
    about: {
      body: 'The AI Salon is a global network of AI builders, researchers, and investors, with chapters in 50+ cities. We host the Groningen edition. Every two months we get together with the people working on AI here: founders, developers, researchers, students.',
    },
    format: {
      heading: 'The programme',
      cards: [
        {
          title: 'Two 20-minute talks',
          body: 'Stories from people building or researching with AI.',
        },
        {
          title: 'Open 1-minute pitches',
          body: 'Anyone can take the stage. 60 seconds, no deck.',
        },
        {
          title: 'Food and drinks',
          body: 'Included. Everyone sticks around at the bar afterwards.',
        },
      ],
    },
    agenda: {
      heading: 'The evening',
      note: 'Indicative timing.',
      rows: [
        { time: '18:30', title: 'Doors open' },
        { time: '19:15', title: 'Welcome and talk 1' },
        { time: '20:00', title: 'Pitches and break' },
        { time: '20:45', title: 'Talk 2' },
        { time: '21:15', title: 'Mingle' },
      ],
    },
    dates: {
      heading: 'When',
      firstLabel: 'First edition',
      day: '03',
      monthYear: 'September 2026',
      meta: 'Thursday evening, Groningen city centre',
      cta: 'Reserve your spot',
      cadence: 'Every two months after that. Future dates announced per edition.',
    },
    sponsors: {
      heading: 'Sponsors',
      lead: 'The Salon is free thanks to sponsors. We are looking for a small group of founding partners for the first year.',
      tiers: [
        {
          name: 'Founding Partner',
          meta: '2 spots · on request',
          body: 'Logo and welcome moment per edition. For the first six editions.',
          slots: 2,
          recommended: true,
        },
        {
          name: 'Supporting Partner',
          meta: '4 spots · on request',
          body: 'Logo in the venue. Per edition or for the year.',
          slots: 4,
        },
        {
          name: 'Community Partner',
          meta: '6 spots · in kind',
          body: 'For education, meetups, non-profits. By invitation.',
          slots: 6,
        },
      ],
      emptySlot: 'Open',
    },
    venue: {
      heading: 'Venue',
      body: 'A spot in the centre of Groningen. We announce the venue in August.',
    },
    faq: {
      heading: 'Questions',
      items: [
        {
          q: 'Who is it for?',
          a: 'Anyone working in or on AI in and around Groningen. Founders, developers, researchers, students, policy makers, designers.',
        },
        {
          q: 'Is it really free?',
          a: 'Yes, food and drinks included. Made possible by sponsors. Seats are limited, so reserve early.',
        },
        {
          q: 'What language?',
          a: 'Talks are in English. Questions and pitches in Dutch are welcome too.',
        },
        {
          q: 'How do I reserve?',
          a: 'Fill in the form below. You hear from us when reservations open.',
        },
        {
          q: 'I want to speak or sponsor.',
          a: 'Mention it in the message below and we set up a short call.',
        },
      ],
    },
    signup: {
      heading: 'Reserve your spot',
      lead: 'Leave your details. You hear from us when reservations open.',
      topic: 'AI Salon: early-bird signup',
    },
    hostLine: 'Hosted by AI Heroes, Groningen.',
  },
};

function getInitialLanguage(forcedLang?: Language): Language {
  if (forcedLang) return forcedLang;
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'nl' || stored === 'en') return stored;
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  if (browserLang.toLowerCase().startsWith('nl')) return 'nl';
  return 'en';
}

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const AISalonPage: React.FC<AISalonPageProps> = ({ lang: forcedLang }) => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(() => getInitialLanguage(forcedLang));
  const copy = CONTENT_AI_SALON[lang];
  const navContent = CONTENT[lang].nav;

  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (forcedLang && forcedLang !== lang) setLang(forcedLang);
  }, [forcedLang]);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useSEO({
    title: copy.meta.title,
    description: copy.meta.description,
    lang,
    path: lang === 'nl' ? '/nl/ai-salon' : '/en/ai-salon',
  });

  const handleLangChange = (newLang: Language) => {
    if (newLang !== lang) {
      navigate(newLang === 'nl' ? '/nl/ai-salon' : '/en/ai-salon');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 80;
      const heroRect = heroRef.current?.getBoundingClientRect();
      const footerRect = footerRef.current?.getBoundingClientRect();

      if (footerRect && footerRect.top <= navHeight) {
        setNavColor('white');
        setUseBlur(true);
        return;
      }
      if (heroRect && heroRect.bottom <= 0) {
        setNavColor('dark');
        setUseBlur(true);
      } else {
        setNavColor('white');
        setUseBlur(heroRect ? heroRect.top < 0 : false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark overflow-x-hidden">
      <Navbar
        lang={lang}
        setLang={handleLangChange}
        content={navContent}
        textColor={navColor}
        useBlur={useBlur}
      />

      {/* Hero */}
      <header
        ref={heroRef}
        className="relative isolate min-h-[80svh] flex items-end bg-brand-dark text-white overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src="/groningen.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/70 to-brand-dark" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-6 pt-40 pb-20">
          <h1 className="font-serif text-[clamp(2.5rem,_2rem+4vw,_5.5rem)] leading-[1.05] mb-6">
            {copy.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8">
            {copy.hero.lead}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-sm">
            <span className="inline-flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span className="font-medium">{copy.hero.date}</span>
            </span>
            <span className="text-white/60">{copy.hero.meta}</span>
          </div>

          <button
            onClick={() => scrollToId('ai-salon-signup')}
            className="group bg-brand-red text-white px-7 py-3.5 font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
          >
            {copy.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />
      </header>

      {/* About */}
      <section className="py-20 md:py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-brand-dark leading-relaxed font-serif">
            {copy.about.body}
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 md:py-24 bg-brand-sand border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-10">
            {copy.format.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.format.cards.map((card, i) => (
              <div key={i} className="bg-white p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-brand-dark mb-2">{card.title}</h3>
                <p className="text-stone-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 md:py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-2">
            {copy.agenda.heading}
          </h2>
          <p className="text-sm text-stone-500 italic mb-8">{copy.agenda.note}</p>

          <ul className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {copy.agenda.rows.map((row, i) => (
              <li key={i} className="flex items-baseline gap-6 py-3">
                <span className="font-mono text-sm text-stone-500 tabular-nums w-14">
                  {row.time}
                </span>
                <span className="text-brand-dark">{row.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dates */}
      <section className="py-20 md:py-24 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">{copy.dates.heading}</h2>

          <div className="bg-white/5 border border-white/10 p-8 md:p-10 mb-6">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-red mb-4">
              {copy.dates.firstLabel}
            </p>
            <div className="flex items-baseline gap-6 mb-4">
              <span className="font-serif text-6xl md:text-8xl leading-none">{copy.dates.day}</span>
              <div>
                <p className="font-serif text-2xl md:text-3xl">{copy.dates.monthYear}</p>
                <p className="text-sm text-white/60 mt-1">{copy.dates.meta}</p>
              </div>
            </div>
            <button
              onClick={() => scrollToId('ai-salon-signup')}
              className="group mt-2 inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-medium hover:bg-opacity-90 transition-all"
            >
              {copy.dates.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-white/60 text-sm">{copy.dates.cadence}</p>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 md:py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-3">
            {copy.sponsors.heading}
          </h2>
          <p className="text-stone-600 max-w-2xl mb-10 leading-relaxed">{copy.sponsors.lead}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.sponsors.tiers.map((tier, i) => (
              <div
                key={i}
                className={`p-6 border ${
                  tier.recommended
                    ? 'border-brand-red bg-white'
                    : 'border-stone-200 bg-white'
                }`}
              >
                <h3 className="font-serif text-xl text-brand-dark">{tier.name}</h3>
                <p className="text-xs text-stone-500 mt-1 mb-4">{tier.meta}</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{tier.body}</p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100">
                  {Array.from({ length: tier.slots }).map((_, j) => (
                    <div
                      key={j}
                      className="w-10 h-10 border border-dashed border-stone-300 flex items-center justify-center text-[9px] uppercase tracking-wider text-stone-400"
                    >
                      {copy.sponsors.emptySlot}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-16 md:py-20 bg-brand-sand border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-3">
            {copy.venue.heading}
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed">{copy.venue.body}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8">
            {copy.faq.heading}
          </h2>

          <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {copy.faq.items.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left py-4 flex justify-between items-center gap-4 hover:text-brand-red transition-colors"
                  >
                    <span className="font-medium text-brand-dark">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 text-stone-600 leading-relaxed">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="ai-salon-signup" className="py-20 md:py-24 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-3">
            {copy.signup.heading}
          </h2>
          <p className="text-stone-600 mb-10 leading-relaxed">{copy.signup.lead}</p>

          <PageContactForm lang={lang} accentColor="red" preselectedTopic={copy.signup.topic} />

          <p className="text-xs text-stone-400 mt-12 pt-6 border-t border-stone-100">
            {copy.hostLine}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef}>
        <Footer
          content={CONTENT[lang].footer}
          nav={navContent}
          lang={lang}
          alternateUrl={lang === 'nl' ? '/en/ai-salon' : '/nl/ai-salon'}
        />
      </footer>
    </div>
  );
};
