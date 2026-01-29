import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import { CONTENT } from '../../constants';

export const DienstenNL: React.FC = () => {
  const services = CONTENT.nl.nav.services.children;

  const groupedServices = {
    training: services.filter(s => s.category === 'training'),
    strategy: services.filter(s => s.category === 'strategy'),
    bespoke: services.filter(s => s.category === 'bespoke'),
    awareness: services.filter(s => s.category === 'awareness')
  };

  const categoryTitles = {
    training: 'Training & Workshops',
    strategy: 'Strategie & Scouting',
    bespoke: 'Specialistische Trajecten',
    awareness: 'Awareness & Literacy'
  };

  const categoryDescriptions = {
    training: 'Praktische workshops waar je team direct mee aan de slag kan',
    strategy: 'Strategisch inzicht en implementatieroadmaps',
    bespoke: 'Diepgaande technische tracks voor gevorderde teams',
    awareness: 'Bewustwording en kritisch denken rondom AI'
  };

  return (
    <PageLayout
      lang="nl"
      title="Onze Diensten"
      subtitle="Van AI Foundations tot specialistische tracks. We helpen je team op elk niveau."
      seoDescription="AI Heroes diensten: praktische workshops, strategische scouting, en specialistische tracks. Van basis AI-training tot custom LLM-integraties. Bekijk ons volledige aanbod."
      accentColor="red"
    >
      <div className="max-w-none">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-stone-600 leading-relaxed text-lg">
            Elke organisatie is anders. Een marketingteam heeft andere vragen dan een IT-afdeling.
            Een startup werkt anders dan een gemeente. Daarom bieden we verschillende diensten aan,
            zodat je precies krijgt wat je nodig hebt.
          </p>
        </div>

        {/* Services by category */}
        <div className="space-y-16">
          {(Object.keys(groupedServices) as Array<keyof typeof groupedServices>).map(category => {
            const categoryServices = groupedServices[category];
            if (categoryServices.length === 0) return null;

            return (
              <div key={category}>
                <div className="mb-8">
                  <h2 className="text-3xl font-serif text-brand-dark mb-3">
                    {categoryTitles[category]}
                  </h2>
                  <p className="text-stone-500 text-lg">
                    {categoryDescriptions[category]}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {categoryServices.map(service => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="group block bg-white border border-stone-200 hover:border-brand-red transition-all duration-200 p-8"
                    >
                      <h3 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-brand-red transition-colors">
                        {service.label}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-brand-red font-medium">
                        <span className="group-hover:mr-2 transition-all">Meer info</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA section */}
        <div className="mt-16 bg-stone-50 p-8 md:p-12 border-l-4 border-brand-red">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-4">
            Niet zeker waar te beginnen?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 max-w-2xl">
            We denken graag mee. Stuur ons een bericht met je situatie en we adviseren
            welke aanpak het beste past bij jouw team en organisatie.
          </p>
          <Link
            to="/nl/contact"
            className="inline-block bg-brand-red text-white px-8 py-3 font-medium hover:bg-brand-red-dark transition-colors"
          >
            Neem contact op
          </Link>
        </div>

        {/* Special pricing note */}
        <div className="mt-8 text-center text-stone-500">
          <p>Voor scholen en non-profits hebben we lagere tarieven.</p>
        </div>
      </div>
    </PageLayout>
  );
};
