import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUDevelopmentNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="EU Development"
      subtitle="Europese AI die werkt. Van lokaal model op eigen hardware tot Europese cloud-integratie."
      seoDescription="Europese AI-oplossingen: on-premises modellen of EU-hosted cloud. Data blijft in Europa, geen Amerikaanse afhankelijkheid. Door AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementatie"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Europese AI die werkt
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Concreet risico</p>
          <p className="text-sm text-stone-200 mb-2">
            Elke keer dat jouw organisatie ChatGPT, Azure OpenAI of AWS Bedrock gebruikt, gaat data naar servers onder Amerikaanse jurisdictie. Via de CLOUD Act kan de VS die data opeisen — zonder dat jij het weet.
          </p>
          <p className="text-sm text-stone-200">
            Slechts <strong className="text-white">23%</strong> van Europese organisaties weet zeker dat hun AI-tools data binnen de EU houden. Vanaf <strong className="text-white">augustus 2025</strong> verplicht de EU AI Act transparantie over dataverwerking in AI-systemen.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Wij bouwen AI-oplossingen die wél in Europa blijven. Of het nu gaat om een lokaal model op je eigen hardware of een Europese cloud-oplossing — je data blijft onder jouw controle.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat we doen</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">On-premises</h4>
            <p className="text-sm text-stone-600">
              Een AI-model op je eigen hardware. Geen abonnement, geen data die het pand verlaat. Volledig onder eigen beheer, met ondersteuning bij installatie, configuratie en training van medewerkers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Europese cloud</h4>
            <p className="text-sm text-stone-600">
              Mistral in Frankrijk, Aleph Alpha in Duitsland — krachtige AI-modellen die in Europa gehost worden. Je data blijft in de EU, je voldoet aan de regelgeving, en je hebt toegang tot state-of-the-art technologie.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Aanvullende diensten</h3>
        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <ul className="space-y-2 text-stone-600">
            <li><strong>AI-beleidsdocument</strong> — We helpen je intern AI-beleid opstellen dat past bij je organisatie en de Europese regelgeving.</li>
            <li><strong>Medewerkerstraining</strong> — Zodat je team weet hoe ze de nieuwe tools effectief en veilig gebruiken.</li>
            <li><strong>Inkoopadvies</strong> — Onafhankelijk advies bij de selectie van Europese leveranciers en platformen.</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Advocatenkantoren, zorginstellingen, overheidsgerelateerde organisaties en bedrijven met EU data-residency vereisten. Overal waar gevoelige data in het spel is en Amerikaanse afhankelijkheid een risico vormt.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1–4 weken</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Doorlooptijd</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Werkende AI</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Oplevering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">EU-hosted</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Data in Europa</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Niet zeker welke richting?</h3>
          <p>
            Geen probleem. We beginnen met een kort oriëntatiegesprek om te bepalen wat bij jouw situatie past. Bekijk onze{' '}
            <Link to="/nl/diensten/digitale-onafhankelijkheid" className="text-white underline underline-offset-2 hover:text-white/80">
              aanpak voor digitale onafhankelijkheid
            </Link>{' '}
            of neem direct{' '}
            <Link to="/nl/contact" className="text-white underline underline-offset-2 hover:text-white/80">
              contact
            </Link>{' '}
            op.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
