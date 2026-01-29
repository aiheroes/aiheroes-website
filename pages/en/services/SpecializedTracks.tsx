import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const SpecializedTracksEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Specialized Tracks"
      subtitle="Custom training programs for advanced AI applications. From advanced prompting to full LLM integrations."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Beyond the basics
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Some teams have specific challenges that a standard workshop doesn't cover. Our specialized tracks are fully customized for your organization, use cases, and technical environment.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Possible topics</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Advanced prompt engineering and chain-of-thought techniques</li>
            <li>Multi-agent systems and orchestration</li>
            <li>LLM integration in existing software architecture</li>
            <li>Custom RAG pipelines for your data</li>
            <li>AI-assisted code review and development workflows</li>
            <li>Domain-specific fine-tuning strategies</li>
            <li>Evaluation frameworks and quality assurance for AI outputs</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How it works</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We start with an intake conversation to understand your specific situation. Based on that, we design a program that precisely matches your goals, existing knowledge, and technical infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Intake</h4>
            <p className="text-sm text-stone-600">
              We map out your current situation, goals, and technical context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Design</h4>
            <p className="text-sm text-stone-600">
              We create a custom program with relevant theory, exercises, and cases.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Execution</h4>
            <p className="text-sm text-stone-600">
              Hands-on training with your own data, tools, and challenges.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Examples of custom work</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Legal Tech</h4>
            <p className="text-sm text-stone-600">
              Contract analysis, automating legal research, and compliance checking with LLMs.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Healthcare</h4>
            <p className="text-sm text-stone-600">
              Medical documentation, patient communication, and research assistance within privacy guidelines.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Finance</h4>
            <p className="text-sm text-stone-600">
              Risk assessment, report generation, and customer-facing AI assistants with compliance.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Manufacturing</h4>
            <p className="text-sm text-stone-600">
              Quality control documentation, maintenance prediction, and supply chain optimization.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Flexible</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Custom duration</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-20</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Participants</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Your data</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Relevant cases</div>
          </div>
        </div>

        <div className="not-prose bg-brand-dark text-white/85 p-6 md:p-8 rounded-lg border-l-4 border-brand-red">
          <h3 className="text-xl font-serif mb-3">Let's talk</h3>
          <p className="text-white/80 leading-relaxed">
            Do you have a specific AI challenge or want an advanced program for your team? Get in touch for a no-obligation conversation about the possibilities.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
