import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const AIGeletterdheidNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Waarom AI-geletterdheid essentieel is"
      subtitle="De EU AI Act maakt het verplicht. Maar ook zonder wet: wie AI niet begrijpt, mist kansen."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI is niet meer alleen voor techneuten
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Een barista in Amsterdam voorspelt koffievraag per uur met AI. Een verpleegkundige in Berlijn spot patronen in patiëntenzorg die anders jaren zouden kosten om te ontdekken. AI-adoptie bij bedrijven is gesprongen naar 72%, en de meeste gebruikers zijn geen programmeurs of data scientists.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">De impact in cijfers</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Zorgverleners halveren behandelkosten met 50% betere uitkomsten</li>
            <li>AI detecteert fraude ter waarde van $380 miljard per jaar in de gezondheidszorg</li>
            <li>$15.7 biljoen extra economische activiteit verwacht tegen 2030</li>
            <li>36.6% jaarlijkse groei tussen 2024 en 2030</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat AI-geletterdheid echt betekent</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Je hoeft geen neurale netwerken te begrijpen of Python te schrijven. Het gaat erom dat je genoeg weet om AI je productiviteit te laten verveelvoudigen. Denk aan autorijden: je hoeft de techniek niet te begrijpen om van A naar B te komen.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Strategisch denken</h4>
            <p className="text-sm text-stone-600">
              Weten waar AI past in je workflow en waar niet. Kansen zien die anderen missen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Kritisch evalueren</h4>
            <p className="text-sm text-stone-600">
              Begrijpen wat AI wel en absoluut niet kan. Hype van realiteit onderscheiden.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Ethische implicaties</h4>
            <p className="text-sm text-stone-600">
              De gevolgen begrijpen zonder te verdwalen in filosofie. Praktisch en verantwoord.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tools toepassen</h4>
            <p className="text-sm text-stone-600">
              De juiste tools kiezen en effectief inzetten voor jouw specifieke taken.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">De EU AI Act</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Vanaf 2025 maakt de EU AI Act AI-geletterdheid verplicht voor organisaties. Bedrijven die nu voorlopen, bereiden zich niet alleen voor op de toekomst - ze schrijven die mee. Maar los van wetgeving: teams die AI begrijpen presteren beter. Punt.
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8 mb-8">
          <h3 className="text-xl font-serif mb-3">Het draait niet om vervanging</h3>
          <p className="text-white/80 leading-relaxed">
            AI-geletterdheid gaat niet over het vervangen van menselijke intelligentie. Het gaat over het versterken van wat ons uniek menselijk maakt: creativiteit, intuïtie, het leggen van verbanden die machines niet kunnen zien.
          </p>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Aan de slag</h3>
        <p className="text-stone-600 leading-relaxed">
          Wil je jouw team AI-geletterd maken? Onze workshops zijn praktisch, hands-on, en aangepast aan jullie context. Je gaat naar huis met vaardigheden die je de volgende dag al kunt toepassen.
        </p>
      </div>
    </PageLayout>
  );
};
