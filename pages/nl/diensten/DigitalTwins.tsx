import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const DigitalTwinsNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Digital Twins"
      subtitle="Een digitale kopie van je organisatie die zelf de beste business cases vindt en de bijbehorende agents bouwt en uitrolt."
      seoDescription="Digital Twin van je organisatie: een virtueel model dat processen, data en beslissingen nabootst, business cases blootlegt en AI-agents uitrolt. Door AI Heroes, met partners als Novo Solutions."
      accentColor="blue"
      pillarBadge="Software & Implementatie"
      ctaLabel="Bespreek je digital twin"
      trustedBy={["Medux", "InnoEnergy", "Prosus", "OLX Poland"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Een werkend model van je organisatie, in plaats van een PowerPoint
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          De meeste AI-trajecten beginnen met aannames; aannames over waar de pijn zit, waar de winst zit, en welke afdeling het meest baat heeft. Een digital twin vervangt die aannames door een werkend model. We brengen je processen, data en beslissingen samen in een virtueel model van je organisatie, dat zelf signaleert waar AI waarde toevoegt en dat vervolgens ook de agents bouwt die het werk doen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat een digital twin doet</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Modelleert je processen, rollen en datastromen in één omgeving</li>
            <li>Simuleert de impact van veranderingen voordat je iets in productie zet</li>
            <li>Identificeert automatisch waar tijd, geld en kwaliteit weglekken</li>
            <li>Stelt zelf business cases op met onderbouwde ROI en risicoprofiel</li>
            <li>Bouwt en deployt de AI-agents die de gevonden cases uitvoeren</li>
            <li>Blijft meelopen met je organisatie en stelt zichzelf bij</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe we het opbouwen</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">In kaart brengen</h4>
            <p className="text-sm text-stone-600">
              We documenteren je processen, systemen (ERP, CRM, DMS), rollen en datastromen. Geen workshop van weken; we werken met wat er al ligt en vullen aan waar nodig.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Modelleren</h4>
            <p className="text-sm text-stone-600">
              Op basis van die input bouwen we een digitale representatie van je organisatie: afdelingen, workflows, beslismomenten en KPI's worden uitvoerbare blokken.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Simuleren en scoren</h4>
            <p className="text-sm text-stone-600">
              De twin draait scenario's, vergelijkt varianten en rangschikt kansen op verwachte impact. Je krijgt een lijst met onderbouwde business cases, niet een onderbuikgevoel.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">4</div>
            <h4 className="font-bold text-brand-dark mb-2">Agents uitrollen</h4>
            <p className="text-sm text-stone-600">
              Voor de cases die je groen licht geeft, configureert en deployt de twin de bijbehorende AI-agents. Aangesloten op je bestaande systemen, met monitoring en kill-switch.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat een digital twin oplevert</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Eind aan het giswerk</h4>
            <p className="text-sm text-stone-600">
              In plaats van "we denken dat AI hier kan helpen" weet je waar de grootste hefbomen zitten, en wat ze waard zijn.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Snelheid van uitrol</h4>
            <p className="text-sm text-stone-600">
              De stap van case naar werkende agent gaat van maanden naar weken; bouwblokken en integraties staan al klaar.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Risico vóór ingebruikname</h4>
            <p className="text-sm text-stone-600">
              Elke wijziging wordt eerst in de twin getest. Effect op doorlooptijd, kosten en compliance is zichtbaar voordat een agent live gaat.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Bestuurbaarheid</h4>
            <p className="text-sm text-stone-600">
              Eén plek waar je ziet welke agents draaien, wat ze doen, en welke business cases nog wachten. Geen schaduw-AI in losse teams.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voorbeelden van cases die een twin zelf vindt</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Backoffice en finance</h4>
            <p className="text-sm text-stone-600">
              Factuurverwerking, reconciliaties, contractcontroles; routinematig werk waar agents direct doorlooptijd weghalen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Sales en customer success</h4>
            <p className="text-sm text-stone-600">
              Lead scoring, gespreksvoorbereiding, automatische follow-ups en samenvattingen op basis van CRM-context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Operations en supply chain</h4>
            <p className="text-sm text-stone-600">
              Voorraadbeslissingen, planningsoptimalisatie en uitzonderingenafhandeling op basis van je eigen historische data.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Kennis en compliance</h4>
            <p className="text-sm text-stone-600">
              Interne kennisbanken ontsluiten, beleid toetsen aan praktijk en risicosignalen oppikken voordat ze problemen worden.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onze technologiekeuze</h3>
          <p className="text-stone-600 leading-relaxed mb-3">
            We bouwen op bewezen digital-twin-platformen en agent-frameworks. Voor enterprise-implementaties werken we white-label met specialistische partners (waaronder Novo Solutions), zodat je een doorontwikkeld platform krijgt zonder dat je vastzit aan één leverancier. Dezelfde aanpak die we hanteren bij{' '}
            <Link to="/nl/diensten/eu-consultancy" className="text-brand-blue underline underline-offset-2 hover:opacity-80">
              digitale onafhankelijkheid
            </Link>: Europese hosting waar dat moet, geen vendor lock-in, en open standaarden waar mogelijk.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Wat dat in de praktijk betekent: jouw twin draait op infrastructuur die je zelf kunt verplaatsen, met agents die je zelf kunt aan- en uitzetten, en met een datamodel dat van jou blijft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">4-10 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Tot eerste twin</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Vanaf €25.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Doorlopend</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">De twin leert mee</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie dit werkt</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Organisaties met veel processen</h4>
            <p className="text-sm text-stone-600">
              Honderden workflows, meerdere systemen en afdelingen die naast elkaar werken; precies de plek waar een twin het overzicht teruggeeft.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">MT's die ROI moeten verantwoorden</h4>
            <p className="text-sm text-stone-600">
              Geen losse pilots meer die geld kosten zonder zicht op opbrengst; elke agent komt voort uit een case die de twin onderbouwd heeft.
            </p>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Het hele traject onder één dak</h3>
          <p>
            We modelleren, simuleren en bouwen, en we{' '}
            <Link to="/nl/diensten/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              trainen je team
            </Link>{' '}
            om met de twin en de agents te werken. Nog niet zover? Begin met een{' '}
            <Link to="/nl/diensten/ai-readiness-scan" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Readiness Scan
            </Link>{' '}
            of een{' '}
            <Link to="/nl/diensten/ai-prototyping" className="text-white underline underline-offset-2 hover:text-white/80">
              Proof of Concept
            </Link>{' '}
            om de stap richting digital twin te de-risken.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
