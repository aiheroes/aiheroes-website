import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const TeamEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Our Team"
      subtitle="We are Frans, Jan and David. We help you move forward when you get stuck with AI."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The people behind AI Heroes
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes started as an idea between friends: what if we shared our AI knowledge with organizations wanting to get started? Today, we help dozens of companies with workshops, training and development.
        </p>

        {/* Team Members */}
        <div className="space-y-12 mb-12">
          {/* Frans */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-3xl font-serif">F</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Frans Jorden Hoorn</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner</p>
              <p className="text-stone-600 leading-relaxed">
                Frans combines technical depth with the ability to explain complex matters simply. He delivers most workshops and is often the first point of contact for new clients. Previously, he worked as a software engineer and product manager at various tech startups.
              </p>
            </div>
          </div>

          {/* Jan */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-3xl font-serif">J</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Jan Brusse</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner</p>
              <p className="text-stone-600 leading-relaxed">
                Jan is our technical deep-diver. When something needs to be built, he's the one designing the architecture and writing the code. He delivers the developer-focused workshops and leads our development projects. His background is in machine learning and data engineering.
              </p>
            </div>
          </div>

          {/* David */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-3xl font-serif">D</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">David Homan</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner</p>
              <p className="text-stone-600 leading-relaxed">
                David brings the business perspective. He helps organizations determine where AI truly adds value and where it's mostly hype. With his experience in strategy and operations, he ensures our solutions actually get implemented.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-4">Industry Advisor</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-stone-200 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-2xl font-serif">J</div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-serif text-brand-dark mb-1">Joseph Groot Kormelink</h4>
              <p className="text-stone-600 leading-relaxed">
                Joseph advises us from his experience in the corporate world. He helps us speak the language of large organizations and ensures our solutions fit enterprise requirements.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Our clients</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We work with organizations of all sizes, from startups to multinationals. Some of our clients:
        </p>
        <p className="text-stone-600 leading-relaxed mb-8">
          Postcodeloterij, Banijay Benelux, Locatiqs, Prosus, Medux, Hanze University of Applied Sciences
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8">
          <h3 className="text-xl font-serif mb-3">Work with us?</h3>
          <p className="text-white/80 leading-relaxed">
            We're always looking for interesting projects and collaborations. Whether you want to book a workshop, build an AI solution, or just brainstorm about possibilities - get in touch.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
