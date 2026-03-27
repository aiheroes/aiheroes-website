import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { Check, Calendar } from 'lucide-react';
import { CONTENT } from '../constants';

interface PageContactFormProps {
  lang: Language;
  accentColor?: 'red' | 'blue';
  preselectedTopic?: string;
}

const FORM_CONTENT = {
  nl: {
    name: 'Naam',
    email: 'E-mail',
    org: 'Organisatie',
    message: 'Je bericht',
    submit: 'Verstuur',
    success: {
      title: 'Ontvangen',
      message: 'We nemen snel contact met je op.',
      sendAnother: 'Nog een versturen'
    }
  },
  en: {
    name: 'Name',
    email: 'Email',
    org: 'Organization',
    message: 'Your message',
    submit: 'Send',
    success: {
      title: 'Received',
      message: 'We will be in touch shortly.',
      sendAnother: 'Send another'
    }
  }
};

export const PageContactForm: React.FC<PageContactFormProps> = ({
  lang,
  accentColor = 'red',
  preselectedTopic
}) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const mountTime = useRef(Date.now());

  const content = FORM_CONTENT[lang];
  const accentBg = accentColor === 'red' ? 'bg-brand-red' : 'bg-brand-blue';
  const accentHover = accentColor === 'red' ? 'hover:bg-red-600' : 'hover:bg-blue-600';
  const accentFocus = accentColor === 'red' ? 'focus:border-brand-red' : 'focus:border-brand-blue';

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
      return;
    }

    const submitData = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': honeypot,
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
      <div className="text-center py-8 animate-fade-in-up">
        <div className="w-12 h-12 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-brand-dark mb-2">{content.success.title}</h3>
        <p className="text-stone-500 mb-6">{content.success.message}</p>
        <button
          onClick={() => setFormState('idle')}
          className="text-brand-dark font-bold hover:underline underline-offset-4"
        >
          {content.success.sendAnother}
        </button>
      </div>
    );
  }

  const contactFormContent = CONTENT[lang].contactForm;

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-2">{contactFormContent.title}</h2>
      <p className="text-stone-600 mb-4">{contactFormContent.subtitle}</p>
      <p className="text-stone-600 mb-4">
        {contactFormContent.emailLabel}{' '}
        <a
          href={`mailto:${contactFormContent.email}`}
          className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
        >
          {contactFormContent.email}
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"></span>
        </a>
        {' · '}
        <a
          href={contactFormContent.phoneHref}
          className="relative inline-block font-serif text-brand-dark hover:text-black transition-colors pb-0.5 whitespace-nowrap"
        >
          {contactFormContent.phone}
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"></span>
        </a>
      </p>
      <a
        href={contactFormContent.meetingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-brand-dark hover:text-brand-red transition-colors group"
      >
        <Calendar className="w-4 h-4 text-stone-400 group-hover:text-brand-red transition-colors" />
        {contactFormContent.meetingLabel}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>

      <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="page-contact-name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              {content.name}
            </label>
            <input
              id="page-contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark ${accentFocus} focus:outline-none transition-colors rounded-none`}
            />
          </div>
          <div>
            <label htmlFor="page-contact-email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              {content.email}
            </label>
            <input
              id="page-contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark ${accentFocus} focus:outline-none transition-colors rounded-none`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="page-contact-org" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {content.org}
          </label>
          <input
            id="page-contact-org"
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            className={`w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark ${accentFocus} focus:outline-none transition-colors rounded-none`}
          />
        </div>

        <div>
          <label htmlFor="page-contact-message" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {content.message}
          </label>
          <textarea
            id="page-contact-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className={`w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark ${accentFocus} focus:outline-none transition-colors resize-none rounded-none`}
          />
        </div>

        {formState === 'error' && (
          <p className="text-brand-red text-sm">Something went wrong. Please try again.</p>
        )}

        <button
          disabled={formState === 'submitting'}
          type="submit"
          className={`${accentBg} ${accentHover} text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-colors duration-300 disabled:opacity-50`}
        >
          {formState === 'submitting' ? '...' : content.submit}
        </button>
      </form>
    </div>
  );
};
