import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const AIStrategyGuideEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="How to Get Started with Your AI Strategy"
      subtitle="A practical guide in four steps. From education to implementation."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Your AI journey starts here
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Many organizations know AI offers opportunities but don't know where to begin. This guide gives you a clear step-by-step plan. It's the same approach we use with our clients.
        </p>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4 items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <h3 className="text-xl font-serif text-brand-dark">Education</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            The first step is understanding what AI can do. Not by reading for hours, but by experiencing it. Follow news about what other companies are doing, but more importantly: experiment yourself.
          </p>
          <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
            <ul className="space-y-2 text-stone-600">
              <li><strong>Follow AI articles:</strong> LinkedIn, tech news sites, our newsletter</li>
              <li><strong>Experiment:</strong> Use ChatGPT for your daily tasks</li>
              <li><strong>Train your team:</strong> A workshop provides hands-on experience that reading can't</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4 items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <h3 className="text-xl font-serif text-brand-dark">Identify opportunities</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            After understanding AI's possibilities, look for where it can add value. Start with your pain points, not with the technology.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-stone-200">
              <h4 className="font-bold text-brand-dark mb-2">Keep an AI logbook</h4>
              <p className="text-sm text-stone-600">
                For two weeks, note every time you think: "this takes too much time" or "this is boring work".
              </p>
            </div>
            <div className="p-4 bg-white border border-stone-200">
              <h4 className="font-bold text-brand-dark mb-2">Analyze processes</h4>
              <p className="text-sm text-stone-600">
                Step back and look at your workflow. Where are the bottlenecks? Where are resources being wasted?
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4 items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <h3 className="text-xl font-serif text-brand-dark">Analyze opportunities</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            When opportunities are clear, the next step is the business case. What does it cost? What does it deliver? Be honest with yourself.
          </p>
          <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
            <ul className="space-y-2 text-stone-600">
              <li><strong>Estimate costs:</strong> Licenses, implementation, training, maintenance</li>
              <li><strong>Calculate returns:</strong> Time savings, quality improvement, new capabilities</li>
              <li><strong>Create project plan:</strong> Timeline, capabilities, expectations</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex gap-4 mb-4 items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <h3 className="text-xl font-serif text-brand-dark">Implement</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            With a solid plan, implementation is the next step. You have two options: buy an existing solution or build something custom. In both cases, integration is the challenge.
          </p>
          <DarkBox accentColor="red">
            <h4>It's about people</h4>
            <p>
              Technical integration is one thing. But the real challenge is getting your team on board. People are naturally resistant to change. Involve them early, gather input, make sure they feel supported. This makes the difference between success and failure.
            </p>
          </DarkBox>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Need help?</h3>
        <p className="text-stone-600 leading-relaxed">
          This step-by-step plan might sound simple, but the details make the difference. We help organizations through each phase, from the first workshop to working AI solution.
        </p>
      </div>
    </PageLayout>
  );
};
