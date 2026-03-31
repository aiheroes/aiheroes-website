import React, { useState, useEffect } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ApplicationForm } from '../../components/ApplicationForm';
import { CONTENT } from '../../constants';
import { ChevronDown, MapPin, Clock, Briefcase, GraduationCap, Code, Mic } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const departmentIcons: Record<string, React.FC<{ className?: string }>> = {
  training: Mic,
  consulting: GraduationCap,
  software: Code,
  general: Briefcase
};

export const VacaturesNL: React.FC = () => {
  const content = CONTENT.nl.careersPage;
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const pos = content.positions.items.find(p => p.id === id);
      if (pos) {
        setExpandedPosition(id);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash, content.positions.items]);

  const scrollToForm = (positionTitle?: string) => {
    if (positionTitle) setSelectedPosition(positionTitle);
    else setSelectedPosition('');
    setTimeout(() => {
      document.getElementById('solliciteer')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
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
              const isExpanded = expandedPosition === position.id;
              const Icon = departmentIcons[position.department] || Briefcase;
              const accentBorder = position.department === 'training' ? 'border-brand-red' : 'border-brand-blue';
              const accentText = position.department === 'training' ? 'text-brand-red' : 'text-brand-blue';
              const accentBg = position.department === 'training' ? 'bg-brand-red' : 'bg-brand-blue';

              return (
                <div key={position.id} id={position.id} className={`border ${accentBorder} border-l-4`}>
                  <button
                    onClick={() => setExpandedPosition(isExpanded ? null : position.id)}
                    className="w-full text-left p-6 flex items-start gap-4 hover:bg-stone-50 transition-colors"
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
                    <ChevronDown className={`w-5 h-5 text-stone-400 flex-shrink-0 mt-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-stone-100 animate-fade-in-up">
                      <div className="ml-14">
                        {position.description.map((p, i) => (
                          <p key={i} className="text-stone-700 leading-relaxed mb-4">{p}</p>
                        ))}

                        <h4 className="font-bold text-brand-dark mt-6 mb-3 text-sm uppercase tracking-wider">Wat vragen we?</h4>
                        <ul className="space-y-2 mb-6">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="text-stone-700 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-blue before:rounded-full">
                              {req}
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-bold text-brand-dark mt-6 mb-3 text-sm uppercase tracking-wider">Wat bieden we?</h4>
                        <ul className="space-y-2 mb-8">
                          {position.offerings.map((offer, i) => (
                            <li key={i} className="text-stone-700 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-red before:rounded-full">
                              {offer}
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => scrollToForm(position.title)}
                          className={`${accentBg} hover:opacity-90 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-opacity`}
                        >
                          Solliciteer
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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
            preselectedPosition={selectedPosition}
          />
        </div>
      </section>
    </PageLayout>
  );
};
