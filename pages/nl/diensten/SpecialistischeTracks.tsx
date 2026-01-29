import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const SpecialistischeTracksNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Specialistische Tracks"
      subtitle="Maatwerk trainingen voor gevorderde AI-toepassingen. Van advanced prompting tot volledige LLM-integraties."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Verder dan de basis
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Sommige teams hebben specifieke uitdagingen die een standaard workshop niet dekt. Onze specialistische tracks zijn volledig op maat gemaakt voor jouw organisatie, use cases en technische omgeving.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Mogelijke onderwerpen</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Advanced prompt engineering en chain-of-thought technieken</li>
            <li>Multi-agent systemen en orchestratie</li>
            <li>LLM-integratie in bestaande software architectuur</li>
            <li>Custom RAG pipelines voor jullie data</li>
            <li>AI-assisted code review en development workflows</li>
            <li>Domein-specifieke fine-tuning strategieen</li>
            <li>Evaluatie frameworks en quality assurance voor AI outputs</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe het werkt</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We beginnen met een intake gesprek om jullie specifieke situatie te begrijpen. Op basis daarvan ontwerpen we een programma dat precies aansluit bij jullie doelen, bestaande kennis en technische infrastructuur.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Intake</h4>
            <p className="text-sm text-stone-600">
              We brengen jullie huidige situatie, doelen en technische context in kaart.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Ontwerp</h4>
            <p className="text-sm text-stone-600">
              We maken een programma op maat met relevante theorie, oefeningen en cases.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Uitvoering</h4>
            <p className="text-sm text-stone-600">
              Hands-on training met jullie eigen data, tools en uitdagingen.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voorbeelden van maatwerk</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Legal Tech</h4>
            <p className="text-sm text-stone-600">
              Contract analyse, juridisch onderzoek automatiseren, en compliance checking met LLMs.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Healthcare</h4>
            <p className="text-sm text-stone-600">
              Medische documentatie, patient communicatie, en research assistance binnen privacy richtlijnen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Finance</h4>
            <p className="text-sm text-stone-600">
              Risk assessment, rapport generatie, en klant-facing AI assistenten met compliance.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Manufacturing</h4>
            <p className="text-sm text-stone-600">
              Quality control documentatie, maintenance prediction, en supply chain optimalisatie.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Flexibel</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Duur op maat</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-20</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deelnemers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Jullie data</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Relevante cases</div>
          </div>
        </div>

        <div className="not-prose bg-brand-dark text-white/85 p-6 md:p-8 rounded-lg border-l-4 border-brand-red">
          <h3 className="text-xl font-serif mb-3">Laten we praten</h3>
          <p className="text-white/80 leading-relaxed">
            Heb je een specifieke AI-uitdaging of wil je een geavanceerd traject voor je team? Neem contact op voor een vrijblijvend gesprek over de mogelijkheden.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
