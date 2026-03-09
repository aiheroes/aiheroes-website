import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const VoorwaardenNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Algemene Voorwaarden"
      subtitle="De spelregels voor onze samenwerking. Laatst bijgewerkt: januari 2026."
      seoDescription="Algemene voorwaarden van AI Heroes. De spelregels voor onze samenwerking."
      accentColor="red"
      showContactForm={false}
      noindex
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Artikel 1 - Definities
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          In deze algemene voorwaarden wordt verstaan onder:
        </p>

        <ul className="text-stone-600 leading-relaxed mb-8 space-y-2">
          <li><strong>AI Heroes:</strong> AI Heroes, handelsnaam van Lucidium, gevestigd te Nederland, KvK-nummer 78738105</li>
          <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die met AI Heroes een overeenkomst aangaat</li>
          <li><strong>Diensten:</strong> Alle werkzaamheden die AI Heroes voor opdrachtgever verricht, waaronder workshops, trainingen, advies en softwareontwikkeling</li>
        </ul>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 2 - Toepasselijkheid
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen AI Heroes en opdrachtgever. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 3 - Offertes en overeenkomsten
        </h2>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <ul className="space-y-2 text-stone-600">
            <li>Offertes zijn vrijblijvend en geldig gedurende 30 dagen</li>
            <li>Een overeenkomst komt tot stand na schriftelijke bevestiging door AI Heroes</li>
            <li>Prijzen zijn exclusief BTW tenzij anders vermeld</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 4 - Uitvoering van diensten
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          AI Heroes voert alle diensten naar beste vermogen uit conform de eisen van goed vakmanschap. Onze diensten zijn inspanningsverplichtingen, geen resultaatsverplichtingen, tenzij uitdrukkelijk anders overeengekomen.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          Voor workshops en trainingen geldt dat de inhoud is afgestemd op het moment van levering. AI en technologie ontwikkelen zich snel; we garanderen dat de kennis actueel is op het moment van de workshop.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 5 - Betaling
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Betalingstermijn</h4>
            <p className="text-sm text-stone-600">
              Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Vooruitbetaling</h4>
            <p className="text-sm text-stone-600">
              Voor bepaalde diensten kan vooruitbetaling worden gevraagd.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Verzuim</h4>
            <p className="text-sm text-stone-600">
              Bij niet-tijdige betaling is de wettelijke handelsrente verschuldigd.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Incassokosten</h4>
            <p className="text-sm text-stone-600">
              Buitengerechtelijke incassokosten komen voor rekening van opdrachtgever.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 6 - Annulering
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          Voor workshops en trainingen gelden de volgende annuleringsvoorwaarden:
        </p>

        <ul className="text-stone-600 leading-relaxed mb-8 space-y-2">
          <li>Tot 14 dagen voor aanvang: kosteloos annuleren</li>
          <li>7-14 dagen voor aanvang: 50% van het bedrag verschuldigd</li>
          <li>Minder dan 7 dagen voor aanvang: 100% van het bedrag verschuldigd</li>
          <li>Verplaatsen naar een andere datum is in overleg mogelijk</li>
        </ul>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 7 - Intellectueel eigendom
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Alle rechten op door AI Heroes ontwikkelde materialen, methodieken en software blijven bij AI Heroes, tenzij schriftelijk anders overeengekomen. Opdrachtgever krijgt een gebruiksrecht voor eigen gebruik. Materialen mogen niet zonder toestemming worden verspreid of doorverkocht.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 8 - Aansprakelijkheid
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          De aansprakelijkheid van AI Heroes is beperkt tot het bedrag dat in het desbetreffende geval door onze aansprakelijkheidsverzekering wordt uitbetaald, met als maximum het factuurbedrag van de betreffende opdracht. AI Heroes is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 9 - Geheimhouding
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar hebben verkregen. Deze verplichting geldt ook na beëindiging van de overeenkomst.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Artikel 10 - Geschillen
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar AI Heroes is gevestigd.
        </p>

        <DarkBox accentColor="red">
          <h3>Vragen?</h3>
          <p>
            Heb je vragen over deze algemene voorwaarden? Neem gerust contact met ons op. We leggen het graag uit in begrijpelijke taal.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
