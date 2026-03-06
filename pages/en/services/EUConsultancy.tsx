import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUConsultancyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="EU Consultancy"
      subtitle="Organisation scan and migration roadmap. From risk inventory to action plan."
      seoDescription="EU Consultancy: full organisation scan, risk analysis and migration roadmap for European digital independence. By AI Heroes."
      accentColor="red"
      pillarBadge="Consultancy"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Organisation scan and migration roadmap
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">The risk</p>
          <p className="text-sm text-stone-200 mb-2">
            The CLOUD Act allows the US to demand data from any American company — including Microsoft, Google and AWS — regardless of where the servers are located. After the Schrems II ruling, the Privacy Shield was invalidated, making standard data transfers to the US legally vulnerable.
          </p>
          <p className="text-sm text-stone-200">
            From <strong className="text-white">August 2025</strong>, the general provisions of the EU AI Act take effect. Organisations without a clear picture of their digital environment risk non-compliance.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          Most organisations know they should reduce their dependence on American platforms — but they don't know where to start. How many tools do you actually use? Where does your data go? Which risks are urgent, and which can wait? Without a clear picture, it's impossible to make good decisions.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What we do</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          In 2 to 3 weeks, we map your entire digital environment. We identify every tool, trace every data flow, and analyse the EU compliance risks for each one. The result is a clear, prioritised overview of where you stand — and a concrete roadmap for where to go next.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What gets delivered</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Full overview of your digital environment and EU risks</li>
            <li>Risk matrix with prioritisation per tool and data flow</li>
            <li>Visual roadmap with phases and cost estimates</li>
            <li>Clear recommendation for the next step</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Add-ons</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Supplier scan</h4>
            <p className="text-sm text-stone-600">
              Deep-dive into your key suppliers' data handling practices, sub-processors and jurisdictional exposure. Especially relevant for organisations in regulated sectors.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Pre-tender / audit preparation</h4>
            <p className="text-sm text-stone-600">
              Prepare your organisation for upcoming audits or procurement processes where EU data sovereignty is a requirement or evaluation criterion.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">2-3 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Advisory report</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deliverable</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">On location</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">At your office</div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Next step</h3>
          <p>
            If AI is a key risk area, Track C helps you{' '}
            <Link to="/en/services/eu-development" className="text-white underline underline-offset-2 hover:text-white/80">
              move to European AI tools
            </Link>
            . Need more context first? Track A gives your team the{' '}
            <Link to="/en/services/eu-training" className="text-white underline underline-offset-2 hover:text-white/80">
              training and background
            </Link>{' '}
            to understand why this matters.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
