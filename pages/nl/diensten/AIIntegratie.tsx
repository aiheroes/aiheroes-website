import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIIntegratieNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Systeemintegratie"
      subtitle="AI verbinden met je bestaande systemen. ERP, CRM, interne tools — we werken met wat je al hebt."
      seoDescription="AI Integratie: verbind AI-capaciteiten met je bestaande systemen. API-integraties, workflow automatisering en data pipelines. Door AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementatie"
      ctaLabel="Bespreek je project"
      trustedBy={["OLX Poland", "iFood Brazil", "Medux"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI die werkt met je bestaande landschap
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          De kracht van AI zit niet in losstaande tools, maar in de integratie met je dagelijkse werkprocessen. Wij verbinden AI-capaciteiten met je bestaande systemen — zodat je team de voordelen krijgt zonder van platform te hoeven wisselen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we integreren</h3>
          <ul className="space-y-2 text-stone-600">
            <li>AI-gestuurde automatisering in je ERP/CRM workflows</li>
            <li>Intelligente documentverwerking gekoppeld aan je DMS</li>
            <li>AI-assistenten die je interne kennisbank ontsluiten</li>
            <li>Geautomatiseerde data pipelines tussen systemen</li>
            <li>AI-aangedreven notificaties en beslissingsondersteuning</li>
            <li>API-integraties met LLMs en AI-diensten</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe we werken</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Assessment</h4>
            <p className="text-sm text-stone-600">
              We brengen je huidige systemen, API's en datastromen in kaart. Wat kan en wat moet?
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Bouwen</h4>
            <p className="text-sm text-stone-600">
              We ontwikkelen de integratie in sprints. Elke sprint levert werkende functionaliteit op.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Overdracht</h4>
            <p className="text-sm text-stone-600">
              Documentatie, monitoring en training zodat je team de integratie zelfstandig kan beheren.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Veelvoorkomende integraties</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Microsoft 365 + AI</h4>
            <p className="text-sm text-stone-600">
              AI-verrijking van SharePoint, Teams en Outlook workflows.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">ERP + AI</h4>
            <p className="text-sm text-stone-600">
              Voorspellende analyses en automatische verwerking in je ERP-systeem.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">CRM + AI</h4>
            <p className="text-sm text-stone-600">
              Lead scoring, automatische samenvattingen en intelligente routing.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Custom systemen</h4>
            <p className="text-sm text-stone-600">
              Ook met legacy systemen en maatwerkoplossingen vinden we een weg.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">2-6 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Vanaf €10.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Naadloos</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">In je workflow</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Eerst testen?</h3>
          <p>
            Niet zeker of de integratie werkt? Start met een{' '}
            <Link to="/nl/diensten/ai-prototyping" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Prototype
            </Link>{' '}
            om de haalbaarheid te bewijzen. Of{' '}
            <Link to="/nl/diensten/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              train je team
            </Link>{' '}
            om met de nieuwe integratie te werken.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
