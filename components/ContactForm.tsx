import React, { useState, useRef } from 'react';
import { Check } from 'lucide-react';
import type { Content, Entry } from '../types';
import { ChoiceChips } from './ChoiceChips';

interface ContactFormProps {
  content: Content['contact'];
  /** Preselects the matching entry chip (index into topicOptions). */
  entry?: Entry;
  accent?: 'red' | 'blue';
  /** Tighter spacing for the homepage snap section. */
  compact?: boolean;
}

const ENTRY_INDEX: Record<Entry, number> = { nieuw: 0, vervangen: 1, 'eigen-beheer': 2 };

// The one contact form on the site (homepage section and every subpage). Asks
// three things a free-text form never gets: which entry, which budget band and
// who decides. Posts to /api/contact, which mails the team through Resend.
export const ContactForm: React.FC<ContactFormProps> = ({ content, entry, accent = 'blue', compact = false }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [topics, setTopics] = useState<string[]>(() =>
    entry ? [content.form.topicOptions[ENTRY_INDEX[entry]]].filter(Boolean) : []
  );
  const [budget, setBudget] = useState<string[]>([]);
  const [owner, setOwner] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const mountTime = useRef(Date.now());

  const reset = () => {
    setFormData({ name: '', email: '', organization: '', message: '' });
    setTopics([]);
    setBudget([]);
    setOwner([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      reset();
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          botField: honeypot,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          topics: topics.join(', '),
          budget: budget[0] ?? '',
          owner: owner[0] ?? '',
          message: formData.message,
        }),
      });
      if (response.ok) {
        setFormState('success');
        reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const accentFocus = accent === 'red' ? 'focus:border-brand-red' : 'focus:border-brand-blue';
  const labelClass = compact
    ? 'block text-[8px] md:text-xs font-bold uppercase tracking-wider text-stone-500 mb-0.5'
    : 'block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1';
  const inputClass = compact
    ? `w-full bg-transparent border-b border-stone-300 py-0.5 md:py-2 text-sm md:text-lg font-serif text-brand-dark ${accentFocus} focus:outline-none transition-colors rounded-none`
    : `w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark ${accentFocus} focus:outline-none transition-colors rounded-none`;
  const ids = compact ? 'home' : 'page';

  if (formState === 'success') {
    return (
      <div className={`text-center animate-fade-in-up ${compact ? 'py-4 md:py-8' : 'py-8'}`}>
        <div className="w-12 h-12 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-brand-dark mb-2">{content.success.title}</h3>
        <p className="text-stone-500 mb-6 text-sm md:text-base">{content.success.message}</p>
        <button onClick={() => setFormState('idle')} className="text-brand-dark font-bold hover:underline underline-offset-4">
          {content.success.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form name="contact" method="POST" onSubmit={handleSubmit} className={compact ? 'space-y-3 md:space-y-6' : 'space-y-6'}>
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

      <div className={`grid grid-cols-1 md:grid-cols-2 ${compact ? 'gap-3 md:gap-6' : 'gap-6'}`}>
        <div>
          <label htmlFor={`${ids}-contact-name`} className={labelClass}>{content.form.name}</label>
          <input id={`${ids}-contact-name`} type="text" name="name" value={formData.name} onChange={handleInputChange} required className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${ids}-contact-email`} className={labelClass}>{content.form.email}</label>
          <input id={`${ids}-contact-email`} type="email" name="email" value={formData.email} onChange={handleInputChange} required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor={`${ids}-contact-org`} className={labelClass}>{content.form.org}</label>
        <input id={`${ids}-contact-org`} type="text" name="organization" value={formData.organization} onChange={handleInputChange} className={inputClass} />
      </div>

      <ChoiceChips label={content.form.topic} options={content.form.topicOptions} value={topics} onChange={setTopics} accent={accent} compact={compact} />
      <ChoiceChips label={content.form.budget.label} options={content.form.budget.options} value={budget} onChange={setBudget} accent={accent} compact={compact} />
      <ChoiceChips label={content.form.owner.label} options={content.form.owner.options} value={owner} onChange={setOwner} accent={accent} compact={compact} />

      <div>
        <label htmlFor={`${ids}-contact-message`} className={labelClass}>{content.form.message}</label>
        <textarea
          id={`${ids}-contact-message`}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={compact ? 2 : 3}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {formState === 'error' && <p className="text-brand-red text-sm">{content.form.error}</p>}

      <div className="flex justify-end pt-1">
        <button
          disabled={formState === 'submitting'}
          type="submit"
          className={`w-full sm:w-auto bg-brand-dark text-white uppercase tracking-widest font-bold hover:bg-brand-red transition-colors duration-300 disabled:opacity-50 ${
            compact ? 'px-6 py-2 md:px-8 md:py-3 text-[10px] md:text-xs' : 'px-8 py-3 text-xs'
          }`}
        >
          {formState === 'submitting' ? '...' : content.form.submit}
        </button>
      </div>
    </form>
  );
};
