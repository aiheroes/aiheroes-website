import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { Image } from '../../../components/Image';
import { DarkBox } from '../../../src/components/DarkBox';

export const TeamNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Ons Team"
      subtitle="Wij zijn Frans, Jan en David. We helpen je verder als je vastloopt met AI."
      accentColor="blue"
      seoDescription="Het team achter AI Heroes: Frans, Jan en David. Sinds 2019 helpen we organisaties met praktische AI-training, consulting en software."
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
              <Image src="/team/frans.webp" alt="Frans Hoorn" loading="lazy" className="w-full h-full object-cover object-top scale-125 brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Frans Hoorn</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · Strategy & Product</p>
              <p className="text-stone-600 leading-relaxed">
                Combineert strategisch denken met een scherp oog voor gebruikerservaring. Helpt organisaties om AI niet als losstaande technologie te zien, maar als integraal onderdeel van hun product- en merkstrategie. Met een achtergrond in UX/UI design en productmanagement weet hij complexe trajecten te vertalen naar concrete roadmaps. Geeft workshops aan directie- en managementteams over AI-strategie en prompt engineering.
              </p>
            </div>
          </div>

          {/* David */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/david.webp" alt="David Homan" loading="lazy" className="w-full h-full object-cover object-top scale-125 brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">David Homan</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · AI & Development</p>
              <p className="text-stone-600 leading-relaxed">
                De schakel tussen techniek en boardroom. Begrijpt hoe AI-modellen onder de motorkap werken—van transformers tot image generation—en vertaalt die kennis naar wat het betekent voor jouw bedrijfsprocessen. Bouwt zelf met tools als GitHub Copilot en lokale AI-modellen, waardoor hij precies weet wat er technisch mogelijk is én wat haalbaar is binnen jouw organisatie. Gepassioneerd spreker die complexe AI-concepten helder en energiek overbrengt.
              </p>
            </div>
          </div>

          {/* Jan */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/jan.webp" alt="Jan Brusse" loading="lazy" className="w-full h-full object-cover object-top scale-125 brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Jan Brusse</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · Training & Innovation</p>
              <p className="text-stone-600 leading-relaxed">
                Specialist in het toegankelijk maken van complexe technologie. Heeft jarenlang een innovatielab opgebouwd waar hij duizenden mensen—van beginners tot experts—trainde in nieuwe technologieën. Snapt als geen ander hoe je een taai onderwerp omzet naar een interactieve, praktische sessie die blijft hangen. Pikt nieuwe AI-ontwikkelingen razendsnel op en weet ze direct te vertalen naar toepassingen voor jouw team.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="border-t border-stone-200 pt-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/joseph.png" alt="Joseph Groot Kormelink" className="w-full h-full object-cover grayscale" />
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

        <DarkBox accentColor="blue">
          <h3>Samenwerken?</h3>
          <p>
            Of je nu een workshop wilt boeken of wilt sparren over de mogelijkheden — neem contact op.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
