import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const OpportunityScoutingEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Opportunity Scouting"
      subtitle="Where are you leaving money on the table? We analyze your processes and return with a roadmap that actually yields returns."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Discovering AI opportunities in your organization
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Many organizations know AI offers opportunities, but don't know where to start. With Opportunity Scouting, we dive deep into your processes and identify exactly where AI can add the most value.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Our approach</h3>
          <ul className="space-y-2 text-stone-600">
            <li>In-depth analysis of your current work processes</li>
            <li>Interviews with key stakeholders across departments</li>
            <li>Identification of repetitive tasks and bottlenecks</li>
            <li>Concrete business cases with estimated ROI</li>
            <li>Prioritization based on impact and feasibility</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What you get</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          After the scouting, you receive a comprehensive report with:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Opportunity Overview</h4>
            <p className="text-sm text-stone-600">
              Complete list of AI possibilities in your organization, categorized by department and process.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Detailed Business Cases</h4>
            <p className="text-sm text-stone-600">
              Thorough elaboration of the top 3-5 opportunities, including costs, benefits and implementation path.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Implementation Roadmap</h4>
            <p className="text-sm text-stone-600">
              Step-by-step approach to go from idea to working AI solution.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tool Recommendations</h4>
            <p className="text-sm text-stone-600">
              Concrete suggestions for off-the-shelf tools or custom solutions per use case.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who is it for?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Opportunity Scouting is ideal for organizations that:
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc list-inside">
          <li>Know AI is relevant but don't know where to start</li>
          <li>Have reserved budget for digital transformation</li>
          <li>Want to see concrete results before investing</li>
          <li>Need an objective outside perspective</li>
        </ul>

        <div className="bg-brand-dark text-white p-6 md:p-8 mb-8">
          <h3 className="text-xl font-serif mb-3">Results guarantee</h3>
          <p className="text-white/90 leading-relaxed">
            We identify AI solutions that earn back at least your investment. If we don't find valuable opportunities, you pay nothing.
          </p>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">The process</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Kick-off</h4>
              <p className="text-stone-600 text-sm">Introduction and alignment of scope and expectations.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Interviews & Analysis</h4>
              <p className="text-stone-600 text-sm">2-3 weeks of research, interviews and process analysis.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Reporting</h4>
              <p className="text-stone-600 text-sm">Presentation of findings and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
