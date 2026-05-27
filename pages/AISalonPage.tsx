import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageContactForm } from '../components/PageContactForm';
import { CONTENT } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { Language } from '../types';
import {
  ArrowRight,
  Calendar,
  Mic2,
  Users,
  Wine,
  MapPin,
  Sparkles,
  Globe,
  CheckCircle2,
  Camera,
  ChevronDown,
} from 'lucide-react';

const LANG_STORAGE_KEY = 'aiheroes-lang';

interface AISalonPageProps {
  lang: Language;
}

type Copy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: React.ReactNode;
    lead: string;
    datePill: string;
    badges: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    leftTitle: string;
    leftBody: string;
    rightTitle: string;
    rightBody: string;
    quote: string;
    quoteAttr: string;
  };
  format: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: { icon: 'mic' | 'users' | 'wine'; title: string; body: string }[];
  };
  agenda: {
    eyebrow: string;
    title: string;
    note: string;
    rows: { time: string; title: string; body?: string }[];
  };
  dates: {
    eyebrow: string;
    title: string;
    lead: string;
    first: {
      label: string;
      day: string;
      monthYear: string;
      meta: string;
      cta: string;
    };
    next: string;
    nextEditions: { month: string; year: string; status: string }[];
  };
  speakers: {
    eyebrow: string;
    title: string;
    lead: string;
    pitchTitle: string;
    pitchBody: string;
    pitchCta: string;
    speakTitle: string;
    speakBody: string;
    speakCta: string;
  };
  sponsors: {
    eyebrow: string;
    title: string;
    lead: string;
    why: { title: string; body: string }[];
    tiersTitle: string;
    tiers: { name: string; price: string; perks: string[]; slots: number; recommended?: boolean }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    emptySlot: string;
  };
  venue: {
    eyebrow: string;
    title: string;
    body: string;
    location: string;
    locationNote: string;
    accessibilityTitle: string;
    accessibilityBody: string;
  };
  photos: {
    eyebrow: string;
    title: string;
    body: string;
    placeholder: string;
  };
  host: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    ctaHref: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  signup: {
    eyebrow: string;
    title: string;
    lead: string;
    formIntro: string;
    topic: string;
  };
};

const CONTENT_AI_SALON: Record<Language, Copy> = {
  nl: {
    meta: {
      title: 'AI Salon Groningen',
      description:
        'AI Salon Groningen: een bimaandelijkse avond waarop de AI-community van Groningen samenkomt. Twee inspirerende talks, open 1-minuut pitches, eten en drinken. Eerste editie 3 september 2026.',
    },
    hero: {
      eyebrow: 'AI SALON · GRONINGEN',
      title: (
        <>
          Waar Groningen's
          <br />
          <span className="italic font-normal">AI-community</span> samenkomt
        </>
      ),
      lead:
        'Een avond voor iedereen die in of met AI werkt in Groningen. Twee inspirerende talks, open 1-minuut pitches, en de tijd om elkaar echt te leren kennen. Onder begeleiding van eten en drinken.',
      datePill: 'Eerste editie · 3 september 2026',
      badges: ['Gratis toegang', 'Wie eerst komt, eerst maalt', 'Bimaandelijks'],
      primaryCta: 'Reserveer je early-bird plek',
      secondaryCta: 'Wat is de AI Salon?',
    },
    about: {
      eyebrow: 'Concept',
      headline: 'Een lokaal hoofdstuk van een wereldwijde beweging',
      leftTitle: 'De wereldwijde AI Salon',
      leftBody:
        'De AI Salon is een internationaal netwerk van AI-founders, bouwers, onderzoekers en investeerders. Lokale chapters in meer dan 50 steden brengen mensen samen rond één gedeelde overtuiging: AI vraagt om menselijke verbinding, niet alleen om technologie. Geen pitchwedstrijd, geen verkoop. Wel echte gesprekken over wat we bouwen en waarom.',
      rightTitle: 'De Groningse editie',
      rightBody:
        'Groningen is hard op weg dé AI-hoofdstad van Europa te worden, met de AI Fabriek, talent uit de RUG en Hanze, en een groeiende laag founders en bouwers. Wij zijn trots host van het Groningse chapter. Iedere twee maanden brengen we de mensen samen die hier aan AI werken: van eerstejaars tot CTO, van pilot tot productie.',
      quote:
        'AI wordt te belangrijk om alleen op LinkedIn te bespreken. We moeten elkaar weer fysiek opzoeken.',
      quoteAttr: 'AI Heroes',
    },
    format: {
      eyebrow: 'Het format',
      title: 'Drie ingrediënten, één avond',
      lead:
        'We houden het bewust simpel. Genoeg ruimte voor inhoud, genoeg ruimte voor gesprek.',
      cards: [
        {
          icon: 'mic',
          title: 'Twee inspirerende talks',
          body: 'Twee sprekers, 20 minuten per talk. Praktijkverhalen van mensen die met AI bouwen, onderzoeken of beleid maken. Geen verkoop, wel concrete inzichten.',
        },
        {
          icon: 'users',
          title: 'Open 1-minuut pitches',
          body: 'Iedereen die wil mag op het podium voor 60 seconden. Pitch je project, je vacature, je vraag of je idee. Een eerlijke etalage van wat er in Groningen gebeurt.',
        },
        {
          icon: 'wine',
          title: 'Eten en drinken',
          body: 'De talks zijn het excuus, de borrel is het echte werk. We zorgen voor hapjes en drankjes zodat iedereen kan blijven hangen en doorpraten.',
        },
      ],
    },
    agenda: {
      eyebrow: 'Avondprogramma',
      title: 'Hoe een AI Salon-avond verloopt',
      note: 'Indicatieve tijden, definitief programma volgt vlak voor de editie.',
      rows: [
        { time: '18:30', title: 'Inloop', body: 'Welkom, eerste drankje, eerste gesprekken.' },
        { time: '19:15', title: 'Opening', body: 'Korte aftrap door de host.' },
        { time: '19:20', title: 'Talk 1', body: '20 minuten praktijkverhaal.' },
        { time: '19:45', title: '1-minuut pitches', body: 'Open podium voor iedereen die iets te delen heeft.' },
        { time: '20:05', title: 'Pauze met eten', body: 'Hapjes, drankjes, gesprekken.' },
        { time: '20:35', title: 'Talk 2', body: '20 minuten praktijkverhaal.' },
        { time: '21:00', title: 'Mingle', body: 'Vrije borrel, kennismaken, doorbouwen.' },
        { time: '22:00', title: 'Einde', body: 'Of het diner verschuift naar een café in de buurt.' },
      ],
    },
    dates: {
      eyebrow: 'Volgende edities',
      title: 'Bimaandelijks, jaar in jaar uit',
      lead:
        'De eerste editie is op 3 september 2026. Daarna komen we elke twee maanden samen. De vervolgdata bevestigen we kort na elke editie.',
      first: {
        label: 'Eerste editie',
        day: '03',
        monthYear: 'September 2026',
        meta: 'Donderdagavond · Groningen centrum',
        cta: 'Reserveer je plek',
      },
      next: 'Vervolgedities',
      nextEditions: [
        { month: 'November', year: '2026', status: 'Datum bevestigd na editie 1' },
        { month: 'Januari', year: '2027', status: 'Pencil in' },
        { month: 'Maart', year: '2027', status: 'Pencil in' },
        { month: 'Mei', year: '2027', status: 'Pencil in' },
        { month: 'Juli', year: '2027', status: 'Pencil in' },
      ],
    },
    speakers: {
      eyebrow: 'Sprekers & pitches',
      title: 'Het podium is open',
      lead:
        'De sprekers voor editie 1 worden in augustus bekendgemaakt. Wil je zelf op het podium? Twee manieren om mee te doen.',
      pitchTitle: 'Doe een 1-minuut pitch',
      pitchBody:
        'Geen aanmelding nodig vooraf, gewoon opgeven aan de zaal. 60 seconden, één onderwerp: een project, een vraag, een vacature, een hot take. Geen pitchdeck, geen verkoop.',
      pitchCta: 'Hoe werkt het?',
      speakTitle: 'Geef een talk',
      speakBody:
        'Werk je aan iets dat de Groningse AI-community moet horen? Een use case, een onderzoeksinzicht, een ethisch dilemma, een gebouwde tool? Pitch je talk en wie weet sta jij op het podium.',
      speakCta: 'Pitch je talk',
    },
    sponsors: {
      eyebrow: 'Sponsors',
      title: 'Word een founding partner',
      lead:
        'De AI Salon is gratis voor bezoekers. Dat lukt alleen met sponsors die geloven in een sterke AI-community in Groningen. We bouwen dit op met een kleine groep founding partners voor de eerste edities.',
      why: [
        {
          title: 'Zichtbaarheid bij de juiste mensen',
          body: 'Founders, ontwikkelaars, beslissers, onderzoekers en studenten die actief met AI bezig zijn. Niet duizend mensen, wel de juiste honderd.',
        },
        {
          title: 'Bouw mee aan het ecosysteem',
          body: 'Groningen wordt de AI-hoofdstad van Europa. Door nu aan te haken zit je aan tafel bij wat hier de komende jaren ontstaat.',
        },
        {
          title: 'Associatie met serieuze AI',
          body: 'Geen hype, geen pitches voor pitches. Inhoudelijke avonden waar je bedrijf met de juiste lading verbonden raakt.',
        },
      ],
      tiersTitle: 'Sponsorpakketten',
      tiers: [
        {
          name: 'Founding Partner',
          price: 'Op aanvraag',
          slots: 2,
          recommended: true,
          perks: [
            'Logo prominent op de website en alle communicatie',
            '5 minuten welkomstmoment op het podium',
            'Co-branding op uitnodigingen en social media',
            'Voorrang bij talks en panelplekken',
            '10 gegarandeerde plekken per editie',
            'Voor de eerste 6 edities (één jaar)',
          ],
        },
        {
          name: 'Supporting Partner',
          price: 'Op aanvraag',
          slots: 4,
          perks: [
            'Logo op de website en in de zaal',
            'Vermelding in opening en sluiting',
            '5 gegarandeerde plekken per editie',
            'Per editie of voor een heel jaar',
          ],
        },
        {
          name: 'Community Partner',
          price: 'In natura',
          slots: 6,
          perks: [
            'Voor onderwijs, meetups, non-profits',
            'Wederzijdse vermelding in communicatie',
            'Toegang tot de community',
            'Op uitnodiging',
          ],
        },
      ],
      ctaTitle: 'Praat met ons over sponsoring',
      ctaBody:
        'We zoeken partners die voor langere tijd willen meebouwen. Korte lijntjes, geen ingewikkelde packages.',
      ctaButton: 'Word sponsor',
      emptySlot: 'Plek open',
    },
    venue: {
      eyebrow: 'Locatie',
      title: 'Locatie wordt aangekondigd',
      body:
        'We zorgen voor een locatie in het centrum van Groningen die past bij de avond: ruim genoeg voor talks, intiem genoeg voor gesprek. Aankondiging volgt in augustus, ruim voor de eerste editie.',
      location: 'Groningen, centrum',
      locationNote: 'Te voet, op de fiets of met het OV bereikbaar vanaf Station Groningen.',
      accessibilityTitle: 'Toegankelijkheid',
      accessibilityBody:
        'We selecteren een locatie die voor iedereen toegankelijk is. Heb je specifieke wensen? Laat het ons weten bij je reservering.',
    },
    photos: {
      eyebrow: 'Foto\'s',
      title: 'Beelden volgen na de eerste editie',
      body:
        'Op 3 september 2026 ontstaan hier de eerste foto\'s. Tot die tijd: deze plek wacht.',
      placeholder: 'Foto\'s na 3 september 2026',
    },
    host: {
      eyebrow: 'Host',
      title: 'Georganiseerd door AI Heroes',
      body:
        'AI Heroes is het full-service AI agency uit Groningen. We helpen organisaties met training, consulting en software rondom AI, vanuit Europa, met aandacht voor data en compliance. De AI Salon is onze manier om iets terug te geven aan de community die ons mogelijk maakt.',
      cta: 'Meer over AI Heroes',
      ctaHref: '/nl/over-ons',
    },
    faq: {
      eyebrow: 'Veelgestelde vragen',
      title: 'Goed om te weten',
      items: [
        {
          q: 'Voor wie is de AI Salon?',
          a: 'Voor iedereen die in of met AI werkt in en rond Groningen. Founders, developers, onderzoekers, beleidsmakers, studenten, designers, beslissers. Je hoeft geen technische achtergrond te hebben, je hoeft ook geen bedrijf te hebben.',
        },
        {
          q: 'Is het echt gratis?',
          a: 'Ja, gratis toegang. Eten en drinken inbegrepen. Mogelijk gemaakt door onze sponsors. Wel zijn er beperkte plekken, dus wie eerst reserveert is verzekerd van een plek.',
        },
        {
          q: 'In welke taal is het programma?',
          a: 'Standaard in het Engels, omdat we ook internationale community-leden hebben. Pitches en vragen mogen ook in het Nederlands.',
        },
        {
          q: 'Hoe reserveer ik?',
          a: 'Laat hieronder je gegevens achter, dan zetten we je op de early-bird lijst. Je krijgt de uitnodiging eerder dan de publieke aankondiging.',
        },
        {
          q: 'Mag ik collega\'s meenemen?',
          a: 'Graag zelfs, maar reserveer per persoon zodat we het aantal kennen voor catering en zitplekken.',
        },
        {
          q: 'Ik wil sponsoren. Waar begin ik?',
          a: 'Ga naar de sponsor-sectie hierboven, of stuur ons direct een bericht. We plannen een kort gesprek om te kijken welke vorm past.',
        },
        {
          q: 'Worden de talks opgenomen?',
          a: 'Vanaf de tweede of derde editie waarschijnlijk wel. De eerste editie houden we bewust intiem, alleen voor wie er is.',
        },
      ],
    },
    signup: {
      eyebrow: 'Early-bird',
      title: 'Reserveer je plek voor editie 1',
      lead:
        'Laat hieronder je gegevens achter, dan krijg je als eerste bericht zodra reserveringen openen. Plekken zijn beperkt, vol = vol.',
      formIntro: 'Vermeld in je bericht of je interesse hebt om een talk te geven of een pitch te doen.',
      topic: 'AI Salon: early-bird aanmelding',
    },
  },
  en: {
    meta: {
      title: 'AI Salon Groningen',
      description:
        'AI Salon Groningen: a bimonthly evening where the local AI community meets. Two inspiring talks, open 1-minute pitches, food and drinks. First edition September 3, 2026.',
    },
    hero: {
      eyebrow: 'AI SALON · GRONINGEN',
      title: (
        <>
          Where Groningen's
          <br />
          <span className="italic font-normal">AI community</span> meets
        </>
      ),
      lead:
        'An evening for everyone working in or on AI in Groningen. Two inspiring talks, open 1-minute pitches, and the time to really get to know each other. With food and drinks on the house.',
      datePill: 'First edition · September 3, 2026',
      badges: ['Free entry', 'First come, first served', 'Bimonthly'],
      primaryCta: 'Reserve your early-bird spot',
      secondaryCta: 'What is the AI Salon?',
    },
    about: {
      eyebrow: 'The concept',
      headline: 'A local chapter of a global movement',
      leftTitle: 'The global AI Salon',
      leftBody:
        'The AI Salon is an international network of AI founders, builders, researchers, and investors. Local chapters in 50+ cities bring people together around one shared belief: AI needs human connection, not just technology. No pitch competition, no selling. Real conversations about what we are building and why.',
      rightTitle: 'The Groningen edition',
      rightBody:
        'Groningen is on its way to becoming the AI Capital of Europe, with the AI Fabriek, talent from the RUG and Hanze, and a growing layer of founders and builders. We are proud to host the Groningen chapter. Every two months we bring together the people working on AI here: from first-year students to CTOs, from pilot to production.',
      quote:
        'AI is too important to discuss only on LinkedIn. We need to physically find each other again.',
      quoteAttr: 'AI Heroes',
    },
    format: {
      eyebrow: 'The format',
      title: 'Three ingredients, one evening',
      lead:
        'We keep it deliberately simple. Enough room for substance, enough room for conversation.',
      cards: [
        {
          icon: 'mic',
          title: 'Two inspiring talks',
          body: 'Two speakers, 20 minutes each. Practical stories from people building, researching, or shaping policy with AI. No selling, just concrete insight.',
        },
        {
          icon: 'users',
          title: 'Open 1-minute pitches',
          body: 'Anyone who wants to can take the stage for 60 seconds. Pitch your project, your role opening, your question, or your hot take. An honest window into what is happening in Groningen.',
        },
        {
          icon: 'wine',
          title: 'Food and drinks',
          body: 'The talks are the excuse, the gathering is the real work. We provide bites and drinks so everyone can stay, mingle, and keep talking.',
        },
      ],
    },
    agenda: {
      eyebrow: 'Evening programme',
      title: 'How an AI Salon evening flows',
      note: 'Indicative timing, final programme shared just before each edition.',
      rows: [
        { time: '18:30', title: 'Doors open', body: 'Welcome, first drink, first conversations.' },
        { time: '19:15', title: 'Opening', body: 'Short kickoff by the host.' },
        { time: '19:20', title: 'Talk 1', body: '20 minutes of practical insight.' },
        { time: '19:45', title: '1-minute pitches', body: 'Open stage for anyone with something to share.' },
        { time: '20:05', title: 'Break with food', body: 'Bites, drinks, conversations.' },
        { time: '20:35', title: 'Talk 2', body: '20 minutes of practical insight.' },
        { time: '21:00', title: 'Mingle', body: 'Open gathering, meeting, building.' },
        { time: '22:00', title: 'Close', body: 'Or the dinner moves to a nearby café.' },
      ],
    },
    dates: {
      eyebrow: 'Upcoming editions',
      title: 'Bimonthly, year in year out',
      lead:
        'The first edition is on September 3, 2026. After that we meet every two months. Following dates are confirmed shortly after each edition.',
      first: {
        label: 'First edition',
        day: '03',
        monthYear: 'September 2026',
        meta: 'Thursday evening · Groningen city centre',
        cta: 'Reserve your spot',
      },
      next: 'Future editions',
      nextEditions: [
        { month: 'November', year: '2026', status: 'Date confirmed after edition 1' },
        { month: 'January', year: '2027', status: 'Pencil in' },
        { month: 'March', year: '2027', status: 'Pencil in' },
        { month: 'May', year: '2027', status: 'Pencil in' },
        { month: 'July', year: '2027', status: 'Pencil in' },
      ],
    },
    speakers: {
      eyebrow: 'Speakers & pitches',
      title: 'The stage is open',
      lead:
        'Speakers for edition 1 are announced in August. Want to take the stage yourself? Two ways to join.',
      pitchTitle: 'Do a 1-minute pitch',
      pitchBody:
        'No advance signup, just put your name in at the venue. 60 seconds, one topic: a project, a question, a role opening, a hot take. No deck, no selling.',
      pitchCta: 'How it works',
      speakTitle: 'Give a talk',
      speakBody:
        'Working on something Groningen\'s AI community needs to hear? A use case, a research insight, an ethical dilemma, a tool you shipped? Pitch your talk and you might be on stage.',
      speakCta: 'Pitch your talk',
    },
    sponsors: {
      eyebrow: 'Sponsors',
      title: 'Become a founding partner',
      lead:
        'The AI Salon is free for attendees. That only works with sponsors who believe in a strong AI community in Groningen. We are building this with a small group of founding partners for the first editions.',
      why: [
        {
          title: 'Visibility with the right people',
          body: 'Founders, developers, decision makers, researchers, and students actively working on AI. Not a thousand people, but the right hundred.',
        },
        {
          title: 'Help build the ecosystem',
          body: 'Groningen is becoming the AI Capital of Europe. By joining now, you have a seat at the table for what gets built here in the years to come.',
        },
        {
          title: 'Association with serious AI',
          body: 'No hype, no pitches for the sake of pitching. Substantive evenings where your brand connects with the right energy.',
        },
      ],
      tiersTitle: 'Sponsorship tiers',
      tiers: [
        {
          name: 'Founding Partner',
          price: 'On request',
          slots: 2,
          recommended: true,
          perks: [
            'Logo prominent on the site and all communication',
            '5-minute welcome moment on stage',
            'Co-branding on invitations and social media',
            'Priority on talks and panel spots',
            '10 guaranteed seats per edition',
            'For the first 6 editions (one year)',
          ],
        },
        {
          name: 'Supporting Partner',
          price: 'On request',
          slots: 4,
          perks: [
            'Logo on the site and in the venue',
            'Mention in opening and closing',
            '5 guaranteed seats per edition',
            'Per edition or for the full year',
          ],
        },
        {
          name: 'Community Partner',
          price: 'In kind',
          slots: 6,
          perks: [
            'For education, meetups, non-profits',
            'Mutual mention in communication',
            'Access to the community',
            'By invitation',
          ],
        },
      ],
      ctaTitle: 'Talk to us about sponsoring',
      ctaBody:
        'We are looking for partners who want to build this for the long term. Short lines, no complicated packages.',
      ctaButton: 'Become a sponsor',
      emptySlot: 'Open slot',
    },
    venue: {
      eyebrow: 'Venue',
      title: 'Venue to be announced',
      body:
        'We are securing a venue in the centre of Groningen that fits the evening: spacious enough for talks, intimate enough for conversation. Announcement follows in August, well before the first edition.',
      location: 'Groningen, city centre',
      locationNote: 'Walking, cycling, or public transport distance from Groningen Station.',
      accessibilityTitle: 'Accessibility',
      accessibilityBody:
        'We are picking a venue accessible to everyone. Specific needs? Let us know in your reservation.',
    },
    photos: {
      eyebrow: 'Photos',
      title: 'Images live here after edition 1',
      body:
        'On September 3, 2026 the first photos will appear here. Until then, this space waits.',
      placeholder: 'Photos after September 3, 2026',
    },
    host: {
      eyebrow: 'Host',
      title: 'Hosted by AI Heroes',
      body:
        'AI Heroes is the full-service AI agency from Groningen. We help organisations with training, consulting, and software around AI, from Europe, with care for data and compliance. The AI Salon is our way of giving something back to the community that makes us possible.',
      cta: 'More about AI Heroes',
      ctaHref: '/en/about',
    },
    faq: {
      eyebrow: 'Frequently asked',
      title: 'Good to know',
      items: [
        {
          q: 'Who is the AI Salon for?',
          a: 'Anyone working in or on AI in and around Groningen. Founders, developers, researchers, policy makers, students, designers, decision makers. You do not need a technical background, you do not need a company.',
        },
        {
          q: 'Is it really free?',
          a: 'Yes, free entry. Food and drinks included. Made possible by our sponsors. Seats are limited though, so reserve early to secure a spot.',
        },
        {
          q: 'In what language is the programme?',
          a: 'English by default, since we also have international community members. Pitches and questions in Dutch are welcome too.',
        },
        {
          q: 'How do I reserve?',
          a: 'Leave your details below and we add you to the early-bird list. You get the invitation before the public announcement.',
        },
        {
          q: 'Can I bring colleagues?',
          a: 'Please do, but reserve per person so we know the headcount for catering and seating.',
        },
        {
          q: 'I want to sponsor. Where do I start?',
          a: 'See the sponsor section above, or message us directly. We schedule a short call to see what fits.',
        },
        {
          q: 'Are talks recorded?',
          a: 'Probably from the second or third edition onward. We keep the first edition intimate, in the room only.',
        },
      ],
    },
    signup: {
      eyebrow: 'Early-bird',
      title: 'Reserve your spot for edition 1',
      lead:
        'Leave your details below and you will be the first to hear when reservations open. Seats are limited, full is full.',
      formIntro: 'Mention in your message if you are interested in giving a talk or doing a pitch.',
      topic: 'AI Salon: early-bird signup',
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

const FormatIcon: React.FC<{ kind: 'mic' | 'users' | 'wine' }> = ({ kind }) => {
  if (kind === 'mic') return <Mic2 className="w-7 h-7" />;
  if (kind === 'users') return <Users className="w-7 h-7" />;
  return <Wine className="w-7 h-7" />;
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const SectionEyebrow: React.FC<{ children: React.ReactNode; accent?: 'red' | 'blue' | 'light' }> = ({
  children,
  accent = 'red',
}) => {
  const color =
    accent === 'red'
      ? 'text-brand-red'
      : accent === 'blue'
      ? 'text-brand-blue'
      : 'text-white/60';
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${color} mb-3`}>{children}</p>
  );
};

export const AISalonPage: React.FC<AISalonPageProps> = ({ lang: forcedLang }) => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(() => getInitialLanguage(forcedLang));
  const copy = CONTENT_AI_SALON[lang];
  const navContent = CONTENT[lang].nav;

  const [navColor, setNavColor] = useState<'white' | 'dark'>('white');
  const [useBlur, setUseBlur] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  // Sync language with route
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

  // Navbar theme based on scroll position relative to hero/footer
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

      {/* ───────── Hero ───────── */}
      <header
        ref={heroRef}
        className="relative isolate min-h-[100svh] flex items-end bg-brand-dark text-white overflow-hidden"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/groningen.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />
        </div>

        {/* Accent stripes (red/blue/Groningen-flag flavored) */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <span className="flex-1 bg-brand-red" />
          <span className="flex-1 bg-brand-blue" />
          <span className="flex-1 bg-brand-red" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 pt-40 pb-20">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/60 mb-6">
            {copy.hero.eyebrow}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,_2rem+4vw,_6rem)] leading-[1.02] mb-8 text-balance">
            {copy.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 text-pretty">
            {copy.hero.lead}
          </p>

          {/* Date pill + badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
            <span className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              {copy.hero.datePill}
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
              {copy.hero.badges.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollToId('ai-salon-signup')}
              className="group bg-brand-red text-white px-8 py-4 font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span>{copy.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToId('ai-salon-about')}
              className="group bg-transparent border border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>{copy.hero.secondaryCta}</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom red accent (consistent with PageLayout) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />
      </header>

      {/* ───────── About / Concept ───────── */}
      <section id="ai-salon-about" className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.about.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-12 max-w-3xl text-balance">
            {copy.about.headline}
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
                <Globe className="w-4 h-4" />
                {copy.about.leftTitle}
              </div>
              <p className="text-stone-700 text-lg leading-relaxed">{copy.about.leftBody}</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-widest mb-3">
                <MapPin className="w-4 h-4" />
                {copy.about.rightTitle}
              </div>
              <p className="text-stone-700 text-lg leading-relaxed">{copy.about.rightBody}</p>
            </div>
          </div>

          <blockquote className="border-l-4 border-brand-red pl-6 py-2 max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl text-brand-dark leading-snug italic mb-3">
              &ldquo;{copy.about.quote}&rdquo;
            </p>
            <footer className="text-sm uppercase tracking-widest text-stone-500">
              {copy.about.quoteAttr}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ───────── Format (3 cards) ───────── */}
      <section className="py-20 md:py-28 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="light">{copy.format.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">{copy.format.title}</h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl">{copy.format.lead}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.format.cards.map((card, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mb-5">
                  <FormatIcon kind={card.icon} />
                </div>
                <h3 className="font-serif text-2xl mb-3">{card.title}</h3>
                <p className="text-white/70 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Agenda (evening flow) ───────── */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.agenda.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-3 text-balance">
            {copy.agenda.title}
          </h2>
          <p className="text-sm text-stone-500 italic mb-10">{copy.agenda.note}</p>

          <ol className="relative border-l-2 border-stone-200 pl-8 space-y-8">
            {copy.agenda.rows.map((row, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-brand-red border-4 border-brand-light" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="font-mono text-lg text-brand-dark font-bold tabular-nums min-w-[60px]">
                    {row.time}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-brand-dark">{row.title}</h3>
                    {row.body && <p className="text-stone-600 text-sm mt-1">{row.body}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Upcoming editions ───────── */}
      <section className="py-20 md:py-28 bg-brand-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.dates.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-3 text-balance">
            {copy.dates.title}
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mb-12">{copy.dates.lead}</p>

          {/* Big first edition card */}
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            <div className="md:col-span-3 bg-brand-dark text-white p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red mb-4">
                {copy.dates.first.label}
              </p>
              <div className="flex items-baseline gap-6 mb-4">
                <span className="font-serif text-7xl md:text-9xl leading-none">
                  {copy.dates.first.day}
                </span>
                <div>
                  <p className="font-serif text-2xl md:text-3xl leading-tight">
                    {copy.dates.first.monthYear}
                  </p>
                  <p className="text-sm text-white/60 mt-1">{copy.dates.first.meta}</p>
                </div>
              </div>
              <button
                onClick={() => scrollToId('ai-salon-signup')}
                className="group mt-4 inline-flex items-center gap-3 bg-brand-red text-white px-6 py-3 font-medium hover:bg-opacity-90 transition-all"
              >
                {copy.dates.first.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="md:col-span-2 bg-white border border-stone-200 p-8 flex flex-col justify-center">
              <Sparkles className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-serif text-2xl text-brand-dark mb-3">
                {lang === 'nl' ? 'Vol = vol' : 'Full is full'}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {lang === 'nl'
                  ? 'De zaal is bewust intiem. Wie eerst reserveert is verzekerd van een plek. Daarna komt er een wachtlijst.'
                  : 'The room is intentionally intimate. Reserve early to secure a spot. After that, we open a waiting list.'}
              </p>
            </div>
          </div>

          {/* Future editions grid */}
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">
            {copy.dates.next}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {copy.dates.nextEditions.map((ed, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 p-5 hover:border-brand-red transition-colors"
              >
                <p className="font-serif text-xl text-brand-dark leading-tight">{ed.month}</p>
                <p className="text-stone-500 text-sm">{ed.year}</p>
                <p className="text-[11px] text-stone-400 mt-3 leading-snug">{ed.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Speakers & pitches ───────── */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.speakers.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4 text-balance">
            {copy.speakers.title}
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mb-12">{copy.speakers.lead}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-l-4 border-brand-red p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Mic2 className="w-6 h-6 text-brand-red" />
                <h3 className="font-serif text-2xl text-brand-dark">{copy.speakers.pitchTitle}</h3>
              </div>
              <p className="text-stone-700 leading-relaxed mb-6">{copy.speakers.pitchBody}</p>
              <button
                onClick={() => scrollToId('ai-salon-faq')}
                className="text-sm font-medium text-brand-red hover:underline underline-offset-4 inline-flex items-center gap-2"
              >
                {copy.speakers.pitchCta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white border-l-4 border-brand-blue p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-brand-blue" />
                <h3 className="font-serif text-2xl text-brand-dark">{copy.speakers.speakTitle}</h3>
              </div>
              <p className="text-stone-700 leading-relaxed mb-6">{copy.speakers.speakBody}</p>
              <button
                onClick={() => scrollToId('ai-salon-signup')}
                className="text-sm font-medium text-brand-blue hover:underline underline-offset-4 inline-flex items-center gap-2"
              >
                {copy.speakers.speakCta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Sponsors ───────── */}
      <section className="py-20 md:py-28 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="light">{copy.sponsors.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">
            {copy.sponsors.title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mb-14">{copy.sponsors.lead}</p>

          {/* Why sponsor */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {copy.sponsors.why.map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-5">
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Tiers */}
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6">
            {copy.sponsors.tiersTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {copy.sponsors.tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative p-7 ${
                  tier.recommended
                    ? 'bg-white text-brand-dark'
                    : 'bg-white/5 border border-white/10 text-white'
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-7 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {lang === 'nl' ? 'Aanbevolen' : 'Recommended'}
                  </span>
                )}
                <h4 className="font-serif text-2xl mb-1">{tier.name}</h4>
                <p
                  className={`text-sm mb-5 ${
                    tier.recommended ? 'text-stone-500' : 'text-white/50'
                  }`}
                >
                  {tier.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.perks.map((p, j) => (
                    <li
                      key={j}
                      className={`text-sm leading-relaxed flex gap-2 ${
                        tier.recommended ? 'text-stone-700' : 'text-white/80'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          tier.recommended ? 'text-brand-red' : 'text-brand-red'
                        }`}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`pt-4 border-t ${
                    tier.recommended ? 'border-stone-200' : 'border-white/10'
                  }`}
                >
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: tier.slots }).map((_, j) => (
                      <div
                        key={j}
                        className={`w-14 h-14 border-2 border-dashed flex items-center justify-center text-[9px] uppercase tracking-wider text-center leading-tight px-1 ${
                          tier.recommended
                            ? 'border-stone-300 text-stone-400'
                            : 'border-white/20 text-white/40'
                        }`}
                      >
                        {copy.sponsors.emptySlot}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsor CTA */}
          <div className="bg-brand-red text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl mb-2">{copy.sponsors.ctaTitle}</h3>
              <p className="text-white/85 max-w-2xl">{copy.sponsors.ctaBody}</p>
            </div>
            <button
              onClick={() => scrollToId('ai-salon-signup')}
              className="group bg-white text-brand-dark px-7 py-3.5 font-medium hover:bg-stone-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              {copy.sponsors.ctaButton}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ───────── Venue ───────── */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.venue.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4 text-balance">
            {copy.venue.title}
          </h2>
          <p className="text-stone-700 text-lg max-w-2xl mb-10 leading-relaxed">{copy.venue.body}</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white border border-stone-200 p-8 flex items-center gap-6">
              <img
                src="/Flag_Groningen.svg"
                alt=""
                aria-hidden="true"
                className="w-16 h-auto flex-shrink-0"
              />
              <div>
                <p className="font-serif text-xl text-brand-dark">{copy.venue.location}</p>
                <p className="text-stone-500 text-sm mt-1">{copy.venue.locationNote}</p>
              </div>
            </div>
            <div className="bg-brand-sand p-8">
              <h3 className="font-serif text-lg text-brand-dark mb-2">
                {copy.venue.accessibilityTitle}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {copy.venue.accessibilityBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Photos placeholder ───────── */}
      <section className="py-20 md:py-28 bg-brand-sand">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.photos.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4 text-balance">
            {copy.photos.title}
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mb-10">{copy.photos.body}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-stone-200/70 border border-stone-300 flex items-end p-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-7 h-7 text-stone-400" />
                </div>
                <p className="relative text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                  {copy.photos.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Host (AI Heroes) ───────── */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <SectionEyebrow accent="red">{copy.host.eyebrow}</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
                {copy.host.title}
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">{copy.host.body}</p>
              <a
                href={copy.host.ctaHref}
                className="group inline-flex items-center gap-2 text-brand-red font-medium hover:underline underline-offset-4"
              >
                {copy.host.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="md:col-span-2 bg-brand-dark text-white p-8 relative overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <p className="font-serif italic text-2xl mb-2">AI Heroes</p>
              <p className="text-white/70 text-sm leading-relaxed">
                {lang === 'nl'
                  ? 'AI werkt als je weet hoe. Training, consulting en software vanuit Groningen, voor heel Europa.'
                  : 'AI works once you know how. Training, consulting, and software from Groningen, across Europe.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="ai-salon-faq" className="py-20 md:py-28 bg-brand-sand">
        <div className="max-w-4xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.faq.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-10 text-balance">
            {copy.faq.title}
          </h2>

          <div className="space-y-2">
            {copy.faq.items.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-white border border-stone-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-serif text-lg text-brand-dark">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-stone-600 leading-relaxed">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Signup / Contact ───────── */}
      <section id="ai-salon-signup" className="py-20 md:py-28 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionEyebrow accent="red">{copy.signup.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4 text-balance">
            {copy.signup.title}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-3 max-w-2xl">{copy.signup.lead}</p>
          <p className="text-sm text-stone-500 italic mb-10">{copy.signup.formIntro}</p>

          <PageContactForm lang={lang} accentColor="red" preselectedTopic={copy.signup.topic} />
        </div>
      </section>

      {/* ───────── Footer ───────── */}
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
