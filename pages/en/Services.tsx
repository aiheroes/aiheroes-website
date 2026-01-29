import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import { CONTENT } from '../../constants';

export const ServicesEN: React.FC = () => {
  const services = CONTENT.en.nav.services.children;

  const groupedServices = {
    training: services.filter(s => s.category === 'training'),
    strategy: services.filter(s => s.category === 'strategy'),
    bespoke: services.filter(s => s.category === 'bespoke'),
    awareness: services.filter(s => s.category === 'awareness')
  };

  const categoryTitles = {
    training: 'Training & Workshops',
    strategy: 'Strategy & Scouting',
    bespoke: 'Specialized Programs',
    awareness: 'Awareness & Literacy'
  };

  const categoryDescriptions = {
    training: 'Practical workshops your team can apply immediately',
    strategy: 'Strategic insights and implementation roadmaps',
    bespoke: 'In-depth technical tracks for advanced teams',
    awareness: 'Critical thinking and awareness around AI'
  };

  return (
    <PageLayout
      lang="en"
      title="Our Services"
      subtitle="From AI Foundations to specialized tracks. We help your team at every level."
      seoDescription="AI Heroes services: practical workshops, strategic scouting, and specialized tracks. From basic AI training to custom LLM integrations. View our full offering."
      accentColor="red"
    >
      <div className="max-w-none">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-stone-600 leading-relaxed text-lg">
            Every organization is different. A marketing team has different questions than an IT department.
            A startup works differently than a municipality. That's why we offer different services,
            so you get exactly what you need.
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
                        <span className="group-hover:mr-2 transition-all">Learn more</span>
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
            Not sure where to start?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 max-w-2xl">
            We're happy to think along with you. Send us a message about your situation and we'll
            advise which approach fits best with your team and organization.
          </p>
          <Link
            to="/en/contact"
            className="inline-block bg-brand-red text-white px-8 py-3 font-medium hover:bg-brand-red-dark transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Special pricing note */}
        <div className="mt-8 text-center text-stone-500">
          <p>We offer reduced rates for schools and non-profits.</p>
        </div>
      </div>
    </PageLayout>
  );
};
