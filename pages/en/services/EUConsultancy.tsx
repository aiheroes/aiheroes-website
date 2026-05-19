import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUConsultancyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Digital Independence"
      subtitle="European AI without vendor lock-in. From awareness to working solution: training, consulting and implementation in one engagement."
      seoDescription="Digital independence: European AI without vendor lock-in. Organisation scan, training and implementation of sovereign AI solutions. By AI Heroes."
      accentColor="red"
      ctaLabel="Schedule a consultation"
      trustedBy={["Tweede Kamer", "Envalior", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          European AI that works, without dependency
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Why now</p>
          <p className="text-sm text-stone-200 mb-2">
            The CLOUD Act allows the US to demand data from any American company (including Microsoft, Google and AWS), regardless of where the servers are located. From <strong className="text-white">August 2025</strong>, the EU AI Act requires transparency about data processing in AI systems.
          </p>
          <p className="text-sm text-stone-200">
            Organisations without a clear picture of their digital environment risk non-compliance, data exposure to foreign jurisdictions and strategic dependency.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Most organisations know they should reduce their dependence on American platforms; they just don't know where to start. We offer a complete journey: from awareness and risk assessment to working European AI solutions. One partner for the entire path.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Three steps to independence</h3>

        <div className="space-y-6 mb-10 not-prose">
          {/* Step 1: Training */}
          <div className="border-2 border-stone-200 p-6 md:p-8 hover:border-brand-red transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-red font-serif font-bold text-lg">1</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg mb-1">Awareness & Training</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3">Half or full day on-site</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  What does the CLOUD Act mean for your data? What risks come with American platforms? And what European alternatives exist? A practical session that brings your team up to speed, without jargon.
                </p>
                <Link to="/en/services/eu-training" className="text-sm font-medium text-brand-red hover:underline underline-offset-2">
                  More about the training &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2: Scan */}
          <div className="border-2 border-stone-200 p-6 md:p-8 hover:border-brand-blue transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-blue font-serif font-bold text-lg">2</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg mb-1">Organisation Scan & Roadmap</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">2–3 week timeline</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  We map your entire digital environment: which tools, where data flows, which suppliers fall under American jurisdiction. You get a risk matrix, visual roadmap with phases and cost estimates.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  <strong>Deliverable:</strong> advisory report with prioritisation and concrete action plan.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Implementation */}
          <div className="border-2 border-stone-200 p-6 md:p-8 hover:border-stone-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-dark font-serif font-bold text-lg">3</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg mb-1">European AI Implementation</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Tailored to your organisation</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  From local models on your own hardware to European cloud solutions (Mistral, Aleph Alpha). We build AI that stays in Europe, without compromising on quality. Including migration, configuration and staff training.
                </p>
                <Link to="/en/services/eu-development" className="text-sm font-medium text-brand-dark hover:underline underline-offset-2">
                  More about implementation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Flexible entry points</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Not every organisation needs all three steps. You can start wherever makes sense: just a scan, just the training, or the full journey. We'll honestly advise what's right for your situation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1 day – 3 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Depending on scope</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">3 pillars</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Training · Scan · Build</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">On location</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">At your organisation</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Who is this for?</h3>
          <p>
            Organisations that want to take control of their digital dependencies. Governments preparing for procurement requirements around data sovereignty. Companies that want to comply with the EU AI Act now. And teams that want to understand why this matters.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
