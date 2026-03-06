import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const BusinessCaseDevelopmentNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Business Case Development"
      subtitle="Van AI-kans naar onderbouwd investeringsvoorstel. ROI-berekeningen, kostenramingen en implementatietijdlijnen."
      seoDescription="Business Case Development: vertaal AI-kansen naar concrete business cases met ROI-berekeningen, kostenramingen en implementatietijdlijnen. Door AI Heroes."
      accentColor="red"
      pillarBadge="Consultancy"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Van kans naar concreet investeringsvoorstel
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Je hebt AI-kansen geidentificeerd — via een readiness scan, opportunity scouting, of eigen inzicht. Maar voordat je investeert, wil je weten: wat kost het, wat levert het op, en hoe lang duurt het? Wij vertalen AI-mogelijkheden naar onderbouwde business cases die je boardroom overtuigen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we opleveren</h3>
          <ul className="space-y-2 text-stone-600">
            <li>ROI-berekeningen met realistische aannames</li>
            <li>Kostenramingen voor ontwikkeling, implementatie en beheer</li>
            <li>Implementatietijdlijn met mijlpalen</li>
            <li>Risicoanalyse en mitigatiestrategie</li>
            <li>Vergelijking build vs. buy vs. partner</li>
            <li>Go/no-go aanbeveling met onderbouwing</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Onze aanpak</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Kans valideren</h4>
              <p className="text-stone-600 text-sm">We toetsen de AI-kans aan technische haalbaarheid, beschikbare data en organisatiecapaciteit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Kosten en baten modelleren</h4>
              <p className="text-stone-600 text-sm">We berekenen de investering, lopende kosten en verwachte opbrengsten over 1-3 jaar.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Business case presenteren</h4>
              <p className="text-stone-600 text-sm">Presentatie-ready document voor MT of stuurgroep, inclusief scenario-analyse.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Waarom dit werkt</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Technische diepgang</h4>
            <p className="text-sm text-stone-600">
              Omdat we zelf AI bouwen, zijn onze kostenramingen realistisch — geen consultancy-schattingen uit de lucht.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Eerlijk advies</h4>
            <p className="text-sm text-stone-600">
              Als de business case niet sluit, zeggen we dat. Beter nu weten dan na €50.000 investering.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Actiegericht</h4>
            <p className="text-sm text-stone-600">
              Elke business case bevat een concreet implementatieplan — geen rapport dat in de la belandt.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Doorpakken mogelijk</h4>
            <p className="text-sm text-stone-600">
              Bij een positieve business case kunnen we direct door naar bouwen via onze software-pijler.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1-2 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Vanaf €5.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Board-ready</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deliverable</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Van business case naar realisatie</h3>
          <p>
            Een goede business case is het startpunt. Werk de strategie uit met een{' '}
            <Link to="/nl/diensten/ai-roadmap" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Roadmap
            </Link>{' '}
            of ga direct bouwen met{' '}
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-white underline underline-offset-2 hover:text-white/80">
              Maatwerk AI-Oplossingen
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
