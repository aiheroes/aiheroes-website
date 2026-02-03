import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import { CONTENT } from '../../constants';
import { BookOpen, Map, ArrowRight } from 'lucide-react';

export const ResourcesPageEN: React.FC = () => {
  const content = CONTENT.en.resourcesPage;

  const iconMap = {
    book: BookOpen,
    map: Map
  };

  return (
    <PageLayout
      lang="en"
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      seoDescription="AI Resources: practical knowledge about AI strategy and literacy. Free resources to understand and apply AI in your organization."
      accentColor="blue"
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

      {/* Content Cards - Light Background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.cards.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <Link
                  key={i}
                  to={card.href}
                  className="group bg-brand-light p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brand-blue"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-blue" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-stone-600 text-sm mb-3">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-blue text-sm font-medium">
                        <span>Read more</span>
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

      {/* Why Resources Section - Dark Background */}
      <section className="py-16 md:py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-12">
            {content.why.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.why.items.map((item, i) => (
              <div key={i} className="border-l-4 border-brand-blue pl-6 py-2">
                <h3 className="text-xl font-serif text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
