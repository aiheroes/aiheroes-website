import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIImplementationGuidanceEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Implementation Guidance"
      subtitle="Hands-on guidance during AI rollout. Change management, adoption tracking and on-the-floor coaching."
      seoDescription="AI Implementation Guidance: hands-on support during AI rollout. Change management, adoption tracking and coaching on the work floor. By AI Heroes."
      accentColor="red"
      pillarBadge="Consulting"
      ctaLabel="Schedule a consultation"
      trustedBy={["Medux", "Trabu", "OLX Poland"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The bridge between plan and reality
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          You have an AI strategy, maybe even a working prototype. But the real challenge starts now: how do you get people to actually use it? AI implementation rarely fails because of technology — it fails because of adoption. We guide your team through the entire rollout.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we do</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Change management strategy and communication plan</li>
            <li>Coaching of key users and champions on the work floor</li>
            <li>Adoption monitoring with concrete metrics</li>
            <li>Identifying and addressing resistance</li>
            <li>Adapting work processes to new tooling</li>
            <li>Setting up feedback loops between users and development team</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How we guide</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-red mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Preparation</h4>
            <p className="text-sm text-stone-600">
              Stakeholder mapping, communication plan and identification of champions per department.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-red mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Rollout</h4>
            <p className="text-sm text-stone-600">
              Phased introduction with guidance on the work floor. Coaching, demos and hands-on support.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-red mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Embedding</h4>
            <p className="text-sm text-stone-600">
              Measuring adoption, adjusting where needed and preparing your internal team to continue independently.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Why implementation guidance?</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">70% fail without it</h4>
            <p className="text-sm text-stone-600">
              Most AI projects don't fail because of technology, but because of poor adoption and change management.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Faster adoption</h4>
            <p className="text-sm text-stone-600">
              With targeted guidance, your team goes 2-3x faster from 'struggling' to 'second nature'.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Less resistance</h4>
            <p className="text-sm text-stone-600">
              By involving employees early and taking concerns seriously, you prevent pushback.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Measurable results</h4>
            <p className="text-sm text-stone-600">
              We track adoption metrics so you know whether the investment is paying off.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">2-8 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Guidance period</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">On-site</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">At your workplace</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Measurable</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Adoption tracking</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>The complete picture</h3>
          <p>
            Implementation guidance works best combined with{' '}
            <Link to="/en/services/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              training for your team
            </Link>{' '}
            and optionally{' '}
            <Link to="/en/services/custom-ai-solutions" className="text-white underline underline-offset-2 hover:text-white/80">
              custom tooling
            </Link>{' '}
            if the standard solution doesn't fit.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
