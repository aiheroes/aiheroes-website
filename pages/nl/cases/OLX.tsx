import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const OLXNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Case Study: OLX Magic"
      subtitle="AI-gedreven marketplace transformatie. Slimmere zoekfuncties, betere gebruikerservaring."
      accentColor="blue"
      pillarBadge="Consultancy + Software"
      seoDescription="Case study OLX Magic: AI-gedreven marketplace transformatie met slimmere zoekfuncties en betere gebruikerservaring. Door AI Heroes."
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
          <div className="relative overflow-hidden group" style={{ backgroundColor: '#2563EB', padding: '2rem', borderRadius: '2px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <span style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '600' }}>↑</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Hogere engagement
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Gebruikers vinden sneller wat ze zoeken en blijven langer op het platform.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group" style={{ backgroundColor: '#1C1917', padding: '2rem', borderRadius: '2px', border: '1px solid rgba(217,83,79,0.3)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#D9534F' }}></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(217,83,79,0.15)' }}>
                  <span style={{ color: '#D9534F', fontSize: '1.25rem', fontWeight: '600' }}>✓</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Meer conversies
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Slimme vergelijkingstools leiden tot snellere koopbeslissingen.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group" style={{ backgroundColor: '#1C1917', padding: '2rem', borderRadius: '2px', border: '1px solid rgba(217,83,79,0.3)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#D9534F' }}></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(217,83,79,0.15)' }}>
                  <span style={{ color: '#D9534F', fontSize: '1.25rem', fontWeight: '600' }}>→</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Intuïtieve navigatie
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Visual search en natural language maken het platform toegankelijker.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group" style={{ backgroundColor: '#2563EB', padding: '2rem', borderRadius: '2px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <span style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '600' }}>📊</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Data-gedreven inzichten
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Real-time analytics helpen het platform continu te verbeteren.
              </p>
            </div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Over OLX</h3>
          <p>
            OLX is een toonaangevende wereldwijde marktplaats die miljoenen mensen helpt goederen en diensten te kopen en verkopen. Met innovatieve oplossingen en een gebruikersgerichte aanpak heeft OLX e-commerce opnieuw gedefinieerd.
          </p>
        </DarkBox>

        <DarkBox accentColor="blue" className="mt-8">
          <h3 className="text-xl font-serif mb-3">Wil je vergelijkbare resultaten?</h3>
          <p className="mb-4">
            Vertel ons over je uitdaging. We denken graag mee over hoe AI jouw organisatie kan helpen.
          </p>
          <Link
            to="/nl/diensten"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
          >
            Bekijk onze diensten
          </Link>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
