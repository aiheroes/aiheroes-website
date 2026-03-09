import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const BusinessCaseDevelopmentEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Business Case Development"
      subtitle="From AI opportunity to substantiated investment proposal. ROI calculations, cost estimates and implementation timelines."
      seoDescription="Business Case Development: translate AI opportunities into concrete business cases with ROI calculations, cost estimates and implementation timelines. By AI Heroes."
      accentColor="red"
      pillarBadge="Consulting"
      ctaLabel="Schedule a consultation"
      trustedBy={["InnoEnergy", "Prosus", "Envalior"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          From opportunity to concrete investment proposal
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          You've identified AI opportunities — through a readiness scan, opportunity scouting, or your own insight. But before you invest, you want to know: what does it cost, what does it deliver, and how long does it take? We translate AI possibilities into substantiated business cases that convince your boardroom.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we deliver</h3>
          <ul className="space-y-2 text-stone-600">
            <li>ROI calculations with realistic assumptions</li>
            <li>Cost estimates for development, implementation and maintenance</li>
            <li>Implementation timeline with milestones</li>
            <li>Risk analysis and mitigation strategy</li>
            <li>Build vs. buy vs. partner comparison</li>
            <li>Go/no-go recommendation with substantiation</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Our approach</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Validate the opportunity</h4>
              <p className="text-stone-600 text-sm">We test the AI opportunity against technical feasibility, available data and organisational capacity.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Model costs and benefits</h4>
              <p className="text-stone-600 text-sm">We calculate the investment, running costs and expected returns over 1-3 years.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Present business case</h4>
              <p className="text-stone-600 text-sm">Presentation-ready document for management or steering group, including scenario analysis.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Why this works</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Technical depth</h4>
            <p className="text-sm text-stone-600">
              Because we build AI ourselves, our cost estimates are realistic — not consultancy guesswork.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Honest advice</h4>
            <p className="text-sm text-stone-600">
              If the business case doesn't close, we'll tell you. Better to know now than after a €50,000 investment.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Action-oriented</h4>
            <p className="text-sm text-stone-600">
              Every business case includes a concrete implementation plan — no report that ends up in a drawer.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Ready to execute</h4>
            <p className="text-sm text-stone-600">
              With a positive business case, we can move straight to building through our software pillar.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1-2 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">From €5,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Board-ready</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deliverable</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>From business case to reality</h3>
          <p>
            A solid business case is the starting point. Work out the strategy with an{' '}
            <Link to="/en/services/ai-roadmap" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Roadmap
            </Link>{' '}
            or start building directly with{' '}
            <Link to="/en/services/custom-ai-solutions" className="text-white underline underline-offset-2 hover:text-white/80">
              Custom AI Solutions
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
