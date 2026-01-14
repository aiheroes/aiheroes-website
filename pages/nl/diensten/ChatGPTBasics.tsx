import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const ChatGPTBasicsNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="ChatGPT Basics"
      subtitle="De snelste manier om productief te worden met ChatGPT. Van beginner naar power user in een middag."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Haal meer uit ChatGPT
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          ChatGPT is een krachtige tool, maar de meeste mensen gebruiken slechts een fractie van de mogelijkheden. In deze hands-on workshop leer je technieken die je direct productiever maken.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat je leert</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Effectief prompten: van vraag naar resultaat</li>
            <li>Custom Instructions instellen voor jouw werk</li>
            <li>GPTs maken en gebruiken</li>
            <li>Documenten analyseren en samenvatten</li>
            <li>Workflows automatiseren met ChatGPT</li>
            <li>Privacy en veiligheid: wat je wel en niet moet delen</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Van basis naar gevorderd</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We beginnen bij de basis en bouwen snel op naar gevorderde technieken. Of je nu voor het eerst ChatGPT opent of al regelmatig gebruikt - je leert nieuwe dingen die je direct kunt toepassen.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Prompting Technieken</h4>
            <p className="text-sm text-stone-600">
              Leer chain-of-thought, few-shot learning en andere technieken voor betere outputs.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Praktische Use Cases</h4>
            <p className="text-sm text-stone-600">
              Emails schrijven, content creëren, data analyseren, code genereren en meer.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Beperkingen Kennen</h4>
            <p className="text-sm text-stone-600">
              Begrijp waar ChatGPT goed in is en waar je kritisch moet blijven.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tools Integratie</h4>
            <p className="text-sm text-stone-600">
              Combineer ChatGPT met andere tools voor maximale productiviteit.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Format</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Deze workshop duurt een halve dag (3-4 uur) en kan op locatie of online worden gegeven. Deelnemers werken op hun eigen laptop met een ChatGPT account (gratis of Plus).
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">3-4 uur</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">5-15</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deelnemers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Hands-on</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Eigen laptop</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Geschikt voor</h3>
        <p className="text-stone-600 leading-relaxed">
          Deze workshop is bedoeld voor professionals die ChatGPT willen inzetten in hun dagelijkse werk. Geen technische achtergrond nodig - alleen nieuwsgierigheid en de wil om te leren.
        </p>
      </div>
    </PageLayout>
  );
};
