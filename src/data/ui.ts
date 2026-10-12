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
    meet: 'Plan een kennismaking',
    name: 'Naam',
    email: 'E-mail',
    topic: 'Waar gaat het om?',
    optional: '(optioneel)',
    training: 'Training',
    unsure: 'Weet ik nog niet',
    message: 'Wat wil je bouwen?',
    messageTraining: 'Wat wil je je team leren?',
    placeholder: 'Bijvoorbeeld: een assistent die klantvragen beantwoordt, of het Excel-bestand vervangen waar alles op draait.',
    placeholderTraining: 'Bijvoorbeeld: ons team wil leren werken met Copilot en ChatGPT.',
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
    meet: 'Book an introduction',
    name: 'Name',
    email: 'Email',
    topic: 'What is it about?',
    optional: '(optional)',
    training: 'Training',
    unsure: 'Not sure yet',
    message: 'What do you want to build?',
    messageTraining: 'What do you want your team to learn?',
    placeholder: 'For example: an assistant that answers customer questions, or replacing the spreadsheet everything runs on.',
    placeholderTraining: 'For example: our team wants to learn to work with Copilot and ChatGPT.',
    submit: 'Send',
    success: 'Received. You will hear from us within 24 hours.',
    missing: 'Please fill in your name, email address and question.',
    badEmail: 'That email address does not look right.',
    busy: 'Sending…',
    error: 'Something went wrong. Try again or email us at info@aiheroes.io.',
  },
};

export const UI: Record<Lang, typeof NL> = { nl: NL, en: EN };

export function ui(url: URL | string) {
  return UI[langOf(url)];
}
