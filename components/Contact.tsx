import React, { useState, useEffect, useRef } from 'react';
import type { Content } from '../types';
import { Check, Calendar } from 'lucide-react';

interface ContactProps {
  content: Content['contact'];
  contactFormContent: Content['contactForm'];
}

export const Contact: React.FC<ContactProps> = ({ content, contactFormContent }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [topicColors, setTopicColors] = useState<Record<string, 'red' | 'blue'>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const mountTime = useRef(Date.now());

  // Listen for topic selection from Services
  useEffect(() => {
    const handleSelectTopic = (e: CustomEvent<{ topicIndex: number; chipColor: 'red' | 'blue' }>) => {
      const topic = content.form.topicOptions[e.detail.topicIndex];
      if (topic) {
        setSelectedTopics([topic]);
        setTopicColors({ [topic]: e.detail.chipColor });
      }
    };

    window.addEventListener('selectTopic', handleSelectTopic as EventListener);
    return () => window.removeEventListener('selectTopic', handleSelectTopic as EventListener);
  }, [content.form.topicOptions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    // Bot detection: silently show success to avoid revealing detection
    const elapsed = Date.now() - mountTime.current;
    if (
      honeypot ||
      elapsed < 3000 ||
      /<a[\s>]/i.test(formData.message) ||
      (formData.name.trim() !== '' && formData.name.trim() === formData.organization.trim())
    ) {
      setFormState('success');
      setFormData({ name: '', email: '', organization: '', message: '' });
      setSelectedTopics([]);
      setTopicColors({});
      return;
    }

    const submitData = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': honeypot,
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      topics: selectedTopics.join(', '),
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
        setSelectedTopics([]);
        setTopicColors({});
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  // Map topic index to color (matches Services order)
  const getTopicColor = (topic: string): 'red' | 'blue' => {
    const index = content.form.topicOptions.indexOf(topic);
    // Index 0 and 1 are red (Workshop, Scouting), index 2 is blue (Something else/Specialized)
    return index === 2 ? 'blue' : 'red';
  };

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(prev => prev.filter(t => t !== topic));
      setTopicColors(prev => {
        const next = { ...prev };
        delete next[topic];
        return next;
      });
    } else {
      setSelectedTopics(prev => [...prev, topic]);
      setTopicColors(prev => ({ ...prev, [topic]: getTopicColor(topic) }));
    }
  };

  return (
    <div id="contact" className="w-full flex-grow flex flex-col justify-center pt-24 pb-12 md:pt-40 md:pb-24">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
             <h2 className="text-[clamp(1.625rem,_1.125rem+1.75vw,_3.5rem)] font-serif text-brand-dark mb-2 md:mb-6">{contactFormContent.title}</h2>
             <p className="text-sm md:text-xl text-stone-600 leading-relaxed mb-4 md:mb-8 text-pretty">
               {contactFormContent.subtitle}
             </p>
             <p className="text-sm md:text-xl text-stone-600 leading-relaxed text-pretty">
               {contactFormContent.emailLabel}
             </p>
             <p className="text-sm md:text-xl text-stone-600 leading-relaxed text-pretty mt-1 md:mt-2">
               <a
                 href={`mailto:${contactFormContent.email}`}
                 className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
               >
                 {contactFormContent.email}
                 <span className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-brand-red"></span>
               </a>
               {' · '}
               <a
                 href={contactFormContent.phoneHref}
                 className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
               >
                 {contactFormContent.phone}
                 <span className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-brand-blue"></span>
               </a>
             </p>
             <a
               href={contactFormContent.meetingUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 mt-4 md:mt-6 text-sm md:text-base font-medium text-brand-dark hover:text-brand-red transition-colors group"
             >
               <Calendar className="w-4 h-4 md:w-5 md:h-5 text-stone-400 group-hover:text-brand-red transition-colors" />
               {contactFormContent.meetingLabel}
               <span className="transition-transform group-hover:translate-x-1">→</span>
             </a>

             <p className="mt-8 md:mt-12 pt-4 border-t border-stone-300/60 max-w-xs text-[11px] text-stone-500 leading-relaxed">
               AI Heroes B.V. <span className="text-stone-400">·</span> KvK 42051968 <span className="text-stone-400">·</span> BTW NL869486263B01
             </p>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white p-4 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            {formState === 'success' ? (
              <div className="text-center py-4 md:py-8 animate-fade-in-up">
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-green-600">
                  <Check className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-1 md:mb-2">{content.success.title}</h3>
                <p className="text-stone-500 mb-4 md:mb-6 text-sm md:text-base">{content.success.message}</p>
                <button onClick={() => setFormState('idle')} className="text-brand-dark font-bold hover:underline underline-offset-4 text-xs md:text-base">
                  {content.success.sendAnother}
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-3 md:space-y-8"
              >
                <input
                  type="text"
                  name="bot-field"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px' }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
                  <div className="group">
                    <label htmlFor="contact-name" className="block text-[8px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                      {content.form.name}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-stone-300 py-0.5 md:py-2 text-sm md:text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="contact-email" className="block text-[8px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                      {content.form.email}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-stone-300 py-0.5 md:py-2 text-sm md:text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="contact-org" className="block text-[8px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                    {content.form.org}
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-stone-300 py-0.5 md:py-2 text-sm md:text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none"
                  />
                </div>

                {/* Topic Chips */}
                <div>
                  <label className="block text-[8px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 md:mb-3">
                    {content.form.topic}
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {content.form.topicOptions.map((topic) => {
                      const isSelected = selectedTopics.includes(topic);
                      const color = topicColors[topic] || getTopicColor(topic);
                      const colorClasses = color === 'red'
                        ? 'bg-brand-red border-brand-red'
                        : 'bg-brand-blue border-brand-blue';
                      const hoverColor = color === 'red'
                        ? 'hover:border-brand-red hover:text-brand-red'
                        : 'hover:border-brand-blue hover:text-brand-blue';

                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          className={`
                            px-4 py-2 md:px-5 md:py-2.5
                            text-xs md:text-sm font-medium
                            rounded-full border-2 transition-all duration-200
                            ${isSelected
                              ? `${colorClasses} text-white`
                              : `bg-transparent border-stone-300 text-stone-600 ${hoverColor}`
                            }
                          `}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="contact-message" className="block text-[8px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                    {content.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full bg-transparent border-b border-stone-300 py-0.5 md:py-2 text-sm md:text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors resize-none rounded-none"
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-brand-red text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                  <span className="text-[8px] md:text-[10px] text-stone-400">
                     {content.educationNote}
                  </span>
                  <button
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full sm:w-auto bg-brand-dark text-white px-6 py-2 md:px-8 md:py-3 uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-brand-red transition-colors duration-300 disabled:opacity-50"
                  >
                     {formState === 'submitting' ? '...' : content.form.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
