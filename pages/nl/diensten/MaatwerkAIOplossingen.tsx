import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const MaatwerkAIOplossigenNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI op Maat"
      subtitle="Custom AI-toepassingen, gebouwd met jouw team. Van prototype tot productie."
      seoDescription="Maatwerk AI-oplossingen door AI Heroes. Custom AI-applicaties, integratie in bestaande systemen, van prototype tot productie. Gebouwd met jouw team."
      accentColor="blue"
      pillarBadge="Software & Implementatie"
      ctaLabel="Bespreek je project"
      trustedBy={["OLX Poland", "iFood Brazil", "Trabu", "TicketGenie"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Van idee naar werkende AI-oplossing
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Je weet wat je wilt bouwen — of je hebt een roadmap die duidelijk maakt welke AI-oplossing het meeste oplevert. Nu heb je een team nodig dat het kan bouwen. Wij leveren de expertise, zelfstandig of samen met jouw developers.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we bouwen</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Custom AI-applicaties op maat van jouw use case</li>
            <li>Integratie van AI in bestaande systemen en workflows</li>
            <li>RAG pipelines voor interne kennisbanken</li>
            <li>AI-assistenten en chatbots met jouw bedrijfscontext</li>
            <li>Automatisering van repetitieve processen met AI</li>
            <li>Proof of concepts en prototypes</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe we werken</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Scoping</h4>
            <p className="text-sm text-stone-600">
              We definiëren samen wat er gebouwd moet worden, met welke technologie, en hoe het past in je bestaande landschap.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Bouwen</h4>
            <p className="text-sm text-stone-600">
              Agile development in korte sprints. Regelmatige demo's zodat je altijd ziet waar we staan.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Oplevering</h4>
            <p className="text-sm text-stone-600">
              Werkende software, documentatie en training van je team om ermee te werken.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voorbeelden</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link to="/nl/cases/medux" className="p-6 bg-white border border-stone-200 hover:border-brand-blue transition-colors group">
            <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">Medux</h4>
            <p className="text-sm text-stone-600">
              AI-kosten met 70% gereduceerd door custom optimalisatie van hun AI-workflow.
            </p>
          </Link>
          <Link to="/nl/cases/trabu" className="p-6 bg-white border border-stone-200 hover:border-brand-blue transition-colors group">
            <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">Trabu</h4>
            <p className="text-sm text-stone-600">
              Custom AI-integratie die vertaalprocessen automatiseerde en kwaliteit verbeterde.
            </p>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Vanaf €15.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Per project</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">2-12 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Jouw team</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Erbij betrokken</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Het hele traject onder één dak</h3>
          <p>
            We bouwen niet alleen — we{' '}
            <Link to="/nl/diensten/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              trainen je team
            </Link>{' '}
            ook om met de oplossing te werken. En met onze{' '}
            <Link to="/nl/diensten/opportunity-scouting" className="text-white underline underline-offset-2 hover:text-white/80">
              consulting
            </Link>{' '}
            weet je zeker dat je het juiste bouwt.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
