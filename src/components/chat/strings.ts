// Widget UI copy (SDD D8): chrome follows the site locale; NL follows the house style
// (informal-professional "je", no em-dashes, no "geen X maar Y").

export type ChatLocale = 'nl' | 'en';

export const STRINGS = {
  nl: {
    launcherLabel: 'Stel je vraag',
    title: 'AI Heroes assistent',
    aiBadge: 'AI-assistent',
    // EU AI Act Art. 50: perceivable in the interaction itself (SDD D10).
    disclosure:
      'Je chat met de AI-assistent van AI Heroes. Antwoorden komen uit onze eigen site-informatie en kunnen onvolledig zijn. Een mens is altijd binnen handbereik.',
    disclosureLink: 'Hoe dit werkt',
    inputPlaceholder: 'Typ je vraag…',
    send: 'Versturen',
    stop: 'Stop',
    thinking: 'Aan het schrijven…',
    talkToHuman: 'Praat met een mens',
    sources: 'Bronnen',
    helpful: 'Nuttig antwoord',
    notHelpful: 'Niet nuttig',
    errorGeneric: 'Er ging iets mis. Probeer het nog eens of laat je e-mailadres achter.',
    retry: 'Probeer opnieuw',
    cleared: 'Gesprek gewist.',
    undo: 'Ongedaan maken',
    newAnswer: 'Nieuw antwoord',
    expand: 'Vergroten',
    collapse: 'Verkleinen',
    minimize: 'Minimaliseren',
    slow: 'Dit duurt langer dan normaal…',
    errorBudget:
      'De assistent is even niet beschikbaar. Laat je e-mailadres achter en we nemen contact met je op.',
    errorRate: 'Even rustig aan. Probeer het over een minuut opnieuw.',
    escalateTitle: 'Gesprek doorsturen',
    escalateEmail: 'E-mailadres',
    escalateConsent: 'Met versturen ga je akkoord dat we je e-mailadres gebruiken om te reageren.',
    escalateSend: 'Verstuur naar het team',
    escalateDoneOffice: 'Doorgestuurd. Je hoort binnen 4 kantooruren van ons.',
    escalateDoneClosed: 'Doorgestuurd. Je hoort de eerstvolgende werkdag van ons.',
    humanRequestMessage: 'Ik wil graag met een mens spreken.',
    bookTitle: 'Plan een gesprek',
    bookCta: 'Kies een moment',
    bookFallbackCta: 'Naar het contactformulier',
    salonTitle: 'AI Salon Groningen',
    salonCta: 'Meld je aan via Luma',
    pageCta: 'Breng me erheen',
    suggestionsTitle: 'Waar kan ik mee helpen?',
    newChat: 'Nieuw gesprek',
    close: 'Sluiten',
    suggestions: {
      default: [
        'Wat doet AI Heroes precies?',
        'Hoe helpen jullie met de EU AI Act?',
        'Wat is de AI Salon?',
      ],
      diensten: [
        'Welke dienst past bij mijn organisatie?',
        'Wat kost een AI-readiness scan?',
        'Hoe ziet een incompany training eruit?',
      ],
      cases: ['Welke resultaten halen jullie klanten?', 'Hebben jullie cases in mijn sector?'],
      salon: ['Wanneer is de volgende AI Salon?', 'Hoe meld ik me aan voor de AI Salon?'],
    },
  },
  en: {
    launcherLabel: 'Ask a question',
    title: 'AI Heroes assistant',
    aiBadge: 'AI assistant',
    disclosure:
      "You're chatting with the AI Heroes AI assistant. Answers come from our own site content and may be incomplete. A human is always one message away.",
    disclosureLink: 'How this works',
    inputPlaceholder: 'Type your question…',
    send: 'Send',
    stop: 'Stop',
    thinking: 'Writing…',
    talkToHuman: 'Talk to a human',
    sources: 'Sources',
    helpful: 'Helpful answer',
    notHelpful: 'Not helpful',
    errorGeneric: 'Something went wrong. Try again or leave your email address.',
    retry: 'Try again',
    cleared: 'Conversation cleared.',
    undo: 'Undo',
    newAnswer: 'New answer',
    expand: 'Expand',
    collapse: 'Shrink',
    minimize: 'Minimize',
    slow: 'This is taking longer than usual…',
    errorBudget: 'The assistant is briefly unavailable. Leave your email and we will get back to you.',
    errorRate: 'Easy does it. Try again in a minute.',
    escalateTitle: 'Forward conversation',
    escalateEmail: 'Email address',
    escalateConsent: 'By sending you agree that we use your email address to respond.',
    escalateSend: 'Send to the team',
    escalateDoneOffice: 'Forwarded. You will hear from us within 4 office hours.',
    escalateDoneClosed: 'Forwarded. You will hear from us the next working day.',
    humanRequestMessage: 'I would like to talk to a human.',
    bookTitle: 'Book a conversation',
    bookCta: 'Pick a time',
    bookFallbackCta: 'Go to the contact form',
    salonTitle: 'AI Salon Groningen',
    salonCta: 'Register via Luma',
    pageCta: 'Take me there',
    suggestionsTitle: 'What can I help with?',
    newChat: 'New conversation',
    close: 'Close',
    suggestions: {
      default: [
        'What does AI Heroes do exactly?',
        'How do you help with the EU AI Act?',
        'What is the AI Salon?',
      ],
      diensten: [
        'Which service fits my organisation?',
        'What does an AI readiness scan cost?',
        'What does an in-company training look like?',
      ],
      cases: ['What results do your clients get?', 'Do you have cases in my sector?'],
      salon: ['When is the next AI Salon?', 'How do I register for the AI Salon?'],
    },
  },
} as const;

export function suggestionsForPath(locale: ChatLocale, path: string): readonly string[] {
  const s = STRINGS[locale].suggestions;
  if (/\/(diensten|services)/.test(path)) return s.diensten;
  if (/\/cases/.test(path)) return s.cases;
  if (/ai-salon/.test(path)) return s.salon;
  return s.default;
}

export const DISCLOSURE_PATH = { nl: '/nl/legal/ai-assistent', en: '/en/legal/ai-assistant' } as const;

// Render-layer link allowlist (SDD D9 layer 7) — keep in sync with server/config.ts.
export const LINK_ALLOWLIST = ['aiheroes.io', 'lu.ma', 'cal.com'];
