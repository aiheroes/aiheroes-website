import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const ApproachEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Our Approach"
      subtitle="From change management to technical implementation. Three pillars, one agency, the entire AI journey."
      accentColor="red"
      seoDescription="Our approach: from change management to technical implementation as a full-service AI agency. Three pillars, one European partner."
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The problem we solve
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          The AI market is fragmented. Advisory firms write reports that end up in drawers. Training bureaus train and leave. Tech companies build tools nobody uses. Nobody covers the full spectrum: from organisational change to technical implementation.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes does. As a full-service AI agency, we combine change management, training, consulting and software under one roof. With a European-first approach: data sovereignty, EU AI Act compliance, and no vendor lock-in. Clients can enter at any point. You don't need to start at pillar 1.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Our principles</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Practice over theory: you learn by doing</li>
            <li>Results over reports: we measure success by what actually changes</li>
            <li>Honesty over sales: if AI isn't the solution, we'll tell you</li>
            <li>Custom over standard: every organization is different</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Three pillars, one journey</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/en/services#training" className="p-6 bg-white border-2 border-stone-200 hover:border-brand-red transition-colors group">
            <div className="w-12 h-1 bg-brand-red mb-4"></div>
            <h4 className="font-bold text-brand-dark group-hover:text-brand-red transition-colors mb-2">1. Training</h4>
            <p className="text-sm text-stone-600">
              We teach your team what AI can do, and what to watch out for. From boardroom to work floor.
            </p>
          </Link>
          <Link to="/en/services#consulting" className="p-6 bg-white border-2 border-stone-200 hover:border-brand-blue transition-colors group">
            <div className="w-12 h-1 bg-brand-blue mb-4"></div>
            <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">2. Consulting</h4>
            <p className="text-sm text-stone-600">
              We map opportunities and build your AI roadmap. From readiness scan to business case.
            </p>
          </Link>
          <Link to="/en/services#software" className="p-6 bg-white border-2 border-stone-200 hover:border-stone-700 transition-colors group">
            <div className="w-12 h-1 bg-brand-dark mb-4"></div>
            <h4 className="font-bold text-brand-dark group-hover:text-stone-700 transition-colors mb-2">3. Software</h4>
            <p className="text-sm text-stone-600">
              We build and implement AI solutions with your team. From prototype to production.
            </p>
          </Link>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Enter where you want</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          The natural flow is Training → Consulting → Software. But not every organisation starts at the beginning. Some already know what they want to build. Others need a strategic plan first. We meet you where you stand.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Preparation</h4>
            <p className="text-sm text-stone-600">
              We speak with key stakeholders beforehand to understand what's going on. This allows us to tailor our approach to your context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Knowledge transfer</h4>
            <p className="text-sm text-stone-600">
              Every engagement is set up so your team can continue without us. You own the capability, end to end.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Follow-up</h4>
            <p className="text-sm text-stone-600">
              Afterwards you get access to our community and materials. Questions that come up later? Just ask.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Results guarantee</h4>
            <p className="text-sm text-stone-600">
              If you're not satisfied, we'll talk about it. We stand behind our work.
            </p>
          </div>
        </div>

        <DarkBox accentColor="red" className="mb-8">
          <h3>Why AI Heroes?</h3>
          <p>
            We are practitioners who do the work. From change management to technical implementation. We don't just advise, we also build. One agency, three pillars, the entire AI journey.
          </p>
        </DarkBox>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Pricing</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We work with transparent pricing. Training from €2,500 per day, consulting from €3,000 per engagement, software from €15,000 per project. For education and non-profit organizations, we offer reduced rates.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Curious what we can do for you? Get in touch for a no-obligation conversation.
        </p>
      </div>
    </PageLayout>
  );
};
