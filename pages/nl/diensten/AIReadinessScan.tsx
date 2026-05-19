import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIReadinessScanNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI Readiness Scan"
      subtitle="Waar staat jouw organisatie met AI? We brengen het in kaart en geven je een concreet actieplan."
      seoDescription="AI Readiness Scan: ontdek waar jouw organisatie staat met AI. Concrete aanbevelingen, quick wins en een roadmap voor de volgende stap. Door AI Heroes."
      accentColor="red"
      pillarBadge="Consultancy"
      ctaLabel="Vraag een scan aan"
      trustedBy={["Medux", "Envalior", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Weet waar je staat, weet waar je naartoe gaat
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Veel organisaties willen iets met AI maar weten niet waar ze staan. Sommige teams experimenteren al, andere hebben nog nooit een AI-tool aangeraakt. De AI Readiness Scan brengt dit helder in kaart en geeft je een concreet plan voor de volgende stap.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Wat we onderzoeken</h3>
          <ul className="space-y-2 text-stone-600">
            <li>AI-volwassenheid per afdeling en team</li>
            <li>Huidige tools en technologie-landschap</li>
            <li>Data-readiness: kwaliteit, toegankelijkheid, governance</li>
            <li>Organisatiecultuur en veranderbereidheid</li>
            <li>Bestaande initiatieven en experimenten</li>
            <li>EU AI Act compliance status</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat je krijgt</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Readiness Rapport</h4>
            <p className="text-sm text-stone-600">
              Helder overzicht van waar je organisatie staat op AI-volwassenheid, per dimensie gescoord.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Quick Wins</h4>
            <p className="text-sm text-stone-600">
              Concrete acties die je morgen kunt starten. Laaghangend fruit dat direct waarde oplevert.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Aanbevelingen</h4>
            <p className="text-sm text-stone-600">
              Prioriteitenlijst voor training, tooling en procesoptimalisatie op basis van jouw context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Vervolgstappen</h4>
            <p className="text-sm text-stone-600">
              Advies over logische volgende stap: training, diepere consulting, of direct bouwen.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Het proces</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Intake</h4>
              <p className="text-stone-600 text-sm">Kort gesprek om scope en context te begrijpen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Scan</h4>
              <p className="text-stone-600 text-sm">1-3 dagen interviews, observaties en analyse op locatie of remote.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Rapportage</h4>
              <p className="text-stone-600 text-sm">Presentatie van bevindingen en actieplan aan MT of stuurgroep.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1-3 dagen</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Vanaf €3.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Concreet</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Actieplan</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Klaar voor de volgende stap?</h3>
          <p>
            Na de scan weet je precies waar je staat. Wij helpen je ook verder: met een{' '}
            <Link to="/nl/diensten/ai-roadmap" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Roadmap
            </Link>{' '}
            of direct met{' '}
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-white underline underline-offset-2 hover:text-white/80">
              bouwen
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
