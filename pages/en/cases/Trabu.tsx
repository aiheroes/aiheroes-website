import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const TrabuEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Case Study: Trabu"
      subtitle="From idea to working prototype in 6 days. AI-powered travel planning for investors."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The challenge
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Trabu, an innovative travel-tech startup, had an ambitious vision: transform vacation planning with generative AI. Existing tools don't understand individual preferences and don't show what's actually possible. Trabu wanted to change that.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          The problem: an investor meeting was scheduled and there was no working prototype yet. They needed someone who could quickly turn their concept into something tangible.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">The challenges</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Vision to reality:</strong> Convert concept to working product</li>
            <li><strong>Complex technology:</strong> AI that truly understands what travelers want</li>
            <li><strong>Tight deadline:</strong> Investor meeting on short notice</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The approach
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We started with an intensive two-day prototyping session, followed by a focused six-day development sprint. The goal: prove the technology works and build a demo that would convince investors.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Discovery Portal</h4>
            <p className="text-sm text-stone-600">
              A new way to discover travel possibilities. Get inspired without knowing where to look.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart Planning</h4>
            <p className="text-sm text-stone-600">
              AI-powered personalized travel suggestions based on preferences and travel history.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Journey Timeline</h4>
            <p className="text-sm text-stone-600">
              From destinations to restaurants, every moment mapped on an interactive timeline.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Travel Intelligence</h4>
            <p className="text-sm text-stone-600">
              A learning system that increasingly understands what your ideal trip looks like.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The result
        </h2>

        <div className="bg-brand-red text-white p-6 md:p-8 mb-8">
          <div className="text-4xl md:text-5xl font-bold mb-4">6 days</div>
          <p className="text-white/90 leading-relaxed">
            In six working days, we built a working prototype that demonstrated the full potential of Trabu's vision. From concept to tangible proof.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          The prototype included a discovery page for exploring new destinations, a smart planning environment, and calendar integration. We integrated AI systems that showed how technology can understand travelers' unique preferences.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <blockquote className="text-lg text-stone-600 italic mb-4">
            "We truly value the time and effort your team has invested in the project."
          </blockquote>
          <p className="text-brand-red font-medium">— Trabu Team</p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          The most important result wasn't just the prototype itself, but the architecture we built. A foundation to build upon, with AI integration that can learn and improve over time.
        </p>

        <div className="not-prose bg-brand-dark text-white p-6 md:p-8 rounded-lg border-l-4 border-brand-red">
          <h3 className="text-xl font-serif mb-3">About Trabu</h3>
          <p className="text-white/90 leading-relaxed">
            Trabu combines deep travel industry expertise with advanced technology to create something entirely new: AI that truly understands what makes each journey special. Their vision goes beyond simple booking - they're transforming how people plan their adventures.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
