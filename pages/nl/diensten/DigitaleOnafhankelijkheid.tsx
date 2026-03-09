import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const DigitaleOnafhankelijkheidNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Digitale Onafhankelijkheid"
      subtitle="Data, platformen en Europese wetgeving. Grip op je digitale omgeving in drie stappen."
      seoDescription="Digitale onafhankelijkheid voor Nederlandse organisaties. Training, consultancy en development voor Europese alternatieven en compliance. Door AI Heroes."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Data, platformen en Europese wetgeving
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Tijdlijn</p>
          <ul className="space-y-2 text-sm text-stone-200">
            <li><strong className="text-white">Sinds feb 2025:</strong> EU AI Act Artikel 4 — AI-geletterdheid verplicht</li>
            <li><strong className="text-white">Sinds aug 2025:</strong> Algemene bepalingen EU AI Act van kracht</li>
            <li><strong className="text-white">CLOUD Act:</strong> VS-overheid kan data bij Amerikaanse bedrijven opeisen, ongeacht serverlocatie</li>
          </ul>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Nederlandse organisaties werken massaal met Amerikaanse techbedrijven. Microsoft, Google, Amazon — ze zitten diep in onze infrastructuur. Maar die afhankelijkheid heeft een keerzijde. De CLOUD Act geeft de Amerikaanse overheid toegang tot data die bij Amerikaanse bedrijven is opgeslagen, ongeacht waar de servers staan. 67% van de Nederlandse organisaties heeft geen zicht op waar hun data precies naartoe gaat. In maart 2025 nam de Tweede Kamer moties aan over digitale soevereiniteit, en Europese regelgeving rond data en AI wordt elk kwartaal strenger. De vraag is niet óf je hieraan moet werken, maar wanneer.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat we doen</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We helpen organisaties in drie sporen grip te krijgen op hun digitale omgeving. Elk spoor kan los ingezet worden, maar de grootste impact ontstaat wanneer ze gecombineerd worden.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/nl/diensten/eu-training"
            className="p-6 bg-white border border-stone-200 hover:border-brand-red hover:shadow-md transition-all duration-200 no-underline group"
          >
            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-brand-red">Training</h4>
            <p className="text-sm text-stone-600">
              Workshop over risico's van Amerikaanse software, Europese alternatieven en wat de regelgeving vereist.
            </p>
          </Link>
          <Link
            to="/nl/diensten/eu-consultancy"
            className="p-6 bg-white border border-stone-200 hover:border-brand-blue hover:shadow-md transition-all duration-200 no-underline group"
          >
            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-brand-blue">Consultancy</h4>
            <p className="text-sm text-stone-600">
              Volledige organisatiescan, risico-analyse en migratie roadmap.
            </p>
          </Link>
          <Link
            to="/nl/diensten/eu-development"
            className="p-6 bg-white border border-stone-200 hover:border-stone-700 hover:shadow-md transition-all duration-200 no-underline group"
          >
            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-stone-700">Development</h4>
            <p className="text-sm text-stone-600">
              Overstappen op Europese AI-tools. Van lokaal model tot cloud-integratie.
            </p>
          </Link>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hoe we werken</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We zijn onafhankelijk. We hebben geen partnerdeals met leveranciers en ontvangen geen doorverwijsvergoedingen. Ons advies is gebaseerd op wat het beste past bij jouw organisatie — niet op wat ons het meeste oplevert. Als een Amerikaans platform de beste keuze is, zeggen we dat eerlijk. Maar we zorgen ervoor dat je die keuze maakt met open ogen.
        </p>

        <DarkBox accentColor="red">
          <h3>Eén partner voor het hele traject</h3>
          <p>
            De meeste organisaties hebben niet één probleem, maar een combinatie: medewerkers die niet weten wat er speelt, een IT-landschap dat niet in kaart is gebracht, en AI-tools die op Amerikaanse servers draaien. Wij combineren alle drie de sporen zodat je niet bij drie verschillende partijen hoeft aan te kloppen.{' '}
            <Link to="/nl/contact" className="text-white underline underline-offset-2 hover:text-white/80">
              Neem contact op
            </Link>{' '}
            voor een vrijblijvend gesprek.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
