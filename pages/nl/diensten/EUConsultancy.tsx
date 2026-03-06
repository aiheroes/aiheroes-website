import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUConsultancyNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="EU Consultancy"
      subtitle="Organisatiescan en migratie roadmap. Van risico-inventarisatie tot actieplan."
      seoDescription="EU Consultancy: organisatiescan, risico-analyse en migratie roadmap voor digitale onafhankelijkheid. Van inventarisatie tot actieplan. Door AI Heroes."
      accentColor="red"
      pillarBadge="Consultancy"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Organisatiescan en migratie roadmap
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Het risico</p>
          <p className="text-sm text-stone-200 mb-2">
            De CLOUD Act stelt de VS in staat om data op te eisen bij elk Amerikaans bedrijf — inclusief Microsoft, Google en AWS — ongeacht waar de servers staan. Na het Schrems II-arrest is het Privacy Shield ongeldig verklaard, waardoor standaard datatransfers naar de VS juridisch kwetsbaar zijn.
          </p>
          <p className="text-sm text-stone-200">
            Vanaf <strong className="text-white">augustus 2025</strong> gelden de algemene bepalingen van de EU AI Act. Organisaties zonder helder beeld van hun digitale omgeving lopen risico op non-compliance.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Je weet dat er iets moet veranderen. Misschien heeft de directie vragen gesteld over datasoevereiniteit, misschien komt er een audit aan, of misschien wil je gewoon grip krijgen op je digitale omgeving voordat de regelgeving je dwingt. Wij brengen het in kaart en leveren een concreet plan.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat we doen</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We zijn 2 tot 3 weken bij je in de organisatie. We brengen je volledige digitale omgeving in kaart: welke tools worden gebruikt, waar data naartoe gaat, welke leveranciers onder Amerikaanse jurisdictie vallen. We analyseren de risico's in het licht van EU-regelgeving en leveren een roadmap op waarmee je direct aan de slag kunt.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat er wordt opgeleverd</h3>
        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <ul className="space-y-2 text-stone-600">
            <li>Volledig overzicht van je digitale omgeving en EU-risico's</li>
            <li>Risicomatrix met prioritering per tool en leverancier</li>
            <li>Visuele roadmap met fasering en kostenschatting</li>
            <li>Aanbeveling voor vervolgstap — intern of met onze ondersteuning</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Uitbreidingen</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Leveranciersscan</h4>
            <p className="text-sm text-stone-600">
              Diepgaande analyse van je belangrijkste leveranciers: waar zijn ze gevestigd, onder welke jurisdictie vallen ze, en welke risico's brengt dat met zich mee? Inclusief alternatievenadvies.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Voorbereiding op aanbesteding of audit</h4>
            <p className="text-sm text-stone-600">
              We helpen je de scan-resultaten te vertalen naar documentatie voor aanbestedingstrajecten, audits of compliance-rapportages. Klaar voor verantwoording.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">2–3 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Adviesrapport</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Oplevering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Op locatie</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Bij u</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Volgende stap</h3>
          <p>
            Als AI een van de risico's is — en dat is het bijna altijd — dan is de logische vervolgstap{' '}
            <Link to="/nl/diensten/eu-development" className="text-white underline underline-offset-2 hover:text-white/80">
              overstappen op Europese AI-tools
            </Link>
            . Heeft je team nog meer context nodig over het landschap? Dan helpt onze{' '}
            <Link to="/nl/diensten/eu-training" className="text-white underline underline-offset-2 hover:text-white/80">
              training
            </Link>{' '}
            om iedereen op hetzelfde niveau te brengen.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
