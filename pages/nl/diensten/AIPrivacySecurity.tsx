import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIPrivacySecurityNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Verantwoord AI-gebruik"
      subtitle="Veilig werken met AI. Van GDPR compliance tot data governance - zonder de productiviteit te verliezen."
      accentColor="red"
      seoDescription="AI Privacy & Security training: veilig werken met AI, GDPR-compliant. Data governance en security best practices. Workshop door AI Heroes."
      pillarBadge="Training"
      ctaLabel="Plan een workshop"
      trustedBy={["Philips Healthcare", "Tweede Kamer", "Envalior"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI verantwoord implementeren
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI biedt enorme kansen, maar brengt ook risico's met zich mee. Hoe voorkom je dat medewerkers gevoelige data delen met ChatGPT? Wat zijn je verplichtingen onder de AI Act? In deze workshop krijg je praktische handvatten om AI veilig in te zetten.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onderwerpen</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Data governance bij AI gebruik</li>
            <li>GDPR en de EU AI Act - wat je moet weten</li>
            <li>Welke data wel en niet delen met AI tools</li>
            <li>On-premise vs cloud AI oplossingen</li>
            <li>AI policies opstellen voor je organisatie</li>
            <li>Risico assessment frameworks</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">De EU AI Act</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Vanaf 2025 zijn organisaties verplicht om aan de EU AI Act te voldoen. We helpen je begrijpen wat dit betekent voor jouw organisatie en hoe je compliant wordt zonder alle AI initiatieven stil te leggen.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Risico Classificatie</h4>
            <p className="text-sm text-stone-600">
              Leer AI toepassingen classificeren volgens de AI Act: van minimaal tot hoog risico.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Documentatie Eisen</h4>
            <p className="text-sm text-stone-600">
              Welke documentatie je moet bijhouden en hoe je dit praktisch organiseert.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI Governance</h4>
            <p className="text-sm text-stone-600">
              Rollen en verantwoordelijkheden inrichten voor verantwoord AI gebruik.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Security Best Practices</h4>
            <p className="text-sm text-stone-600">
              Technische en organisatorische maatregelen om AI veilig in te zetten.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Praktische output</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Je verlaat deze workshop met:
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc list-inside">
          <li>Een concept AI policy voor je organisatie</li>
          <li>Checklist voor veilig AI gebruik</li>
          <li>Framework voor risico assessment</li>
          <li>Template voor AI impact assessment</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Halve dag</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">5-20</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deelnemers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Templates</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Mee naar huis</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Deze workshop is relevant voor IT managers, privacy officers, compliance teams en iedereen die verantwoordelijk is voor het veilig implementeren van AI in de organisatie.
        </p>

        <DarkBox accentColor="blue">
          <h3>EU AI Act compliance op organisatieniveau?</h3>
          <p>
            Naast deze workshop bieden we ook onze{' '}
            <Link to="/nl/diensten/digitale-onafhankelijkheid" className="text-white underline underline-offset-2 hover:text-white/80">
              Digitale Onafhankelijkheid
            </Link>{' '}
            tracks aan: van organisatiescan tot migratie naar Europese alternatieven.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
