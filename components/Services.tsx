import React from 'react';
import { Content, Language } from '../types';

interface ServicesProps {
  content: Content['services'];
  lang: Language;
}

const SERVICE_BACKGROUNDS = {
  foundations: "https://images.pexels.com/photos/11941918/pexels-photo-11941918.jpeg?auto=compress&cs=tinysrgb&w=1200",
  scouting: "https://images.unsplash.com/photo-1554755229-ca4470e07232?auto=format&fit=crop&q=80&w=1200",
  specialized: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&q=80&w=1200"
};

export const Services: React.FC<ServicesProps> = ({ content, lang }) => {
  const servicesList = [
    { key: 'foundations' as const, accentColor: 'border-brand-red', chipColor: 'red', topicIndex: 0 },
    { key: 'scouting' as const, accentColor: 'border-brand-red', chipColor: 'red', topicIndex: 1 },
    { key: 'specialized' as const, accentColor: 'border-brand-blue', chipColor: 'blue', topicIndex: 2 }
  ];

  const ctaText = lang === 'nl' ? 'Meer info' : 'Learn more';

  const scrollToContact = (topicIndex: number, chipColor: 'red' | 'blue') => {
    // Dispatch custom event with topic index and color
    window.dispatchEvent(new CustomEvent('selectTopic', { detail: { topicIndex, chipColor } }));

    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full min-h-screen py-24 bg-brand-light relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full flex flex-col justify-center">

        {/* Header - centered on desktop */}
        <div className="mb-8 md:mb-16 md:text-center">
          <h2 className="text-3xl md:text-6xl font-serif text-brand-dark mb-1 md:mb-2">
            {content.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {servicesList.map((item) => {
            const serviceData = content.items[item.key];
            const bgImage = SERVICE_BACKGROUNDS[item.key];
            return (
              <div
                key={item.key}
                onClick={() => scrollToContact(item.topicIndex, item.chipColor)}
                className={`
                  relative overflow-hidden
                  h-[220px] md:h-[320px]
                  border-b-4 md:border-b-8 ${item.accentColor}
                  shadow-lg hover:shadow-xl
                  transition-all duration-500
                  md:hover:-translate-y-1
                  group cursor-pointer
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={bgImage}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                </div>

                {/* Content - flex column with justify-between for top/bottom alignment */}
                <div className="relative z-10 p-5 md:p-8 h-full flex flex-col justify-between">
                  {/* Top: Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                      {serviceData.title}
                    </h3>
                  </div>

                  {/* Bottom: Description + CTA */}
                  <div>
                    <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-4 line-clamp-3">
                      {serviceData.description}
                    </p>
                    <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                      {ctaText}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
