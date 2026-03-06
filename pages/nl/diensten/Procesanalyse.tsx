import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const ProcesanalyseNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI Procesanalyse"
      subtitle="Deep-dive in je bedrijfsprocessen. Waar liggen automatiseringskansen? Welke bottlenecks kan AI oplossen?"
      seoDescription="AI Procesanalyse: ontdek waar automatisering en AI waarde toevoegen in jouw processen. Workflow mapping, bottleneck analyse en concrete gains. Door AI Heroes."
      accentColor="red"
      pillarBadge="Consultancy"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Weet waar je kansen laat liggen
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Elke organisatie heeft processen die tijd en geld kosten maar beter kunnen. De vraag is: welke? En waar maakt AI echt verschil versus een simpelere oplossing? Onze procesanalyse brengt je workflows in kaart, identificeert bottlenecks en kwantificeert de potentiele winst.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we analyseren</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Huidige workflows en processtappen</li>
            <li>Tijdsbesteding per activiteit en medewerker</li>
            <li>Bottlenecks, dubbel werk en handmatige handelingen</li>
            <li>Data die door processen stroomt (kwaliteit, beschikbaarheid)</li>
            <li>Bestaande tooling en automatisering</li>
            <li>Kansen voor AI versus traditionele automatisering</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Onze aanpak</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Proces mapping</h4>
              <p className="text-stone-600 text-sm">We brengen de huidige processen in kaart door interviews, observatie en data-analyse.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Bottleneck analyse</h4>
              <p className="text-stone-600 text-sm">Waar gaat tijd verloren? Welke stappen zijn foutgevoelig? Waar is handmatig werk overbodig?</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Kansen kwantificeren</h4>
              <p className="text-stone-600 text-sm">Per geidentificeerde kans: verwachte tijdsbesparing, kostenverlaging en implementatie-inspanning.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold text-brand-dark">Prioriteitenlijst</h4>
              <p className="text-stone-600 text-sm">Gerankt op impact versus inspanning, zodat je weet waar je het beste kunt beginnen.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat je krijgt</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Proceskaart</h4>
            <p className="text-sm text-stone-600">
              Visueel overzicht van je huidige workflows met pain points gemarkeerd.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Kansenregister</h4>
            <p className="text-sm text-stone-600">
              Lijst van AI- en automatiseringskansen, gekwantificeerd en geprioriteerd.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Impact schatting</h4>
            <p className="text-sm text-stone-600">
              Per kans: verwachte uren-, kosten- en kwaliteitswinst.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Aanbevelingen</h4>
            <p className="text-sm text-stone-600">
              Concrete next steps: beginnen met bouwen, eerst een business case, of training.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">3-5 dagen</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Vanaf €5.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Geprioriteerd</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Kansenregister</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Van analyse naar actie</h3>
          <p>
            Procesanalyse is de basis. Werk de kansen uit met een{' '}
            <Link to="/nl/diensten/business-case-development" className="text-white underline underline-offset-2 hover:text-white/80">
              Business Case
            </Link>{' '}
            of kijk breder met{' '}
            <Link to="/nl/diensten/opportunity-scouting" className="text-white underline underline-offset-2 hover:text-white/80">
              Opportunity Scouting
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
