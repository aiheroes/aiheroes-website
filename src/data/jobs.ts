// Open positions (docs/relaunch/pages/P13-vacatures.md, H4-vacaturedetails.md). All four are open
// (01-besluiten §13); texts rewritten for the current positioning, no salary indication, one founder
// as contact per field. validThrough stays empty until the end date is confirmed;
// remove a position here when it closes, so its JobPosting disappears with it.

import type { FounderId } from './team';

export interface Job {
  id: string;
  title: string;
  team: string;
  location: string;
  hours: string;
  type: string;
  /** schema.org employmentType */
  employment: Array<'FULL_TIME' | 'PART_TIME' | 'INTERN'>;
  datePosted: string;
  /** End date, once Frans confirms it; JobPosting leaves it out until then. */
  validThrough?: string;
  contact: FounderId;
  summary: string;
  description: string[];
  requirements: string[];
  offerings: string[];
  /** The same position in English for /en/careers. */
  en: JobText;
}

export type JobText = Pick<Job, 'title' | 'team' | 'location' | 'hours' | 'type' | 'summary' | 'description' | 'requirements' | 'offerings'>;

export const JOBS: Job[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    team: 'Bouw en compliance',
    location: 'Groningen',
    hours: '32 tot 40 uur per week',
    type: 'Fulltime',
    employment: ['FULL_TIME'],
    datePosted: '2026-06-08',
    contact: 'david-homan',
    summary: 'Je bouwt AI-toepassingen die teams elke dag gebruiken, van werkend prototype in zes dagen tot een systeem in het landschap van de klant.',
    description: [
      'Als AI Engineer bouw je mee aan alles wat AI Heroes oplevert: AI-klantenservice, agents en workflows, documentverwerking, kennisassistenten en de koppelingen met de systemen die een klant al heeft.',
      'Je werkt in startsprints van zes dagen en daarna in sprints van twee weken, met een demo na elke sprint. Compliance zit vanaf de tekentafel in het ontwerp: AI Act-classificatie, logging, menselijk toezicht en de keuze voor de hosting. Na oplevering blijven we beheren en doorontwikkelen, dus je ziet wat je bouwt ook echt gebruikt worden.',
    ],
    requirements: [
      'Ervaring met Python of TypeScript en met moderne AI-frameworks',
      'Kennis van taalmodellen, RAG-architecturen of agents',
      'Ervaring met cloudplatforms en met het koppelen van systemen via API’s',
      'Je werkt zelfstandig en goed samen in een klein team',
      'Je communiceert helder in het Nederlands of het Engels',
    ],
    offerings: [
      'Uiteenlopende bouwtrajecten bij organisaties door heel Nederland en Europa',
      'Werken met de nieuwste modellen, ook Europese en lokale',
      'Een persoonlijk ontwikkelbudget',
      'Flexibele werktijden en een plek op ons kantoor in Groningen',
    ],
    en: {
      title: 'AI Engineer',
      team: 'Build and compliance',
      location: 'Groningen',
      hours: '32 to 40 hours a week',
      type: 'Full-time',
      summary: 'You build AI tools that teams use every day, from a working prototype in six days to a system running in the client’s own landscape.',
      description: [
        'As an AI Engineer you help build everything AI Heroes delivers: AI customer service, agents and workflows, document processing, knowledge assistants and the connections to the systems a client already has.',
        'You work in six-day start sprints and then in two-week sprints, with a demo after every sprint. Compliance is part of the design from the drawing board: AI Act classification, logging, human oversight and the choice of hosting. After delivery we keep maintaining and developing what we built, so you see your work actually being used.',
      ],
      requirements: [
        'Experience with Python or TypeScript and with modern AI frameworks',
        'Knowledge of language models, RAG architectures or agents',
        'Experience with cloud platforms and with connecting systems through APIs',
        'You work independently and collaborate well in a small team',
        'You communicate clearly in Dutch or English',
      ],
      offerings: [
        'A variety of builds for organisations across the Netherlands and Europe',
        'Working with the latest models, including European and local ones',
        'A personal development budget',
        'Flexible hours and a desk at our office in Groningen',
      ],
    },
  },
  {
    id: 'ai-trainer',
    title: 'AI Trainer',
    team: 'Training en adoptie',
    location: 'Groningen en op locatie in Nederland',
    hours: '24 tot 40 uur per week',
    type: 'Fulltime of parttime',
    employment: ['FULL_TIME', 'PART_TIME'],
    datePosted: '2026-06-08',
    contact: 'jan-brusse',
    summary: 'Je zorgt dat teams kunnen werken met wat we bouwen, en geeft trainingen die organisaties AI-vaardig maken.',
    description: [
      'Als AI Trainer zorg je dat de mensen die met een opgeleverd systeem gaan werken er ook mee kunnen werken: training op het systeem zelf, op de werkvloer, en begeleiding in de eerste weken. Zo voldoet een klant meteen aan artikel 4 van de AI Act.',
      'Daarnaast geef je losse trainingen, van incompany AI-training tot de AI-geletterdheidstraining met certificaat, voor groepen van directie tot developers, op locatie of online live. Je ontwikkelt samen met Jan nieuw materiaal en houdt bestaande trainingen actueel.',
    ],
    requirements: [
      'Aantoonbare ervaring met het geven van trainingen of workshops',
      'Brede kennis van AI-tools en hoe teams ze in hun werk gebruiken',
      'Je maakt ingewikkelde onderwerpen begrijpelijk voor iedereen in de zaal',
      'Je presenteert met gemak voor groepen van 5 tot 50 mensen',
      'Je reist voor trainingen op locatie door Nederland',
      'Uitstekend Nederlands',
    ],
    offerings: [
      'Steeds nieuwe teams en organisaties, ook na de oplevering van een bouw',
      'Ruimte om eigen trainingsvormen te ontwikkelen',
      'Parttime is bespreekbaar',
      'Een plek op ons kantoor in Groningen',
    ],
    en: {
      title: 'AI Trainer',
      team: 'Training and adoption',
      location: 'Groningen and on site in the Netherlands',
      hours: '24 to 40 hours a week',
      type: 'Full-time or part-time',
      summary: 'You make sure teams can work with what we build, and you give training that makes organisations AI literate.',
      description: [
        'As an AI Trainer you make sure the people who will use a delivered system can actually work with it: training on the system itself, on the work floor, and support in the first weeks. That way a client also meets Article 4 of the AI Act straight away.',
        'You also give standalone training, from in-company AI training to the AI literacy training with certificate, for groups from the board to developers, on site or live online. Together with Jan you develop new material and keep existing training up to date.',
      ],
      requirements: [
        'Proven experience in giving training or workshops',
        'Broad knowledge of AI tools and how teams use them in their work',
        'You make complex subjects understandable for everyone in the room',
        'You present with ease to groups of 5 to 50 people',
        'You travel across the Netherlands for on-site training',
        'Excellent Dutch',
      ],
      offerings: [
        'New teams and organisations all the time, also after a build is delivered',
        'Room to develop your own training formats',
        'Part-time is open for discussion',
        'A desk at our office in Groningen',
      ],
    },
  },
  {
    id: 'sales-intern',
    title: 'Stagiair sales en business development',
    team: 'Business case en strategie',
    location: 'Groningen',
    hours: '32 tot 40 uur per week',
    type: 'Stage, minimaal vijf maanden',
    employment: ['INTERN'],
    datePosted: '2026-06-08',
    contact: 'frans-hoorn',
    summary: 'Je bouwt mee aan de commerciële pijplijn, van het eerste gesprek tot een voorstel voor een startsprint.',
    description: [
      'AI Heroes bouwt AI-toepassingen die teams elke dag gebruiken, vanuit Groningen. De eerste stap bij elke klant is een startsprint van zes dagen.',
      'Als stagiair sales en business development zoek je organisaties met een concreet proces dat beter kan, voer je eerste gesprekken en bereid je voorstellen voor. Je werkt direct samen met de drie oprichters en krijgt veel eigenaarschap.',
    ],
    requirements: [
      'Je studeert Commerciële Economie, International Business of iets vergelijkbaars (hbo of bachelor)',
      'Je bent proactief en pakt zonder aarzelen de telefoon',
      'Je hebt affiniteit met technologie en AI',
      'Je bent minimaal vijf maanden beschikbaar, 32 tot 40 uur per week',
    ],
    offerings: [
      'Direct samenwerken met de drie oprichters',
      'Veel ruimte voor eigen initiatief',
      'Een stagevergoeding',
      'Een plek op ons kantoor in Groningen',
    ],
    en: {
      title: 'Sales and business development intern',
      team: 'Business case and strategy',
      location: 'Groningen',
      hours: '32 to 40 hours a week',
      type: 'Internship, at least five months',
      summary: 'You help build the commercial pipeline, from the first conversation to a proposal for a start sprint.',
      description: [
        'AI Heroes builds AI tools that teams use every day, from Groningen. The first step with every client is a six-day start sprint.',
        'As our sales and business development intern you find organisations with a concrete process that could work better, hold first conversations and prepare proposals. You work directly with the three founders and get a lot of ownership.',
      ],
      requirements: [
        'You study Commercial Economics, International Business or something similar (applied sciences or bachelor level)',
        'You are proactive and pick up the phone without hesitating',
        'You have an affinity with technology and AI',
        'You are available for at least five months, 32 to 40 hours a week',
      ],
      offerings: [
        'Working directly with the three founders',
        'Plenty of room for your own initiative',
        'An internship allowance',
        'A desk at our office in Groningen',
      ],
    },
  },
  {
    id: 'marketing-intern',
    title: 'Stagiair marketing met AI',
    team: 'Business case en strategie',
    location: 'Groningen',
    hours: '32 tot 40 uur per week',
    type: 'Stage, minimaal vijf maanden',
    employment: ['INTERN'],
    datePosted: '2026-06-08',
    contact: 'frans-hoorn',
    summary: 'Je maakt content die laat zien wat we bouwen, met de nieuwste AI-tools.',
    description: [
      'Als stagiair marketing maak je zichtbaar wat AI Heroes bouwt: LinkedIn-posts, cases, artikelen, video en beeld. Je gebruikt daarbij zelf AI-tools en deelt wat werkt met het team.',
      'Je werkt direct met de oprichters aan de marketing, van de contentkalender tot de AI Salon, en leert hoe een bedrijf dat AI-toepassingen bouwt zich laat zien.',
    ],
    requirements: [
      'Je studeert Communicatie, Media, Marketing of iets vergelijkbaars (hbo of bachelor)',
      'Je hebt ervaring met content voor LinkedIn, Instagram of YouTube',
      'Je gebruikt AI-tools al voor je eigen werk',
      'Je schrijft goed Nederlands; Engels is een plus',
      'Je bent minimaal vijf maanden beschikbaar, 32 tot 40 uur per week',
    ],
    offerings: [
      'Hands-on ervaring met de nieuwste AI-tools voor content',
      'Je eigen contentkalender opzetten en uitvoeren',
      'Een stagevergoeding',
      'Een plek op ons kantoor in Groningen',
    ],
    en: {
      title: 'Marketing with AI intern',
      team: 'Business case and strategy',
      location: 'Groningen',
      hours: '32 to 40 hours a week',
      type: 'Internship, at least five months',
      summary: 'You create content that shows what we build, with the latest AI tools.',
      description: [
        'As our marketing intern you make visible what AI Heroes builds: LinkedIn posts, cases, articles, video and images. You use AI tools yourself and share what works with the team.',
        'You work directly with the founders on marketing, from the content calendar to the AI Salon, and learn how a company that builds AI tools presents itself.',
      ],
      requirements: [
        'You study Communication, Media, Marketing or something similar (applied sciences or bachelor level)',
        'You have experience with content for LinkedIn, Instagram or YouTube',
        'You already use AI tools for your own work',
        'You write good Dutch; English is a plus',
        'You are available for at least five months, 32 to 40 hours a week',
      ],
      offerings: [
        'Hands-on experience with the latest AI tools for content',
        'Setting up and running your own content calendar',
        'An internship allowance',
        'A desk at our office in Groningen',
      ],
    },
  },
];

/** A position's texts in the page's language. */
export function jobText(job: Job, lang: 'nl' | 'en'): JobText {
  return lang === 'en' ? job.en : job;
}
