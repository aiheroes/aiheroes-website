import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import { CONTENT } from '../../constants';
import { Target, Users, ArrowRight } from 'lucide-react';

export const OverOnsNL: React.FC = () => {
  const content = CONTENT.nl.aboutPage;

  const iconMap = {
    target: Target,
    users: Users
  };

  return (
    <PageLayout
      lang="nl"
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      seoDescription="Over AI Heroes: sinds 2019 helpen we organisaties praktisch met AI. Geen consultants die rapporten schrijven, maar practitioners die bouwen en trainen."
      accentColor="red"
      showContactForm={true}
    >
      {/* Intro Section - Light Background */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            {content.intro.text.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-stone-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {content.intro.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-brand-red mb-2">
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

      {/* Team Preview Section - Light Background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-3">
            {content.team.title}
          </h2>
          <p className="text-lg text-stone-600 mb-12">
            {content.team.subtitle}
          </p>

          <div className="space-y-8">
            {content.team.members.map((member, i) => (
              <div key={i} className="border-l-4 border-brand-red pl-6 py-2">
                <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-brand-red font-medium uppercase tracking-wider mb-3">
                  {member.role}
                </div>
                <p className="text-stone-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Cards - Light Background */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.cards.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <Link
                  key={i}
                  to={card.href}
                  className="group bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brand-red"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-red" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-red transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-stone-600 text-sm mb-3">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-red text-sm font-medium">
                        <span>Lees meer</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section - Dark Background */}
      <section className="py-16 md:py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-12">
            {content.values.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.values.items.map((value, i) => (
              <div key={i} className="border-l-4 border-brand-red pl-6 py-2">
                <h3 className="text-xl font-serif text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
