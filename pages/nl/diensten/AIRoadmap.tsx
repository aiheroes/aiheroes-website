import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIRoadmapNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI Roadmap"
      subtitle="Van inzicht naar implementatieplan. We vertalen AI-mogelijkheden naar een concrete roadmap voor jouw organisatie."
      seoDescription="AI Roadmap: van inzicht naar implementatieplan. Business cases, ROI-berekeningen en een gefaseerd plan voor AI-implementatie. Door AI Heroes."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Een plan dat werkt, niet een rapport dat stoft
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Je weet dat AI relevant is. Misschien heb je al een readiness scan gedaan, of je team heeft al geëxperimenteerd. Nu is de vraag: wat moet je als eerste doen, en hoe zorg je dat het ook echt gebeurt? Daar is de AI Roadmap voor.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we opleveren</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Geprioriteerde lijst van AI-kansen met geschatte ROI</li>
            <li>Uitgewerkte business cases voor top 3-5 initiatieven</li>
            <li>Gefaseerd implementatieplan (quick wins → korte termijn → lange termijn)</li>
            <li>Technische architectuur aanbevelingen</li>
            <li>Resource planning: mensen, budget, tijdlijn</li>
            <li>Governance framework en risico-mitigatie</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Het proces</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Discovery</h4>
              <p className="text-stone-600 text-sm">Diepgaande analyse van processen, interviews met stakeholders, technische audit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Business Cases</h4>
              <p className="text-stone-600 text-sm">Uitwerking van kansen naar concrete business cases met kosten, baten en risico's.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Roadmap & Presentatie</h4>
              <p className="text-stone-600 text-sm">Gefaseerd plan met prioriteiten, tijdlijn en governance. Gepresenteerd aan MT of stuurgroep.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">2-4 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Vanaf €5.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Actiegericht</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Implementatieplan</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Roadmap klaar? Wij bouwen het ook.</h3>
          <p>
            Het unieke aan AI Heroes: dezelfde partner die je roadmap maakt, kan ook{' '}
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-white underline underline-offset-2 hover:text-white/80">
              bouwen wat erin staat
            </Link>. Geen overdracht, geen kennislek. En we{' '}
            <Link to="/nl/diensten/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              trainen je team
            </Link>{' '}
            om ermee te werken.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
