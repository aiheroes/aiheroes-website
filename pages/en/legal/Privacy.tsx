import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const PrivacyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Privacy Policy"
      subtitle="How we handle your data. Last updated: January 2026."
      accentColor="blue"
      showContactForm={false}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Our principles
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          At AI Heroes, we take privacy seriously. We only collect data we need, don't keep it longer than necessary, and never share it with third parties for commercial purposes.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">In short</h3>
          <ul className="space-y-2 text-stone-600">
            <li>We only collect what's necessary</li>
            <li>Your data is not sold</li>
            <li>You can always request access or deletion</li>
            <li>We comply with GDPR</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          What data do we collect?
        </h2>

        <h3 className="text-xl font-serif text-brand-dark mb-3">Contact forms</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          When you fill out our contact form, we collect your name, email address, and the content of your message. We use this data exclusively to contact you about your inquiry or request.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-3">Website visits</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We use simple analytics to understand how visitors use our website. We don't collect personal data through tracking and don't use third-party cookies for advertising purposes.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-3">Newsletter</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          If you sign up for our newsletter, we store your email address. You can unsubscribe at any time via the link at the bottom of each newsletter.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          How do we use your data?
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          We only use your data for the purposes for which you provided it:
        </p>

        <ul className="text-stone-600 leading-relaxed mb-8 space-y-2">
          <li>To contact you about your inquiry or request</li>
          <li>To send you our newsletter (if you signed up)</li>
          <li>To improve our services based on general usage patterns</li>
        </ul>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          How long do we keep your data?
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We keep contact information for a maximum of 2 years after the last contact. Newsletter subscriptions are kept until you unsubscribe. Analytics data is stored anonymized and aggregated.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Your rights
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          Under GDPR, you have the following rights:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Access</h4>
            <p className="text-sm text-stone-600">
              You can request what data we have about you.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Rectification</h4>
            <p className="text-sm text-stone-600">
              You can have incorrect data corrected.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Erasure</h4>
            <p className="text-sm text-stone-600">
              You can request deletion of your data.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Objection</h4>
            <p className="text-sm text-stone-600">
              You can object to certain processing activities.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Contact
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Have questions about your privacy or want to exercise one of your rights? Contact us at hello@aiheroes.io.
        </p>

        <div className="not-prose bg-brand-dark text-white p-6 md:p-8 rounded-lg border-l-4 border-brand-red">
          <h3 className="text-xl font-serif mb-3">Data Controller</h3>
          <p className="text-white/90 leading-relaxed">
            AI Heroes is responsible for the processing of personal data as described in this privacy policy. We are based in the Netherlands and fall under Dutch and European privacy legislation.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
