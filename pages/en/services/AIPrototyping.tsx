import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIPrototypingEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI Prototyping"
      subtitle="Validate your AI idea before committing to a full build. Rapid proof-of-concept in a 6-day sprint."
      seoDescription="AI Prototyping: validate your AI idea with a rapid proof-of-concept. 6-day sprint methodology that de-risks your investment. By AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementation"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Prove it works before you build it
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Many AI projects start too big. Months of development, large teams, significant budgets — only to discover the approach doesn't work. We flip this: start small, prove the value, then scale. In 6 days you'll have a working prototype.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">The 6-day sprint</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Day 1-2:</strong> Define scope, explore data, choose architecture</li>
            <li><strong>Day 3-4:</strong> Build the core prototype</li>
            <li><strong>Day 5:</strong> Integration and testing with real data</li>
            <li><strong>Day 6:</strong> Demo, evaluation and go/no-go for full build</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Why prototype?</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">De-risk your investment</h4>
            <p className="text-sm text-stone-600">
              Discover early whether your approach works, before committing €50K+ to a full build.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tangible proof</h4>
            <p className="text-sm text-stone-600">
              A working prototype convinces stakeholders better than any PowerPoint deck.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Fast feedback</h4>
            <p className="text-sm text-stone-600">
              Users can test the prototype and provide feedback. Builds buy-in.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Reusable code</h4>
            <p className="text-sm text-stone-600">
              The prototype isn't throwaway — it forms the foundation for the full solution.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What we prototype</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI assistants</h4>
            <p className="text-sm text-stone-600">Chatbots and copilots with your business context.</p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Document processing</h4>
            <p className="text-sm text-stone-600">Automatic extraction, classification and summarisation.</p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Workflow automation</h4>
            <p className="text-sm text-stone-600">AI-driven process steps that replace manual work.</p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Data analysis pipelines</h4>
            <p className="text-sm text-stone-600">Automated insights from your existing data.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">6 days</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">To prototype</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">From €8,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investment</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Working</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Proof of concept</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>From prototype to production</h3>
          <p>
            Happy with the prototype? Scale up to a full solution with{' '}
            <Link to="/en/services/custom-ai-solutions" className="text-white underline underline-offset-2 hover:text-white/80">
              Custom AI Solutions
            </Link>. Don't have a strategy yet?{' '}
            <Link to="/en/services/ai-roadmap" className="text-white underline underline-offset-2 hover:text-white/80">
              Start with an AI Roadmap
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
