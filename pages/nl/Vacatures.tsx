import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ApplicationForm } from '../../components/ApplicationForm';
import { CONTENT } from '../../constants';
import { MapPin, Clock, Briefcase, GraduationCap, Code, Mic, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const departmentIcons: Record<string, React.FC<{ className?: string }>> = {
  training: Mic,
  consulting: GraduationCap,
  software: Code,
  general: Briefcase
};

export const VacaturesNL: React.FC = () => {
  const content = CONTENT.nl.careersPage;

  const scrollToForm = () => {
    document.getElementById('solliciteer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageLayout
      lang="nl"
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      seoDescription="Werken bij AI Heroes: bekijk onze vacatures en sluit je aan bij een groeiende AI agency in Groningen. AI Engineer, Trainer en meer."
      accentColor="blue"
      showContactForm={false}
      trustedBy={content.growth.trustedBy}
    >
      {/* Growth Narrative + Metrics */}
      <section className="max-w-none py-16 md:py-20 bg-brand-light -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-stone-700 leading-relaxed mb-12">
            {content.growth.text}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.growth.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-brand-blue mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-stone-600 uppercase tracking-wider">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-none py-16 md:py-20 bg-white -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-3">
            {content.positions.title}
          </h2>
          <p className="text-lg text-stone-600 mb-12">
            {content.positions.subtitle}
          </p>

          <div className="space-y-4">
            {content.positions.items.map((position) => {
              const Icon = departmentIcons[position.department] || Briefcase;
              const accentBorder = position.department === 'training' ? 'border-brand-red' : 'border-brand-blue';
              const accentText = position.department === 'training' ? 'text-brand-red' : 'text-brand-blue';
              const accentBg = position.department === 'training' ? 'bg-brand-red' : 'bg-brand-blue';

              return (
                <Link
                  key={position.id}
                  to={`/nl/vacatures/${position.id}`}
                  className={`group border ${accentBorder} border-l-4 p-6 flex items-start gap-4 hover:bg-stone-50 transition-colors`}
                >
                  <div className={`w-10 h-10 ${accentBg}/10 flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Icon className={`w-5 h-5 ${accentText}`} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-xl font-serif text-brand-dark mb-1">{position.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500">
                      <span className={`font-medium ${accentText}`}>{position.departmentLabel}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{position.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{position.hours}</span>
                      <span>{position.type}</span>
                    </div>
                    <p className="text-stone-600 mt-2 text-sm">{position.summary}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-400 flex-shrink-0 mt-2 group-hover:translate-x-1 group-hover:text-brand-blue transition-all" />
                </Link>
              );
            })}
          </div>

          {/* Open Application */}
          <div className="mt-12 p-8 bg-brand-light">
            <h3 className="text-2xl font-serif text-brand-dark mb-3">{content.openApplication.title}</h3>
            <p className="text-stone-600 mb-6">{content.openApplication.text}</p>
            <button
              onClick={() => scrollToForm()}
              className="bg-brand-dark hover:bg-stone-800 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-colors"
            >
              {content.openApplication.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="max-w-none py-16 md:py-20 bg-brand-light -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-12">
            {content.culture.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {content.culture.values.map((value, i) => (
              <div key={i} className="border-l-4 border-brand-blue pl-6 py-2">
                <h3 className="text-xl font-serif text-brand-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.culture.perks.map((perk, i) => (
              <div key={i} className="bg-white p-4">
                <h4 className="font-bold text-brand-dark text-sm mb-1">{perk.title}</h4>
                <p className="text-xs text-stone-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="max-w-none py-16 md:py-20 bg-white -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-12">
            {content.hiringProcess.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {content.hiringProcess.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-serif text-brand-blue/20 mb-2">{step.step}</div>
                <h3 className="text-lg font-serif text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="solliciteer" className="max-w-none py-16 md:py-20 bg-white -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <ApplicationForm
            lang="nl"
            content={content.applicationForm}
            positions={content.positions.items}
          />
        </div>
      </section>
    </PageLayout>
  );
};
