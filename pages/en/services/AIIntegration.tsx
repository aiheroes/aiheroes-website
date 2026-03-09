import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIIntegrationEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="System Integration"
      subtitle="Connecting AI to your existing systems. ERP, CRM, internal tools — we work with what you already have."
      seoDescription="AI Integration: connect AI capabilities to your existing systems. API integrations, workflow automation and data pipelines. By AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementation"
      ctaLabel="Discuss your project"
      trustedBy={["OLX Poland", "iFood Brazil", "Medux"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI that works with your existing landscape
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          The power of AI isn't in standalone tools, but in integration with your daily work processes. We connect AI capabilities to your existing systems — so your team gets the benefits without switching platforms.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we integrate</h3>
          <ul className="space-y-2 text-stone-600">
            <li>AI-driven automation in your ERP/CRM workflows</li>
            <li>Intelligent document processing connected to your DMS</li>
            <li>AI assistants that unlock your internal knowledge base</li>
            <li>Automated data pipelines between systems</li>
            <li>AI-powered notifications and decision support</li>
            <li>API integrations with LLMs and AI services</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How we work</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Assessment</h4>
            <p className="text-sm text-stone-600">
              We map your current systems, APIs and data flows. What's possible and what's needed?
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Build</h4>
            <p className="text-sm text-stone-600">
              We develop the integration in sprints. Each sprint delivers working functionality.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Handover</h4>
            <p className="text-sm text-stone-600">
              Documentation, monitoring and training so your team can manage the integration independently.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Common integrations</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Microsoft 365 + AI</h4>
            <p className="text-sm text-stone-600">
              AI enrichment of SharePoint, Teams and Outlook workflows.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">ERP + AI</h4>
            <p className="text-sm text-stone-600">
              Predictive analytics and automatic processing in your ERP system.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">CRM + AI</h4>
            <p className="text-sm text-stone-600">
              Lead scoring, automatic summaries and intelligent routing.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Custom systems</h4>
            <p className="text-sm text-stone-600">
              We find a way even with legacy systems and custom-built solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">2-6 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">From €10,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Seamless</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">In your workflow</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Test first?</h3>
          <p>
            Not sure if the integration will work? Start with an{' '}
            <Link to="/en/services/ai-prototyping" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Prototype
            </Link>{' '}
            to prove feasibility. Or{' '}
            <Link to="/en/services/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              train your team
            </Link>{' '}
            to work with the new integration.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
