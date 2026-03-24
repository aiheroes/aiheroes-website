import React, { useState, useEffect } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Link, useLocation } from 'react-router-dom';
import { CONTENT } from '../../constants';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';

export const ServicesEN: React.FC = () => {
  const content = CONTENT.en.servicesPage!;
  const services = CONTENT.en.nav.services.children || [];
  const location = useLocation();
  const [expandedServices, setExpandedServices] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Auto-expand and scroll to pillar section when navigating via hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (['training', 'consulting', 'software'].includes(hash)) {
      setExpandedServices(true);
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }, [location.hash]);

  // Inject FAQ structured data (JSON-LD)
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': content.faq.items.map(item => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer
        }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.getElementById('faq-schema')?.remove(); };
  }, [content.faq.items]);

  const groupedServices = {
    training: services.filter(s => s.category === 'training'),
    consulting: services.filter(s => s.category === 'consulting'),
    software: services.filter(s => s.category === 'software')
  };

  const categoryTitles = {
    training: 'Training & Workshops',
    consulting: 'AI Consulting',
    software: 'Software & Implementation'
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600;
      const contactSection = document.getElementById('contact-form');

      const heroScrolledOut = window.scrollY > heroHeight;
      const contactInView = contactSection
        ? contactSection.getBoundingClientRect().top < window.innerHeight
        : false;

      setShowStickyCta(heroScrolledOut && !contactInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroCtaContent = (
    <>
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-8">
        <button
          onClick={scrollToServices}
          className="group bg-brand-red text-white px-8 py-4 font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
        >
          <span>{content.hero.cta1}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
        >
          <span>{content.hero.cta2}</span>
        </button>
      </div>
      <div className="mt-8 pt-6 border-t border-white/15">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/60">
          <span className="font-medium text-white/80">{content.hero.credibility}</span>
          <span className="text-white/30 mx-1">—</span>
          {["Postcode Loterij", "Prosus", "Medux", "Banijay", "Hanze"].map((name, idx) => (
            <span key={idx}>
              {name}{idx < 4 && <span className="text-white/30 ml-1">&middot;</span>}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <PageLayout
      lang="en"
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      seoDescription="AI Heroes services: from change management to technical implementation under one roof. Training, consulting and software. European approach, Groningen-based."
      accentColor="red"
      showContactForm={false}
      heroExtra={heroCtaContent}
    >
      {/* Sticky CTA */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToContact}
          className="group bg-brand-blue text-white px-6 py-4 shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 flex items-center gap-3 font-medium hover:scale-105"
        >
          <span>Get in touch</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Stats */}
      <div className="max-w-none -mt-8 md:-mt-16 pb-16 md:pb-20 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {content.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 border-2 border-stone-200 hover:border-brand-blue transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-blue group-hover:h-full transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-2xl md:text-3xl font-serif text-brand-blue mb-3 font-bold leading-tight">
                    {stat.metric}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work - Methodology */}
      <div className="max-w-none py-12 md:py-16 bg-stone-900 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 text-center">
            How we work
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Training, consulting and software under one roof. We guide the entire AI journey.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "We combine all three",
                description: "Training, consulting and software from one partner. No fragmented approach, but one team covering the full trajectory."
              },
              {
                title: "Immediately applicable",
                description: "Your team works with real tools on real use cases. Learned today, applied tomorrow."
              },
              {
                title: "Focus on results",
                description: "We measure success by concrete skills, working prototypes and measurable impact."
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Services Section */}
      <div id="services-section" className="max-w-none py-16 md:py-20 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-3 text-center">
            Our services
          </h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the approach that fits where your team is now
          </p>

          {/* Hero service cards with distinct visual styles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {content.heroServices.map((service, idx) => {
              const colors = [
                { border: 'border-brand-red', accent: 'bg-brand-red', hover: 'hover:shadow-brand-red/20' },
                { border: 'border-brand-blue', accent: 'bg-brand-blue', hover: 'hover:shadow-brand-blue/20' },
                { border: 'border-brand-dark', accent: 'bg-brand-dark', hover: 'hover:shadow-stone-500/20' }
              ];
              const color = colors[idx];

              return (
                <button
                  key={idx}
                  onClick={() => handleServiceCardClick(service.title)}
                  className={`group text-left bg-white border-2 ${color.border} hover:border-opacity-100 border-opacity-30 transition-all duration-300 p-6 md:p-8 cursor-pointer ${color.hover} hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <div className={`w-12 h-1 ${color.accent} mb-6 group-hover:w-16 transition-all duration-300`}></div>
                  <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-medium text-sm mb-4 text-stone-700">{service.description}</p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{service.benefit}</p>
                  <div className="flex items-center text-brand-dark font-medium text-sm group-hover:text-brand-red transition-colors">
                    <span>Interested?</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expandable full service list - more prominent */}
          <div className="mt-12 border-2 border-stone-200">
            <button
              onClick={() => setExpandedServices(!expandedServices)}
              className="w-full bg-stone-50 hover:bg-stone-100 transition-colors p-6 flex items-center justify-between group"
            >
              <div className="text-left">
                <span className="font-serif text-xl md:text-2xl text-brand-dark block mb-1">
                  All services
                </span>
                <span className="text-sm text-stone-500">
                  View our full offering of services
                </span>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-stone-400 transition-transform duration-300 ${
                  expandedServices ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedServices && (
              <div className="bg-white p-6 md:p-8 space-y-10 border-t-2 border-stone-200">
                {(Object.keys(groupedServices) as Array<keyof typeof groupedServices>).map(category => {
                  const categoryServices = groupedServices[category];
                  if (categoryServices.length === 0) return null;

                  return (
                    <div key={category} id={category} className="scroll-mt-24">
                      <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-4 pb-2 border-b border-stone-200">
                        {categoryTitles[category]}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {categoryServices.map(service => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="group block border border-stone-200 hover:border-brand-red transition-all duration-300 p-5 hover:shadow-md"
                          >
                            <h4 className="font-bold text-brand-dark group-hover:text-brand-red transition-colors mb-2 flex items-center gap-2">
                              {service.label}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </h4>
                            <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
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

      {/* Process Section - Friendly Blue */}
      <div className="max-w-none py-16 md:py-20 bg-brand-blue -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-3 text-center">
            {content.process.title}
          </h2>
          <p className="text-white/60 text-center mb-16 text-sm uppercase tracking-wider">
            {content.process.timeline}
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {content.process.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-blue font-serif text-xl font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="block leading-none">{idx + 1}</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-white/30 md:hidden"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ with Trust Signals */}
      <div className="max-w-none py-16 md:py-20 bg-stone-50 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {[
              { icon: <Check className="w-5 h-5" />, text: "No vendor lock-in" },
              { icon: <Check className="w-5 h-5" />, text: "Honest advice" },
              { icon: <Check className="w-5 h-5" />, text: "Lower rates for education" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-5 py-3 border border-stone-200 shadow-sm">
                <div className="text-brand-red">{badge.icon}</div>
                <span className="text-sm font-medium text-stone-700">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div>
            <h2 className="text-2xl md:text-4xl font-serif text-brand-dark mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {content.faq.items.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-stone-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-bold text-brand-dark pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${
                        expandedFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFaq === idx ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education note */}
            <div className="mt-8 text-center text-stone-500 text-sm">
              <p>{CONTENT.en.contact.educationNote}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="max-w-none py-16 md:py-24 bg-white -mx-6 md:-mx-12 px-6 md:px-12 border-t-4 border-brand-red">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4">
              {content.contactSection.title}
            </h2>
            <p className="text-stone-600 text-lg mb-2">{content.contactSection.subtitle}</p>
            <p className="text-stone-500 text-sm">
              {content.contactSection.altCta}{' '}
              <a href="mailto:hello@aiheroes.io" className="text-brand-red hover:underline font-medium">
                hello@aiheroes.io
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <ContactFormEmbed
            lang="en"
            accentColor="red"
            preselectedTopic={selectedTopic}
          />
        </div>
      </div>
    </PageLayout>
  );
};

// Embedded contact form component
const ContactFormEmbed: React.FC<{
  lang: 'nl' | 'en';
  accentColor: 'red' | 'blue';
  preselectedTopic?: string;
}> = ({ lang, accentColor, preselectedTopic }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const content = {
    nl: {
      name: 'Naam',
      email: 'E-mail',
      org: 'Organisatie',
      message: 'Je bericht',
      submit: 'Verstuur',
      success: { title: 'Ontvangen', message: 'We nemen snel contact met je op.', sendAnother: 'Nog een versturen' }
    },
    en: {
      name: 'Name',
      email: 'Email',
      org: 'Organization',
      message: 'Your message',
      submit: 'Send',
      success: { title: 'Received', message: 'We will be in touch shortly.', sendAnother: 'Send another' }
    }
  }[lang];

  const accentBg = accentColor === 'red' ? 'bg-brand-red hover:bg-opacity-90' : 'bg-brand-blue hover:bg-opacity-90';
  const accentFocus = accentColor === 'red' ? 'focus:border-brand-red' : 'focus:border-brand-blue';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const submitData = new URLSearchParams({
      'form-name': 'contact',
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      topics: preselectedTopic || '',
      message: formData.message
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submitData.toString(),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="w-16 h-16 border-4 border-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-serif text-brand-dark mb-3">{content.success.title}</h3>
        <p className="text-stone-600 mb-8">{content.success.message}</p>
        <button
          onClick={() => setFormState('idle')}
          className="text-brand-red font-bold hover:underline underline-offset-4"
        >
          {content.success.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
            {content.name}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={`w-full bg-white border-2 border-stone-200 px-4 py-3 text-lg text-brand-dark ${accentFocus} focus:outline-none transition-colors`}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
            {content.email}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`w-full bg-white border-2 border-stone-200 px-4 py-3 text-lg text-brand-dark ${accentFocus} focus:outline-none transition-colors`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
          {content.org}
        </label>
        <input
          id="organization"
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          className={`w-full bg-white border-2 border-stone-200 px-4 py-3 text-lg text-brand-dark ${accentFocus} focus:outline-none transition-colors`}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
          {content.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className={`w-full bg-white border-2 border-stone-200 px-4 py-3 text-lg text-brand-dark ${accentFocus} focus:outline-none transition-colors resize-none`}
        />
      </div>

      {formState === 'error' && (
        <p className="text-brand-red text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        disabled={formState === 'submitting'}
        type="submit"
        className={`${accentBg} text-white px-10 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl`}
      >
        {formState === 'submitting' ? (lang === 'nl' ? 'Verzenden...' : 'Sending...') : content.submit}
      </button>
    </form>
  );
};
