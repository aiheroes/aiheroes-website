import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const AanpakNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Onze Aanpak"
      subtitle="Geen PowerPoint-gevechten. Geen eindeloze rapporten. Wij komen binnen en zorgen dat het werkt."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Hoe wij werken
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes ontstond uit frustratie. Te veel organisaties betalen consultants om rapporten te schrijven die in een la verdwijnen. Wij doen het anders: we komen binnen, werken samen met je team, en zorgen dat mensen aan het eind van de dag echt iets nieuws kunnen.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onze principes</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Praktijk boven theorie - je leert door te doen</li>
            <li>Resultaat boven rapport - we meten succes in wat mensen daadwerkelijk toepassen</li>
            <li>Eerlijkheid boven sales - als AI niet de oplossing is, zeggen we dat</li>
            <li>Maatwerk boven standaard - elke organisatie is anders</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Workshops die beklijven</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Onze workshops zijn hands-on. Na een korte introductie ga je direct aan de slag met oefeningen die relevant zijn voor jouw werk. Geen abstracte voorbeelden, maar jouw documenten, jouw processen, jouw uitdagingen.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Voorbereiding</h4>
            <p className="text-sm text-stone-600">
              We spreken vooraf met key stakeholders om te begrijpen wat er speelt. Zo kunnen we de workshop aanpassen op jullie context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Interactief</h4>
            <p className="text-sm text-stone-600">
              Minimaal de helft van de tijd werk je zelf. Geen uren luisteren naar slides, maar direct experimenteren en leren.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Nazorg</h4>
            <p className="text-sm text-stone-600">
              Na de workshop krijg je toegang tot onze community en materialen. Vragen die later opkomen? Gewoon stellen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Resultaatgarantie</h4>
            <p className="text-sm text-stone-600">
              Als deelnemers niet tevreden zijn, praten we erover. We staan achter ons werk.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Development partnership</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Soms is een workshop niet genoeg en wil je echt iets bouwen. Wij ontwikkelen AI-oplossingen samen met je team. Van proof-of-concept tot productie-waardig systeem. Altijd met kennisoverdracht, zodat je niet afhankelijk van ons blijft.
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8 mb-8">
          <h3 className="text-xl font-serif mb-3">Waarom kiezen voor AI Heroes?</h3>
          <p className="text-white/80 leading-relaxed">
            Wij zijn zelf practitioners. We bouwen dagelijks met AI, kennen de mogelijkheden én de beperkingen. Geen theoretici die je vertellen wat je moet doen, maar mensen die het zelf gedaan hebben.
          </p>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Tarieven</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We werken met transparante tarieven. Voor onderwijs en non-profit organisaties hanteren we gereduceerde tarieven - AI moet voor iedereen toegankelijk zijn.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Benieuwd wat we voor jou kunnen betekenen? Neem contact op voor een vrijblijvend gesprek.
        </p>
      </div>
    </PageLayout>
  );
};
