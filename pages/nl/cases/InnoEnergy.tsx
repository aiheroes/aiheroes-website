import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const InnoEnergyNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Case Study: InnoEnergy"
      subtitle="AI-gedreven investment intelligence platform. Van visie naar board-approved prototype."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De uitdaging
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          InnoEnergy, een toonaangevende Europese investeerder in duurzame energieoplossingen, beheert meer dan 200 portfoliobedrijven en een netwerk van 1.200+ partners. Met zo'n complex portfolio werd portfoliomanagement steeds uitdagender.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          Ze hadden een visie voor een AI-gedreven intelligence platform, maar hadden hulp nodig om dit om te zetten naar een concreet product dat de board zou overtuigen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">De uitdagingen</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Visie naar product:</strong> Abstract idee omzetten naar concrete features</li>
            <li><strong>Complexe data-integratie:</strong> AI die patronen herkent en voorspelt</li>
            <li><strong>Stakeholder buy-in:</strong> Board overtuigen met een overtuigend prototype</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De oplossing
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We ontwikkelden een clickable prototype dat de kernfunctionaliteiten van het platform demonstreerde. Een intelligent dashboard dat niet alleen data visualiseert, maar actief helpt bij investeringsbeslissingen.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Kernfuncties</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Intelligent Dashboard</h4>
            <p className="text-sm text-stone-600">
              Real-time overzicht van markttrends, portfolioprestaties en investeringskansen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI-Powered Advisory</h4>
            <p className="text-sm text-stone-600">
              Ingebouwde AI-assistent voor real-time analyse, aanbevelingen en portfolio-inzichten.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Investment Intelligence</h4>
            <p className="text-sm text-stone-600">
              Machine learning model dat investeerders koppelt aan kansen door predictive matching.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Portfolio Management</h4>
            <p className="text-sm text-stone-600">
              Helder overzicht van groeitrajecten, funding status en geografische spreiding.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Geavanceerde features</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="not-prose p-4 bg-brand-blue">
            <h4 className="text-lg font-serif text-white mb-2 leading-tight">Market Intelligence</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Real-time analytics van industrie-trends en concurrenten.
            </p>
          </div>
          <DarkBox accentColor="red" className="p-4">
            <h4 className="font-bold mb-2">Financial Health</h4>
            <p className="text-sm">
              Cashflow monitoring, burn rate analyse en runway projecties.
            </p>
          </DarkBox>
          <div className="not-prose p-4 bg-brand-blue">
            <h4 className="text-lg font-serif text-white mb-2 leading-tight">Exit Risk Assessment</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Waarderingsmonitoring en KPI-analyse voor strategische beslissingen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Het resultaat
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Het prototype won enthousiaste board-support en legde een praktische roadmap voor modernisering neer. We bewezen dat geavanceerde portfolio-analytics en intelligente beslissingsondersteuning geleverd kunnen worden via een intuïtieve, gebruiksvriendelijke interface.
        </p>

        <DarkBox accentColor="red" className="mb-8">
          <h3>De impact</h3>
          <p>
            Dit prototype laat zien hoe AI investeringsmanagement kan transformeren - geavanceerde portfolio-analyse toegankelijk en actionable maken. Data-gedreven inzichten die direct leiden tot betere investeringsbeslissingen.
          </p>
        </DarkBox>

        <div className="bg-stone-50 p-6 md:p-8">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Over InnoEnergy</h3>
          <p className="text-stone-600 leading-relaxed">
            InnoEnergy drijft Europa's duurzame energietransitie door strategische investeringen en innovatie. Ze leiden cruciale initiatieven in batterijopslag, groene waterstof en zonne-energie. Via hun educatieve programma's ontwikkelen ze ook de volgende generatie energieleiders, met 2.000+ master's en PhD afgestudeerden die de sector vormgeven.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
