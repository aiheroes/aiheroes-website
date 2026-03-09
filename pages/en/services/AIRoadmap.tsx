import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIRoadmapEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI Roadmap"
      subtitle="From insight to implementation plan. We translate AI possibilities into a concrete roadmap for your organisation."
      seoDescription="AI Roadmap: from insight to implementation plan. Business cases, ROI calculations and a phased plan for AI implementation. By AI Heroes."
      accentColor="red"
      pillarBadge="Consulting"
      ctaLabel="Schedule a consultation"
      trustedBy={["InnoEnergy", "Prosus", "Medux"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          A plan that works, not a report that gathers dust
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          You know AI is relevant. Perhaps you've already done a readiness scan, or your team has been experimenting. Now the question is: what should you do first, and how do you make sure it actually happens? That's what the AI Roadmap is for.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we deliver</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Prioritised list of AI opportunities with estimated ROI</li>
            <li>Detailed business cases for top 3-5 initiatives</li>
            <li>Phased implementation plan (quick wins → short term → long term)</li>
            <li>Technical architecture recommendations</li>
            <li>Resource planning: people, budget, timeline</li>
            <li>Governance framework and risk mitigation</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">The process</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Discovery</h4>
              <p className="text-stone-600 text-sm">In-depth analysis of processes, stakeholder interviews, technical audit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Business Cases</h4>
              <p className="text-stone-600 text-sm">Elaboration of opportunities into concrete business cases with costs, benefits and risks.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Roadmap & Presentation</h4>
              <p className="text-stone-600 text-sm">Phased plan with priorities, timeline and governance. Presented to management or steering group.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">2-4 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">From €5,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Action-oriented</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Implementation plan</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Roadmap ready? We build it too.</h3>
          <p>
            What's unique about AI Heroes: the same partner that creates your roadmap can also{' '}
            <Link to="/en/services/custom-ai-solutions" className="text-white underline underline-offset-2 hover:text-white/80">
              build what's in it
            </Link>. No handover, no knowledge leak. And we{' '}
            <Link to="/en/services/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              train your team
            </Link>{' '}
            to work with it.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
