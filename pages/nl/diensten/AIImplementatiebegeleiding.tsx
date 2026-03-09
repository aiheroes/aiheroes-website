import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIImplementatiebegeleidingNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Implementatiebegeleiding"
      subtitle="Hands-on begeleiding tijdens AI-uitrol. Change management, adoptietracking en coaching op de werkvloer."
      seoDescription="AI Implementatiebegeleiding: hands-on begeleiding bij AI-uitrol. Change management, adoptietracking en coaching op de werkvloer. Door AI Heroes."
      accentColor="red"
      pillarBadge="Consultancy"
      ctaLabel="Plan een gesprek"
      trustedBy={["Medux", "Trabu", "OLX Poland"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De brug tussen plan en werkelijkheid
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Je hebt een AI-strategie, misschien zelfs al een werkend prototype. Maar de echte uitdaging begint nu: hoe zorg je dat mensen het daadwerkelijk gaan gebruiken? AI-implementatie faalt zelden door techniek — het faalt door adoptie. Wij begeleiden je team door de hele uitrol.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we doen</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Change management strategie en communicatieplan</li>
            <li>Coaching van keyusers en champions op de werkvloer</li>
            <li>Adoptie-monitoring met concrete metrics</li>
            <li>Weerstand signaleren en adresseren</li>
            <li>Werkprocessen aanpassen aan de nieuwe tooling</li>
            <li>Feedback loops inrichten tussen gebruikers en ontwikkelteam</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe we begeleiden</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-red mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Voorbereiding</h4>
            <p className="text-sm text-stone-600">
              Stakeholder mapping, communicatieplan en identificatie van champions per afdeling.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-red mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Uitrol</h4>
            <p className="text-sm text-stone-600">
              Gefaseerde introductie met begeleiding op de werkvloer. Coaching, demo's en hands-on support.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-red mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Borging</h4>
            <p className="text-sm text-stone-600">
              Adoptie meten, bijsturen waar nodig en je interne team klaarstomen om zelfstandig door te gaan.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Waarom implementatiebegeleiding?</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">70% faalt zonder</h4>
            <p className="text-sm text-stone-600">
              De meeste AI-projecten falen niet door techniek, maar door gebrekkige adoptie en change management.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Snellere adoptie</h4>
            <p className="text-sm text-stone-600">
              Met gerichte begeleiding gaat je team 2-3x sneller van 'moeizaam' naar 'vanzelfsprekend'.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Minder weerstand</h4>
            <p className="text-sm text-stone-600">
              Door medewerkers vroeg te betrekken en zorgen serieus te nemen, voorkom je sabotage.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Meetbaar resultaat</h4>
            <p className="text-sm text-stone-600">
              We tracken adoptie-metrics zodat je weet of de investering rendeert.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">2-8 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Begeleidingsduur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Op locatie</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Bij jou op de werkvloer</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Meetbaar</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Adoptie-tracking</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Het complete plaatje</h3>
          <p>
            Implementatiebegeleiding werkt het best in combinatie met{' '}
            <Link to="/nl/diensten/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              training voor je team
            </Link>{' '}
            en eventueel{' '}
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-white underline underline-offset-2 hover:text-white/80">
              maatwerk tooling
            </Link>{' '}
            als de standaard oplossing niet past.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
