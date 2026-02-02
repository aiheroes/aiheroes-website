import React, { useState } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import { CONTENT } from '../../constants';
import { DarkBox } from '../../components/DarkBox';
import { PageContactForm } from '../../components/PageContactForm';
import { ChevronDown } from 'lucide-react';

export const ServicesEN: React.FC = () => {
  const content = CONTENT.en.servicesPage!;
  const services = CONTENT.en.nav.services.children;
  const [expandedServices, setExpandedServices] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

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

  const handleServiceCardClick = (serviceTitle: string) => {
    setSelectedTopic(serviceTitle);
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout
      lang="en"
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      seoDescription="AI Heroes services: practical workshops, strategic scouting, and specialized tracks. From basic AI training to custom LLM integrations. View our full offering."
      accentColor="red"
    >
      {/* Hero CTAs Section */}
      <div className="max-w-4xl -mt-8 mb-16">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <button
            onClick={scrollToServices}
            className="bg-brand-red text-white px-8 py-3 font-medium hover:bg-brand-red-dark transition-colors"
          >
            {content.hero.cta1}
          </button>
          <Link
            to="/en/contact"
            className="inline-block border-2 border-brand-red text-brand-red px-8 py-3 font-medium hover:bg-brand-red hover:text-white transition-colors"
          >
            {content.hero.cta2}
          </Link>
        </div>
        <p className="text-stone-500 text-sm mt-4">
          {content.hero.credibility}
        </p>
      </div>

      {/* Social Proof Section */}
      <div className="max-w-none py-20 md:py-24 bg-stone-50 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="mb-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-brand-dark mb-6 italic">
              "{CONTENT.en.socialProof.testimonial.text}"
            </blockquote>
            <cite className="not-italic">
              <span className="block font-bold text-brand-dark">{CONTENT.en.socialProof.testimonial.author}</span>
              <span className="block text-stone-500">{CONTENT.en.socialProof.testimonial.role}</span>
            </cite>
          </div>

          {/* Logo row */}
          <div className="border-t border-stone-200 pt-8 mb-12">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
              {CONTENT.en.socialProof.title}
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
              {["Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Locatiqs"].map((logo, idx) => (
                <span key={idx} className="text-lg font-serif text-stone-400">
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 border-l-4 border-brand-red">
                <div className="text-2xl font-serif text-brand-red mb-2">{stat.metric}</div>
                <p className="text-stone-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Props Section */}
      <div className="max-w-none py-20 md:py-24">
        <DarkBox className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">
            {content.valueProps.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.valueProps.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-white/75 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </DarkBox>
      </div>

      {/* Interactive Services Section */}
      <div id="services-section" className="max-w-none py-20 md:py-24 bg-stone-50 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-12 text-center">
            Our services
          </h2>

          {/* Hero service cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {content.heroServices.map((service, idx) => (
              <button
                key={idx}
                onClick={() => handleServiceCardClick(service.title)}
                className="group text-left bg-white border-2 border-stone-200 hover:border-brand-red transition-all duration-200 p-6 cursor-pointer"
              >
                <h3 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-red font-medium text-sm mb-3">{service.description}</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{service.benefit}</p>
                <div className="flex items-center text-brand-red font-medium text-sm">
                  <span className="group-hover:mr-2 transition-all">Interested?</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Expandable full service list */}
          <div className="mt-12">
            <button
              onClick={() => setExpandedServices(!expandedServices)}
              className="w-full bg-white border border-stone-200 hover:border-brand-red transition-colors p-4 flex items-center justify-between group"
            >
              <span className="font-medium text-brand-dark group-hover:text-brand-red transition-colors">
                View all services
              </span>
              <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${expandedServices ? 'rotate-180' : ''}`} />
            </button>

            {expandedServices && (
              <div className="bg-white border border-stone-200 border-t-0 p-6 space-y-12 animate-fade-in-up">
                {(Object.keys(groupedServices) as Array<keyof typeof groupedServices>).map(category => {
                  const categoryServices = groupedServices[category];
                  if (categoryServices.length === 0) return null;

                  return (
                    <div key={category}>
                      <h3 className="text-2xl font-serif text-brand-dark mb-2">
                        {categoryTitles[category]}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {categoryServices.map(service => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block border border-stone-200 hover:border-brand-red transition-colors p-4 group"
                          >
                            <h4 className="font-medium text-brand-dark group-hover:text-brand-red transition-colors mb-1">
                              {service.label}
                            </h4>
                            <p className="text-stone-600 text-sm">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-none py-20 md:py-24">
        <DarkBox className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 text-center">
            {content.process.title}
          </h2>
          <p className="text-white/60 text-center mb-12">{content.process.timeline}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {content.process.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-serif text-brand-red mb-4">{idx + 1}</div>
                <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-white/75 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </DarkBox>
      </div>

      {/* Guarantees & FAQ Section */}
      <div className="max-w-none py-20 md:py-24 bg-stone-50 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Guarantees */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-8">
                {content.guarantees.title}
              </h2>
              <div className="space-y-6">
                {content.guarantees.items.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-8">
                {content.faq.title}
              </h2>
              <div className="space-y-6">
                {content.faq.items.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-brand-dark mb-2">{item.question}</h3>
                    <p className="text-stone-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education pricing note */}
          <div className="mt-8 text-center text-stone-500 text-sm border-t border-stone-200 pt-8">
            <p>{CONTENT.en.contact.educationNote}</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Full Width */}
      <div id="contact-form" className="max-w-none py-20 md:py-24 bg-white -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">
              {content.contactSection.title}
            </h2>
            <p className="text-stone-600 mb-2">{content.contactSection.subtitle}</p>
            <p className="text-stone-500 text-sm">
              {content.contactSection.altCta}{' '}
              <a href="mailto:hello@aiheroes.io" className="text-brand-red hover:underline">
                hello@aiheroes.io
              </a>
            </p>
          </div>
          <PageContactForm
            lang="en"
            accentColor="red"
            preselectedTopic={selectedTopic}
          />
        </div>
      </div>
    </PageLayout>
  );
};
