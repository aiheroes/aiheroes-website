import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const AIStrategieGidsNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Hoe begin je met je AI-strategie"
      subtitle="Een praktische gids in vier stappen. Van educatie tot implementatie."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Je AI-reis begint hier
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Veel organisaties weten dat AI kansen biedt, maar weten niet waar te beginnen. Deze gids geeft je een helder stappenplan. Het is dezelfde aanpak die we gebruiken met onze klanten.
        </p>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <h3 className="text-xl font-serif text-brand-dark">Educatie</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            De eerste stap is begrijpen wat AI kan. Niet door urenlang te lezen, maar door te ervaren. Volg nieuws over wat andere bedrijven doen, maar belangrijker: experimenteer zelf.
          </p>
          <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
            <ul className="space-y-2 text-stone-600">
              <li><strong>Volg AI-artikelen:</strong> LinkedIn, tech nieuwssites, onze nieuwsbrief</li>
              <li><strong>Experimenteer:</strong> Gebruik ChatGPT voor je dagelijkse taken</li>
              <li><strong>Train je team:</strong> Een workshop geeft hands-on ervaring die lezen niet kan bieden</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <h3 className="text-xl font-serif text-brand-dark">Kansen identificeren</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            Na het begrijpen van AI's mogelijkheden, zoek je waar het waarde kan toevoegen. Begin bij je pijnpunten, niet bij de technologie.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-stone-200">
              <h4 className="font-bold text-brand-dark mb-2">Houd een AI-logboek bij</h4>
              <p className="text-sm text-stone-600">
                Noteer twee weken lang elke keer dat je denkt: "dit kost te veel tijd" of "dit is saai werk".
              </p>
            </div>
            <div className="p-4 bg-white border border-stone-200">
              <h4 className="font-bold text-brand-dark mb-2">Analyseer processen</h4>
              <p className="text-sm text-stone-600">
                Stap terug en bekijk je workflow. Waar zitten bottlenecks? Waar worden resources verspild?
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <h3 className="text-xl font-serif text-brand-dark">Kansen analyseren</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            Als de kansen duidelijk zijn, is de volgende stap de business case. Wat kost het? Wat levert het op? Wees eerlijk naar jezelf.
          </p>
          <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
            <ul className="space-y-2 text-stone-600">
              <li><strong>Kosten inschatten:</strong> Licenties, implementatie, training, onderhoud</li>
              <li><strong>Opbrengsten berekenen:</strong> Tijdsbesparing, kwaliteitsverbetering, nieuwe mogelijkheden</li>
              <li><strong>Projectplan maken:</strong> Timeline, capabilities, verwachtingen</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <h3 className="text-xl font-serif text-brand-dark">Implementeren</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            Met een solide plan is implementatie de volgende stap. Je hebt twee opties: een bestaande oplossing kopen of iets op maat bouwen. In beide gevallen is integratie de uitdaging.
          </p>
          <div className="bg-brand-dark text-white p-6 md:p-8">
            <h4 className="font-serif mb-3">Het draait om mensen</h4>
            <p className="text-white/80 leading-relaxed">
              Technische integratie is één ding. Maar de echte uitdaging is je team meekrijgen. Mensen zijn van nature weerstandig tegen verandering. Betrek ze vroeg, verzamel input, zorg dat ze zich gesteund voelen. Dit maakt het verschil tussen succes en mislukking.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hulp nodig?</h3>
        <p className="text-stone-600 leading-relaxed">
          Dit stappenplan klinkt misschien eenvoudig, maar de details maken het verschil. Wij helpen organisaties door elke fase heen, van de eerste workshop tot werkende AI-oplossing.
        </p>
      </div>
    </PageLayout>
  );
};
