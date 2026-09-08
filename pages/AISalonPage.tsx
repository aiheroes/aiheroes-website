import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CONTENT } from '../constants';
import { useSEO } from '../hooks/useSEO';
import type { Language } from '../types';

const LANG_STORAGE_KEY = 'aiheroes-lang';
const LUMA_EVENT_ID = 'evt-IyAX8Koq2RAY8V3'; // Edition #2 · Thu 5 Nov 2026

// The venue for edition #2 is TBA (the planned venue fell through); the page carries a want-to-host call.

interface AISalonPageProps {
  lang: Language;
}

type PracticalEntry = {
  label: string;
  lines: string[];
  mail?: boolean;
  logo?: { src: string; href: string; alt: string };
};

type Copy = {
  meta: { title: string; description: string };
  hero: string;
  talkLabel: string;
  lead: {
    intro: string;
    dateText: string;
    between: string;
    linkText: string;
    after: string;
  };
  metaStrip: { text: string }[];
  agenda: {
    heading: string;
    rows: { time: string; title: string; note: boolean; subtitle?: string }[];
    footnote: string;
  };
  speakers: {
    heading: string;
    body: string;
    mailtoSubject: string;
    spotLabel: string;
    spotHover: string;
    topicSoon: string;
  };
  sponsors: {
    heading: string;
    body: string;
    mailtoSubject: string;
    spotLabel: string;
    spotHover: string;
    slots: number;
  };
  cta: string;
  editions: {
    heading: string;
    registerLabel: string;
    rows: { date: string; title: string; venue: string; status?: string; href?: string; linkLabel?: string }[];
  };
  rsvp: { heading: string; note: string };
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
      title: 'AI Salon Groningen · Edition #2',
      description:
        'AI Salon Groningen edition #2, Thursday November 5, 2026. A bimonthly community evening for AI founders, builders, investors, researchers and partners.',
    },
    hero: 'The #1 AI networking event, now in Groningen.',
    talkLabel: 'Talk',
    lead: {
      intro: 'Join us on ',
      dateText: 'Thursday, November 5th',
      between: ', for edition #2 of ',
      linkText: 'AI Salon Groningen',
      after:
        ". Every two months we bring together AI founders, builders, investors, researchers and partners from across Europe to connect, collaborate and show what's next, all from Groningen, the AI capital of Europe. It's one chapter in the global AI Salon network. The kick-off sold out with 70+ attendees, so don't wait too long: registration for edition #2 is open.",
    },
    metaStrip: [
      { text: 'AI Salon Groningen' },
      { text: 'Edition #2' },
      { text: 'Thursday, Nov 05, 2026' },
      { text: 'Venue TBA · Groningen' },
      { text: 'English-spoken' },
      { text: 'Bimonthly' },
    ],
    agenda: {
      heading: 'Agenda',
      rows: [
        { time: '17:30', title: 'Walk-in', note: false },
        { time: '18:00', title: 'Two talks · Ilse Gosliga + speaker TBA', note: false },
        { time: '18:40', title: '60-second pitches', note: true },
        { time: '19:00–21:00', title: 'Food, Drinks & Open Networking', note: false },
      ],
      footnote: 'by you? Email frans@aiheroes.io to apply.',
    },
    speakers: {
      heading: 'Speakers',
      body: 'Two short talks per edition, around 20 minutes each. Pick a slot to start the conversation.',
      mailtoSubject: 'AI Salon Groningen Edition #2 · Speaking',
      spotLabel: 'TBA',
      spotHover: 'Become a speaker →',
      topicSoon: 'Topic coming soon',
    },
    sponsors: {
      heading: 'Sponsored by you?',
      body: 'Sponsors keep the salon free, edition after edition. Sponsoring is deliberately affordable, so small and mid-size companies can join too. Email frans@aiheroes.io.',
      mailtoSubject: 'AI Salon Groningen Edition #2 · Sponsorship',
      spotLabel: 'Your logo',
      spotHover: 'Become a sponsor →',
      slots: 6,
    },
    cta: 'Register for edition #2 →',
    editions: {
      heading: 'Coming up',
      registerLabel: 'Register →',
      rows: [
        { date: 'Thu, Sep 3', title: 'Kick-Off', venue: 'Chordify · Groningen', status: 'Sold out' },
        { date: 'Thu, Nov 5', title: 'Edition #2', venue: 'Venue TBA · Groningen' },
      ],
    },
    rsvp: {
      heading: 'Edition #2 · Thursday, November 5. Registration is open.',
      note: 'The venue will be announced soon. Want to host edition #2, give a 60-second pitch or sponsor? Email frans@aiheroes.io.',
    },
    about:
      'AI Salon is the global community where AI founders, builders, investors and partners connect and collaborate, with chapters around the world. Groningen is our chapter, in the AI capital of Europe.',
    practical: {
      location: {
        label: 'Location',
        lines: ['To be announced', 'Groningen'],
      },
      organiser: { label: 'Organiser', lines: ['AI Heroes (chapter)'] },
      contact: { label: 'Contact', lines: ['frans@aiheroes.io'], mail: true },
    },
  },
  nl: {
    meta: {
      title: 'AI Salon Groningen · Editie #2',
      description:
        'AI Salon Groningen editie #2, donderdag 5 november 2026. Een tweemaandelijkse community-avond voor AI founders, builders, investeerders, onderzoekers en partners.',
    },
    hero: 'Het #1 AI netwerk-event, nu ook in Groningen.',
    talkLabel: 'Talk',
    lead: {
      intro: 'Wees erbij op ',
      dateText: 'donderdag 5 november',
      between: ' voor editie #2 van ',
      linkText: 'AI Salon Groningen',
      after:
        '. Elke twee maanden brengen we AI founders, builders, investeerders, onderzoekers en partners uit heel Europa samen om te connecten, samen te werken en te laten zien waar ze mee bezig zijn, allemaal vanuit Groningen, de AI-hoofdstad van Europa. Het is één chapter in het wereldwijde AI Salon-netwerk. De kick-off zat vol met ruim 70 gasten, dus wacht niet te lang: de aanmelding voor editie #2 is open.',
    },
    metaStrip: [
      { text: 'AI Salon Groningen' },
      { text: 'Editie #2' },
      { text: 'Donderdag 5 nov 2026' },
      { text: 'Locatie volgt · Groningen' },
      { text: 'Engelstalig' },
      { text: 'Bimonthly' },
    ],
    agenda: {
      heading: 'Programma',
      rows: [
        { time: '17:30', title: 'Inloop', note: false },
        { time: '18:00', title: 'Twee talks · Ilse Gosliga + spreker volgt', note: false },
        { time: '18:40', title: '60-secondenpitches', note: true },
        { time: '19:00–21:00', title: 'Eten, drinken en open netwerken', note: false },
      ],
      footnote: 'door jou? Mail frans@aiheroes.io om je aan te melden.',
    },
    speakers: {
      heading: 'Sprekers',
      body: "Twee talks van zo'n twintig minuten per editie. Spreken? Mail frans@aiheroes.io.",
      mailtoSubject: 'AI Salon Groningen Editie #2 · Spreken',
      spotLabel: 'TBA',
      spotHover: 'Word spreker →',
      topicSoon: 'Onderwerp volgt',
    },
    sponsors: {
      heading: 'Sponsors',
      body: 'Sponsors houden de salon gratis, editie na editie. De bijdrage is bewust laagdrempelig, zodat ook kleine en middelgrote bedrijven kunnen aanhaken. Mail frans@aiheroes.io.',
      mailtoSubject: 'AI Salon Groningen Editie #2 · Sponsoring',
      spotLabel: 'Jouw logo',
      spotHover: 'Word sponsor →',
      slots: 6,
    },
    cta: 'Meld je aan voor editie #2 →',
    editions: {
      heading: 'Op de planning',
      registerLabel: 'Aanmelden →',
      rows: [
        { date: 'Do 3 sep', title: 'Kick-off', venue: 'Chordify · Groningen', status: 'Uitverkocht' },
        { date: 'Do 5 nov', title: 'Editie #2', venue: 'Locatie volgt · Groningen' },
      ],
    },
    rsvp: {
      heading: 'Editie #2 · donderdag 5 november. De aanmelding is open.',
      note: 'De locatie volgt binnenkort. Wil je editie #2 hosten, een 60-secondenpitch geven of sponsoren? Mail frans@aiheroes.io.',
    },
    about:
      'AI Salon is de wereldwijde community waarin AI founders, builders, investeerders en partners elkaar ontmoeten en samenwerken, met chapters over de hele wereld. Groningen is ons chapter, in de AI-hoofdstad van Europa.',
    practical: {
      location: {
        label: 'Locatie',
        lines: ['Wordt bekendgemaakt', 'Groningen'],
      },
      organiser: { label: 'Organisator', lines: ['AI Heroes (chapter)'] },
      contact: { label: 'Contact', lines: ['frans@aiheroes.io'], mail: true },
    },
  },
};

// Confirmed sponsors for edition #2 (not language-specific). Rendered ahead of the open
// slots. Empty for now: edition #2 starts with a clean sponsor list (kick-off sponsors were
// Drydock, Chordify and Helm — re-add entries here as they confirm).
const SPONSOR_LOGOS: { name: string; src: string; href?: string }[] = [];

// Confirmed speakers for edition #2 (not language-specific). Rendered ahead of the open
// TBA slots. photo: null = portrait not supplied yet; topic: null = topic to be announced.
const SPEAKERS: { name: string; topic: string | null; photo: string | null }[] = [
  // Ilse Gosliga — founder/director of Energiso (energy management, ISO 50001). Topic TBA.
  // Portrait from energiso.nl, greyscaled like the other speaker portraits.
  { name: 'Ilse Gosliga', topic: null, photo: '/speakers/ilse-gosliga.jpg' },
];
const SPEAKER_SLOTS = 2; // total speaker tiles shown (confirmed + open)

const PracticalCol: React.FC<PracticalEntry> = ({ label, lines, mail, logo }) => (
  <div>
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-dark/45 mb-3">{label}</div>
    {logo && (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-3 hover:opacity-70 transition-opacity"
      >
        <img src={logo.src} alt={logo.alt} className="h-9 w-auto" />
      </a>
    )}
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

// Loads Luma's checkout-button.js once. The script wires the click via the
// [data-luma-action="checkout"] attribute (not the .luma-checkout--button class —
// that class only pulls in Luma's own button styling, which we don't want), so our
// button keeps full control of its look. initCheckout() re-binds after SPA mounts.
const useLumaCheckout = () => {
  useEffect(() => {
    const init = () => (window as unknown as { luma?: { initCheckout?: () => void } }).luma?.initCheckout?.();
    const existing = document.getElementById('luma-checkout');
    if (existing) {
      init();
      return;
    }
    const s = document.createElement('script');
    s.id = 'luma-checkout';
    s.src = 'https://embed.lu.ma/checkout-button.js';
    s.async = true;
    s.onload = init;
    document.body.appendChild(s);
  }, []);
};

// Shared style so the inline trigger and the standalone trigger read identically.
const HERO_LINK_CLASS =
  'text-white font-bold underline decoration-white/60 underline-offset-[5px] hover:decoration-white transition-colors cursor-pointer';

// A text link that opens the Luma registration modal. The href is a graceful
// fallback; Luma's script overrides the click via the data-luma-action attribute.
const LumaLink: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <a
    href={`https://luma.com/event/${LUMA_EVENT_ID}`}
    className={className}
    data-luma-action="checkout"
    data-luma-event-id={LUMA_EVENT_ID}
  >
    {children}
  </a>
);

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

  useLumaCheckout();

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
            {/* Statement + lead — pushed down to lower half on mobile (image dominates top), centered on desktop */}
            <div className="flex-1 max-w-6xl mx-auto w-full px-6 pt-[55vh] sm:pt-24 md:pt-28 pb-16 md:pb-20 flex flex-col sm:justify-center">
              <h1 className="font-sans text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.1] sm:leading-[1.05] tracking-[-0.02em] text-balance max-w-[860px] font-medium">
                {copy.hero}
              </h1>
              <p className="mt-12 md:mt-14 md:ml-32 max-w-[600px] text-[17px] md:text-[18px] leading-[1.7] text-white/80 text-pretty">
                {copy.lead.intro}
                <strong className="text-white font-bold">{copy.lead.dateText}</strong>
                {copy.lead.between}
                <LumaLink className={HERO_LINK_CLASS}>{copy.lead.linkText}</LumaLink>
                {copy.lead.after}
              </p>
              <div className="mt-10 md:mt-12 md:ml-32">
                <LumaLink className={HERO_LINK_CLASS}>{copy.cta}</LumaLink>
              </div>
            </div>

            {/* Meta strip — bottom of hero */}
            <div className="border-t border-white/15">
              <div className="max-w-6xl mx-auto px-6 py-5 font-mono text-[11px] tracking-[0.18em] uppercase text-white/75 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                {copy.metaStrip.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="hidden sm:inline text-white/30" aria-hidden>·</span>}
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
                    {row.subtitle && (
                      <span className="block mt-1.5">
                        <span className="text-brand-red text-[10px] tracking-[0.25em] uppercase">{copy.talkLabel}</span>
                        <span className="block mt-0.5 text-brand-dark/65 text-[12px] md:text-[13px]">“{row.subtitle}”</span>
                      </span>
                    )}
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
              {SPEAKERS.map((speaker) => (
                <div key={speaker.name} className="flex flex-col gap-3">
                  <div className="relative w-[200px] sm:w-[220px] h-[260px] sm:h-[290px] border border-white/20 bg-white/[0.03] overflow-hidden flex items-center justify-center">
                    {speaker.photo ? (
                      <img src={speaker.photo} alt={speaker.name} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/30">
                        {copy.speakers.spotLabel}
                      </span>
                    )}
                  </div>
                  <div className="pt-1">
                    <div className="text-[15px] md:text-[16px] text-white font-medium tracking-tight">
                      {speaker.name}
                    </div>
                    {speaker.topic ? (
                      <div className="mt-2">
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-red/90">
                          {copy.talkLabel}
                        </span>
                        <p className="mt-1 text-[13px] leading-snug text-white/70">
                          “{speaker.topic}”
                        </p>
                      </div>
                    ) : (
                      <div className="mt-1 font-mono text-[11px] tracking-[0.15em] uppercase text-white/45">
                        {copy.speakers.topicSoon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {Array.from({ length: Math.max(0, SPEAKER_SLOTS - SPEAKERS.length) }).map((_, i) => (
                <a
                  key={i}
                  href={`mailto:frans@aiheroes.io?subject=${encodeURIComponent(copy.speakers.mailtoSubject)}`}
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
              {SPONSOR_LOGOS.map((logo) => {
                const inner = (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-[96px] md:max-h-[116px] max-w-[90%] w-auto object-contain"
                  />
                );
                const base =
                  'relative h-[110px] md:h-[130px] border border-brand-dark/20 bg-white flex items-center justify-center px-5';
                return logo.href ? (
                  <a
                    key={logo.name}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${base} hover:border-brand-dark/40 transition-colors`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={logo.name} className={base}>
                    {inner}
                  </div>
                );
              })}
              {Array.from({ length: Math.max(0, copy.sponsors.slots - SPONSOR_LOGOS.length) }).map((_, i) => (
                <a
                  key={i}
                  href={`mailto:frans@aiheroes.io?subject=${encodeURIComponent(copy.sponsors.mailtoSubject)}`}
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

        {/* RSVP — Luma embed (registration happens on Luma) */}
        <section id="rsvp" className="border-t border-brand-dark/10 bg-brand-sand/30 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <h2 className="font-sans text-3xl md:text-[40px] leading-[1.1] text-brand-dark mb-12 font-medium tracking-[-0.02em] max-w-md text-balance">
              {copy.rsvp.heading}
            </h2>
            <div className="border border-brand-dark/15 rounded-md overflow-hidden bg-white">
              <iframe
                src={`https://lu.ma/embed/event/${LUMA_EVENT_ID}/simple`}
                title="AI Salon Groningen — registration"
                className="w-full h-[1120px] sm:h-[980px] md:h-[700px]"
                frameBorder="0"
                style={{ border: 'none' }}
                allowFullScreen
                aria-hidden={false}
                tabIndex={0}
              />
            </div>
            <p className="mt-10 font-mono text-[12px] leading-relaxed text-brand-dark/55 max-w-md">
              {copy.rsvp.note}
            </p>
          </div>
        </section>

        {/* Editions — the sold-out kick-off + edition #2 (venue TBA) */}
        <section className="border-t border-brand-dark/10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 w-full">
            <h2 className="font-sans text-3xl md:text-[40px] leading-[1.1] text-brand-dark font-medium tracking-[-0.02em] mb-12">
              {copy.editions.heading}
            </h2>
            <ul className="divide-y divide-brand-dark/10 max-w-3xl">
              {copy.editions.rows.map((row) => (
                <li
                  key={row.date}
                  className="grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6 py-5 items-baseline font-mono text-[13px] md:text-[15px]"
                >
                  <span className="text-brand-dark/55 tabular-nums">{row.date}</span>
                  <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1.5 text-brand-dark">
                    <span>
                      {row.title}
                      <span className="block mt-0.5 text-brand-dark/65 text-[12px] md:text-[13px]">{row.venue}</span>
                    </span>
                    {row.status && (
                      <span className="text-[10px] tracking-[0.25em] uppercase text-brand-red">{row.status}</span>
                    )}
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-brand-dark/40 underline-offset-4 hover:text-brand-red hover:decoration-brand-red transition-colors"
                      >
                        {row.linkLabel ?? copy.editions.registerLabel}
                      </a>
                    ) : row.status ? null : ( // a status (sold out / past) means no register link
                      <LumaLink className="underline decoration-brand-dark/40 underline-offset-4 hover:text-brand-red hover:decoration-brand-red transition-colors">
                        {row.linkLabel ?? copy.editions.registerLabel}
                      </LumaLink>
                    )}
                  </span>
                </li>
              ))}
            </ul>
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
