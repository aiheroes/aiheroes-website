import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { CONTENT } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { Language } from '../types';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Mic2,
  Sparkles,
  Wine,
  MapPin,
  Award,
  Heart,
  Star,
  Check,
} from 'lucide-react';

const LANG_STORAGE_KEY = 'aiheroes-lang';

interface AISalonPageProps {
  lang: Language;
}

type FormCopy = {
  name: string;
  email: string;
  role: string;
  rolePlaceholder: string;
  interestsLabel: string;
  notes: string;
  notesPlaceholder: string;
  submit: string;
  submitting: string;
  interests: { value: string; label: string; icon: 'check' | 'mic' | 'sparkles' | 'award' }[];
  success: { title: string; body: string; another: string };
  error: string;
};

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
    statChapters: string;
    statChaptersLabel: string;
    statEdition: string;
    statEditionLabel: string;
  };
  format: {
    heading: string;
    cards: { num: string; title: string; body: string; icon: 'mic' | 'sparkles' | 'wine'; accent: 'red' | 'blue' | 'dark' }[];
  };
  speakers: {
    heading: string;
    body: string;
    tbaLabel: string;
    talkDuration: string;
    pitchNote: string;
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
    monthShort: string;
    year: string;
    weekday: string;
    monthYear: string;
    meta: string;
    cta: string;
    cadence: string;
  };
  sponsors: {
    heading: string;
    lead: string;
    tiers: {
      name: string;
      meta: string;
      body: string;
      slots: number;
      recommended?: boolean;
      icon: 'award' | 'star' | 'heart';
    }[];
    emptySlot: string;
  };
  venue: {
    heading: string;
    body: string;
    tbaLabel: string;
  };
  host: {
    body: string;
    cta: string;
    ctaHref: string;
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
  form: FormCopy;
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
      statChapters: '50+',
      statChaptersLabel: 'Chapters wereldwijd',
      statEdition: '01',
      statEditionLabel: 'Eerste editie in Groningen',
    },
    format: {
      heading: 'Het programma',
      cards: [
        { num: '01', title: 'Twee talks van 20 minuten', body: 'Praktijkverhalen van mensen die met AI bouwen of onderzoek doen.', icon: 'mic', accent: 'red' },
        { num: '02', title: 'Open 1-minuut pitches', body: 'Iedereen mag op het podium. 60 seconden, geen pitchdeck.', icon: 'sparkles', accent: 'blue' },
        { num: '03', title: 'Eten en drinken', body: 'Inbegrepen. Na afloop blijft iedereen aan de bar hangen.', icon: 'wine', accent: 'dark' },
      ],
    },
    speakers: {
      heading: 'Sprekers',
      body: 'De sprekers voor editie 1 worden in augustus aangekondigd.',
      tbaLabel: 'Wordt aangekondigd',
      talkDuration: '20 minuten talk',
      pitchNote: 'Zelf spreken of pitchen? Vermeld het in je aanmelding.',
    },
    agenda: {
      heading: 'Avond in vogelvlucht',
      note: 'Indicatieve tijden.',
      rows: [
        { time: '18:30', title: 'Inloop' },
        { time: '19:15', title: 'Welkom en talk 1' },
        { time: '19:45', title: 'Talk 2' },
        { time: '20:15', title: '1-minuut pitches' },
        { time: '20:30', title: 'Eten en borrel' },
      ],
    },
    dates: {
      heading: 'Wanneer',
      firstLabel: 'Eerste editie',
      day: '03',
      monthShort: 'SEP',
      year: '2026',
      weekday: 'Donderdag',
      monthYear: 'September 2026',
      meta: 'Donderdagavond, Groningen centrum',
      cta: 'Reserveer je plek',
      cadence: 'Daarna iedere twee maanden. Vervolgdata kondigen we per editie aan.',
    },
    sponsors: {
      heading: 'Sponsors',
      lead: 'De Salon is gratis dankzij sponsors. We zoeken een kleine groep founding partners voor het eerste jaar.',
      tiers: [
        { name: 'Founding Partner', meta: '2 plekken · op aanvraag', body: 'Logo en welkomstmoment per editie. Voor de eerste zes edities.', slots: 2, recommended: true, icon: 'award' },
        { name: 'Supporting Partner', meta: '4 plekken · op aanvraag', body: 'Logo in de zaal. Per editie of voor het hele jaar.', slots: 4, icon: 'star' },
        { name: 'Community Partner', meta: '6 plekken · in natura', body: 'Voor onderwijs, meetups en non-profits. Op uitnodiging.', slots: 6, icon: 'heart' },
      ],
      emptySlot: 'Jouw logo',
    },
    venue: {
      heading: 'Locatie',
      body: 'Een plek in het centrum van Groningen. De locatie kondigen we in augustus aan.',
      tbaLabel: 'Wordt aangekondigd in augustus',
    },
    host: {
      body: 'AI Salon Groningen wordt georganiseerd door AI Heroes, een full-service AI agency uit Groningen.',
      cta: 'Meer over AI Heroes',
      ctaHref: '/nl/over-ons',
    },
    faq: {
      heading: 'Veelgestelde vragen',
      items: [
        { q: 'Voor wie is het?', a: 'Voor iedereen die in of met AI werkt in en rond Groningen. Founders, developers, onderzoekers, studenten, beleidsmakers, designers.' },
        { q: 'Is het echt gratis?', a: 'Ja, inclusief eten en drinken. Mogelijk gemaakt door sponsors. Plekken zijn beperkt, dus reserveer op tijd.' },
        { q: 'In welke taal?', a: 'De talks zijn in het Engels. Vragen en pitches in het Nederlands mogen ook.' },
        { q: 'Hoe reserveer ik?', a: 'Vul het formulier onderaan in. Je hoort het zodra reserveringen openen.' },
        { q: 'Mag ik collega\'s meenemen?', a: 'Graag, maar laat ze zich ook apart aanmelden zodat we het juiste aantal plekken en catering hebben.' },
        { q: 'Hoe werkt een 1-minuut pitch?', a: 'Aan de zaal geef je op dat je wil pitchen. 60 seconden over één onderwerp: een project, vacature, vraag of idee. Geen slides, geen verkoop.' },
        { q: 'Worden de talks opgenomen?', a: 'De eerste editie houden we bewust intiem en zonder opnames. Vanaf editie 2 of 3 publiceren we waarschijnlijk wel.' },
        { q: 'Ik wil zelf spreken of sponsoren.', a: 'Vink het aan in het aanmeldformulier en voeg een korte toelichting toe. We plannen daarna een korte call.' },
      ],
    },
    signup: {
      heading: 'Reserveer je plek',
      lead: 'Vul je gegevens in. Je hoort het zodra reserveringen open zijn.',
      topic: 'AI Salon: early-bird aanmelding',
    },
    form: {
      name: 'Naam',
      email: 'E-mail',
      role: 'Wat doe je?',
      rolePlaceholder: 'Bijv. Developer bij Acme, PhD-student RUG, founder van...',
      interestsLabel: 'Waar heb je interesse in?',
      notes: 'Bericht (optioneel)',
      notesPlaceholder: 'Vraag, voorstel, of zomaar een hallo.',
      submit: 'Zet me op de lijst',
      submitting: 'Bezig...',
      interests: [
        { value: 'attend', label: 'Komen kijken', icon: 'check' },
        { value: 'pitch', label: '1-minuut pitch doen', icon: 'mic' },
        { value: 'talk', label: 'Zelf een talk geven', icon: 'sparkles' },
        { value: 'sponsor', label: 'Sponsoren', icon: 'award' },
      ],
      success: {
        title: 'Je staat op de lijst',
        body: 'We mailen je zodra reserveringen open zijn. Tot 3 september.',
        another: 'Nog iemand aanmelden',
      },
      error: 'Er ging iets mis. Probeer het opnieuw of mail hello@aiheroes.io.',
    },
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
      statChapters: '50+',
      statChaptersLabel: 'Chapters worldwide',
      statEdition: '01',
      statEditionLabel: 'First edition in Groningen',
    },
    format: {
      heading: 'The programme',
      cards: [
        { num: '01', title: 'Two 20-minute talks', body: 'Stories from people building or researching with AI.', icon: 'mic', accent: 'red' },
        { num: '02', title: 'Open 1-minute pitches', body: 'Anyone can take the stage. 60 seconds, no deck.', icon: 'sparkles', accent: 'blue' },
        { num: '03', title: 'Food and drinks', body: 'Included. Everyone sticks around at the bar afterwards.', icon: 'wine', accent: 'dark' },
      ],
    },
    speakers: {
      heading: 'Speakers',
      body: 'Speakers for edition 1 are announced in August.',
      tbaLabel: 'To be announced',
      talkDuration: '20-minute talk',
      pitchNote: 'Want to speak or pitch? Mention it in your signup.',
    },
    agenda: {
      heading: 'The evening',
      note: 'Indicative timing.',
      rows: [
        { time: '18:30', title: 'Doors open' },
        { time: '19:15', title: 'Welcome and talk 1' },
        { time: '19:45', title: 'Talk 2' },
        { time: '20:15', title: '1-minute pitches' },
        { time: '20:30', title: 'Food and drinks' },
      ],
    },
    dates: {
      heading: 'When',
      firstLabel: 'First edition',
      day: '03',
      monthShort: 'SEP',
      year: '2026',
      weekday: 'Thursday',
      monthYear: 'September 2026',
      meta: 'Thursday evening, Groningen city centre',
      cta: 'Reserve your spot',
      cadence: 'Every two months after that. Future dates announced per edition.',
    },
    sponsors: {
      heading: 'Sponsors',
      lead: 'The Salon is free thanks to sponsors. We are looking for a small group of founding partners for the first year.',
      tiers: [
        { name: 'Founding Partner', meta: '2 spots · on request', body: 'Logo and welcome moment per edition. For the first six editions.', slots: 2, recommended: true, icon: 'award' },
        { name: 'Supporting Partner', meta: '4 spots · on request', body: 'Logo in the venue. Per edition or for the year.', slots: 4, icon: 'star' },
        { name: 'Community Partner', meta: '6 spots · in kind', body: 'For education, meetups, non-profits. By invitation.', slots: 6, icon: 'heart' },
      ],
      emptySlot: 'Your logo',
    },
    venue: {
      heading: 'Venue',
      body: 'A spot in the centre of Groningen. We announce the venue in August.',
      tbaLabel: 'Announced in August',
    },
    host: {
      body: 'AI Salon Groningen is organised by AI Heroes, a full-service AI agency from Groningen.',
      cta: 'More about AI Heroes',
      ctaHref: '/en/about',
    },
    faq: {
      heading: 'Questions',
      items: [
        { q: 'Who is it for?', a: 'Anyone working in or on AI in and around Groningen. Founders, developers, researchers, students, policy makers, designers.' },
        { q: 'Is it really free?', a: 'Yes, food and drinks included. Made possible by sponsors. Seats are limited, so reserve early.' },
        { q: 'What language?', a: 'Talks are in English. Questions and pitches in Dutch are welcome too.' },
        { q: 'How do I reserve?', a: 'Fill in the form below. You hear from us when reservations open.' },
        { q: 'Can I bring colleagues?', a: 'Please, but have each person sign up separately so we have the right headcount for seats and catering.' },
        { q: 'How does a 1-minute pitch work?', a: 'Put your name in at the venue. 60 seconds on one topic: a project, role opening, question, or idea. No slides, no selling.' },
        { q: 'Are the talks recorded?', a: 'We keep the first edition intimate and unrecorded. From edition 2 or 3 we will probably start publishing them.' },
        { q: 'I want to speak or sponsor.', a: 'Tick the option in the signup form and add a short note. We plan a short call after that.' },
      ],
    },
    signup: {
      heading: 'Reserve your spot',
      lead: 'Leave your details. You hear from us when reservations open.',
      topic: 'AI Salon: early-bird signup',
    },
    form: {
      name: 'Name',
      email: 'Email',
      role: 'What do you do?',
      rolePlaceholder: 'e.g. Developer at Acme, PhD student RUG, founder of...',
      interestsLabel: 'What are you interested in?',
      notes: 'Message (optional)',
      notesPlaceholder: 'Question, suggestion, or just a hello.',
      submit: 'Add me to the list',
      submitting: 'Sending...',
      interests: [
        { value: 'attend', label: 'Just attending', icon: 'check' },
        { value: 'pitch', label: 'Doing a 1-minute pitch', icon: 'mic' },
        { value: 'talk', label: 'Giving a talk', icon: 'sparkles' },
        { value: 'sponsor', label: 'Sponsoring', icon: 'award' },
      ],
      success: {
        title: "You're on the list",
        body: "We'll email you when reservations open. See you September 3.",
        another: 'Add another person',
      },
      error: 'Something went wrong. Try again or email hello@aiheroes.io.',
    },
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

const FormatIcon: React.FC<{ kind: 'mic' | 'sparkles' | 'wine'; className?: string }> = ({ kind, className }) => {
  if (kind === 'mic') return <Mic2 className={className} />;
  if (kind === 'sparkles') return <Sparkles className={className} />;
  return <Wine className={className} />;
};

const InterestIcon: React.FC<{ kind: 'check' | 'mic' | 'sparkles' | 'award'; className?: string }> = ({ kind, className }) => {
  if (kind === 'check') return <Check className={className} />;
  if (kind === 'mic') return <Mic2 className={className} />;
  if (kind === 'sparkles') return <Sparkles className={className} />;
  return <Award className={className} />;
};

const TierIcon: React.FC<{ kind: 'award' | 'star' | 'heart'; className?: string }> = ({ kind, className }) => {
  if (kind === 'award') return <Award className={className} />;
  if (kind === 'star') return <Star className={className} />;
  return <Heart className={className} />;
};

const AISalonForm: React.FC<{ form: FormCopy }> = ({ form }) => {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [data, setData] = useState({ name: '', email: '', role: '', notes: '' });
  const [interests, setInterests] = useState<string[]>(['attend']);
  const [honeypot, setHoneypot] = useState('');
  const mountTime = useRef(Date.now());

  const toggleInterest = (v: string) => {
    setInterests((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');

    const elapsed = Date.now() - mountTime.current;
    if (honeypot || elapsed < 2500) {
      setState('success');
      setData({ name: '', email: '', role: '', notes: '' });
      setInterests(['attend']);
      return;
    }

    const body = new URLSearchParams({
      'form-name': 'ai-salon-signup',
      'bot-field': honeypot,
      name: data.name,
      email: data.email,
      role: data.role,
      interests: interests.join(', '),
      notes: data.notes,
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setState('success');
        setData({ name: '', email: '', role: '', notes: '' });
        setInterests(['attend']);
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="relative bg-white border border-stone-200 p-10 md:p-14 text-center overflow-hidden">
        <span className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
          <Check className="w-7 h-7" strokeWidth={3} />
        </div>
        <h3 className="font-serif text-3xl text-brand-dark mb-2">{form.success.title}</h3>
        <p className="text-stone-600 mb-6 max-w-sm mx-auto">{form.success.body}</p>
        <button
          onClick={() => setState('idle')}
          className="text-sm font-medium text-brand-red hover:underline underline-offset-4"
        >
          {form.success.another}
        </button>
      </div>
    );
  }

  return (
    <form
      name="ai-salon-signup"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white border border-stone-200 p-6 md:p-10 space-y-7"
    >
      <input type="hidden" name="form-name" value="ai-salon-signup" />
      <input
        type="text"
        name="bot-field"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
            {form.name}
          </span>
          <input
            type="text"
            name="name"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-red focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
            {form.email}
          </span>
          <input
            type="email"
            name="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-red focus:outline-none transition-colors"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
          {form.role}
        </span>
        <input
          type="text"
          name="role"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
          placeholder={form.rolePlaceholder}
          className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark placeholder:text-stone-300 focus:border-brand-red focus:outline-none transition-colors"
        />
      </label>

      <fieldset>
        <legend className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
          {form.interestsLabel}
        </legend>
        <div className="grid grid-cols-2 gap-2.5">
          {form.interests.map((opt) => {
            const checked = interests.includes(opt.value);
            return (
              <label
                key={opt.value}
                className={`relative flex items-center gap-3 p-3.5 border cursor-pointer transition-all ${
                  checked
                    ? 'border-brand-red bg-brand-red/5'
                    : 'border-stone-200 bg-white hover:border-stone-400'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleInterest(opt.value)}
                  className="sr-only"
                />
                <span
                  className={`w-9 h-9 flex items-center justify-center flex-shrink-0 transition-colors ${
                    checked ? 'bg-brand-red text-white' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  <InterestIcon kind={opt.icon} className="w-4 h-4" />
                </span>
                <span
                  className={`text-sm font-medium ${
                    checked ? 'text-brand-dark' : 'text-stone-700'
                  }`}
                >
                  {opt.label}
                </span>
                {checked && (
                  <Check className="absolute top-2 right-2 w-3.5 h-3.5 text-brand-red" strokeWidth={3} />
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
          {form.notes}
        </span>
        <textarea
          name="notes"
          rows={3}
          value={data.notes}
          onChange={(e) => setData({ ...data, notes: e.target.value })}
          placeholder={form.notesPlaceholder}
          className="w-full bg-transparent border border-stone-300 p-3 text-base font-sans text-brand-dark placeholder:text-stone-300 focus:border-brand-red focus:outline-none transition-colors resize-none rounded-none"
        />
      </label>

      {state === 'error' && (
        <p className="text-sm text-brand-red bg-brand-red/5 border-l-2 border-brand-red px-4 py-3">
          {form.error}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="group bg-brand-red text-white px-8 py-4 font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed w-full md:w-auto justify-center"
        >
          <span>{state === 'submitting' ? form.submitting : form.submit}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
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
    if (newLang !== lang) navigate(newLang === 'nl' ? '/nl/ai-salon' : '/en/ai-salon');
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

      {/* ═══════════ Hero ═══════════ */}
      <header
        ref={heroRef}
        className="relative isolate min-h-[92svh] flex items-end bg-brand-dark text-white overflow-hidden"
      >
        <div className="absolute inset-0 -z-20">
          <img
            src="/groningen.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-dark/95" />
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[60vw] h-[60vw] rounded-full opacity-20 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, #D9534F 0%, transparent 70%)',
              top: '-15%',
              left: '-10%',
              animation: 'glow-drift-x 28s ease-in-out infinite',
            }}
          />
          <div
            className="absolute w-[50vw] h-[50vw] rounded-full opacity-15 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
              bottom: '-10%',
              right: '-10%',
              animation: 'glow-drift-x2 32s ease-in-out infinite',
            }}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '4px 4px',
          }}
        />

        <span
          aria-hidden="true"
          className="absolute font-serif text-white/[0.04] select-none pointer-events-none leading-none"
          style={{
            fontSize: 'clamp(20rem, 60vw, 50rem)',
            bottom: '-8%',
            right: '-5%',
            fontWeight: 700,
          }}
        >
          01
        </span>

        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

        <div className="relative w-full max-w-6xl mx-auto px-6 pt-40 pb-24">
          <div className="grid md:grid-cols-5 gap-10 items-end">
            <div className="md:col-span-3">
              <h1 className="font-serif text-[clamp(2.75rem,_2rem+4.5vw,_6.5rem)] leading-[0.95] mb-6 tracking-tight">
                {copy.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8">
                {copy.hero.lead}
              </p>

              <button
                onClick={() => scrollToId('ai-salon-signup')}
                className="group bg-brand-red text-white px-8 py-4 font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-brand-red/30"
              >
                {copy.hero.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/15 p-6 md:p-7 relative">
                <span className="absolute top-0 left-0 w-12 h-0.5 bg-brand-red" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red mb-3 flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {copy.dates.firstLabel}
                </p>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif text-7xl md:text-8xl leading-none">
                    {copy.dates.day}
                  </span>
                  <div className="leading-tight">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                      {copy.dates.monthShort}
                    </p>
                    <p className="font-serif text-2xl">{copy.dates.year}</p>
                  </div>
                </div>
                <p className="text-xs text-white/50 border-t border-white/10 pt-3">
                  {copy.hero.meta}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════ About ═══════════ */}
      <section id="ai-salon-about" className="relative py-24 md:py-32 bg-brand-light overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl md:text-3xl text-brand-dark leading-snug">
              <span className="float-left font-serif text-7xl md:text-8xl leading-[0.85] pr-3 pt-1 text-brand-red">
                {copy.about.body.charAt(0)}
              </span>
              {copy.about.body.slice(1)}
            </p>
          </div>

          <div className="md:col-span-1 space-y-6">
            <div className="border-l-2 border-brand-red pl-5">
              <p className="font-serif text-5xl text-brand-dark leading-none">
                {copy.about.statChapters}
              </p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-2">
                {copy.about.statChaptersLabel}
              </p>
            </div>
            <div className="border-l-2 border-brand-blue pl-5">
              <p className="font-serif text-5xl text-brand-dark leading-none">
                {copy.about.statEdition}
              </p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-2">
                {copy.about.statEditionLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Format ═══════════ */}
      <section className="relative py-24 md:py-32 bg-brand-sand border-y border-stone-200 overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute font-serif text-stone-300/40 select-none pointer-events-none leading-none -z-0"
          style={{ fontSize: 'clamp(15rem, 30vw, 30rem)', top: '-8%', right: '-4%', fontWeight: 700 }}
        >
          3
        </span>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight mb-12">
            {copy.format.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {copy.format.cards.map((card, i) => {
              const accentClass =
                card.accent === 'red'
                  ? 'before:bg-brand-red text-brand-red'
                  : card.accent === 'blue'
                  ? 'before:bg-brand-blue text-brand-blue'
                  : 'before:bg-brand-dark text-brand-dark';
              return (
                <div
                  key={i}
                  className={`group relative bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:top-0 before:left-0 before:right-0 before:h-1 ${accentClass.split(' ')[0]}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className={`font-serif text-5xl leading-none ${accentClass.split(' ')[1]} ${accentClass.split(' ')[2] || ''}`}>
                      {card.num}
                    </span>
                    <span className={`w-11 h-11 flex items-center justify-center ${card.accent === 'red' ? 'bg-brand-red/10 text-brand-red' : card.accent === 'blue' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-dark/10 text-brand-dark'}`}>
                      <FormatIcon kind={card.icon} className="w-5 h-5" />
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-brand-dark mb-2 leading-snug">{card.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-[15px]">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ Speakers ═══════════ */}
      <section className="py-24 md:py-32 bg-brand-sand border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight mb-3">
            {copy.speakers.heading}
          </h2>
          <p className="text-stone-600 mb-10 max-w-xl">{copy.speakers.body}</p>

          <div className="grid md:grid-cols-2 gap-5">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="bg-white border border-stone-200 p-7 flex items-center gap-6 hover:border-stone-300 transition-colors"
              >
                <div className="relative w-20 h-20 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center border border-stone-200">
                    <Mic2 className="w-8 h-8 text-stone-400" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-serif font-bold flex items-center justify-center shadow-md">
                    {n}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-2xl text-brand-dark leading-tight mb-1">
                    {copy.speakers.tbaLabel}
                  </p>
                  <p className="text-sm text-stone-500">{copy.speakers.talkDuration}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-stone-500 italic mt-8">{copy.speakers.pitchNote}</p>
        </div>
      </section>

      {/* ═══════════ Agenda ═══════════ */}
      <section className="py-24 md:py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight mb-2">
              {copy.agenda.heading}
            </h2>
            <p className="text-sm text-stone-500 italic">{copy.agenda.note}</p>
          </div>

          <div className="md:col-span-3">
            <ol className="relative">
              <span className="absolute left-2 top-2 bottom-2 w-px bg-stone-200" aria-hidden="true" />

              {copy.agenda.rows.map((row, i) => (
                <li key={i} className="relative pl-10 pb-7 last:pb-0">
                  <span
                    className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${
                      i === 0 || i === copy.agenda.rows.length - 1 ? 'bg-brand-red' : 'bg-white border-2 border-stone-300'
                    } ring-4 ring-brand-light`}
                  />
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-stone-500 tabular-nums tracking-wider">
                      {row.time}
                    </span>
                    <span className="font-serif text-lg text-brand-dark">{row.title}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════ Dates / Ticket ═══════════ */}
      <section className="relative py-24 md:py-32 bg-brand-dark text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 24px)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight">
            {copy.dates.heading}
          </h2>

          <div className="grid md:grid-cols-[1fr_auto_2fr] bg-white text-brand-dark relative overflow-hidden shadow-2xl">
            <div className="p-8 md:p-10 bg-brand-red text-white relative">
              <span className="absolute top-0 left-0 right-0 h-1 bg-brand-dark/20" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-80">
                {copy.dates.firstLabel}
              </p>
              <p className="font-serif text-[8rem] md:text-[10rem] leading-[0.85] tracking-tight">
                {copy.dates.day}
              </p>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="font-mono text-sm uppercase tracking-widest opacity-90">
                  {copy.dates.monthShort}
                </span>
                <span className="font-serif text-2xl">{copy.dates.year}</span>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center px-4 relative">
              <div className="flex flex-col gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-stone-300" />
                ))}
              </div>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-dark" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-dark" />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">
                  {copy.dates.weekday}
                </p>
                <p className="font-serif text-3xl text-brand-dark mb-2">{copy.dates.monthYear}</p>
                <p className="text-stone-500">{copy.dates.meta}</p>
              </div>
              <button
                onClick={() => scrollToId('ai-salon-signup')}
                className="group bg-brand-dark text-white px-6 py-3 font-medium hover:bg-brand-red transition-all inline-flex items-center gap-2 self-start"
              >
                {copy.dates.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <p className="text-white/50 text-sm mt-6 max-w-md">{copy.dates.cadence}</p>
        </div>
      </section>

      {/* ═══════════ Sponsors ═══════════ */}
      <section className="py-24 md:py-32 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12 items-end">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight">
                {copy.sponsors.heading}
              </h2>
            </div>
            <p className="text-stone-600 leading-relaxed">{copy.sponsors.lead}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.sponsors.tiers.map((tier, i) => {
              const tone =
                tier.icon === 'award'
                  ? 'text-brand-red'
                  : tier.icon === 'star'
                  ? 'text-brand-blue'
                  : 'text-brand-taupe';

              return (
                <div
                  key={i}
                  className={`relative bg-white border p-7 flex flex-col ${
                    tier.recommended
                      ? 'border-brand-red shadow-2xl shadow-brand-red/10 md:-mt-6 md:mb-0 md:pb-9'
                      : 'border-stone-200'
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-3 left-7 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                      {lang === 'nl' ? 'Aanbevolen' : 'Recommended'}
                    </span>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <span className={`w-12 h-12 flex items-center justify-center bg-stone-50 border border-stone-200 ${tone}`}>
                      <TierIcon kind={tier.icon} className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-dark mb-1">{tier.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">{tier.meta}</p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{tier.body}</p>

                  <div className="mt-auto pt-4 border-t border-stone-100">
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: tier.slots }).map((_, j) => (
                        <div
                          key={j}
                          className="aspect-[3/2] border border-dashed border-stone-300 bg-stone-50/60 flex items-center justify-center text-[8px] uppercase tracking-wider text-stone-400 text-center px-1 leading-tight hover:border-brand-red hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                        >
                          {copy.sponsors.emptySlot}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ Venue ═══════════ */}
      <section className="relative py-20 md:py-28 bg-brand-sand border-y border-stone-200 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4 leading-tight">
                {copy.venue.heading}
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed">{copy.venue.body}</p>
            </div>

            <div className="relative bg-white border border-stone-200 aspect-[4/3] flex flex-col items-center justify-center p-8 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #1C1917 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                }}
              />
              <img
                src="/Flag_Groningen.svg"
                alt=""
                aria-hidden="true"
                className="absolute top-4 right-4 w-10 h-auto opacity-80"
              />
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <span className="absolute inset-0 rounded-full bg-brand-red/20 animate-ping" />
                  <span className="relative w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6" strokeWidth={2.5} />
                  </span>
                </div>
                <p className="font-serif text-2xl text-brand-dark mb-2">TBA</p>
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  {copy.venue.tbaLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 md:py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight mb-12">
            {copy.faq.heading}
          </h2>

          <div className="space-y-3">
            {copy.faq.items.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white border transition-all ${
                    isOpen ? 'border-brand-red shadow-md' : 'border-stone-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-6 group"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`font-mono text-xs ${
                          isOpen ? 'text-brand-red' : 'text-stone-400'
                        } tracking-wider`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-lg text-brand-dark group-hover:text-brand-red transition-colors">
                        {item.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all ${
                        isOpen ? 'rotate-180 text-brand-red' : 'text-stone-400'
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pl-[4.5rem] text-stone-600 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ Host (AI Heroes) ═══════════ */}
      <section className="py-16 md:py-20 bg-brand-light border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Logo className="h-12 w-auto mx-auto mb-6" variant="wordmark" colorVariant="fullcolor" />
          <p className="text-stone-700 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            {copy.host.body}
          </p>
          <a
            href={copy.host.ctaHref}
            className="group inline-flex items-center gap-2 text-brand-red font-medium hover:underline underline-offset-4"
          >
            {copy.host.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ═══════════ Signup ═══════════ */}
      <section
        id="ai-salon-signup"
        className="relative py-24 md:py-32 bg-brand-dark text-white overflow-hidden"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] opacity-25 blur-[100px] -z-0"
          style={{ background: 'radial-gradient(ellipse, #D9534F 0%, transparent 70%)' }}
        />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-4">
              {copy.signup.heading}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">{copy.signup.lead}</p>
          </div>

          <AISalonForm form={copy.form} />
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
