import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUConsultancyNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Digitale Onafhankelijkheid"
      subtitle="Europese AI zonder vendor lock-in. Van bewustwording tot werkende oplossing — training, consulting en implementatie in één traject."
      seoDescription="Digitale onafhankelijkheid: Europese AI zonder vendor lock-in. Organisatiescan, training en implementatie van soevereine AI-oplossingen. Door AI Heroes."
      accentColor="red"
      ctaLabel="Plan een gesprek"
      trustedBy={["Tweede Kamer", "Envalior", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Europese AI die werkt — zonder afhankelijkheid
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Waarom nu</p>
          <p className="text-sm text-stone-200 mb-2">
            De CLOUD Act stelt de VS in staat om data op te eisen bij elk Amerikaans bedrijf — inclusief Microsoft, Google en AWS — ongeacht waar de servers staan. Vanaf <strong className="text-white">augustus 2025</strong> verplicht de EU AI Act transparantie over dataverwerking in AI-systemen.
          </p>
          <p className="text-sm text-stone-200">
            Organisaties zonder helder beeld van hun digitale omgeving lopen risico op non-compliance, dataverlies aan buitenlandse jurisdicties en strategische afhankelijkheid.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          De meeste organisaties weten dat ze iets moeten doen met digitale soevereiniteit — maar niet waar te beginnen. Wij bieden een compleet traject: van bewustwording en risico-inventarisatie tot werkende Europese AI-oplossingen. Geen losse onderdelen, maar één partner voor het hele pad.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Drie stappen naar onafhankelijkheid</h3>

        <div className="space-y-6 mb-10 not-prose">
          {/* Step 1: Training */}
          <div className="border-2 border-stone-200 p-6 md:p-8 hover:border-brand-red transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-red font-serif font-bold text-lg">1</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg mb-1">Bewustwording & Training</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3">Halve of hele dag op locatie</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Wat betekent de CLOUD Act voor jouw data? Welke risico's loop je met Amerikaanse platformen? En welke Europese alternatieven bestaan er? Een praktische sessie die je team op hetzelfde niveau brengt — zonder jargon.
                </p>
                <Link to="/nl/diensten/eu-training" className="text-sm font-medium text-brand-red hover:underline underline-offset-2">
                  Meer over de training &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2: Scan */}
          <div className="border-2 border-stone-200 p-6 md:p-8 hover:border-brand-blue transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-blue font-serif font-bold text-lg">2</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg mb-1">Organisatiescan & Roadmap</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">2–3 weken doorlooptijd</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  We brengen je volledige digitale omgeving in kaart: welke tools, waar data naartoe gaat, welke leveranciers onder Amerikaanse jurisdictie vallen. Je krijgt een risicomatrix, visuele roadmap met fasering en kostenschatting.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  <strong>Oplevering:</strong> adviesrapport met prioritering en concreet actieplan.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Implementation */}
          <div className="border-2 border-stone-200 p-6 md:p-8 hover:border-stone-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-dark font-serif font-bold text-lg">3</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg mb-1">Europese AI-implementatie</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Op maat van je organisatie</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Van lokaal model op eigen hardware tot Europese cloud-oplossingen (Mistral, Aleph Alpha). We bouwen AI die wél in Europa blijft — zonder concessies aan kwaliteit. Inclusief migratie, configuratie en training van medewerkers.
                </p>
                <Link to="/nl/diensten/eu-development" className="text-sm font-medium text-brand-dark hover:underline underline-offset-2">
                  Meer over implementatie &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Flexibel instappen</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Niet elke organisatie heeft alle drie de stappen nodig. Je kunt instappen waar je wilt: alleen een scan, alleen de training, of het volledige traject. Wij adviseren eerlijk over wat voor jouw situatie zinvol is.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1 dag – 3 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Afhankelijk van scope</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">3 pijlers</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Training · Scan · Bouw</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Op locatie</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Bij jouw organisatie</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Voor wie is dit?</h3>
          <p>
            Organisaties die grip willen krijgen op hun digitale afhankelijkheden. Overheden die zich voorbereiden op aanbestedingseisen rond datasoevereiniteit. Bedrijven die nu al willen voldoen aan de EU AI Act. En teams die willen begrijpen waarom dit ertoe doet.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
