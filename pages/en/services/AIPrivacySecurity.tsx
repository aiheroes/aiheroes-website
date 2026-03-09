import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIPrivacySecurityEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Responsible AI Use"
      subtitle="Working safely with AI. From GDPR compliance to data governance - without losing productivity."
      accentColor="red"
      seoDescription="AI Privacy & Security training: work safely with AI, GDPR-compliant. Data governance and security best practices. Workshop by AI Heroes."
      pillarBadge="Training"
      ctaLabel="Book a workshop"
      trustedBy={["Philips Healthcare", "Tweede Kamer", "Envalior"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Implementing AI responsibly
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI offers enormous opportunities, but also brings risks. How do you prevent employees from sharing sensitive data with ChatGPT? What are your obligations under the AI Act? In this workshop, you'll get practical tools to deploy AI safely.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Topics</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Data governance in AI usage</li>
            <li>GDPR and the EU AI Act - what you need to know</li>
            <li>What data to share and not share with AI tools</li>
            <li>On-premise vs cloud AI solutions</li>
            <li>Creating AI policies for your organization</li>
            <li>Risk assessment frameworks</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">The EU AI Act</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          From 2025, organizations are required to comply with the EU AI Act. We help you understand what this means for your organization and how to become compliant without halting all AI initiatives.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Risk Classification</h4>
            <p className="text-sm text-stone-600">
              Learn to classify AI applications according to the AI Act: from minimal to high risk.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Documentation Requirements</h4>
            <p className="text-sm text-stone-600">
              What documentation you need to maintain and how to organize it practically.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI Governance</h4>
            <p className="text-sm text-stone-600">
              Setting up roles and responsibilities for responsible AI use.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Security Best Practices</h4>
            <p className="text-sm text-stone-600">
              Technical and organizational measures to deploy AI safely.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Practical output</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          You'll leave this workshop with:
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc list-inside">
          <li>A draft AI policy for your organization</li>
          <li>Checklist for safe AI usage</li>
          <li>Framework for risk assessment</li>
          <li>Template for AI impact assessment</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Half day</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duration</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">5-20</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Participants</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Templates</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">To take home</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who is it for?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          This workshop is relevant for IT managers, privacy officers, compliance teams and anyone responsible for safely implementing AI in the organization.
        </p>

        <DarkBox accentColor="blue">
          <h3>EU AI Act compliance at organisation level?</h3>
          <p>
            Beyond this workshop, we also offer our{' '}
            <Link to="/en/services/digital-independence" className="text-white underline underline-offset-2 hover:text-white/80">
              Digital Independence
            </Link>{' '}
            tracks — from organisation scan to migration to European alternatives.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
