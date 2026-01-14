import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const TeamNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Ons Team"
      subtitle="Wij zijn Frans, Jan en David. We helpen je verder als je vastloopt met AI."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De mensen achter AI Heroes
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes begon als een idee tussen vrienden: wat als we onze kennis van AI zouden delen met organisaties die ermee willen beginnen? Inmiddels helpen we tientallen bedrijven met workshops, training en development.
        </p>

        {/* Team Members */}
        <div className="space-y-12 mb-12">
          {/* Frans */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-3xl font-serif">F</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Frans Jorden Hoorn</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner</p>
              <p className="text-stone-600 leading-relaxed">
                Frans combineert technische diepgang met de gave om complexe zaken simpel uit te leggen. Hij geeft de meeste workshops en is vaak het eerste aanspreekpunt voor nieuwe klanten. Voorheen werkte hij als software engineer en product manager bij diverse tech startups.
              </p>
            </div>
          </div>

          {/* Jan */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-3xl font-serif">J</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Jan Brusse</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner</p>
              <p className="text-stone-600 leading-relaxed">
                Jan is onze technische diepduiker. Als er iets gebouwd moet worden, is hij degene die de architectuur ontwerpt en de code schrijft. Hij verzorgt de developer-gerichte workshops en leidt onze development projecten. Zijn achtergrond ligt in machine learning en data engineering.
              </p>
            </div>
          </div>

          {/* David */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-3xl font-serif">D</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">David Homan</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner</p>
              <p className="text-stone-600 leading-relaxed">
                David brengt de business kant. Hij helpt organisaties om te bepalen waar AI echt waarde toevoegt en waar het vooral hype is. Met zijn ervaring in strategie en operations zorgt hij dat onze oplossingen ook daadwerkelijk geïmplementeerd worden.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-4">Industry Advisor</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-2xl font-serif">J</div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-serif text-brand-dark mb-1">Joseph Groot Kormelink</h4>
              <p className="text-stone-600 leading-relaxed">
                Joseph adviseert ons vanuit zijn ervaring in de corporate wereld. Hij helpt ons om de taal van grote organisaties te spreken en zorgt dat onze oplossingen passen bij enterprise requirements.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Onze klanten</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We werken met organisaties van alle groottes, van startups tot multinationals. Enkele van onze klanten:
        </p>
        <p className="text-stone-600 leading-relaxed mb-8">
          Postcodeloterij, Banijay Benelux, Locatiqs, Prosus, Medux, Hanze University of Applied Sciences
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8">
          <h3 className="text-xl font-serif mb-3">Werken met ons?</h3>
          <p className="text-white/80 leading-relaxed">
            We zijn altijd op zoek naar interessante projecten en samenwerkingen. Of je nu een workshop wilt boeken, een AI-oplossing wilt bouwen, of gewoon wilt sparren over de mogelijkheden - neem contact op.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
