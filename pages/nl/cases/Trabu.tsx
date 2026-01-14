import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const TrabuNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Case Study: Trabu"
      subtitle="Van idee naar werkend prototype in 6 dagen. AI-gedreven reisplanning voor investeerders."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De uitdaging
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Trabu, een innovatieve travel-tech startup, had een ambitieuze visie: vakantieplanning transformeren met generatieve AI. Bestaande tools begrijpen individuele voorkeuren niet en laten niet zien wat er allemaal mogelijk is. Trabu wilde dat anders doen.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          Het probleem: een investeerdersgesprek stond gepland en er was nog geen werkend prototype. Ze hadden iemand nodig die hun concept snel kon omzetten naar iets tastbaars.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">De uitdagingen</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Visie naar realiteit:</strong> Concept omzetten naar werkend product</li>
            <li><strong>Complexe techniek:</strong> AI die echt begrijpt wat reizigers willen</li>
            <li><strong>Strakke deadline:</strong> Investeerdersgesprek op korte termijn</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De aanpak
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We startten met een intensieve twee-daagse prototyping sessie, gevolgd door een gefocuste zes-daagse development sprint. Het doel: bewijzen dat de technologie werkt en een demo bouwen die investeerders zou overtuigen.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Discovery Portal</h4>
            <p className="text-sm text-stone-600">
              Een nieuwe manier om reismogelijkheden te ontdekken. Inspiratie opdoen zonder te weten waar je zoekt.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart Planning</h4>
            <p className="text-sm text-stone-600">
              AI-gedreven persoonlijke reissuggesties gebaseerd op voorkeuren en reisgeschiedenis.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Journey Timeline</h4>
            <p className="text-sm text-stone-600">
              Van bestemmingen tot restaurants, elk moment uitgestippeld op een interactieve tijdlijn.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Travel Intelligence</h4>
            <p className="text-sm text-stone-600">
              Een lerend systeem dat steeds beter begrijpt wat jouw ideale reis is.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Het resultaat
        </h2>

        <div className="bg-brand-red text-white p-6 md:p-8 mb-8">
          <div className="text-4xl md:text-5xl font-bold mb-4">6 dagen</div>
          <p className="text-white/80 leading-relaxed">
            In zes werkdagen bouwden we een werkend prototype dat de volledige potentie van Trabu's visie demonstreerde. Van concept naar tastbaar bewijs.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Het prototype bevatte een discovery page voor het ontdekken van nieuwe bestemmingen, een slimme planningsomgeving en kalenderintegratie. We integreerden AI-systemen die lieten zien hoe technologie de unieke voorkeuren van reizigers kan begrijpen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <blockquote className="text-lg text-stone-600 italic mb-4">
            "We waarderen de tijd en moeite die jullie team in het project heeft gestoken enorm."
          </blockquote>
          <p className="text-brand-red font-medium">— Trabu Team</p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Het belangrijkste resultaat was niet alleen het prototype zelf, maar de architectuur die we bouwden. Een fundament waarop verder gebouwd kan worden, met een AI-integratie die kan leren en verbeteren over tijd.
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8">
          <h3 className="text-xl font-serif mb-3">Over Trabu</h3>
          <p className="text-white/80 leading-relaxed">
            Trabu combineert diepgaande reiskennis met geavanceerde technologie om iets volledig nieuws te creëren: AI die echt begrijpt wat elke reis bijzonder maakt. Hun visie gaat verder dan simpele boekingen - ze transformeren hoe mensen hun avonturen plannen.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
