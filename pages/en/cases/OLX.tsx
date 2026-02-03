import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const OLXEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Case Study: OLX Magic"
      subtitle="AI-powered marketplace transformation. Smarter search, better user experience."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The challenge
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          OLX, a global leader in online marketplaces, wanted to fundamentally improve the buying and selling experience. With millions of listings, finding the right product is a challenge. Existing search functions were too limited, and users often had to scroll through endless results.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          The mission: make the platform more intuitive, more personal, and smarter. Without overwhelming users with complex interfaces.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">The opportunities</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Product discovery:</strong> Guide users to relevant results faster</li>
            <li><strong>Purchase decisions:</strong> Provide better comparison tools</li>
            <li><strong>Engagement:</strong> Personalization based on behavior and preferences</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The solution: OLX Magic
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          OLX Magic is a suite of AI features that transforms the complete user experience. From searching to comparing, from discovering to buying.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Smarter search</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Natural Language Search</h4>
            <p className="text-sm text-stone-600">
              Search in plain language: "blue outdoor furniture under 500 euros" just works.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Search by image</h4>
            <p className="text-sm text-stone-600">
              Upload a photo and find similar products. Perfect for visual shoppers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart suggestions</h4>
            <p className="text-sm text-stone-600">
              AI refines your search and suggests relevant alternatives.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Personalized descriptions</h4>
            <p className="text-sm text-stone-600">
              AI-generated product descriptions make listings more complete and findable.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Smarter purchase decisions</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart Compare</h4>
            <p className="text-sm text-stone-600">
              Compare products side-by-side with automatically highlighted differences.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Find Similar</h4>
            <p className="text-sm text-stone-600">
              AI suggests complementary products and alternatives.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart Tagging</h4>
            <p className="text-sm text-stone-600">
              Automatic tags make products more findable for the right buyers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Advanced analytics</h4>
            <p className="text-sm text-stone-600">
              Insights into trends and user behavior for continuous improvement.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The results
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="not-prose p-6 bg-brand-blue">
            <h4 className="text-xl font-serif text-white mb-3 leading-tight">Higher engagement</h4>
            <p className="text-white/80 leading-relaxed">
              Users find what they're looking for faster and stay longer on the platform.
            </p>
          </div>
          <DarkBox accentColor="red">
            <h4>More conversions</h4>
            <p className="text-sm">
              Smart comparison tools lead to faster purchase decisions.
            </p>
          </DarkBox>
          <DarkBox accentColor="red">
            <h4>Intuitive navigation</h4>
            <p className="text-sm">
              Visual search and natural language make the platform more accessible.
            </p>
          </DarkBox>
          <div className="not-prose p-6 bg-brand-blue">
            <h4 className="text-xl font-serif text-white mb-3 leading-tight">Data-driven insights</h4>
            <p className="text-white/80 leading-relaxed">
              Real-time analytics help continuously improve the platform.
            </p>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>About OLX</h3>
          <p>
            OLX is a leading global marketplace enabling millions to buy and sell goods and services easily. Committed to simplifying transactions and fostering trust, OLX has redefined e-commerce with innovative solutions and a user-first approach.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
