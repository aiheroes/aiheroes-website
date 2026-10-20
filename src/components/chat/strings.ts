// Widget UI copy (SDD D8): chrome follows the site locale; NL follows the house style
// (informal-professional "je", no em-dashes, no "geen X maar Y").

import type { IconName } from '../hs/hs';

export type ChatLocale = 'nl' | 'en';

export const STRINGS = {
  nl: {
    launcherLabel: 'Stel je vraag',
    launcherContinue: 'Verder met je gesprek',
    // EU AI Act Art. 50: the assistant is an AI, visible in the header at all times (SDD D10).
    aiBadge: 'AI-assistent van AI Heroes',
    disclosure: 'Je chat met een AI. Antwoorden komen uit onze eigen pagina’s en kunnen fouten bevatten.',
    disclosureLink: 'Hoe dit werkt',
    inputPlaceholder: 'Typ je vraag…',
    send: 'Versturen',
    stop: 'Stop het antwoord',
    thinking: 'Aan het schrijven…',
    talkToHuman: 'Liever een mens?',
    source: 'Bron',
    sources: 'Bronnen',
    errorGeneric: 'Er ging iets mis met dit antwoord.',
    retry: 'Probeer opnieuw',
    newAnswer: 'Naar het nieuwe antwoord',
    expand: 'Vergroten',
    collapse: 'Verkleinen',
    slow: 'Dit duurt langer dan normaal.',
    offline: 'Je bent offline. Zodra je weer verbinding hebt, kun je verder.',
    errorBudget: 'De assistent is even niet beschikbaar. Laat je e-mailadres achter, dan nemen we contact met je op.',
    errorRate: 'Je stelde veel vragen achter elkaar. Probeer het over een minuut opnieuw.',
    escalateTitle: 'Gesprek doorsturen naar het team',
    escalateEmail: 'Je e-mailadres',
    escalateConsent: 'Met versturen ga je akkoord dat we je e-mailadres gebruiken om te reageren.',
    escalateSend: 'Doorsturen',
    escalateSending: 'Bezig…',
    escalateDoneOffice: 'Doorgestuurd. Je hoort binnen 4 kantooruren van ons.',
    escalateDoneClosed: 'Doorgestuurd. Je hoort de eerstvolgende werkdag van ons.',
    escalateError: 'Doorsturen lukte niet. Probeer het opnieuw of mail info@aiheroes.io.',
    humanRequestMessage: 'Ik wil graag met een mens spreken.',
    escalatedBar: 'Doorgestuurd naar het team',
    bookTitle: 'Plan een startsprint',
    bookText: 'Zes dagen, vaste prijs, vanaf €8.000. Kies een moment voor een eerste gesprek.',
    bookCta: 'Kies een moment',
    bookFallbackCta: 'Naar het contactformulier',
    salonTitle: 'AI Salon Groningen',
    salonText: 'De avond over AI in de praktijk, in Groningen.',
    salonCta: 'Naar de AI Salon',
    pageCta: 'Bekijk de pagina',
    suggestionsTitle: 'Waar kan ik mee helpen?',
    directLine: 'Liever direct contact? Mail [info@aiheroes.io](mailto:info@aiheroes.io) of [plan een startsprint](/nl/startsprint).',
    newChat: 'Nieuw gesprek',
    close: 'Sluiten',
    you: 'Jij',
    suggestions: {
      default: ['Wat kunnen jullie voor ons bouwen?', 'Wat is een startsprint?', 'Wat zit er bij elke bouw inbegrepen?'],
      build: ['Welke ingang past bij ons?', 'Wat kost een startsprint?', 'Bouwen jullie ook software zonder AI?'],
      cases: ['Welke resultaten halen jullie klanten?', 'Hebben jullie cases in mijn sector?', 'Hoe begon zo’n project?'],
      salon: ['Wanneer is de volgende AI Salon?', 'Hoe meld ik me aan?', 'Kan ik spreker worden?'],
      compliance: ['Wat moet ik regelen voor de AI Act?', 'Wat is de AI Act-check?', 'Helpen jullie met ISO 42001?'],
      training: ['Welke training past bij ons team?', 'Wat kost een training?', 'Telt dit voor AI-geletterdheid?'],
      knowledge: ['Waar begin ik met AI in mijn organisatie?', 'Wat kost AI-implementatie?', 'Wat moet ik regelen voor de AI Act?'],
      careers: ['Welke vacatures zijn er?', 'Hoe verloopt een sollicitatie?', 'Kan ik open solliciteren?'],
    },
  },
  en: {
    launcherLabel: 'Ask a question',
    launcherContinue: 'Continue your conversation',
    aiBadge: 'AI assistant of AI Heroes',
    disclosure: 'You are chatting with an AI. Answers come from our own pages and may contain mistakes.',
    disclosureLink: 'How this works',
    inputPlaceholder: 'Type your question…',
    send: 'Send',
    stop: 'Stop the answer',
    thinking: 'Writing…',
    talkToHuman: 'Rather talk to a person?',
    source: 'Source',
    sources: 'Sources',
    errorGeneric: 'Something went wrong with this answer.',
    retry: 'Try again',
    newAnswer: 'Go to the new answer',
    expand: 'Expand',
    collapse: 'Shrink',
    slow: 'This is taking longer than usual.',
    offline: 'You are offline. You can continue as soon as you are connected again.',
    errorBudget: 'The assistant is briefly unavailable. Leave your email address and we will get back to you.',
    errorRate: 'You asked a lot of questions in a row. Try again in a minute.',
    escalateTitle: 'Forward the conversation to the team',
    escalateEmail: 'Your email address',
    escalateConsent: 'By sending you agree that we use your email address to respond.',
    escalateSend: 'Forward',
    escalateSending: 'Sending…',
    escalateDoneOffice: 'Forwarded. You will hear from us within 4 office hours.',
    escalateDoneClosed: 'Forwarded. You will hear from us the next working day.',
    escalateError: 'Forwarding failed. Try again or email info@aiheroes.io.',
    humanRequestMessage: 'I would like to talk to a person.',
    escalatedBar: 'Forwarded to the team',
    bookTitle: 'Plan a start sprint',
    bookText: 'Six days, fixed price, from €8,000. Pick a time for a first conversation.',
    bookCta: 'Pick a time',
    bookFallbackCta: 'Go to the contact form',
    salonTitle: 'AI Salon Groningen',
    salonText: 'The evening about AI in practice, in Groningen.',
    salonCta: 'Go to the AI Salon',
    pageCta: 'See the page',
    suggestionsTitle: 'What can I help with?',
    directLine: 'Rather talk directly? Email [info@aiheroes.io](mailto:info@aiheroes.io) or [plan a start sprint](/en/start-sprint).',
    newChat: 'New conversation',
    close: 'Close',
    you: 'You',
    suggestions: {
      default: ['What can you build for us?', 'What is a start sprint?', 'What is included in every build?'],
      build: ['Which way in fits us?', 'What does a start sprint cost?', 'Do you also build software without AI?'],
      cases: ['What results do your clients get?', 'Do you have cases in my sector?', 'How did such a project start?'],
      salon: ['When is the next AI Salon?', 'How do I register?', 'Can I become a speaker?'],
      compliance: ['What do I need to arrange for the AI Act?', 'What is the AI Act check?', 'Do you help with ISO 42001?'],
      training: ['Which training fits our team?', 'What does a training cost?', 'Does this count for AI literacy?'],
      knowledge: ['Where do I start with AI in my organisation?', 'What does AI implementation cost?', 'What do I need to arrange for the AI Act?'],
      careers: ['Which vacancies are open?', 'How does applying work?', 'Can I send an open application?'],
    },
  },
} as const;

type SuggestionKey = keyof (typeof STRINGS)['nl']['suggestions'];

/** One icon per suggestion, in the same order in both languages. */
const SUGGESTION_ICONS: Record<SuggestionKey, readonly [IconName, IconName, IconName]> = {
  default: ['tool', 'stopwatch', 'list-checkbox'],
  build: ['puzzle', 'wallet', 'code'],
  cases: ['chart-line', 'search', 'rocket'],
  salon: ['calendar', 'add-user', 'microphone'],
  compliance: ['protect', 'checklist', 'certificate'],
  training: ['peoples', 'wallet', 'book'],
  knowledge: ['map-draw', 'wallet', 'protect'],
  careers: ['peoples', 'list-checkbox', 'mail'],
};

/** Suggestions that fit the page the visitor opened the chat on, each with its icon. */
export function suggestionsForPath(locale: ChatLocale, path: string): { text: string; icon: IconName }[] {
  const s = STRINGS[locale].suggestions;
  const rules: [RegExp, SuggestionKey][] = [
    [/\/(cases)(\/|$)/, 'cases'],
    [/ai-salon/, 'salon'],
    [/\/(compliance|kennis\/(ai-act|ai-beleid|iso-42001|ai-security|ai-en-avg|menselijk-toezicht|ai-geletterdheid)|insights\/(ai-act|ai-policy|iso-42001|ai-security|ai-and-gdpr|human-oversight|ai-literacy))/, 'compliance'],
    [/\/(training|incompany-ai-training|ai-geletterdheid-training|ai-literacy-training|digitale-soevereiniteit|digital-sovereignty)/, 'training'],
    [/\/(kennis|insights)(\/|$)/, 'knowledge'],
    [/\/(vacatures|careers)(\/|$)/, 'careers'],
    [/\/(wat-we-bouwen|what-we-build|nieuwe-ai-toepassing|new-ai-tool|software-vervangen|replace-software|eigen-beheer|self-hosted|startsprint|start-sprint|business-case|hoe-we-werken|how-we-work)/, 'build'],
  ];
  const key = rules.find(([re]) => re.test(path))?.[1] ?? 'default';
  return s[key].map((text, i) => ({ text, icon: SUGGESTION_ICONS[key][i] }));
}

export const DISCLOSURE_PATH = { nl: '/nl/legal/ai-assistent', en: '/en/legal/ai-assistant' } as const;

// Render-layer link allowlist (SDD D9 layer 7) — keep in sync with server/config.ts.
export const LINK_ALLOWLIST = ['aiheroes.io', 'lu.ma', 'luma.com', 'cal.com', 'calendar.app.google'];
