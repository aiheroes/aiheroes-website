import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const EUDevelopmentEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="EU Development"
      subtitle="European AI that works. From local models on existing hardware to European cloud integration."
      seoDescription="EU Development: European AI solutions that work. Local models, European cloud integration and full data sovereignty. By AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementation"
      ctaLabel="Discuss your project"
      trustedBy={["Tweede Kamer", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          European AI that works
        </h2>

        <div className="bg-red-950 text-white p-6 md:p-8 mb-8 border-l-4 border-brand-red not-prose">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-red mb-3">Concrete risk</p>
          <p className="text-sm text-stone-200 mb-2">
            Every time your organisation uses ChatGPT, Azure OpenAI or AWS Bedrock, data flows to servers under American jurisdiction. Via the CLOUD Act, the US can demand that data, without your knowledge.
          </p>
          <p className="text-sm text-stone-200">
            Only <strong className="text-white">23%</strong> of European organisations are certain their AI tools keep data within the EU. From <strong className="text-white">August 2025</strong>, the EU AI Act mandates transparency about data processing in AI systems.
          </p>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          We build AI solutions that stay in Europe. Whether it's a local model on your own hardware or a European cloud solution: your data stays under your control.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What we do</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">On-premises</h4>
            <p className="text-sm text-stone-600">
              Deploy open-source AI models on your existing hardware. No data leaves your building. Ideal for organisations with strict confidentiality requirements or existing server infrastructure.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">European cloud</h4>
            <p className="text-sm text-stone-600">
              Run AI workloads on European cloud providers with full data residency guarantees. Scalable, compliant and independent from US jurisdiction.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Additional services</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>AI policy document:</strong> internal guidelines for responsible and compliant AI use within your organisation.</li>
            <li><strong>Staff training:</strong> hands-on training so your team can work with the new European tools confidently.</li>
            <li><strong>Procurement review:</strong> assessment of your current vendor contracts and recommendations for EU-compliant alternatives.</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who it is for</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Legal firms, healthcare organisations, government bodies and any organisation where EU data residency is a hard requirement. If your data cannot leave European soil, or if you need to demonstrate full sovereignty in audits and procurement, this track is for you.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-4 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Working AI</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deliverable</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">EU-hosted</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Data in Europe</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Not sure which direction?</h3>
          <p>
            Book a free orientation session. We'll help you figure out whether on-premises or European cloud is the right fit, and what it takes to get there. Or start with our{' '}
            <Link to="/en/services/digital-independence" className="text-white underline underline-offset-2 hover:text-white/80">
              Digital Independence overview
            </Link>{' '}
            to see all three tracks.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
