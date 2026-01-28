import {
  PresentationContainer,
  TitleSlide,
  ContentSlide,
  TwoColumnSlide,
  ImageSlide,
  QuoteSlide,
  SectionSlide,
  VideoSlide,
  PresentationConfig,
} from '../index';

const config: PresentationConfig = {
  title: 'AI Foundations Workshop',
  author: 'AI Heroes',
  date: new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  lang: 'nl',
  logo: '/logo.svg', // Update with your actual logo path
};

export default function DemoPresentation() {
  return (
    <PresentationContainer config={config}>
      {/* Slide 1: Title */}
      <TitleSlide
        title="AI Foundations"
        subtitle="De eerste stap van je team in AI"
        author="AI Heroes"
        date={config.date}
        logo={config.logo}
        notes="Welcome everyone! This is a 2-hour interactive workshop where we'll explore practical AI applications."
      />

      {/* Slide 2: Section divider */}
      <SectionSlide
        number="01"
        title="Wat is AI eigenlijk?"
        subtitle="Van science fiction naar dagelijks gereedschap"
        accent="red"
        notes="Start with demystifying AI. Many people think it's magic, but it's just pattern recognition at scale."
      />

      {/* Slide 3: Content with progressive reveal */}
      <ContentSlide
        title="Waarom AI nu?"
        items={[
          'GPT-4 en Claude brengen AI naar iedereen',
          'De tools zijn eindelijk gebruiksvriendelijk',
          'Je concurrenten gebruiken het al',
          'Het gaat niet meer weg'
        ]}
        progressive
        accent="red"
        notes="Click through each point. Emphasize the accessibility - you don't need a PhD anymore. Ask audience: who has already tried ChatGPT?"
      />

      {/* Slide 4: Two column layout */}
      <TwoColumnSlide
        title="AI vs. Traditionele Software"
        left={
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold text-brand-dark mb-6">
              Traditionele Software
            </h3>
            <ul className="space-y-3 font-sans text-lg text-brand-dark/80">
              <li>• Expliciete instructies</li>
              <li>• Voorspelbare output</li>
              <li>• Deterministisch</li>
              <li>• Regels en logica</li>
            </ul>
          </div>
        }
        right={
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold text-brand-blue mb-6">
              AI Systemen
            </h3>
            <ul className="space-y-3 font-sans text-lg text-brand-dark/80">
              <li>• Leren van patronen</li>
              <li>• Variabele output</li>
              <li>• Probabilistisch</li>
              <li>• Context en nuance</li>
            </ul>
          </div>
        }
        split="50/50"
        notes="This is a crucial distinction. Traditional software follows recipes. AI recognizes patterns and generates novel output."
      />

      {/* Slide 5: Quote */}
      <QuoteSlide
        quote="Frans heeft ons een fantastische workshop gegeven waar we met de theorie en de praktijk aan de slag zijn gegaan."
        author="Bobby Kremer"
        role="Nationale Postcode Loterij"
        accent="red"
        notes="Real client feedback. They went from zero to deploying AI tools in their workflow within 2 weeks."
      />

      {/* Slide 6: Section divider */}
      <SectionSlide
        number="02"
        title="Prompting 101"
        subtitle="Hoe praat je met een AI?"
        accent="blue"
        notes="Now we get practical. Prompting is the new programming. It's a skill you can learn."
      />

      {/* Slide 7: Content slide */}
      <ContentSlide
        title="De anatomie van een goede prompt"
        subtitle="Vier elementen die altijd werken"
        items={[
          'Context: Vertel waar het over gaat',
          'Taak: Wat moet de AI doen?',
          'Format: Hoe wil je het antwoord?',
          'Tone: Welke stijl past erbij?'
        ]}
        accent="blue"
        notes="This is the CTFT framework. Context, Task, Format, Tone. Write it on the whiteboard."
      />

      {/* Slide 8: Image with overlay */}
      <ImageSlide
        src="/campaign-photos/groningen.webp"
        overlay={
          <div className="text-center">
            <h2 className="font-display text-5xl font-bold text-white mb-4">
              Wij zijn gevestigd in Groningen
            </h2>
            <p className="font-sans text-2xl text-white/80">
              Maar werken in heel Nederland en België
            </p>
          </div>
        }
        overlayPosition="center"
        overlayBg="dark"
        notes="Quick introduction to our team. Based in Groningen but we travel anywhere."
      />

      {/* Slide 9: Final slide */}
      <ContentSlide
        title="Wat nu?"
        subtitle="Volgende stappen na deze workshop"
        items={[
          'Probeer het zelf: 30 minuten per dag',
          'Deel successen met je team',
          'Identificeer één proces om te automatiseren',
          'Blijf leren en experimenteren'
        ]}
        accent="red"
        notes="End with clear action items. The goal is to get them excited and experimenting tomorrow."
      />

      {/* Slide 10: Contact */}
      <TitleSlide
        title="Vragen?"
        subtitle="Laten we praten over hoe AI jouw team kan helpen"
        background="bg-brand-dark"
        logo={config.logo}
        notes="Open for Q&A. Have business cards ready. Mention follow-up consultation offer."
      />
    </PresentationContainer>
  );
}
