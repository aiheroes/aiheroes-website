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
          Sinds 2019 trainen we teams bij organisaties als Postcodeloterij, Prosus en Banijay Benelux. Praktische AI-kennis, direct toepasbaar.
        </p>

        {/* Team Members */}
        <div className="space-y-12 mb-12">
          {/* Frans */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <img src="/team/frans.jpg" alt="Frans Hoorn" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Frans Hoorn</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · AI Strategy</p>
              <p className="text-stone-600 leading-relaxed">
                Achtergrond in UX/UI Design. Specialiseert zich in AI-strategie, prompt engineering en het vertalen van complexe technologie naar praktische toepassingen.
              </p>
            </div>
          </div>

          {/* David */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <img src="/team/david.jpg" alt="David Homan" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">David Homan</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · Future of Work</p>
              <p className="text-stone-600 leading-relaxed">
                Studeerde AI en Filosofie. Specialiseert zich in hoe AI de manier waarop we werken verandert, low-code/no-code oplossingen en AI-assisted development.
              </p>
            </div>
          </div>

          {/* Jan */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <img src="/team/jan.png" alt="Jan Brusse" className="w-full h-full object-cover grayscale -scale-x-100" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Jan Brusse</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · Technical AI</p>
              <p className="text-stone-600 leading-relaxed">
                Ervaren AI Trainer. Specialiseert zich in technische implementaties: agents bouwen, modellen trainen en AI-integraties op maat.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="border-t border-stone-200 pt-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-stone-200 rounded-full overflow-hidden">
              <img src="/team/joseph.png" alt="Joseph Groot Kormelink" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-serif text-brand-dark mb-1">Joseph Groot Kormelink</h3>
              <p className="text-brand-blue font-medium mb-2 text-sm">Industry Advisor</p>
              <p className="text-stone-600 leading-relaxed text-sm">
                Bekend in de Amsterdamse AI en startup scene. Adviseert op enterprise-vraagstukken.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-dark text-white p-6 md:p-8">
          <h3 className="text-xl font-serif mb-3">Samenwerken?</h3>
          <p className="text-white/80 leading-relaxed">
            Of je nu een workshop wilt boeken of wilt sparren over de mogelijkheden — neem contact op.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
