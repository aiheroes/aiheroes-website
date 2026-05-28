import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CONTENT } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { Language } from '../types';

const LANG_STORAGE_KEY = 'aiheroes-lang';

interface AISalonPageProps {
  lang: Language;
}

type FormCopy = {
  name: string;
  email: string;
  role: string;
  rolePlaceholder: string;
  pitch: string;
  sponsor: string;
  submit: string;
  submitting: string;
  successLabel: string;
  successTitle: string;
  successBody: string;
  another: string;
  error: string;
};

type PracticalEntry = { label: string; lines: string[]; mail?: boolean };

type Copy = {
  meta: { title: string; description: string };
  hero: string;
  lead: {
    intro: string;
    dateText: string;
    between: string;
    linkText: string;
    linkHref: string;
    after: string;
  };
  metaStrip: { text: string }[];
  agenda: {
    heading: string;
    rows: { time: string; title: string; note: boolean }[];
    footnote: string;
  };
  speakers: {
    heading: string;
    body: string;
    mailtoSubject: string;
    spotLabel: string;
    spotHover: string;
  };
  sponsors: {
    heading: string;
    body: string;
    mailtoSubject: string;
    spotLabel: string;
    spotHover: string;
    slots: number;
  };
  rsvp: { heading: string; form: FormCopy };
  about: string;
  practical: {
    location: PracticalEntry;
    organiser: PracticalEntry;
    contact: PracticalEntry;
  };
};

const COPY: Record<Language, Copy> = {
  en: {
    meta: {
      title: 'AI Salon Groningen · Kick-Off',
      description:
        'AI Salon Groningen kick-off, Thursday September 3, 2026. A bimonthly community evening for AI founders, builders, investors, researchers and partners.',
    },
    hero: 'The #1 networking event for everyone in the AI scene and those curious about the topic.',
    lead: {
      intro: 'Join us on ',
      dateText: 'Thursday, September 3rd',
      between: ', for the very first ',
      linkText: 'AI Salon Groningen',
      linkHref: 'https://aisalon.ai/',
      after:
        " event. Bimonthly, we bring together AI founders, builders, investors, researchers, and partners to connect, collaborate, and showcase what's next. Don't miss the kick-off. Space is limited, so RSVP now to secure your spot.",
    },
    metaStrip: [
      { text: 'AI Salon Groningen' },
      { text: 'Kick-Off' },
      { text: 'Thursday, Sep 03, 2026' },
      { text: 'Groningen, City Centre' },
      { text: 'Bimonthly' },
    ],
    agenda: {
      heading: 'Agenda',
      rows: [
        { time: '17:30', title: 'Walk-in', note: false },
        { time: '18:00', title: 'Speaker TBA', note: true },
        { time: '18:20', title: 'Speaker TBA', note: true },
        { time: '18:40', title: 'Demo Pitches', note: true },
        { time: '19:00–21:00', title: 'Food, Drinks, Demo Tables & Open Networking', note: false },
      ],
      footnote: 'by you? Check the box on the registration form to apply.',
    },
    speakers: {
      heading: 'Speakers',
      body: 'Two short talks per edition, around 20 minutes each. Pick a slot to start the conversation.',
      mailtoSubject: 'AI Salon Groningen Kick-Off · Speaking',
      spotLabel: 'TBA',
      spotHover: 'Become a speaker →',
    },
    sponsors: {
      heading: 'Sponsored by you?',
      body: 'Get your logo on the wall and a moment to say hi. Pick a spot to start the conversation.',
      mailtoSubject: 'AI Salon Groningen Kick-Off · Sponsorship',
      spotLabel: 'Your logo',
      spotHover: 'Become a sponsor →',
      slots: 6,
    },
    rsvp: {
      heading: 'Save your spot for the first edition.',
      form: {
        name: 'Name',
        email: 'Email',
        role: 'What do you do?',
        rolePlaceholder: 'e.g. Founder at Acme, PhD at RUG, designer at...',
        pitch: "I'd like to pitch a demo (60 seconds, no slides).",
        sponsor: "I'm interested in becoming a sponsor.",
        submit: 'RSVP',
        submitting: 'Sending…',
        successLabel: 'Confirmed',
        successTitle: "You're on the list.",
        successBody:
          "We'll be in touch with venue details and the final agenda closer to the date. Questions? salon@aiheroes.io.",
        another: 'Submit another',
        error:
          "Something went wrong. Email salon@aiheroes.io and we'll add you manually.",
      },
    },
    about:
      'AI Salon is the global community for AI founders, builders, investors, and partners to connect and collaborate. Decentralized, chapter-based.',
    practical: {
      location: { label: 'Location', lines: ['Event location TBA', 'City centre, Groningen'] },
      organiser: { label: 'Organiser', lines: ['AI Heroes (chapter)'] },
      contact: { label: 'Contact', lines: ['salon@aiheroes.io'], mail: true },
    },
  },
  nl: {
    meta: {
      title: 'AI Salon Groningen · Kick-Off',
      description:
        'AI Salon Groningen kick-off, donderdag 3 september 2026. Een tweemaandelijkse community-avond voor AI founders, builders, investeerders, onderzoekers en partners.',
    },
    hero: 'Het #1 networking event voor iedereen in de AI-scene en wie er nieuwsgierig naar is.',
    lead: {
      intro: 'Wees erbij op ',
      dateText: 'donderdag 3 september',
      between: ' voor de allereerste editie van ',
      linkText: 'AI Salon Groningen',
      linkHref: 'https://aisalon.ai/',
      after:
        '. Elke twee maanden brengen we AI founders, builders, investeerders, onderzoekers en partners samen om te connecten, samen te werken en te laten zien waar ze mee bezig zijn. Mis de kick-off niet. Beperkt aantal plekken, dus RSVP nu om er zeker bij te zijn.',
    },
    metaStrip: [
      { text: 'AI Salon Groningen' },
      { text: 'Kick-Off' },
      { text: 'Donderdag 3 sep 2026' },
      { text: 'Groningen, centrum' },
      { text: 'Bimonthly' },
    ],
    agenda: {
      heading: 'Programma',
      rows: [
        { time: '17:30', title: 'Inloop', note: false },
        { time: '18:00', title: 'Spreker TBA', note: true },
        { time: '18:20', title: 'Spreker TBA', note: true },
        { time: '18:40', title: 'Demo pitches', note: true },
        { time: '19:00–21:00', title: 'Eten, drinken, demo-tafels en open netwerken', note: false },
      ],
      footnote: 'door jou? Vink het hokje aan in het aanmeldformulier.',
    },
    speakers: {
      heading: 'Sprekers',
      body: "Twee korte talks per editie, zo'n 20 minuten elk. Wil je spreken? Laat van je horen.",
      mailtoSubject: 'AI Salon Groningen Kick-Off · Spreken',
      spotLabel: 'TBA',
      spotHover: 'Word spreker →',
    },
    sponsors: {
      heading: 'Gesponsord door jou?',
      body: 'Krijg je logo op de wand en een moment om hallo te zeggen. Wil je sponsoren? Laat van je horen.',
      mailtoSubject: 'AI Salon Groningen Kick-Off · Sponsoring',
      spotLabel: 'Jouw logo',
      spotHover: 'Word sponsor →',
      slots: 6,
    },
    rsvp: {
      heading: 'Reserveer je plek voor de eerste editie.',
      form: {
        name: 'Naam',
        email: 'E-mail',
        role: 'Wat doe je?',
        rolePlaceholder: 'Bijv. founder bij Acme, PhD bij RUG, designer bij...',
        pitch: 'Ik wil een demo pitchen (60 seconden, geen slides).',
        sponsor: 'Ik ben geïnteresseerd om sponsor te worden.',
        submit: 'RSVP',
        submitting: 'Versturen…',
        successLabel: 'Bevestigd',
        successTitle: 'Je staat op de lijst.',
        successBody:
          'We sturen je de locatie en het definitieve programma kort voor de datum. Vragen? salon@aiheroes.io.',
        another: 'Nog een aanmelding',
        error:
          'Er ging iets mis. Mail naar salon@aiheroes.io en we voegen je handmatig toe.',
      },
    },
    about:
      'AI Salon is de wereldwijde community waarin AI founders, builders, investeerders en partners elkaar ontmoeten en samenwerken. Decentraal, chapter-based.',
    practical: {
      location: { label: 'Locatie', lines: ['Locatie TBA', 'Centrum, Groningen'] },
      organiser: { label: 'Organisator', lines: ['AI Heroes (chapter)'] },
      contact: { label: 'Contact', lines: ['salon@aiheroes.io'], mail: true },
    },
  },
};

const PracticalCol: React.FC<{ label: string; lines: string[]; mail?: boolean }> = ({ label, lines, mail }) => (
  <div>
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-dark/45 mb-3">{label}</div>
    <div className="font-mono text-[12px] leading-[1.7] text-brand-dark/90">
      {lines.map((line, i) =>
        mail && line.includes('@') ? (
          <a key={i} href={`mailto:${line}`} className="hover:text-brand-red transition-colors">
            {line}
          </a>
        ) : (
          <div key={i}>{line}</div>
        )
      )}
    </div>
  </div>
);

const Checkbox: React.FC<{ checked: boolean; onChange: (v: boolean) => void; label: string }> = ({ checked, onChange, label }) => (
  <label className="flex items-start gap-3 cursor-pointer group select-none">
    <span className="relative flex-shrink-0 mt-[3px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={`block w-[18px] h-[18px] border transition-colors ${
          checked ? 'bg-brand-red border-brand-red' : 'border-brand-dark/40 group-hover:border-brand-dark bg-transparent'
        }`}
      >
        {checked && (
          <svg viewBox="0 0 16 16" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
            <path d="M3.5 8.5l3 3 6.5-7" />
          </svg>
        )}
      </span>
    </span>
    <span className="text-[14px] text-brand-dark/80 leading-relaxed group-hover:text-brand-dark transition-colors">{label}</span>
  </label>
);

const SalonForm: React.FC<{ form: FormCopy }> = ({ form }) => {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [data, setData] = useState({ name: '', email: '', role: '' });
  const [pitch, setPitch] = useState(false);
  const [sponsor, setSponsor] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const mountTime = useRef(Date.now());

  const reset = () => {
    setData({ name: '', email: '', role: '' });
    setPitch(false);
    setSponsor(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');

    const elapsed = Date.now() - mountTime.current;
    if (honeypot || elapsed < 2500) {
      setState('success');
      reset();
      return;
    }

    const interests = ['attend'];
    if (pitch) interests.push('pitch');
    if (sponsor) interests.push('sponsor');

    const body = new URLSearchParams({
      'form-name': 'ai-salon-signup',
      'bot-field': honeypot,
      name: data.name,
      email: data.email,
      role: data.role,
      interests: interests.join(', '),
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setState('success');
        reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="border-t-2 border-brand-red pt-10">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-brand-red mb-3">
          {form.successLabel}
        </div>
        <h3 className="font-sans text-2xl md:text-3xl text-brand-dark mb-4 font-medium tracking-tight">
          {form.successTitle}
        </h3>
        <p className="text-brand-dark/70 mb-8 leading-relaxed max-w-md">{form.successBody}</p>
        <button
          onClick={() => setState('idle')}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-brand-red hover:text-brand-dark transition-colors"
        >
          {form.another} →
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full bg-transparent border-0 border-b border-brand-dark/25 focus:border-brand-red focus:outline-none px-0 py-3 text-[16px] text-brand-dark placeholder:text-brand-dark/30 transition-colors';
  const labelClass = 'block font-mono text-[10px] tracking-[0.25em] uppercase text-brand-dark/55 mb-2';

  return (
    <form
      name="ai-salon-signup"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-9"
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

      <div>
        <label className={labelClass} htmlFor="salon-name">{form.name}</label>
        <input
          id="salon-name"
          type="text"
          name="name"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="salon-email">{form.email}</label>
        <input
          id="salon-email"
          type="email"
          name="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="salon-role">{form.role}</label>
        <input
          id="salon-role"
          type="text"
          name="role"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
          placeholder={form.rolePlaceholder}
          className={inputClass}
        />
      </div>

      <div className="space-y-4 pt-3">
        <Checkbox checked={pitch} onChange={setPitch} label={form.pitch} />
        <Checkbox checked={sponsor} onChange={setSponsor} label={form.sponsor} />
      </div>

      {state === 'error' && (
        <p className="font-mono text-[12px] text-brand-red leading-relaxed">{form.error}</p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="block w-full md:w-auto md:px-14 py-4 bg-brand-red text-white font-mono text-[11px] tracking-[0.3em] uppercase hover:bg-brand-dark transition-colors disabled:opacity-50"
      >
        {state === 'submitting' ? form.submitting : form.submit}
      </button>
    </form>
  );
};

export const AISalonPage: React.FC<AISalonPageProps> = ({ lang: forcedLang }) => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(forcedLang ?? 'en');
  const navContent = CONTENT[lang].nav;
  const copy = COPY[lang];
  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const speakersRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (forcedLang && forcedLang !== lang) setLang(forcedLang);
  }, [forcedLang, lang]);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 80;
      const heroRect = heroRef.current?.getBoundingClientRect();
      const speakersRect = speakersRef.current?.getBoundingClientRect();
      const heroOverlaps = heroRect && heroRect.top < navHeight && heroRect.bottom > 0;
      const speakersOverlaps =
        speakersRect && speakersRect.top < navHeight && speakersRect.bottom > 0;
      if (heroOverlaps || speakersOverlaps) {
        setNavColor('white');
        setUseBlur(heroRect ? heroRect.top < 0 : true);
      } else {
        setNavColor('dark');
        setUseBlur(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useSEO({
    title: copy.meta.title,
    description: copy.meta.description,
    lang,
    path: lang === 'nl' ? '/nl/ai-salon' : '/en/ai-salon',
  });

  const handleLangChange = (newLang: Language) => {
    if (newLang !== lang) navigate(newLang === 'nl' ? '/nl/ai-salon' : '/en/ai-salon');
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar
        lang={lang}
        setLang={handleLangChange}
        content={navContent}
        textColor={navColor}
        useBlur={useBlur}
      />

      <main>
        {/* Hero — image background, white text, full viewport */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col text-white overflow-hidden">
          <img
            src="/groningen.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/60 to-brand-dark/90" />

          <div className="relative flex-1 flex flex-col">
            {/* Statement + lead — vertically centered */}
            <div className="flex-1 max-w-6xl mx-auto w-full px-6 pt-24 md:pt-28 pb-16 md:pb-20 flex flex-col justify-center">
              <h1 className="font-sans text-[38px] sm:text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-balance max-w-[860px] font-medium">
                {copy.hero}
              </h1>
              <p className="mt-12 md:mt-14 md:ml-32 max-w-[600px] text-[17px] md:text-[18px] leading-[1.7] text-white/80 text-pretty">
                {copy.lead.intro}
                <strong className="text-white font-bold">{copy.lead.dateText}</strong>
                {copy.lead.between}
                <a
                  href={copy.lead.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold underline decoration-white/60 underline-offset-[5px] hover:decoration-white transition-colors"
                >
                  {copy.lead.linkText}
                </a>
                {copy.lead.after}
              </p>
            </div>

            {/* Meta strip — bottom of hero */}
            <div className="border-t border-white/15">
              <div className="max-w-6xl mx-auto px-6 py-5 font-mono text-[11px] tracking-[0.18em] uppercase text-white/75 flex flex-wrap items-center gap-x-5 gap-y-2">
                {copy.metaStrip.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-white/30" aria-hidden>·</span>}
                    <span>{item.text}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agenda — full screen */}
        <section className="min-h-screen flex items-center border-t border-brand-dark/10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 w-full">
            <h2 className="font-sans text-3xl md:text-[40px] leading-[1.1] text-brand-dark font-medium tracking-[-0.02em] mb-12">
              {copy.agenda.heading}
            </h2>
            <ul className="divide-y divide-brand-dark/10 max-w-3xl">
              {copy.agenda.rows.map((row, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6 py-5 items-baseline font-mono text-[13px] md:text-[15px]"
                >
                  <span className="text-brand-dark/55 tabular-nums">{row.time}</span>
                  <span className="text-brand-dark">
                    {row.title}
                    {row.note && <span className="text-brand-red ml-0.5">*</span>}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-[11px] leading-relaxed text-brand-dark/60 italic max-w-md">
              <span className="text-brand-red not-italic">*</span> {copy.agenda.footnote}
            </p>
          </div>
        </section>

        {/* Speakers — full screen, dark, clickable TBA placeholders */}
        <section ref={speakersRef} className="min-h-screen flex items-center bg-brand-dark text-white">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 w-full">
            <h2 className="font-sans text-3xl md:text-[40px] leading-[1.1] text-white font-medium tracking-[-0.02em] mb-5">
              {copy.speakers.heading}
            </h2>
            <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed max-w-xl mb-14">
              {copy.speakers.body}
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-12">
              {[0, 1].map((i) => (
                <a
                  key={i}
                  href={`mailto:salon@aiheroes.io?subject=${encodeURIComponent(copy.speakers.mailtoSubject)}`}
                  className="group flex flex-col gap-3"
                >
                  <div className="relative w-[200px] sm:w-[220px] h-[260px] sm:h-[290px] border border-white/20 bg-white/[0.03] flex items-center justify-center font-mono text-[11px] tracking-[0.3em] uppercase text-white/35 group-hover:border-brand-red group-hover:text-brand-red group-hover:bg-white/[0.06] transition-colors">
                    <span className="group-hover:opacity-0 transition-opacity">
                      {copy.speakers.spotLabel}
                    </span>
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
                      {copy.speakers.spotHover}
                    </span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="w-32 h-px bg-white/25 group-hover:bg-brand-red/60 transition-colors" />
                    <div className="w-24 h-px bg-white/15 group-hover:bg-brand-red/30 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors — full screen, clickable logo spots */}
        <section className="min-h-screen flex items-center border-t border-brand-dark/10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 w-full">
            <h2 className="font-sans text-3xl md:text-[40px] leading-[1.1] text-brand-dark font-medium tracking-[-0.02em] mb-5 max-w-xl text-balance">
              {copy.sponsors.heading}
            </h2>
            <p className="text-[16px] md:text-[17px] text-brand-dark/70 leading-relaxed max-w-xl mb-14">
              {copy.sponsors.body}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl">
              {Array.from({ length: copy.sponsors.slots }).map((_, i) => (
                <a
                  key={i}
                  href={`mailto:salon@aiheroes.io?subject=${encodeURIComponent(copy.sponsors.mailtoSubject)}`}
                  className="group relative h-[110px] md:h-[130px] border border-brand-dark/20 bg-brand-sand/30 flex items-center justify-center font-mono text-[10px] tracking-[0.25em] uppercase text-brand-dark/35 hover:border-brand-red hover:text-brand-red hover:bg-white transition-colors"
                >
                  <span className="group-hover:opacity-0 transition-opacity">
                    {copy.sponsors.spotLabel}
                  </span>
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
                    {copy.sponsors.spotHover}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP form */}
        <section id="rsvp" className="border-t border-brand-dark/10 bg-brand-sand/30 scroll-mt-24">
          <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
            <h2 className="font-sans text-3xl md:text-[40px] leading-[1.1] text-brand-dark mb-14 font-medium tracking-[-0.02em] max-w-md text-balance">
              {copy.rsvp.heading}
            </h2>
            <SalonForm form={copy.rsvp.form} />
          </div>
        </section>

        {/* About AI Salon — epigraph */}
        <section className="border-t border-brand-dark/10">
          <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
            <p className="font-serif italic text-[22px] md:text-[28px] leading-[1.45] text-brand-dark/85 text-balance">
              {copy.about}
            </p>
          </div>
        </section>

        {/* Practical end-cap */}
        <section className="border-t border-brand-dark/10">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <PracticalCol {...copy.practical.location} />
            <PracticalCol {...copy.practical.organiser} />
            <PracticalCol {...copy.practical.contact} />
          </div>
        </section>
      </main>

      <Footer
        content={CONTENT[lang].footer}
        nav={navContent}
        lang={lang}
        alternateUrl={lang === 'nl' ? '/en/ai-salon' : '/nl/ai-salon'}
      />
    </div>
  );
};
