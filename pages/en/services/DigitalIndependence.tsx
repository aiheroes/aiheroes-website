import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const DigitalIndependenceEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Digital Independence"
      subtitle="Data, platforms and European law. Take control of your digital environment in three steps."
      seoDescription="Digital Independence: take control of your digital environment. Training, consultancy and development for European compliance and sovereignty. By AI Heroes."
      accentColor="blue"
      ctaLabel="Schedule a consultation"
      trustedBy={["Tweede Kamer", "Envalior", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Data, platforms and European law
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Timeline</p>
          <ul className="space-y-2 text-sm text-stone-200">
            <li><strong className="text-white">Since Feb 2025:</strong> EU AI Act Article 4 — AI literacy now mandatory</li>
            <li><strong className="text-white">Since Aug 2025:</strong> General provisions of the EU AI Act in effect</li>
            <li><strong className="text-white">CLOUD Act:</strong> US government can demand data from American companies, regardless of server location</li>
          </ul>
        </div>

        <p className="text-stone-600 leading-relaxed mb-4">
          Most organisations work daily with tools from large American tech companies — Microsoft, Google, Amazon. Convenient, powerful, deeply integrated. But under the surface, something is shifting. The US CLOUD Act gives American authorities access to data stored by US companies, regardless of where that data physically resides.
        </p>

        <p className="text-stone-600 leading-relaxed mb-4">
          This is not theoretical. In 2024, the US government seized 67% of all domain names — over 16,500 — under American jurisdiction. In March 2025, the Dutch parliament passed multiple motions calling for reduced dependence on American tech platforms.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          At the same time, European regulation is tightening. The AI Act, NIS2 and GDPR all impose stricter requirements on where data goes, how AI is used, and who is accountable. Organisations that don't act now risk compliance issues, vendor lock-in and loss of control over their most valuable asset: their data.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What we do</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We help organisations take back control of their digital environment in three tracks — each one self-contained, but strongest when combined.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/en/services/eu-training" className="block p-6 bg-white border border-stone-200 hover:border-brand-red transition-colors no-underline group">
            <div className="text-sm text-brand-red font-bold uppercase tracking-wider mb-2">Track A</div>
            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-brand-red transition-colors">Training</h4>
            <p className="text-sm text-stone-600">
              Workshop covering risks of American software, European alternatives and regulatory requirements.
            </p>
          </Link>
          <Link to="/en/services/eu-consultancy" className="block p-6 bg-white border border-stone-200 hover:border-brand-blue transition-colors no-underline group">
            <div className="text-sm text-brand-blue font-bold uppercase tracking-wider mb-2">Track B</div>
            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">Consultancy</h4>
            <p className="text-sm text-stone-600">
              Full organisation scan, risk analysis and migration roadmap.
            </p>
          </Link>
          <Link to="/en/services/eu-development" className="block p-6 bg-white border border-stone-200 hover:border-stone-700 transition-colors no-underline group">
            <div className="text-sm text-stone-700 font-bold uppercase tracking-wider mb-2">Track C</div>
            <h4 className="font-bold text-brand-dark mb-2 group-hover:text-stone-700 transition-colors">Development</h4>
            <p className="text-sm text-stone-600">
              Move to European AI tools. From local models to cloud integration.
            </p>
          </Link>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How we work</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We are independent. We do not resell software and we do not receive referral fees from vendors. Our advice is based solely on what is best for your organisation. That means honest assessments, realistic timelines and recommendations you can trust.
        </p>

        <DarkBox accentColor="red">
          <h3>One partner for the full journey</h3>
          <p>
            Most organisations need more than one track. We combine training, consultancy and development into a single, coherent programme — so you don't have to coordinate between three different suppliers. Start wherever makes sense, and scale from there.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
