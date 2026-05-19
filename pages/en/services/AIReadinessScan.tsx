import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIReadinessScanEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI Readiness Scan"
      subtitle="Where does your organisation stand with AI? We map it out and give you a concrete action plan."
      seoDescription="AI Readiness Scan: discover where your organisation stands with AI. Concrete recommendations, quick wins and a roadmap for the next step. By AI Heroes."
      accentColor="red"
      pillarBadge="Consulting"
      ctaLabel="Request a scan"
      trustedBy={["Medux", "Envalior", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Know where you stand, know where you're going
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Many organisations want to do something with AI but don't know where they stand. Some teams are already experimenting, others have never touched an AI tool. The AI Readiness Scan maps this out clearly and gives you a concrete plan for the next step.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we investigate</h3>
          <ul className="space-y-2 text-stone-600">
            <li>AI maturity per department and team</li>
            <li>Current tools and technology landscape</li>
            <li>Data readiness: quality, accessibility, governance</li>
            <li>Organisational culture and change readiness</li>
            <li>Existing initiatives and experiments</li>
            <li>EU AI Act compliance status</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What you get</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Readiness Report</h4>
            <p className="text-sm text-stone-600">
              Clear overview of where your organisation stands on AI maturity, scored per dimension.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Quick Wins</h4>
            <p className="text-sm text-stone-600">
              Concrete actions you can start tomorrow. Low-hanging fruit that delivers immediate value.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Recommendations</h4>
            <p className="text-sm text-stone-600">
              Priority list for training, tooling and process optimisation based on your context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Next Steps</h4>
            <p className="text-sm text-stone-600">
              Advice on the logical next step: training, deeper consulting, or start building.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">The process</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Intake</h4>
              <p className="text-stone-600 text-sm">Brief conversation to understand scope and context.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Scan</h4>
              <p className="text-stone-600 text-sm">1-3 days of interviews, observations and analysis on-site or remote.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Reporting</h4>
              <p className="text-stone-600 text-sm">Presentation of findings and action plan to management or steering group.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1-3 days</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">From €3,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Concrete</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Action plan</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Ready for the next step?</h3>
          <p>
            After the scan you know exactly where you stand. We also help you move forward: with an{' '}
            <Link to="/en/services/ai-roadmap" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Roadmap
            </Link>{' '}
            or directly{' '}
            <Link to="/en/services/custom-ai-solutions" className="text-white underline underline-offset-2 hover:text-white/80">
              building
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
