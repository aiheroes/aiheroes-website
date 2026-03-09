import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const ProcessAnalysisEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Process Optimisation"
      subtitle="Deep-dive into your business processes. Where are the automation opportunities? Which bottlenecks can AI solve?"
      seoDescription="AI Process Analysis: discover where automation and AI add value in your processes. Workflow mapping, bottleneck analysis and concrete gains. By AI Heroes."
      accentColor="red"
      pillarBadge="Consulting"
      ctaLabel="Schedule a consultation"
      trustedBy={["Medux", "OLX Poland", "Prosus"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Know where you're leaving opportunities on the table
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Every organisation has processes that cost time and money but could be better. The question is: which ones? And where does AI truly make a difference versus a simpler solution? Our process analysis maps your workflows, identifies bottlenecks and quantifies the potential gains.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we analyse</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Current workflows and process steps</li>
            <li>Time spent per activity and employee</li>
            <li>Bottlenecks, duplicate work and manual actions</li>
            <li>Data flowing through processes (quality, availability)</li>
            <li>Existing tooling and automation</li>
            <li>Opportunities for AI versus traditional automation</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Our approach</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Process mapping</h4>
              <p className="text-stone-600 text-sm">We map current processes through interviews, observation and data analysis.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Bottleneck analysis</h4>
              <p className="text-stone-600 text-sm">Where is time lost? Which steps are error-prone? Where is manual work redundant?</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Quantify opportunities</h4>
              <p className="text-stone-600 text-sm">Per identified opportunity: expected time savings, cost reduction and implementation effort.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold text-brand-dark">Priority list</h4>
              <p className="text-stone-600 text-sm">Ranked by impact versus effort, so you know where to start.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What you get</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Process map</h4>
            <p className="text-sm text-stone-600">
              Visual overview of your current workflows with pain points highlighted.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Opportunity register</h4>
            <p className="text-sm text-stone-600">
              List of AI and automation opportunities, quantified and prioritised.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Impact estimate</h4>
            <p className="text-sm text-stone-600">
              Per opportunity: expected hours, cost and quality gains.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Recommendations</h4>
            <p className="text-sm text-stone-600">
              Concrete next steps: start building, develop a business case first, or training.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">3-5 days</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">From €5,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Prioritised</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Opportunity register</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>From analysis to action</h3>
          <p>
            Process analysis is the foundation. Work out opportunities with a{' '}
            <Link to="/en/services/business-case-development" className="text-white underline underline-offset-2 hover:text-white/80">
              Business Case
            </Link>{' '}
            or take a broader view with{' '}
            <Link to="/en/services/opportunity-scouting" className="text-white underline underline-offset-2 hover:text-white/80">
              Opportunity Scouting
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
