import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const DigitalTwinsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Digital Twins"
      subtitle="A digital copy of your organisation that finds the best business cases itself and builds and deploys the agents that run them."
      seoDescription="Digital Twin of your organisation: a virtual model that mirrors processes, data and decisions, surfaces business cases and deploys AI agents. By AI Heroes, with partners including Novo Solutions."
      accentColor="blue"
      pillarBadge="Software & Implementation"
      ctaLabel="Discuss your digital twin"
      trustedBy={["Medux", "InnoEnergy", "Prosus", "OLX Poland"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          A working model of your organisation, not another slide deck
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Most AI projects start with assumptions; assumptions about where the pain is, where the value is, and which team will benefit most. A digital twin replaces those assumptions with a working model. We pull your processes, data and decisions into a single virtual model of your organisation that surfaces where AI adds value, and then builds the agents that do the work.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What a digital twin does</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Models your processes, roles and data flows in one environment</li>
            <li>Simulates the impact of changes before anything goes into production</li>
            <li>Automatically pinpoints where time, money and quality leak away</li>
            <li>Drafts business cases itself, with grounded ROI and risk profiles</li>
            <li>Builds and deploys the AI agents that execute the approved cases</li>
            <li>Keeps running alongside your organisation and recalibrates itself</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How we build it</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Map</h4>
            <p className="text-sm text-stone-600">
              We document your processes, systems (ERP, CRM, DMS), roles and data flows. No multi-week workshop; we work with what is already there and fill the gaps where needed.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Model</h4>
            <p className="text-sm text-stone-600">
              Using that input we build a digital representation of your organisation: teams, workflows, decision points and KPIs become executable building blocks.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Simulate and score</h4>
            <p className="text-sm text-stone-600">
              The twin runs scenarios, compares variants and ranks opportunities by expected impact. You get a list of grounded business cases, not gut feel.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-3">4</div>
            <h4 className="font-bold text-brand-dark mb-2">Deploy agents</h4>
            <p className="text-sm text-stone-600">
              For the cases you green-light, the twin configures and deploys the matching AI agents. Connected to your existing systems, with monitoring and a kill switch.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What a digital twin delivers</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">End of the guesswork</h4>
            <p className="text-sm text-stone-600">
              Instead of "we think AI could help here" you know where the biggest levers sit, and what they are worth.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Speed of rollout</h4>
            <p className="text-sm text-stone-600">
              The step from case to working agent shrinks from months to weeks; building blocks and integrations are already in place.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Risk caught early</h4>
            <p className="text-sm text-stone-600">
              Every change is tested in the twin first. Impact on lead time, cost and compliance is visible before an agent goes live.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Control</h4>
            <p className="text-sm text-stone-600">
              One place to see which agents are running, what they do, and which business cases are still waiting. No shadow AI scattered across teams.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Examples of cases a twin surfaces on its own</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Back office and finance</h4>
            <p className="text-sm text-stone-600">
              Invoice processing, reconciliations, contract checks; routine work where agents shorten lead times immediately.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Sales and customer success</h4>
            <p className="text-sm text-stone-600">
              Lead scoring, call preparation, automatic follow-ups and summaries based on your CRM context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Operations and supply chain</h4>
            <p className="text-sm text-stone-600">
              Stock decisions, planning optimisation and exception handling based on your own historical data.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Knowledge and compliance</h4>
            <p className="text-sm text-stone-600">
              Unlocking internal knowledge bases, checking policy against practice and catching risk signals before they become problems.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Our technology choice</h3>
          <p className="text-stone-600 leading-relaxed mb-3">
            We build on proven digital-twin platforms and agent frameworks. For enterprise implementations we work white-label with specialist partners (including Novo Solutions), so you get a mature platform without locking yourself into a single vendor. Same approach we take with{' '}
            <Link to="/en/services/eu-consultancy" className="text-brand-blue underline underline-offset-2 hover:opacity-80">
              digital independence
            </Link>: European hosting where it matters, no vendor lock-in, open standards where possible.
          </p>
          <p className="text-stone-600 leading-relaxed">
            In practice that means: your twin runs on infrastructure you can move yourself, with agents you can switch on and off yourself, and with a data model that stays yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">4-10 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">To first twin</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">From €25,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Ongoing</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">The twin keeps learning</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who this works for</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Organisations with many processes</h4>
            <p className="text-sm text-stone-600">
              Hundreds of workflows, multiple systems and teams running side by side; exactly the place a twin gives you the overview back.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Leadership teams that need to justify ROI</h4>
            <p className="text-sm text-stone-600">
              No more isolated pilots that cost money without a line of sight to return; every agent comes from a case the twin has substantiated.
            </p>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>The full journey under one roof</h3>
          <p>
            We model, simulate and build, and we{' '}
            <Link to="/en/services/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              train your team
            </Link>{' '}
            to work with the twin and the agents. Not quite ready? Start with an{' '}
            <Link to="/en/services/ai-readiness-scan" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Readiness Scan
            </Link>{' '}
            or a{' '}
            <Link to="/en/services/ai-prototyping" className="text-white underline underline-offset-2 hover:text-white/80">
              Proof of Concept
            </Link>{' '}
            to de-risk the step toward a digital twin.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
