import React, { useState, useRef, useCallback } from 'react';
import { Language, CareersPageContent, JobPosition } from '../types';
import { Check, Upload, X, FileText } from 'lucide-react';

interface ApplicationFormProps {
  lang: Language;
  content: CareersPageContent['applicationForm'];
  positions: JobPosition[];
  preselectedPosition?: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  lang,
  content,
  positions,
  preselectedPosition
}) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: preselectedPosition || '',
    motivation: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const mountTime = useRef(Date.now());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((f: File): string | null => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowedTypes.includes(f.type)) {
      return content.errors.fileType;
    }
    if (f.size > 10 * 1024 * 1024) {
      return content.errors.fileSize;
    }
    return null;
  }, [content.errors]);

  const handleFile = useCallback((f: File) => {
    const error = validateFile(f);
    if (error) {
      setFileError(error);
      setFile(null);
    } else {
      setFileError('');
      setFile(f);
    }
  }, [validateFile]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, [handleFile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const elapsed = Date.now() - mountTime.current;
    if (
      honeypot ||
      elapsed < 3000 ||
      /<a[\s>]/i.test(formData.motivation) ||
      (formData.name.trim() !== '' && formData.name.trim() === formData.phone.trim())
    ) {
      setFormState('success');
      return;
    }

    const data = new FormData();
    data.append('form-name', 'application');
    data.append('bot-field', honeypot);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position || content.fields.openApplicationLabel);
    data.append('motivation', formData.motivation);
    if (file) {
      data.append('cv', file);
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  // Update position when preselectedPosition changes
  React.useEffect(() => {
    if (preselectedPosition) {
      setFormData(prev => ({ ...prev, position: preselectedPosition }));
    }
  }, [preselectedPosition]);

  if (formState === 'success') {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="w-12 h-12 border-2 border-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-brand-dark mb-2">{content.success.title}</h3>
        <p className="text-stone-500 max-w-md mx-auto">{content.success.message}</p>
      </div>
    );
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">{content.title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
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

        {/* Position selector */}
        <div>
          <label htmlFor="app-position" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {content.fields.position}
          </label>
          <select
            id="app-position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none appearance-none"
          >
            <option value="">{content.fields.openApplicationLabel}</option>
            {positions.map(pos => (
              <option key={pos.id} value={pos.title}>{pos.title}</option>
            ))}
          </select>
        </div>

        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="app-name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              {content.fields.name}
            </label>
            <input
              id="app-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none"
            />
          </div>
          <div>
            <label htmlFor="app-email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              {content.fields.email}
            </label>
            <input
              id="app-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="app-phone" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {content.fields.phone}
          </label>
          <input
            id="app-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors rounded-none"
          />
        </div>

        {/* Motivation */}
        <div>
          <label htmlFor="app-motivation" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {content.fields.motivation}
          </label>
          <textarea
            id="app-motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleInputChange}
            required
            rows={4}
            placeholder={content.fields.motivationPlaceholder}
            className="w-full bg-transparent border-b border-stone-300 py-2 text-lg font-serif text-brand-dark focus:border-brand-blue focus:outline-none transition-colors resize-none rounded-none placeholder:text-stone-300"
          />
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
            {content.fields.cv}
          </label>

          {file ? (
            <div className="flex items-center gap-3 py-3 px-4 border border-stone-200 bg-stone-50">
              <FileText className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-brand-dark truncate">{file.name}</p>
                <p className="text-xs text-stone-500">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                className="text-stone-400 hover:text-brand-red transition-colors flex-shrink-0"
                aria-label="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center py-8 px-4 border-2 border-dashed cursor-pointer transition-colors ${
                isDragging ? 'border-brand-blue bg-blue-50' : 'border-stone-300 hover:border-stone-400'
              }`}
            >
              <Upload className={`w-6 h-6 mb-2 ${isDragging ? 'text-brand-blue' : 'text-stone-400'}`} />
              <p className="text-sm text-stone-600">{content.fields.cvDrop}</p>
              <p className="text-xs text-stone-400 mt-1">{content.fields.cvHelp}</p>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
            className="hidden"
          />

          {fileError && (
            <p className="text-brand-red text-sm mt-2">{fileError}</p>
          )}
        </div>

        {/* GDPR consent */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            required
            className="mt-1 w-4 h-4 accent-brand-blue flex-shrink-0"
          />
          <span className="text-sm text-stone-600 leading-relaxed">
            {content.fields.gdpr}
          </span>
        </label>

        {formState === 'error' && (
          <p className="text-brand-red text-sm">{content.errors.generic}</p>
        )}

        <button
          disabled={formState === 'submitting' || !file || !gdprConsent}
          type="submit"
          className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-colors duration-300 disabled:opacity-50"
        >
          {formState === 'submitting' ? '...' : content.fields.submit}
        </button>
      </form>
    </div>
  );
};
