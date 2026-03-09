import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIDevelopmentTeamsNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Dedicated Teams"
      subtitle="Dedicated AI-ontwikkelcapaciteit. Onze developers werken samen met jouw team. Flexibel schaalbaar."
      seoDescription="AI Development Teams: dedicated AI-ontwikkelcapaciteit. Team augmentatie, technisch leiderschap en flexibel schaalbare dev-capaciteit. Door AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementatie"
      ctaLabel="Bespreek je project"
      trustedBy={["OLX Poland", "iFood Brazil", "Prosus"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Jouw team, versterkt met AI-expertise
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Niet elk bedrijf heeft een volledig AI-team nodig, maar wel AI-capaciteit. Onze developers werken samen met jouw bestaande team — of zelfstandig als je nog geen ontwikkelcapaciteit hebt. Flexibel op- en afschalen, met technisch leiderschap inbegrepen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Werkmodellen</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Augmentatie:</strong> Onze developers sluiten aan bij jouw team en processen</li>
            <li><strong>Dedicated team:</strong> Wij leveren een volledig team met tech lead</li>
            <li><strong>Hybride:</strong> Mix van onze specialisten en jouw mensen</li>
            <li><strong>Projectbasis:</strong> Team voor een afgebakend project of sprint</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat je krijgt</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI-specialisten</h4>
            <p className="text-sm text-stone-600">
              Developers met ervaring in LLMs, RAG pipelines, computer vision en ML-integratie.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Technisch leiderschap</h4>
            <p className="text-sm text-stone-600">
              Een tech lead die architectuurbeslissingen neemt en kwaliteit bewaakt.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Flexibele schaling</h4>
            <p className="text-sm text-stone-600">
              Op- en afschalen naar behoefte. Geen langlopende contracten vereist.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Kennisoverdracht</h4>
            <p className="text-sm text-stone-600">
              We bouwen niet alleen — we zorgen dat jouw team leert en zelfstandig verder kan.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe het werkt</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Kennismaking</h4>
              <p className="text-stone-600 text-sm">We begrijpen je project, tech stack en teamdynamiek.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Matching</h4>
              <p className="text-stone-600 text-sm">We stellen het juiste team samen op basis van skills en fit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Onboarding</h4>
              <p className="text-stone-600 text-sm">Snelle start: binnen een week productief in jouw codebase.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold text-brand-dark">Delivery</h4>
              <p className="text-stone-600 text-sm">Agile sprints met regelmatige demo's. Transparant over voortgang.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-5 devs</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Team grootte</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1 week</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Opstarttijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Flexibel</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Op- en afschalen</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Meer dan alleen development</h3>
          <p>
            Naast ontwikkelcapaciteit bieden we ook{' '}
            <Link to="/nl/diensten/ai-integratie" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Integratie
            </Link>{' '}
            voor specifiek integratiewerk en{' '}
            <Link to="/nl/diensten/ai-voor-developers" className="text-white underline underline-offset-2 hover:text-white/80">
              training voor developers
            </Link>{' '}
            om je eigen team te upskilen.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
