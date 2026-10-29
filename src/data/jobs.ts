// Open positions (docs/relaunch/pages/P13-vacatures.md, H4-vacaturedetails.md). Three are open
// (01-besluiten §24): the AI Builder and the two internships; the AI Trainer closed. No salary
// indication, one founder as contact per position, candidates from Groningen and the region only.
// validThrough stays empty (no end date, §17); remove a position here when it closes, so its
// JobPosting disappears with it, and 301 its URL in vercel.json.

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
    id: 'ai-builder',
    title: 'AI Builder',
    team: 'Bouw en compliance',
    location: 'Groningen',
    hours: '32 tot 40 uur per week',
    type: 'Fulltime',
    employment: ['FULL_TIME'],
    datePosted: '2026-10-29',
    contact: 'frans-hoorn',
    summary: 'Je neemt klantprojecten van briefing tot oplevering: je bouwt de oplossing met Claude Code en leidt het project zelf.',
    description: [
      'Als AI Builder doe je wat de oprichters nu zelf doen. Je krijgt een projectbriefing, kiest de aanpak en bouwt de oplossing met Claude Code en de andere tools die we gebruiken. Denk aan AI-klantenservice, agents en workflows, documentverwerking, kennisassistenten en koppelingen met de systemen die een klant al heeft.',
      'Je leidt het project ook. Vaak begint het met een startsprint: in zes dagen een werkend prototype op de data van de klant. Gaat de bouw door, dan lever je op in mijlpalen, met een demo bij elke mijlpaal. Je bewaakt scope en planning en bent het aanspreekpunt voor de klant.',
      'Compliance zit vanaf de tekentafel in het ontwerp: AI Act-classificatie, logging, menselijk toezicht en de keuze voor de hosting. Na oplevering blijven we beheren en doorontwikkelen.',
    ],
    requirements: [
      'Je werkt dagelijks met Claude Code en hebt er complete projecten mee gebouwd en opgeleverd',
      'Je hebt AI-oplossingen gebouwd die mensen gebruiken, op je werk, in je studie of als eigen project; stuur links of voorbeelden mee met je sollicitatie',
      'Je kent de mogelijkheden en grenzen van generatieve AI: taalmodellen, RAG, agents, tool use, beeld en spraak, en je weet welk model bij welke taak past',
      'Je volgt wat er in AI gebeurt en probeert nieuwe modellen en tools meteen uit',
      'Je begrijpt de code die je oplevert, ook als een agent hem schrijft',
      'Je kunt een project zelf trekken: je plant, bewaakt de scope en houdt de klant op de hoogte',
      'Je woont in Groningen of in de regio en werkt vanuit ons kantoor',
      'Je spreekt en schrijft goed Nederlands en Engels',
    ],
    offerings: [
      'Eigen projecten, van briefing tot oplevering',
      'Direct samenwerken met de drie oprichters',
      'Werken met de nieuwste modellen, ook Europese en lokale',
      'Een persoonlijk ontwikkelbudget',
      'Flexibele werktijden en een plek op ons kantoor in Groningen',
    ],
    en: {
      title: 'AI Builder',
      team: 'Build and compliance',
      location: 'Groningen',
      hours: '32 to 40 hours a week',
      type: 'Full-time',
      summary: 'You take client projects from brief to delivery: you build the solution with Claude Code and lead the project yourself.',
      description: [
        'As an AI Builder you do what the founders do today. You get a project brief, choose the approach and build the solution with Claude Code and the other tools we use. Think AI customer service, agents and workflows, document processing, knowledge assistants and connections to the systems a client already has.',
        'You also lead the project. It often starts with a start sprint: a working prototype on the client’s data in six days. If the build goes ahead, you deliver in milestones, with a demo at every milestone. You keep scope and planning on track and are the client’s point of contact.',
        'Compliance is built into the design from day one: AI Act classification, logging, human oversight and the choice of hosting. After delivery we keep maintaining and developing what we built.',
      ],
      requirements: [
        'You work with Claude Code every day and have built and delivered complete projects with it',
        'You have built AI solutions that people use, at work, in your studies or as your own project; include links or examples with your application',
        'You know what generative AI can and cannot do: language models, RAG, agents, tool use, image and speech, and which model fits which task',
        'You follow what happens in AI and try new models and tools as soon as they come out',
        'You understand the code you ship, also when an agent writes it',
        'You can run a project yourself: you plan, guard the scope and keep the client informed',
        'You live in or near Groningen and work from our office',
        'You speak and write Dutch and English well',
      ],
      offerings: [
        'Your own projects, from brief to delivery',
        'Working directly with the three founders',
        'Working with the latest models, including European and local ones',
        'A personal development budget',
        'Flexible hours and a desk at our office in Groningen',
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
    datePosted: '2026-10-29',
    contact: 'frans-hoorn',
    summary: 'Je helpt nieuwe klanten binnenhalen, van het eerste gesprek tot een voorstel voor een startsprint.',
    description: [
      'AI Heroes bouwt AI-toepassingen die teams elke dag gebruiken, vanuit Groningen. De eerste stap bij elke bouw is een startsprint van zes dagen.',
      'Als stagiair sales en business development zoek je organisaties met een concreet proces dat beter kan, voer je eerste gesprekken en bereid je voorstellen voor. Je gebruikt daarbij zelf AI-tools, voor onderzoek en voorstellen. Je werkt direct samen met de drie oprichters en krijgt veel verantwoordelijkheid.',
    ],
    requirements: [
      'Je studeert Commerciële Economie, International Business of iets vergelijkbaars (hbo of bachelor) en loopt deze stage voor je opleiding',
      'Je bent proactief en pakt zonder aarzelen de telefoon',
      'Je spreekt en schrijft vloeiend Nederlands',
      'Je hebt affiniteit met technologie en AI',
      'Je woont in Groningen of in de regio',
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
      summary: 'You help win new clients, from the first conversation to a proposal for a start sprint.',
      description: [
        'AI Heroes builds AI tools that teams use every day, from Groningen. The first step of every build is a six-day start sprint.',
        'As our sales and business development intern you find organisations with a concrete process that could work better, hold first conversations and prepare proposals. You use AI tools yourself for the research and the proposals. You work directly with the three founders and get a lot of ownership.',
      ],
      requirements: [
        'You study Commercial Economics, International Business or something similar (applied sciences or bachelor level) and do this internship as part of your degree',
        'You are proactive and pick up the phone without hesitating',
        'You speak and write Dutch fluently',
        'You have an affinity with technology and AI',
        'You live in or near Groningen',
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
    datePosted: '2026-10-29',
    contact: 'frans-hoorn',
    summary: 'Je maakt content die laat zien wat we bouwen, met de nieuwste AI-tools.',
    description: [
      'Als stagiair marketing maak je zichtbaar wat AI Heroes bouwt: LinkedIn-posts, cases, artikelen, video en beeld. Je gebruikt daarbij zelf AI-tools en deelt wat werkt met het team.',
      'Je werkt direct met de oprichters aan de marketing, van de contentkalender tot de AI Salon, en leert hoe een bedrijf dat AI-toepassingen bouwt zich laat zien.',
    ],
    requirements: [
      'Je studeert Communicatie, Media, Marketing of iets vergelijkbaars (hbo of bachelor) en loopt deze stage voor je opleiding',
      'Je hebt content gemaakt voor LinkedIn, Instagram of YouTube; stuur links mee met je sollicitatie',
      'Je gebruikt AI-tools al voor je eigen werk',
      'Je schrijft goed Nederlands; Engels is een plus',
      'Je woont in Groningen of in de regio',
      'Je bent minimaal vijf maanden beschikbaar, 32 tot 40 uur per week',
    ],
    offerings: [
      'Hands-on ervaring met de nieuwste AI-tools voor content',
      'Je eigen contentkalender opzetten en uitvoeren',
      'Een stagevergoeding',
      'Een plek op ons kantoor in Groningen',
    ],
    en: {
      title: 'AI marketing intern',
      team: 'Business case and strategy',
      location: 'Groningen',
      hours: '32 to 40 hours a week',
      type: 'Internship, at least five months',
      summary: 'You create content that shows what we build, with the latest AI tools.',
      description: [
        'As our marketing intern you show what AI Heroes builds: LinkedIn posts, cases, articles, video and images. You use AI tools yourself and share what works with the team.',
        'You work directly with the founders on marketing, from the content calendar to the AI Salon, and learn how a company that builds AI tools presents itself.',
      ],
      requirements: [
        'You study Communication, Media, Marketing or something similar (applied sciences or bachelor level) and do this internship as part of your degree',
        'You have made content for LinkedIn, Instagram or YouTube; include links with your application',
        'You already use AI tools for your own work',
        'You write well in Dutch; English is a plus',
        'You live in or near Groningen',
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
