import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const OLXNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Case Study: OLX Magic"
      subtitle="AI-gedreven marketplace transformatie. Slimmere zoekfuncties, betere gebruikerservaring."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De uitdaging
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          OLX, een wereldleider in online marktplaatsen, wilde de koop- en verkoopervaring fundamenteel verbeteren. Met miljoenen listings is het vinden van het juiste product een uitdaging. Bestaande zoekfuncties waren te beperkt, en gebruikers moesten vaak door eindeloze resultaten scrollen.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          De opdracht: maak het platform intuïtiever, persoonlijker en slimmer. Zonder de gebruiker te overweldigen met complexe interfaces.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">De kansen</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Productontdekking:</strong> Gebruikers sneller naar relevante resultaten leiden</li>
            <li><strong>Koopbeslissingen:</strong> Betere vergelijkingsmogelijkheden bieden</li>
            <li><strong>Engagement:</strong> Personalisatie op basis van gedrag en voorkeuren</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De oplossing: OLX Magic
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          OLX Magic is een suite van AI-functies die de complete gebruikerservaring transformeert. Van zoeken tot vergelijken, van ontdekken tot kopen.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Slimmere zoekfuncties</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Natural Language Search</h4>
            <p className="text-sm text-stone-600">
              Zoek in gewone taal: "blauwe tuinmeubelen onder de 500 euro" werkt gewoon.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Zoeken met afbeeldingen</h4>
            <p className="text-sm text-stone-600">
              Upload een foto en vind vergelijkbare producten. Ideaal voor visuele shoppers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Slimme suggesties</h4>
            <p className="text-sm text-stone-600">
              AI verfijnt je zoekopdracht en suggereert relevante alternatieven.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Gepersonaliseerde beschrijvingen</h4>
            <p className="text-sm text-stone-600">
              AI-gegenereerde productomschrijvingen maken listings completer en vindbaarder.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Slimmere koopbeslissingen</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart Compare</h4>
            <p className="text-sm text-stone-600">
              Vergelijk producten zij-aan-zij met automatisch gemarkeerde verschillen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Vind vergelijkbaar</h4>
            <p className="text-sm text-stone-600">
              AI suggereert complementaire producten en alternatieven.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart Tagging</h4>
            <p className="text-sm text-stone-600">
              Automatische tags maken producten beter vindbaar voor de juiste kopers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Geavanceerde analytics</h4>
            <p className="text-sm text-stone-600">
              Inzicht in trends en gebruikersgedrag voor continue verbetering.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De resultaten
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="not-prose p-6 bg-brand-blue text-white">
            <h4 className="font-bold mb-2 text-white">Hogere engagement</h4>
            <p className="text-sm text-white/90">
              Gebruikers vinden sneller wat ze zoeken en blijven langer op het platform.
            </p>
          </div>
          <DarkBox accentColor="red" className="p-6">
            <h4 className="font-bold mb-2">Meer conversies</h4>
            <p className="text-sm">
              Slimme vergelijkingstools leiden tot snellere koopbeslissingen.
            </p>
          </DarkBox>
          <DarkBox accentColor="red" className="p-6">
            <h4 className="font-bold mb-2">Intuïtieve navigatie</h4>
            <p className="text-sm">
              Visual search en natural language maken het platform toegankelijker.
            </p>
          </DarkBox>
          <div className="not-prose p-6 bg-brand-blue text-white">
            <h4 className="font-bold mb-2 text-white">Data-gedreven inzichten</h4>
            <p className="text-sm text-white/90">
              Real-time analytics helpen het platform continu te verbeteren.
            </p>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Over OLX</h3>
          <p>
            OLX is een toonaangevende wereldwijde marktplaats die miljoenen mensen helpt goederen en diensten te kopen en verkopen. Met innovatieve oplossingen en een gebruikersgerichte aanpak heeft OLX e-commerce opnieuw gedefinieerd.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
