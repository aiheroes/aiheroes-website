import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUTrainingEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="EU Training"
      subtitle="Digital risk and European alternatives. A half-day or full-day session on location."
      seoDescription="EU Training: understand the risks of American platforms and discover European alternatives. Half-day or full-day session on location. By AI Heroes."
      accentColor="red"
      pillarBadge="Training"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Digital risk and European alternatives
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Why now</p>
          <p className="text-sm text-stone-200 mb-2">
            From <strong className="text-white">February 2025</strong>, the EU AI Act requires organisations to demonstrate AI literacy (Article 4). From <strong className="text-white">August 2025</strong>, the general provisions take effect. Meanwhile, the CLOUD Act gives the US access to data at American providers — regardless of server location.
          </p>
          <p className="text-sm text-stone-200">
            Organisations that don't act now risk compliance fines, data exposure to foreign jurisdictions and strategic dependency.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Most organisations know that something is shifting. American tech platforms are under increasing scrutiny, European regulation is tightening, and the question of digital sovereignty is moving from policy papers to boardrooms. But what does this actually mean for your organisation? What are the real risks — and what can you realistically do about them?
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What the session covers</h3>
          <ol className="space-y-3 text-stone-600">
            <li><strong>The risks of American platforms</strong> — CLOUD Act, jurisdiction issues, and what happens when a foreign government can legally access your data.</li>
            <li><strong>The current landscape</strong> — actual tools your organisation uses, where your data flows, and where you are exposed.</li>
            <li><strong>European alternatives</strong> — what is genuinely good enough to replace current tools, and what is not ready yet.</li>
            <li><strong>The regulatory context</strong> — AI Act, NIS2, GDPR deadlines, and what non-compliance actually costs.</li>
          </ol>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who it is for</h3>
        <p className="text-stone-600 leading-relaxed mb-4">
          Directors, IT leads and legal/compliance professionals at organisations with 10 to 150 staff. The session is designed for people who make or influence technology decisions — not just the IT department.
        </p>
        <p className="text-stone-600 leading-relaxed mb-8">
          We also offer a condensed 90-minute board-level session for management teams who need the essentials without the full deep dive.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Annual update</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Regulation and technology change fast. We offer a light yearly update session to keep your team current on new developments, revised legislation and emerging European alternatives.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">&frac12; - 1 day</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Session length</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">10-150</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Employees</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">On location</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Or online</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Next step</h3>
          <p>
            After the training, many organisations want to go deeper. Track B gives you a full{' '}
            <Link to="/en/services/eu-consultancy" className="text-white underline underline-offset-2 hover:text-white/80">
              organisation scan and migration roadmap
            </Link>
            . Track C helps you{' '}
            <Link to="/en/services/eu-development" className="text-white underline underline-offset-2 hover:text-white/80">
              move to European AI tools
            </Link>
            .
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
