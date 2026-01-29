import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const PrivacyNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Privacybeleid"
      subtitle="Hoe wij omgaan met je gegevens. Laatst bijgewerkt: januari 2026."
      accentColor="blue"
      showContactForm={false}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Onze principes
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Bij AI Heroes nemen we privacy serieus. We verzamelen alleen gegevens die we nodig hebben, bewaren ze niet langer dan noodzakelijk, en delen ze nooit met derden voor commerciële doeleinden.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">In het kort</h3>
          <ul className="space-y-2 text-stone-600">
            <li>We verzamelen alleen wat nodig is</li>
            <li>Je gegevens worden niet verkocht</li>
            <li>Je kunt altijd inzage vragen of verwijdering aanvragen</li>
            <li>We voldoen aan de AVG/GDPR</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Welke gegevens verzamelen we?
        </h2>

        <h3 className="text-xl font-serif text-brand-dark mb-3">Contactformulieren</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          Als je ons contactformulier invult, verzamelen we je naam, e-mailadres, en de inhoud van je bericht. Deze gegevens gebruiken we uitsluitend om contact met je op te nemen over je vraag of aanvraag.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-3">Websitebezoek</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We gebruiken eenvoudige analytics om te begrijpen hoe bezoekers onze website gebruiken. We verzamelen geen persoonlijke gegevens via tracking en gebruiken geen cookies van derden voor advertentiedoeleinden.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-3">Nieuwsbrief</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          Als je je aanmeldt voor onze nieuwsbrief, bewaren we je e-mailadres. Je kunt je op elk moment uitschrijven via de link onderaan elke nieuwsbrief.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Hoe gebruiken we je gegevens?
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          We gebruiken je gegevens alleen voor de doeleinden waarvoor je ze hebt verstrekt:
        </p>

        <ul className="text-stone-600 leading-relaxed mb-8 space-y-2">
          <li>Om contact met je op te nemen over je vraag of aanvraag</li>
          <li>Om je onze nieuwsbrief te sturen (als je je hebt aangemeld)</li>
          <li>Om onze diensten te verbeteren op basis van algemene gebruikspatronen</li>
        </ul>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Hoe lang bewaren we je gegevens?
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Contactgegevens bewaren we maximaal 2 jaar na het laatste contact. Nieuwsbriefabonnementen bewaren we tot je je uitschrijft. Analytics-data wordt geanonimiseerd en geaggregeerd bewaard.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Je rechten
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          Onder de AVG/GDPR heb je de volgende rechten:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Inzage</h4>
            <p className="text-sm text-stone-600">
              Je kunt opvragen welke gegevens we van je hebben.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Rectificatie</h4>
            <p className="text-sm text-stone-600">
              Je kunt onjuiste gegevens laten corrigeren.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Verwijdering</h4>
            <p className="text-sm text-stone-600">
              Je kunt vragen om je gegevens te verwijderen.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Bezwaar</h4>
            <p className="text-sm text-stone-600">
              Je kunt bezwaar maken tegen bepaalde verwerkingen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Contact
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Heb je vragen over je privacy of wil je een van je rechten uitoefenen? Neem contact met ons op via hello@aiheroes.io.
        </p>

        <DarkBox accentColor="red">
          <h3>Verantwoordelijke</h3>
          <p>
            AI Heroes is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. We zijn gevestigd in Nederland en vallen onder de Nederlandse en Europese privacywetgeving.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
