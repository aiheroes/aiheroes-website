import React from 'react';
import { PresentationContainer } from '../components/PresentationContainer';
import { Slide } from '../components/Slide';
import { TitleSlide } from '../slides/TitleSlide';
import { ContentSlide } from '../slides/ContentSlide';
import { TwoColumnSlide } from '../slides/TwoColumnSlide';
import { ImageSlide } from '../slides/ImageSlide';
import { SectionSlide } from '../slides/SectionSlide';
import { Logo } from '../../components/Logo';
import { TrafficLightGauge } from './components/TrafficLightGauge';
import { DonutComparison } from './components/DonutChart';
import { FishboneDiagram } from './components/FishboneDiagram';
import { HexagonFlow } from './components/HexagonFlow';
import { AIJourneyTimeline } from './components/AIJourneyTimeline';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Brain, Zap, Search, MessageSquare, Code2, Lightbulb, Shield, AlertTriangle, Building, CheckSquare } from 'lucide-react';
import { PresentationConfig } from '../types';

const config: PresentationConfig = {
  title: 'Hanze Workshop: AI in Education',
  author: 'Jan Brusse',
  date: new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  lang: 'nl',
};

export const HanzeWorkshop: React.FC = () => {
  return (
    <PresentationContainer config={config}>
      {/* Slide 1: Title */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full bg-brand-dark text-white p-12">
          <Logo className="w-48 h-48 mb-8" variant="square" />
          <h1 className="text-6xl font-serif mb-6">Onderwijs & AI</h1>
          <div className="mt-12 text-center">
            <p className="text-2xl font-semibold mb-2">Jan Brusse</p>
            <p className="text-xl text-white/70">AI Trainer</p>
          </div>
        </div>
      </Slide>

      {/* Slide 2: Introductie */}
      <SectionSlide title="Introductie" theme="dark" />

      {/* Slide 3: Jan Brusse Profile */}
      <Slide>
        <div className="flex items-center justify-center h-full p-16 bg-gradient-to-br from-brand-light to-stone-100">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-serif text-brand-dark mb-12">Jan Brusse</h2>
            <div className="space-y-6 text-2xl text-stone-700">
              <p className="flex items-center gap-4">
                <span className="w-3 h-3 bg-brand-red rounded-full"></span>
                Technical AI
              </p>
              <p className="flex items-center gap-4">
                <span className="w-3 h-3 bg-brand-blue rounded-full"></span>
                Hands-on Maker
              </p>
              <p className="flex items-center gap-4">
                <span className="w-3 h-3 bg-brand-taupe rounded-full"></span>
                Creatieve Geek
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 4: AI in de Praktijk */}
      <SectionSlide title="AI in de Praktijk" subtitle="Van begrip naar implementatie" theme="dark" />

      {/* Slide 5: Pokerspelers */}
      <TwoColumnSlide
        title="AI is zoals Pokerspelen"
        left={
          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-bold text-2xl mb-3 text-brand-red">Pokerspelers:</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• Keuzes maken in een onzeker landschap</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-3 text-brand-blue">AI Systems:</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• Incomplete informatie gebruiken om keuze op te baseren</li>
                <li>• Kans en risico begrijpen</li>
                <li>• Leren van meerdere games over de loop van tijd</li>
                <li>• Gebruikt onzekere data om een oplossing te genereren</li>
                <li>• In de kern op statistiek en data gebaseerd</li>
                <li>• Leert van context op korte termijn en van nieuwe training op datasets op lange termijn</li>
              </ul>
            </div>
          </div>
        }
        right={
          <div className="flex items-center justify-center h-full">
            <img
              src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&auto=format&fit=crop"
              alt="Poker table with chips and cards"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        }
      />

      {/* Slide 6: The AI Journey */}
      <Slide>
        <AIJourneyTimeline />
      </Slide>

      {/* Slide 7: Voor vandaag */}
      <ImageSlide
        imageUrl="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&auto=format&fit=crop"
        overlay="dark"
      >
        <h2 className="text-5xl font-serif text-white mb-8">Voor vandaag</h2>
        <div className="grid grid-cols-2 gap-8 text-white text-lg max-w-5xl">
          <div>
            <h3 className="font-bold text-2xl mb-4 text-brand-red">Wat is AI</h3>
            <ul className="space-y-2">
              <li>• Wat kan het wel en wat kan het niet</li>
              <li>• AI in het onderwijs</li>
              <li>• De belangrijkste punten</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4 text-brand-blue">Praktijk</h3>
            <ul className="space-y-2">
              <li>• Inlichten van studenten over AI gebruik</li>
              <li>• AI gebruiken als docent</li>
              <li>• Aan de slag met AI in opdrachten</li>
              <li>• Organisatorisch AI beleid</li>
            </ul>
          </div>
        </div>
      </ImageSlide>

      {/* Slide 8: Effectief & Veilig AI */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-5xl font-serif text-brand-dark mb-16">Effectief & Veilig AI</h2>
          <div className="grid grid-cols-2 gap-12 max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-20 h-20 text-brand-blue mb-4" />
              <h3 className="font-bold text-xl mb-2">Effectief en veilig prompten</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <AlertTriangle className="w-20 h-20 text-brand-red mb-4" />
              <h3 className="font-bold text-xl mb-2">Voorzichtig omgaan met data</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Building className="w-20 h-20 text-brand-taupe mb-4" />
              <h3 className="font-bold text-xl mb-2">Organisatie beleid</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckSquare className="w-20 h-20 text-brand-blue mb-4" />
              <h3 className="font-bold text-xl mb-2">Output verificatie</h3>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 9: Section - Wat is AI */}
      <SectionSlide title="Wat is AI en hoe werkt het?" theme="dark" />

      {/* Slide 10: Wat is AI Eigenlijk */}
      <ContentSlide
        title="Wat is AI Eigenlijk?"
        subtitle="LLMs = Statistische patroonherkenning"
        bullets={[
          'Volgende woord voorspellen op basis van waarschijnlijkheid',
          'NIET: denken, redeneren, begrijpen',
          'Getraind op massieve hoeveelheden tekstdata',
          'Geoptimaliseerd voor plausibiliteit, niet waarheid',
        ]}
      />

      {/* Slide 11: Waarom AI */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-gradient-to-br from-yellow-50 to-orange-50">
          <Zap className="w-24 h-24 text-yellow-500 mb-8" />
          <h2 className="text-5xl font-serif text-brand-dark mb-12">Waarom AI? Wat kan het</h2>
          <div className="space-y-4 text-2xl text-stone-700 max-w-3xl">
            <p>• Patroonsherkenning op gigantische schaal</p>
            <p>• Snel & (theoretisch) accuraat</p>
            <p>• Veel real world toepassingen</p>
            <p>• Informatie en data inzicht</p>
          </div>
        </div>
      </Slide>

      {/* Slide 12: Waar is AI goed in */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-5xl font-serif text-brand-dark mb-16">Waar is AI goed in?</h2>
          <div className="grid grid-cols-3 gap-12 max-w-6xl">
            <div className="text-center">
              <Search className="w-16 h-16 text-brand-blue mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3 text-brand-blue">Patroonsherkenning</h3>
              <ul className="text-stone-600 space-y-1 text-sm">
                <li>Gegevensanalyse</li>
                <li>Snel en grote verwerkingscapaciteit</li>
              </ul>
            </div>
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3 text-brand-red">Taalbegrip</h3>
              <ul className="text-stone-600 space-y-1 text-sm">
                <li>Begrijpt gegeven context voor de taak</li>
                <li>Spreekt in menselijke taal</li>
              </ul>
            </div>
            <div className="text-center">
              <Code2 className="w-16 h-16 text-brand-taupe mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3 text-brand-taupe">Multimodale verwerking</h3>
              <ul className="text-stone-600 space-y-1 text-sm">
                <li>Cross-format analyse (text, image, excel etc.)</li>
                <li>Kan geïntegreerd worden in verschillende omgevingen</li>
                <li>Verwerkt data in real-time</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 13: AI Vandaag Exponentieel snel */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-dark text-white">
          <h2 className="text-5xl font-serif mb-16">AI Vandaag: Exponentieel snel</h2>
          <div className="grid grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-black">Flux</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">deepseek</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-green-600">OpenAI</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-orange-600">Claude</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-cyan-600">perplexity</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 14: Beperkingen */}
      <ImageSlide
        imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop"
        overlay="dark"
      >
        <div className="max-w-3xl">
          <h2 className="text-5xl font-serif text-white mb-8">Beperkingen van AI</h2>
          <ul className="space-y-3 text-xl text-white">
            <li>• Patroonherkenning vs. echt begrip</li>
            <li>• Confidence vs. betrouwbaarheid</li>
            <li>• Verificatie vereisten</li>
            <li>• Veiligheids- en privacy issues</li>
            <li>• Hoe te integreren?</li>
          </ul>
          <p className="mt-8 text-brand-red font-bold text-2xl">aiheroes.io</p>
        </div>
      </ImageSlide>

      {/* Slide 15: Het Hallucinatie-Probleem */}
      <ContentSlide
        title="Het Hallucinatie-Probleem"
        subtitle="AI wordt vaak gezien als waarheid. Maar..."
        bullets={[
          'Nep grafieken die perfect lijken',
          'Juridische citaten met verzonnen rechtszaken',
          'Verzonnen papers met fictieve auteurs',
        ]}
        footnote="[4] Lakera AI, 'LLM Hallucinations in 2025: How to Understand and Mitigate Them', October 2025"
      >
        <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500">
          <p className="text-stone-700 font-semibold mb-2">Waarom?</p>
          <p className="text-stone-600">
            Optimaliseert voor "klinkt juist", niet "is juist"
          </p>
        </div>
      </ContentSlide>

      {/* Slide 16: Studenten gebruiken AI */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-5xl font-serif text-brand-dark mb-16">Studenten gebruiken AI, maar beleid is vaag</h2>
          <div className="grid grid-cols-2 gap-12 max-w-5xl">
            <div className="bg-white p-8 border-l-4 border-brand-blue rounded">
              <h3 className="font-bold text-2xl mb-4">Realiteit</h3>
              <p className="text-stone-700">Studenten gebruiken AI</p>
            </div>
            <div className="bg-white p-8 border-l-4 border-red-500 rounded">
              <h3 className="font-bold text-2xl mb-4">Probleem</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• Geen duidelijk institutioneel beleid (?)</li>
                <li>• Onzekerheid bij docenten</li>
                <li>• Gebrek aan proactieve aanpak</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-8xl text-stone-300">?</div>
        </div>
      </Slide>

      {/* Slide 17: Het onderwijslandschap verandert */}
      <ContentSlide
        title="Het onderwijslandschap verandert"
        bullets={[
          'GenAI wordt educatiebreed ingezet, voornamelijk nog door studenten',
          'AI detectietools blijken vaak niet goed te werken',
          'Focus verschuift naar ontwerp, niet detectie',
          'Leidende universiteiten: mondeling examen teruggekeerd',
        ]}
        footnote="[1] Yomu AI, 'AI Detection Myths vs Reality for Academic Writing', October 2025 | [2] Plymouth University (PEARL), 'Should oral examination be reimagined in the era of AI?', 2025"
      />

      {/* Slide 18: Section - AI in het Onderwijs */}
      <SectionSlide title="AI in het Onderwijs" theme="dark" />

      {/* Slide 19: Toegang tot AI */}
      <ImageSlide
        imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop"
        overlay="dark"
      >
        <div className="max-w-3xl">
          <h2 className="text-5xl font-serif text-white mb-8">Toegang tot AI</h2>
          <ul className="space-y-4 text-xl text-white">
            <li>• Niet iedereen gebruikt dezelfde tools</li>
            <li>• Niet iedereen kan voor elke AI tool geld neerleggen</li>
            <li>• Kan een groot verschil ontstaan door een unequal playing field</li>
          </ul>
          <p className="mt-8 text-sm text-white/70">
            [3] SRHE Blog, "Will GenAI narrow or widen the digital divide in higher education?", April 2025
          </p>
        </div>
      </ImageSlide>

      {/* Slide 20: Hexagon Flow */}
      <Slide>
        <HexagonFlow />
      </Slide>

      {/* Slide 21: Fishbone Diagram */}
      <Slide>
        <FishboneDiagram />
      </Slide>

      {/* Slide 22: Hoe kan AI worden gebruikt */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-16 text-center">
            Hoe kan AI worden gebruikt voor academische taken?
          </h2>
          <div className="grid grid-cols-2 gap-12 max-w-5xl">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-12 h-12 text-brand-blue flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Samenvatten & Schrijven</h3>
                <p className="text-stone-600">AI kan helpen bij het creëren van teksten en het samenvatten van informatie.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="w-12 h-12 text-brand-red flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Herformuleren & Structureren</h3>
                <p className="text-stone-600">AI kan complexe ideeën toegankelijker maken door informatie te herformuleren en te structureren.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Code2 className="w-12 h-12 text-brand-taupe flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Code</h3>
                <p className="text-stone-600">AI kan helpen bij het schrijven van code voor verschillende projecten.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lightbulb className="w-12 h-12 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Brainstormen</h3>
                <p className="text-stone-600">AI kan innovatieve benaderingen bieden voor probleemoplossing en creativiteit.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 23: Cognitieve Uitbesteding vs Delegatie */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-16">Cognitieve Uitbesteding vs. Delegatie</h2>
          <div className="grid grid-cols-2 gap-12 max-w-6xl">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-500 rounded-lg p-8">
              <h3 className="font-bold text-2xl mb-6 text-red-900">AI Uitbesteding (Slecht)</h3>
              <ul className="space-y-3 text-stone-700">
                <li>• Gebruikt AI om denken te vermijden</li>
                <li>• Student slaat moeite over</li>
                <li>• Leren vindt niet plaats</li>
                <li className="italic">"Doe dit voor mij, ik wil het antwoord"</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-500 rounded-lg p-8">
              <h3 className="font-bold text-2xl mb-6 text-green-900">Delegatie (Goed)</h3>
              <ul className="space-y-3 text-stone-700">
                <li>• Gebruik AI voor verrijking van content</li>
                <li>• Leren blijft intact</li>
                <li>• AI helpt, vervangt niet</li>
                <li className="italic">"Ik heb het begrepen, check voor errors"</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 24: Intrinsieke Motivatie & AI */}
      <ContentSlide
        title="Intrinsieke Motivatie & AI"
        bullets={[
          'Wanneer AI instant oplost → intrinsieke motivatie verdwijnt',
          'Probleem moet proces-gebaseerde moeite hebben',
          'Ontwerp opdrachten waar de reis motivatie creëert, niet het antwoord',
        ]}
        footnote="[6] Deci, E. L., & Ryan, R. M. (2000). The 'what' and 'why' of goal pursuits | Spiegeloog Amsterdam, 'The Effect of Artificial Intelligence Chatbot Use on Intrinsic Learning Motivation', January 2025"
      />

      {/* Slide 25: En AI voor docenten */}
      <ContentSlide
        title="En AI voor docenten?"
        bullets={[
          'Lesplannen & discussieprompts',
          'Quizvragen',
          'Feedbacktemplates',
          'Opdracht ontwerp: AI brainstormt variaties',
          'Nakijken: AI doet een eerste check, de docent verifieert',
          'Onderzoek: AI helpt bronnen vinden',
          'Ideation: AI genereert concepten voor kernvragen',
        ]}
      >
        <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500">
          <p className="text-stone-700 font-semibold">
            Met de juiste bronnen kan dit veel werk besparen
          </p>
          <p className="text-stone-600 mt-2">Blijf altijd verifiëren!</p>
        </div>
      </ContentSlide>

      {/* Slide 26: Welke AI Tools */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-12">
            <span className="text-8xl font-bold text-cyan-500">P</span>
          </div>
          <h2 className="text-5xl font-serif mb-8">Welke AI Tools zijn er?</h2>
          <p className="text-xl max-w-3xl text-center mb-6">
            Algemene Large Language Model aanbieders zoals:
          </p>
          <p className="text-lg">
            Microsoft Copilot • Google Gemini • ChatGPT • Claude • Perplexity
          </p>
          <p className="mt-8 text-sm max-w-3xl text-center text-white/90">
            Vrijwel alle grote modellen kunnen hun gegenereerde antwoorden checken met behulp van bronnen op het internet,
            maar <strong>Perplexity</strong> steekt eruit als meest betrouwbaar als het gaat om geverifieerde outputs.
          </p>
        </div>
      </Slide>

      {/* Slide 27: Donut Comparison */}
      <Slide>
        <DonutComparison
          title="Waarom Perplexity voor Onderzoek?"
          subtitle="Perplexity vs. ChatGPT Citation Nauwkeurigheid"
        />
        <p className="absolute bottom-8 left-8 text-xs text-stone-500">
          [8] Aljourn, "ChatGPT vs Perplexity Web Search: PhD Student Found Winner for Academic Research", September 2025
        </p>
      </Slide>

      {/* Slide 28: Bridging the Gap */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-16">Van Fraude naar Eerlijk Gebruik</h2>
          <div className="flex items-center justify-center gap-16 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
              <p className="font-bold text-xl">AI Fraude</p>
              <p className="text-stone-600">Ongeoorloofd AI gebruik</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold">
                Voorlichting
              </div>
              <div className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold">
                Transparantie
              </div>
              <div className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold">
                Duidelijke Verwachtingen
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckSquare className="w-16 h-16 text-white" />
              </div>
              <p className="font-bold text-xl">Eerlijk AI Gebruik</p>
              <p className="text-stone-600">Toegestaan en ethisch AI gebruik</p>
            </div>
          </div>
          <p className="text-sm text-stone-500 mt-8">
            [7] Feedback Fruits, "Transforming authentic assessment with AI", June 2025
          </p>
        </div>
      </Slide>

      {/* Slide 29-34: Traffic Light Gauge (Interactive) */}
      <Slide>
        <div className="h-full bg-gradient-to-br from-brand-light to-stone-100">
          <TrafficLightGauge />
        </div>
      </Slide>

      {/* Slide 35: Overzicht Tot Nu Toe */}
      <ContentSlide
        title="Overzicht Tot Nu Toe"
        bullets={[
          'Heldere verwachtingen scheppen bij studenten',
          'AI gebruik en proces als onderdeel van ingeleverd werk',
          'Begrijpen hoe AI werkt (statistisch, niet magisch)',
          'Hallucinaties tegengaan',
          'Tool landscape: kies per context',
          'AI Wijzer als praktisch kader voor vakken',
        ]}
      />

      {/* Slide 36: Break */}
      <Slide>
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-brand-blue to-purple-600 text-white">
          <div className="text-center">
            <h2 className="text-7xl font-serif mb-6">AI-powered Break!</h2>
            <p className="text-2xl text-white/80">☕ Tijd voor een pauze</p>
          </div>
        </div>
      </Slide>

      {/* Slide 37: Hands-on discussie */}
      <ImageSlide
        imageUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&auto=format&fit=crop&blur=10"
        overlay="dark"
      >
        <h2 className="text-6xl font-serif text-white mb-8">Hands-on discussie & opdrachten</h2>
        <ul className="space-y-4 text-2xl text-white">
          <li>• Aan de slag met Large Language Models</li>
          <li>• Hoe kan jij of de student AI gebruiken met deze opdrachten?</li>
          <li>• Wat zijn de uitkomsten hiervan?</li>
        </ul>
      </ImageSlide>

      {/* Slide 38: Verkeerd gebruik tegengaan */}
      <ContentSlide
        title="Verkeerd gebruik van AI tegengaan"
        bullets={[
          'Plagiaatcheckers makkelijk te ontwijken',
          'Proces wordt belangrijk(er) dan eindresultaat',
          'Oplossing: Ontwerp waarbij AI niet het hele werk kan doen',
        ]}
        footnote="[10] ArXiv, 'Designing AI-Resilient Assessments Using Interconnected Problem Design', 2025"
      />

      {/* Slide 39: Het mondeling tentamen */}
      <ContentSlide
        title="Het mondeling tentamen"
        subtitle="Oxford, LSE, South Australia: teruggekeerd naar mondelinge examens"
        bullets={[
          'Student kan AI-werk niet ter plekke verdedigen',
          'Bijvoorbeeld: "Waarom deze variabele?"',
          'Bijvoorbeeld: "Hoe werkt deze formule?"',
          'Bijvoorbeeld: "Hoe heb je deze bron geverifieerd?"',
        ]}
        footnote="[2] Plymouth University (PEARL), 'Should oral examination be reimagined in the era of AI?', 2025"
      >
        <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500">
          <p className="text-stone-700 font-semibold">
            Studenten die zonder verificatie AI gebruiken falen
          </p>
        </div>
      </ContentSlide>

      {/* Slide 40: Opdrachten maken met AI in gedachte */}
      <ImageSlide
        imageUrl="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&auto=format&fit=crop"
        overlay="dark"
      >
        <div className="max-w-3xl">
          <h2 className="text-5xl font-serif text-white mb-8">Opdrachten maken met AI in gedachte</h2>
          <ol className="space-y-3 text-xl text-white">
            <li>1. Verwijs naar specifieke lectures</li>
            <li>2. Toon drafts, logs, concepten, prototypes</li>
            <li>3. Lokale context, interviews</li>
            <li>4. Verificatiemoment door een mondelinge check</li>
            <li>5. Beoordeel de redenering en proces, niet alleen het eindresultaat</li>
          </ol>
          <p className="mt-8 text-sm text-white/70">
            [11] Faculty Focus, "Designing AI-Resistant Assignments in Educational Leadership Course", January 2026
          </p>
        </div>
      </ImageSlide>

      {/* Slide 41: Het Nieuwe Nakijken */}
      <Slide>
        <ProcessTimeline />
      </Slide>

      {/* Slide 42: AI Disclosure Statement */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-12">Transparantie: AI Disclosure Statement</h2>

          <div className="bg-white p-8 border-2 border-brand-blue rounded-lg max-w-3xl mb-12">
            <p className="text-lg text-stone-700 mb-4 italic">
              "Ik heb AI gebruikt voor: [grammatica/structuur/brainstorm/code]
            </p>
            <p className="text-lg text-stone-700 mb-4 italic">
              Hier is mijn prompt log: [bijlage]
            </p>
            <p className="text-lg text-stone-700 italic">
              Ik heb de output geverifieerd op: [X, Y, Z]"
            </p>
          </div>

          <div className="max-w-3xl">
            <h3 className="font-bold text-2xl mb-4">Voordelen:</h3>
            <ul className="space-y-2 text-lg text-stone-700">
              <li>• Voorkomt panic-cheating</li>
              <li>• Toont eerlijke reflectie</li>
              <li>• Bouwt vertrouwen</li>
              <li>• Geeft aanzet tot kritisch denken</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 43: Perplexity in actie */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
          <h2 className="text-5xl font-serif mb-16">Perplexity in actie</h2>
          <div className="grid grid-cols-2 gap-12 max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl">❓</span>
              </div>
              <h3 className="font-bold text-xl mb-2">1. Kies een onderwerp</h3>
              <p className="text-white/90">Selecteer een onderwerp gerelateerd aan TBK om te onderzoeken</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl">👁️</span>
              </div>
              <h3 className="font-bold text-xl mb-2">2. Observeer citaties</h3>
              <p className="text-white/90">Let op hoe Perplexity citaties presenteert</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl">⚖️</span>
              </div>
              <h3 className="font-bold text-xl mb-2">3. Verifieer citaten</h3>
              <p className="text-white/90">Controleer citaten tegen hun originele bronnen</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl">💬</span>
              </div>
              <h3 className="font-bold text-xl mb-2">4. Bespreek resultaten</h3>
              <p className="text-white/90">Analyseer wat goed ging en wat potentiële tekortkomingen zijn</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 44: Hands-on Opdracht Redesign */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-12">Hands-on: Opdracht Redesign</h2>

          <div className="grid grid-cols-2 gap-12 max-w-6xl mb-12">
            <div>
              <h3 className="font-bold text-2xl mb-6 text-brand-blue">Stappen:</h3>
              <ol className="space-y-3 text-lg text-stone-700">
                <li>1. Maak 2 of 3 tallen</li>
                <li>2. Selecteer voorbeeldopdracht</li>
                <li>3. Kies Schaal Label (1-5)</li>
                <li>4. Herontwerp met behulp van AI</li>
                <li>5. Bereid discussie voor</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-6 text-brand-red">Uitkomst:</h3>
              <ul className="space-y-3 text-lg text-stone-700">
                <li>• Nieuwe opdracht</li>
                <li>• Welke aanpassingen gekozen & waarom</li>
                <li>• Hoe werkt nakijken nu?</li>
                <li>• Nabespreking</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold">
              1. AI Implementeren
            </div>
            <div className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold">
              2. Tools Selecteren
            </div>
            <div className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold">
              3. Contextvragen
            </div>
            <div className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold">
              4. Success Stories
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 45: Onderwerpen voor discussie */}
      <ContentSlide
        title="Onderwerpen voor discussie"
        bullets={[
          'Verwachtingen bij studenten',
          'Eerlijk en gelijke toegang tot AI tools',
          'Nakijken met AI',
          'Hoe kies ik de juiste tools',
          'Waar gaat het nu mis',
          'Wat zou kunnen helpen',
          'Wat is het gewenste resultaat',
        ]}
      />

      {/* Slide 46: Break 2 */}
      <Slide>
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="text-center">
            <h2 className="text-7xl font-serif mb-6">AI-powered Break!</h2>
            <p className="text-2xl text-white/80">☕ Tijd voor een pauze</p>
          </div>
        </div>
      </Slide>

      {/* Slide 47: Section - Vervolgstappen */}
      <SectionSlide title="Vervolgstappen & Beleid" theme="dark" />

      {/* Slide 48: Welk niveau van AI-beleid */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-12">Welk niveau van AI-beleid is nodig?</h2>
          <div className="max-w-3xl space-y-6 text-lg">
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-brand-red rounded">
              <span className="text-3xl">🏢</span>
              <div>
                <h3 className="font-bold text-xl">Overkoepelend Beleid</h3>
                <p className="text-stone-600">Biedt een algemene richtlijn voor AI-gebruik binnen de instelling</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-brand-blue rounded">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="font-bold text-xl">Faculteitsbeleid</h3>
                <p className="text-stone-600">Specificeert AI-gebruik binnen specifieke faculteiten</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-brand-taupe rounded">
              <span className="text-3xl">📚</span>
              <div>
                <h3 className="font-bold text-xl">Vakbeleid</h3>
                <p className="text-stone-600">Definieert AI-gebruik binnen individuele vakken</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-green-500 rounded">
              <span className="text-3xl">📝</span>
              <div>
                <h3 className="font-bold text-xl">Opdrachtbeleid</h3>
                <p className="text-stone-600">Stelt regels voor AI-gebruik in specifieke opdrachten</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 49: Organisatorisch vs Persoonlijk */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-light">
          <h2 className="text-4xl font-serif text-brand-dark mb-16">Organisatorisch vs. Persoonlijk Vakbeleid</h2>
          <div className="grid grid-cols-2 gap-12 max-w-6xl">
            <div className="bg-white p-8 border-l-4 border-brand-red rounded-lg">
              <h3 className="font-bold text-2xl mb-6">Hanze:</h3>
              <ul className="space-y-3 text-stone-700">
                <li>• Er is nog geen duidelijk beleid</li>
                <li>• Zal zich breed opstellen</li>
                <li>• Is niet vakspecifiek</li>
              </ul>
            </div>
            <div className="bg-white p-8 border-l-4 border-green-500 rounded-lg">
              <h3 className="font-bold text-2xl mb-6">Jouw vakbeleid:</h3>
              <ul className="space-y-3 text-stone-700">
                <li>• Onderwerpspecifiek</li>
                <li>• Meteen inzetbaar</li>
                <li>• Maak gebruik van bestaande frameworks</li>
                <li>• Run kleine pilots</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 50: Vragen voor de Hanze */}
      <ContentSlide
        title="Vragen voor de Hanze"
        bullets={[
          'Wat kan de Hanze betekenen voor studenten op gebied van AI?',
          'Institutionele licenties voor Perplexity/Gemini EDU?',
          'Toestaan of verbieden van tools buiten deze scope?',
          'Inzicht in gebruik van AI? Privacyconcern?',
          'Verdere vak-agnostische AI training voor studenten?',
          'Hoe wordt AI gebruikt in industrie X (baanvoorbereiding)?',
        ]}
      />

      {/* Slide 51: Discussiepunt Organisatiebreed */}
      <ContentSlide
        title="Discussiepunt: Organisatiebreed Vervolg"
        bullets={[
          'Hoe zorgen we voor meer AI kennis binnen en buiten TBK?',
          'Wat moet er veranderen voor effectieve omgang met AI?',
          'AI evolueert snel, hoe ga je hier mee om?',
          'Wat is er nodig van de Hanze?',
        ]}
      />

      {/* Slide 52: Persoonlijk actieplan */}
      <ContentSlide
        title="Discussiepunt: Hoe een persoonlijk actieplan er uit kan zien"
        bullets={[
          'Waar liggen de kansen in jouw vak mbt AI',
          'AI-proof de opdrachten waar nodig is',
          'Overweeg nieuwe nakijkstructuren',
          'Introduceer studenten aan AI verwachtingen',
        ]}
      />

      {/* Slide 53: Section - Afsluiting */}
      <SectionSlide title="Afsluiting" theme="dark" />

      {/* Slide 54: Wat neem je mee */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-gradient-to-br from-brand-light to-stone-100">
          <h2 className="text-5xl font-serif text-brand-dark mb-16 text-center">Wat neem je mee?</h2>
          <div className="space-y-8 max-w-3xl">
            <div className="bg-white p-8 border-l-4 border-brand-blue rounded-lg">
              <h3 className="font-bold text-2xl mb-3">Wat kan je nu al aanpassen?</h3>
              <p className="text-stone-600">Denk na over kleine, concrete stappen die je meteen kunt nemen</p>
            </div>
            <div className="bg-white p-8 border-l-4 border-brand-red rounded-lg">
              <h3 className="font-bold text-2xl mb-3">Wat baart nog zorgen?</h3>
              <p className="text-stone-600">Wat zijn de uitdagingen die we nog moeten adresseren?</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 55: Closing Statement */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full p-12 bg-brand-dark text-white text-center">
          <h2 className="text-5xl font-serif mb-12 max-w-4xl leading-tight">
            AI gaat niet weg.
          </h2>
          <p className="text-2xl max-w-3xl leading-relaxed mb-8">
            Het doel is niet het te verbannen maar studenten voor te bereiden op een wereld
            waar AI een nieuwe realiteit is.
          </p>
          <p className="text-xl max-w-3xl leading-relaxed text-white/80">
            Denk na over hoe AI het TBK landschap verandert, ook met name hoe potentiële
            werkgevers tegenover AI staan.
          </p>
        </div>
      </Slide>

      {/* Slide 56: Thank You */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full bg-brand-dark text-white">
          <Logo className="w-64 h-64 mb-12" variant="square" />
          <h1 className="text-7xl font-serif mb-6">Thank you</h1>
          <p className="text-3xl mb-12">Questions Welcome</p>
          <p className="text-2xl text-brand-red font-bold">aiheroes.io</p>
        </div>
      </Slide>
    </PresentationContainer>
  );
};
