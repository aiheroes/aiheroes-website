import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const AILiteracyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Why AI Literacy is an Essential Skill"
      subtitle="The EU AI Act makes it mandatory. But even without the law: those who don't understand AI miss opportunities."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI is no longer just for techies
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          A barista in Amsterdam predicts coffee demand per hour using AI. A nurse in Berlin spots patterns in patient care that would otherwise take years to discover. AI adoption among companies has jumped to 72%, and most users aren't programmers or data scientists.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">The impact in numbers</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Healthcare providers cut treatment costs by 50% with 40% better outcomes</li>
            <li>AI detects fraud worth $380 billion per year in healthcare</li>
            <li>$15.7 trillion in additional economic activity expected by 2030</li>
            <li>36.6% annual growth between 2024 and 2030</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What AI literacy really means</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          You don't need to understand neural networks or write Python. It's about knowing enough to let AI multiply your productivity. Think of it like driving: you don't need to understand the engineering to get from A to B.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Strategic thinking</h4>
            <p className="text-sm text-stone-600">
              Knowing where AI fits in your workflow and where it doesn't. Seeing opportunities others miss.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Critical evaluation</h4>
            <p className="text-sm text-stone-600">
              Understanding what AI can and absolutely cannot do. Separating hype from reality.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Ethical implications</h4>
            <p className="text-sm text-stone-600">
              Understanding consequences without getting lost in philosophy. Practical and responsible.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Applying tools</h4>
            <p className="text-sm text-stone-600">
              Choosing the right tools and deploying them effectively for your specific tasks.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">The EU AI Act</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          From 2025, the EU AI Act makes AI literacy mandatory for organizations. Companies getting ahead now aren't just preparing for the future - they're writing it. But beyond legislation: teams that understand AI perform better. Period.
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8 mb-8">
          <h3 className="text-xl font-serif mb-3">It's not about replacement</h3>
          <p className="text-white/90 leading-relaxed">
            AI literacy isn't about replacing human intelligence. It's about amplifying what makes us uniquely human: creativity, intuition, connecting dots that machines can't see.
          </p>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Get started</h3>
        <p className="text-stone-600 leading-relaxed">
          Want to make your team AI-literate? Our workshops are practical, hands-on, and tailored to your context. You'll go home with skills you can apply the very next day.
        </p>
      </div>
    </PageLayout>
  );
};
