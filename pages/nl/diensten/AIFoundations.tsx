import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const AIFoundationsNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI Foundations"
      subtitle="Onze kernworkshop. We komen langs en werken met je team tot iedereen het snapt."
      seoDescription="AI Foundations workshop: leer je team effectief werken met ChatGPT, Claude en andere AI-tools. Praktische 1-dag training met direct toepasbare technieken. Boek nu bij AI Heroes."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI begrijpen en toepassen
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          De AI Foundations workshop is ontworpen voor teams die AI willen begrijpen en direct willen toepassen in hun werk. Geen zweverige theorie, maar concrete tools en technieken die je de volgende dag al kunt gebruiken.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat je leert</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Hoe generatieve AI werkt en wat de mogelijkheden zijn</li>
            <li>Effectief prompten voor betere resultaten</li>
            <li>AI-tools kiezen en evalueren voor jouw werk</li>
            <li>Valkuilen vermijden en kritisch blijven</li>
            <li>Direct toepasbare workflows voor je dagelijkse taken</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Deze workshop is geschikt voor iedereen, ongeacht technische achtergrond. Of je nu in marketing werkt, HR, finance, of operations - je leert hoe AI jouw werk kan verbeteren. We passen de voorbeelden en oefeningen aan op jouw sector.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Praktische aanpak</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We geloven in leren door doen. Na een korte introductie ga je direct aan de slag met oefeningen die relevant zijn voor jouw werk. Je verlaat de workshop met concrete skills en een plan om AI in je dagelijkse routine te integreren.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1 dag</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">8-20</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deelnemers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Op locatie</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Of online</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Na de workshop</h3>
        <p className="text-stone-600 leading-relaxed">
          Je ontvangt een naslagwerk met alle behandelde concepten, prompts en tools. Plus toegang tot onze online community waar je vragen kunt stellen en ervaringen kunt delen met andere deelnemers.
        </p>

        <DarkBox accentColor="blue">
          <h4 className="text-xl font-serif text-white mb-3">Klaar voor de volgende stap?</h4>
          <p className="text-white/85">
            Na de training weet je team wat AI kan. De volgende stap? Ontdek waar AI het meeste waarde toevoegt in jouw organisatie.
          </p>
          <Link to="/nl/diensten#consulting" className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 hover:no-underline mt-3">
            Ontdek AI Consultancy →
          </Link>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
