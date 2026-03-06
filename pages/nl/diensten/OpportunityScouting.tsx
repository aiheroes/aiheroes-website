import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const OpportunityScoutingNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Opportunity Scouting"
      subtitle="Waar laat je geld liggen? We analyseren je processen en komen terug met een roadmap die direct rendeert."
      seoDescription="AI Opportunity Scouting: ontdek waar AI waarde toevoegt in jouw organisatie. Strategische analyse met concrete roadmap en ROI-berekening. Onderdeel van onze consulting-pijler."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI-kansen ontdekken in jouw organisatie
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Veel organisaties weten dat AI kansen biedt, maar niet waar ze moeten beginnen. Met Opportunity Scouting duiken we diep in jouw processen en identificeren we precies waar AI de meeste waarde kan toevoegen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onze aanpak</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Diepgaande analyse van je huidige werkprocessen</li>
            <li>Interviews met key stakeholders uit verschillende afdelingen</li>
            <li>Identificatie van repetitieve taken en bottlenecks</li>
            <li>Concrete business cases met geschatte ROI</li>
            <li>Prioritering op basis van impact en haalbaarheid</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat je krijgt</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          Na de scouting ontvang je een uitgebreid rapport met:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Opportunity Overview</h4>
            <p className="text-sm text-stone-600">
              Complete lijst van AI-mogelijkheden in jouw organisatie, gecategoriseerd per afdeling en proces.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Uitgewerkte Business Cases</h4>
            <p className="text-sm text-stone-600">
              Gedetailleerde uitwerking van de top 3-5 kansen, inclusief kosten, baten en implementatiepad.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Implementatie Roadmap</h4>
            <p className="text-sm text-stone-600">
              Stapsgewijze aanpak om van idee naar werkende AI-oplossing te komen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tool Aanbevelingen</h4>
            <p className="text-sm text-stone-600">
              Concrete suggesties voor off-the-shelf tools of custom oplossingen per use case.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Opportunity Scouting is ideaal voor organisaties die:
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc list-inside">
          <li>Weten dat AI relevant is maar niet weten waar te beginnen</li>
          <li>Budget hebben gereserveerd voor digitale transformatie</li>
          <li>Concrete resultaten willen zien voordat ze investeren</li>
          <li>Een objectieve blik van buitenaf nodig hebben</li>
        </ul>

        <DarkBox accentColor="red" className="mb-8">
          <h3>Resultaatgarantie</h3>
          <p>
            We identificeren AI-oplossingen die je minimaal het geïnvesteerde bedrag terugverdienen. Vinden we geen waardevolle kansen? Dan betaal je niets.
          </p>
        </DarkBox>

        <DarkBox accentColor="blue" className="mb-8">
          <h3>Wat komt er na de scouting?</h3>
          <p>
            Roadmap in de hand? Wij helpen je ook verder. Met een{' '}
            <Link to="/nl/diensten/ai-readiness-scan" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Readiness Scan
            </Link>{' '}
            breng je de organisatie in kaart, en via onze{' '}
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-white underline underline-offset-2 hover:text-white/80">
              Software-pijler
            </Link>{' '}
            bouwen we wat in de roadmap staat.
          </p>
        </DarkBox>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Het proces</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Kick-off</h4>
              <p className="text-stone-600 text-sm">Kennismaking en afstemming van scope en verwachtingen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Interviews & Analyse</h4>
              <p className="text-stone-600 text-sm">2-3 weken onderzoek, interviews en procesanalyse.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Rapportage</h4>
              <p className="text-stone-600 text-sm">Presentatie van bevindingen en aanbevelingen.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
