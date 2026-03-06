import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AanpakNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Onze Aanpak"
      subtitle="Training, consulting en software — drie pijlers, één partner. We begeleiden het hele AI-traject."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Het probleem dat we oplossen
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          De AI-markt is gefragmenteerd. Adviesbureaus schrijven rapporten die in laden belanden. Trainingsbureaus trainen en vertrekken. Techbedrijven bouwen tools die niemand gebruikt. Niemand combineert alle drie.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes doet dat wel. Wij combineren training, consulting en software onder één dak. Klanten kunnen op elk punt instappen — je hoeft niet bij pijler 1 te beginnen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onze principes</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Praktijk boven theorie — je leert door te doen</li>
            <li>Resultaat boven rapport — we meten succes in wat er daadwerkelijk verandert</li>
            <li>Eerlijkheid boven sales — als AI niet de oplossing is, zeggen we dat</li>
            <li>Maatwerk boven standaard — elke organisatie is anders</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Drie pijlers, één traject</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/nl/diensten#training" className="p-6 bg-white border-2 border-stone-200 hover:border-brand-red transition-colors group">
            <div className="w-12 h-1 bg-brand-red mb-4"></div>
            <h4 className="font-bold text-brand-dark group-hover:text-brand-red transition-colors mb-2">1. Training</h4>
            <p className="text-sm text-stone-600">
              We leren je team wat AI kan — en waar je op moet letten. Van boardroom tot werkvloer.
            </p>
          </Link>
          <Link to="/nl/diensten#consulting" className="p-6 bg-white border-2 border-stone-200 hover:border-brand-blue transition-colors group">
            <div className="w-12 h-1 bg-brand-blue mb-4"></div>
            <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">2. Consultancy</h4>
            <p className="text-sm text-stone-600">
              We brengen kansen in kaart en maken je AI-roadmap. Van readiness scan tot business case.
            </p>
          </Link>
          <Link to="/nl/diensten#software" className="p-6 bg-white border-2 border-stone-200 hover:border-stone-700 transition-colors group">
            <div className="w-12 h-1 bg-brand-dark mb-4"></div>
            <h4 className="font-bold text-brand-dark group-hover:text-stone-700 transition-colors mb-2">3. Software</h4>
            <p className="text-sm text-stone-600">
              We bouwen en implementeren AI-oplossingen samen met jouw team. Van prototype tot productie.
            </p>
          </Link>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Instappen waar je wilt</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          De natuurlijke volgorde is Training → Consultancy → Software. Maar niet elke organisatie begint bij het begin. Sommige weten al wat ze willen bouwen. Anderen hebben eerst een strategisch plan nodig. Wij ontmoeten je waar je staat.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Voorbereiding</h4>
            <p className="text-sm text-stone-600">
              We spreken vooraf met key stakeholders om te begrijpen wat er speelt. Zo passen we onze aanpak aan jullie context aan.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Kennisoverdracht</h4>
            <p className="text-sm text-stone-600">
              Bij elk traject zorgen we dat je team zelfstandig verder kan. Geen afhankelijkheid, maar eigen capability.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Nazorg</h4>
            <p className="text-sm text-stone-600">
              Na afloop krijg je toegang tot onze community en materialen. Vragen die later opkomen? Gewoon stellen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Resultaatgarantie</h4>
            <p className="text-sm text-stone-600">
              Als je niet tevreden bent, praten we erover. We staan achter ons werk.
            </p>
          </div>
        </div>

        <DarkBox accentColor="red" className="mb-8">
          <h3>Waarom AI Heroes?</h3>
          <p>
            Wij zijn practitioners die meedoen. We adviseren niet alleen, we bouwen ook. We trainen niet alleen, we implementeren ook. Eén team voor het hele AI-traject.
          </p>
        </DarkBox>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Tarieven</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We werken met transparante tarieven. Training vanaf €2.500 per dag, consulting vanaf €3.000 per traject, software vanaf €15.000 per project. Voor onderwijs en non-profit organisaties hanteren we gereduceerde tarieven.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Benieuwd wat we voor jou kunnen betekenen? Neem contact op voor een vrijblijvend gesprek.
        </p>
      </div>
    </PageLayout>
  );
};
