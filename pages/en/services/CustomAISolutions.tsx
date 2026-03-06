import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const CustomAISolutionsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Custom AI Solutions"
      subtitle="Custom AI applications, built with your team. From prototype to production."
      seoDescription="Custom AI solutions by AI Heroes. Custom AI applications, integration into existing systems, from prototype to production. Built with your team."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          From idea to working AI solution
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          You know what you want to build — or you have a roadmap that makes clear which AI solution delivers the most value. Now you need a team that can build it. We provide the expertise, independently or alongside your developers.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What we build</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Custom AI applications tailored to your use case</li>
            <li>Integration of AI into existing systems and workflows</li>
            <li>RAG pipelines for internal knowledge bases</li>
            <li>AI assistants and chatbots with your business context</li>
            <li>Automation of repetitive processes with AI</li>
            <li>Proof of concepts and prototypes</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How we work</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">1</div>
            <h4 className="font-bold text-brand-dark mb-2">Scoping</h4>
            <p className="text-sm text-stone-600">
              Together we define what needs to be built, with which technology, and how it fits your existing landscape.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">2</div>
            <h4 className="font-bold text-brand-dark mb-2">Build</h4>
            <p className="text-sm text-stone-600">
              Agile development in short sprints. Regular demos so you always see where we stand.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <div className="text-4xl font-serif text-brand-blue mb-3">3</div>
            <h4 className="font-bold text-brand-dark mb-2">Delivery</h4>
            <p className="text-sm text-stone-600">
              Working software, documentation and training of your team to work with it.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Examples</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link to="/en/cases/medux" className="p-6 bg-white border border-stone-200 hover:border-brand-blue transition-colors group">
            <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">Medux</h4>
            <p className="text-sm text-stone-600">
              Reduced AI costs by 70% through custom optimisation of their AI workflow.
            </p>
          </Link>
          <Link to="/en/cases/trabu" className="p-6 bg-white border border-stone-200 hover:border-brand-blue transition-colors group">
            <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">Trabu</h4>
            <p className="text-sm text-stone-600">
              Custom AI integration that automated translation processes and improved quality.
            </p>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">From €15,000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Per project</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">2-12 weeks</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Timeline</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Your team</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Involved</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>The full journey under one roof</h3>
          <p>
            We don't just build — we also{' '}
            <Link to="/en/services/ai-foundations" className="text-white underline underline-offset-2 hover:text-white/80">
              train your team
            </Link>{' '}
            to work with the solution. And with our{' '}
            <Link to="/en/services/opportunity-scouting" className="text-white underline underline-offset-2 hover:text-white/80">
              consulting
            </Link>{' '}
            you know for sure you're building the right thing.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
