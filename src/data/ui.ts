// Interface strings of the house-style components in both languages. Components read the
// language from the URL (langOf), so a page never has to pass it down.
import type { Lang } from './i18n';

export function langOf(url: URL | string): Lang {
  // The build (build.format 'file') renders the English home as /en.html; dev serves it as /en.
  const path = (typeof url === 'string' ? url : url.pathname).replace(/\.html$/, '');
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'nl';
}

const NL = {
  skip: 'Naar de inhoud',
  homeLabel: 'AI Heroes, naar de homepage',
  mainMenu: 'Hoofdmenu',
  allPages: "Alle pagina's",
  crumbs: 'Kruimelpad',
  home: 'Home',
  readMore: 'Lees meer',
  sprintCta: 'Plan een startsprint',
  sprintHref: '/nl/startsprint',
  howHref: '/nl/hoe-we-werken',
  howLink: 'Zo werken we',
  teamHref: '/nl/over-ons/team',
  team: 'Het team',
  writtenBy: 'Geschreven door',
  standardTitle: 'Bij elke bouw *inbegrepen*',
  standard: [
    { title: 'Business case vooraf', text: 'Voordat we bouwen, weet je wat het kost, wat het oplevert en wanneer het zich terugverdient.' },
    { title: 'Compliance vanaf de tekentafel', text: 'AI Act-classificatie, logging, menselijk toezicht en Europese hosting zitten in het ontwerp.' },
    { title: 'Je mensen kunnen ermee werken', text: 'Het team dat het systeem gaat gebruiken, trainen we op dat systeem. Zo voldoe je aan artikel 4 van de AI Act.' },
    { title: 'Niet vast aan één AI-leverancier', text: 'Je kunt van AI-model wisselen zonder opnieuw te bouwen. Alles komt met documentatie.' },
  ],
  otherEntries: 'Of past een *andere* ingang?',
  otherEntriesMore: 'Bekijk deze ingang',
  otherEntriesText: {
    nieuw: 'Een assistent, een werkstroom of een tool die je nu mist, van prototype tot dagelijks gebruik.',
    vervangen: 'Te dure of te oude software vervangen, naast het oude gebouwd en in fasen overgezet.',
    'eigen-beheer': 'AI en software op je eigen servers of bij een Europese partij, met de AI Act in het ontwerp.',
  },
  contact: {
    title: 'Vertel wat je wilt bouwen',
    lede: 'Binnen 24 uur hoor je van ons, meestal met een voorstel voor een startsprint.',
    meet: 'Plan een gratis kennismaking',
    name: 'Naam',
    email: 'E-mail',
    topic: 'Waar gaat het om?',
    optional: '(optioneel)',
    unsure: 'Weet ik nog niet',
    message: 'Wat wil je bouwen?',
    placeholder: 'Bijvoorbeeld: een assistent die klantvragen beantwoordt, of het Excel-bestand vervangen waar alles op draait.',
    // Pages for visitors who do not come to build yet: their own chip, ask and question.
    intents: {
      training: {
        chip: 'Training',
        title: 'Plan een intake',
        lede: 'Vertel wie je wilt trainen en waarop. Binnen 24 uur hoor je van ons, met een voorstel voor een intake.',
        message: 'Wat wil je je team leren?',
        placeholder: 'Bijvoorbeeld: ons team wil leren werken met Copilot en ChatGPT.',
      },
      verkenning: {
        chip: 'Verkenning',
        title: 'Vraag een verkenning aan',
        lede: 'Vertel waar je staat. Binnen 24 uur hoor je van ons, met een voorstel voor een verkenning. Liever eerst praten? Plan hieronder een kennismaking.',
        message: 'Waar wil je meer grip op?',
        placeholder: 'Bijvoorbeeld: we willen weten in welke processen AI ons de meeste tijd bespaart.',
      },
      kennismaking: {
        chip: 'Kennismaking',
        title: 'Plan een kennismaking',
        lede: 'Plan direct een gratis gesprek met een van de oprichters, of laat een bericht achter. Binnen 24 uur hoor je van ons.',
        message: 'Waar wil je het over hebben?',
        placeholder: 'Bijvoorbeeld: we hebben een idee en willen eerst sparren voordat we iets plannen.',
      },
      'ai-act-check': {
        chip: 'AI Act-check',
        title: 'Vraag de AI Act-check aan',
        lede: 'Of laat ons iets bouwen dat vanaf de tekentafel voldoet. Binnen 24 uur hoor je van ons.',
        message: 'Welke AI gebruik je, of wil je gaan gebruiken?',
        placeholder: 'Bijvoorbeeld: we hebben een chatbot op de website en willen weten in welke risicoklasse die valt.',
      },
      developers: {
        chip: 'Extra developers',
        title: 'Plan een kennismaking',
        lede: 'Vertel wat je team bouwt en waar het knelt. Binnen 24 uur hoor je van ons, met een voorstel voor een kennismaking.',
        message: 'Wat bouwt je team, en waar knelt het?',
        placeholder: 'Bijvoorbeeld: we bouwen ons platform in TypeScript en zoeken voor drie maanden twee developers.',
      },
    },
    submit: 'Verstuur',
    success: 'Ontvangen. Binnen 24 uur hoor je van ons.',
    missing: 'Vul je naam, e-mailadres en je vraag in.',
    badEmail: 'Dat e-mailadres klopt nog niet helemaal.',
    busy: 'Bezig met versturen…',
    error: 'Er ging iets mis. Probeer het opnieuw of mail ons via info@aiheroes.io.',
  },
};

const EN: typeof NL = {
  skip: 'Skip to content',
  homeLabel: 'AI Heroes, to the homepage',
  mainMenu: 'Main menu',
  allPages: 'All pages',
  crumbs: 'Breadcrumb',
  home: 'Home',
  readMore: 'Read more',
  sprintCta: 'Plan a start sprint',
  sprintHref: '/en/start-sprint',
  howHref: '/en/how-we-work',
  howLink: 'How we work',
  teamHref: '/en/about/team',
  team: 'The team',
  writtenBy: 'Written by',
  standardTitle: '*Included* in every build',
  standard: [
    { title: 'Business case first', text: 'Before we build, you know what it costs, what it returns and when it pays for itself.' },
    { title: 'Compliance by design', text: 'AI Act classification, logging, human oversight and European hosting are part of the design.' },
    { title: 'Your people can work with it', text: 'We train the team that will use the system on the system itself. That also covers Article 4 of the AI Act.' },
    { title: 'Not tied to one AI vendor', text: 'You can switch AI models without rebuilding. Everything comes with documentation.' },
  ],
  otherEntries: 'Or does *another* way in fit?',
  otherEntriesMore: 'See this way in',
  otherEntriesText: {
    nieuw: 'An assistant, a workflow or a tool you are missing today, from prototype to daily use.',
    vervangen: 'Software that is too expensive or too old, replaced by a new system built next to it and moved over in phases.',
    'eigen-beheer': 'AI and software on your own servers or with a European provider, with the AI Act in the design.',
  },
  contact: {
    title: 'Tell us what you want to build',
    lede: 'You hear from us within 24 hours, usually with a proposal for a start sprint.',
    meet: 'Book a free introduction',
    name: 'Name',
    email: 'Email',
    topic: 'What is it about?',
    optional: '(optional)',
    unsure: 'Not sure yet',
    message: 'What do you want to build?',
    placeholder: 'For example: an assistant that answers customer questions, or replacing the spreadsheet everything runs on.',
    intents: {
      training: {
        chip: 'Training',
        title: 'Book an intake',
        lede: 'Tell us who you want to train and on what. You hear from us within 24 hours, with a proposal for an intake.',
        message: 'What do you want your team to learn?',
        placeholder: 'For example: our team wants to learn to work with Copilot and ChatGPT.',
      },
      verkenning: {
        chip: 'Exploration',
        title: 'Ask for an exploration',
        lede: 'Tell us where you stand. You hear from us within 24 hours, with a proposal for an exploration. Rather talk first? Book an introduction below.',
        message: 'What do you want a better grip on?',
        placeholder: 'For example: we want to know in which processes AI saves us the most time.',
      },
      kennismaking: {
        chip: 'Introduction',
        title: 'Book an introduction',
        lede: 'Book a free call with one of the founders straight away, or leave a message. You hear from us within 24 hours.',
        message: 'What would you like to talk about?',
        placeholder: 'For example: we have an idea and want to talk it through before we plan anything.',
      },
      'ai-act-check': {
        chip: 'AI Act check',
        title: 'Ask for the AI Act check',
        lede: 'Or have us build something that is compliant from day one. You hear from us within 24 hours.',
        message: 'Which AI do you use, or plan to use?',
        placeholder: 'For example: we have a chatbot on our website and want to know which risk class it falls into.',
      },
      developers: {
        chip: 'Extra developers',
        title: 'Book an introduction',
        lede: 'Tell us what your team is building and where it gets stuck. You hear from us within 24 hours, with a proposal for an introduction.',
        message: 'What is your team building, and where does it get stuck?',
        placeholder: 'For example: we build our platform in TypeScript and need two developers for three months.',
      },
    },
    submit: 'Send',
    success: 'Received. You will hear from us within 24 hours.',
    missing: 'Please fill in your name, email address and question.',
    badEmail: 'That email address does not look right.',
    busy: 'Sending…',
    error: 'Something went wrong. Try again or email us at info@aiheroes.io.',
  },
};

export const UI: Record<Lang, typeof NL> = { nl: NL, en: EN };

/** What a contact block is for when the visitor does not come to build (yet). */
export type ContactIntent = keyof typeof NL.contact.intents;

export function ui(url: URL | string) {
  return UI[langOf(url)];
}
