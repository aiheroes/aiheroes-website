import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUTrainingNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="EU Training"
      subtitle="Digitale risico's en Europese alternatieven. Een halve of hele dag op locatie."
      seoDescription="Training digitale onafhankelijkheid: risico's van Amerikaanse platformen, Europese alternatieven en regelgeving. Halve of hele dag op locatie. Door AI Heroes."
      accentColor="red"
      pillarBadge="Training"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Digitale risico's en Europese alternatieven
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Waarom nu</p>
          <p className="text-sm text-stone-200 mb-2">
            Vanaf <strong className="text-white">februari 2025</strong> verplicht de EU AI Act organisaties om AI-geletterdheid aan te tonen (Artikel 4). Vanaf <strong className="text-white">augustus 2025</strong> gelden de algemene bepalingen. Ondertussen geeft de CLOUD Act de VS toegang tot data bij Amerikaanse providers — ongeacht serverlocatie.
          </p>
          <p className="text-sm text-stone-200">
            Organisaties die nu niet handelen riskeren compliance-boetes, dataverlies aan buitenlandse jurisdicties en strategische afhankelijkheid.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Organisaties voelen dat er iets verschuift. Geopolitieke spanningen, strengere Europese wetgeving, discussies over datasoevereiniteit — het is overal. Maar wat betekent het concreet voor jouw organisatie? En wat kun je er vandaag al aan doen? Deze sessie brengt het in kaart, zonder jargon en met praktische handvatten.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat de sessie behandelt</h3>
        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-dark mb-1">De risico's van Amerikaanse platformen</h4>
              <p className="text-stone-600 text-sm mb-0">
                Wat betekent de CLOUD Act voor jouw data? Welke risico's loop je met Microsoft 365, Google Workspace en AWS? We maken het concreet met voorbeelden uit jouw sector.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-1">Het huidige landschap</h4>
              <p className="text-stone-600 text-sm mb-0">
                Waar staan we nu als Nederland en Europa? Welke ontwikkelingen zijn relevant en welke kun je nog negeren? Een helder overzicht van de actuele stand van zaken.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-1">Europese alternatieven</h4>
              <p className="text-stone-600 text-sm mb-0">
                Welke Europese platformen en tools zijn er? Wat kunnen ze wel en wat nog niet? Eerlijk overzicht, inclusief de beperkingen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-1">De regelgevingscontext</h4>
              <p className="text-stone-600 text-sm mb-0">
                EU AI Act, NIS2, DORA, AVG — wat is relevant voor jouw organisatie en wat komt eraan? We vertalen de regelgeving naar concrete verplichtingen.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie</h3>
        <p className="text-stone-600 leading-relaxed mb-4">
          De sessie is bedoeld voor directie, IT-verantwoordelijken, informatiemanagers en beleidsmedewerkers. We passen het niveau en de diepgang aan op de groep.
        </p>
        <p className="text-stone-600 leading-relaxed mb-8">
          Voor bestuurders bieden we ook een compacte sessie van 90 minuten: gericht op de strategische implicaties en beslispunten, zonder technische details.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Jaarlijkse update</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Het landschap verandert snel. Regelgeving wordt aangescherpt, nieuwe alternatieven komen op de markt, geopolitieke verhoudingen verschuiven. Daarom bieden we de sessie ook als jaarlijkse update aan — zodat je organisatie op de hoogte blijft en het beleid actueel houdt.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">½ - 1 dag</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Sessieduur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">10–150</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Medewerkers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Op locatie</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Of online</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Volgende stap</h3>
          <p>
            Na de sessie weet je waar de risico's zitten. De logische vervolgstap is een{' '}
            <Link to="/nl/diensten/eu-consultancy" className="text-white underline underline-offset-2 hover:text-white/80">
              organisatiescan
            </Link>{' '}
            om je digitale omgeving volledig in kaart te brengen, of direct aan de slag met{' '}
            <Link to="/nl/diensten/eu-development" className="text-white underline underline-offset-2 hover:text-white/80">
              Europese AI-tools
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
