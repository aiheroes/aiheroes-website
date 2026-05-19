import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const OLXEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Case Study: OLX Magic"
      subtitle="AI-powered marketplace transformation. Smarter search, better user experience."
      accentColor="blue"
      seoDescription="Case study OLX Magic: AI-powered marketplace transformation with smarter search and better user experience. By AI Heroes."
      pillarBadge="Consulting + Software"
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
          OLX Magic is a suite of AI features that reshapes the user experience: from searching to comparing, from discovering to buying.
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
            <h4 className="font-bold text-brand-dark mb-2">Trend analytics</h4>
            <p className="text-sm text-stone-600">
              Insights into trends and user behavior for continuous improvement.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The results
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative overflow-hidden group" style={{ backgroundColor: '#2563EB', padding: '2rem', borderRadius: '2px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <span style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '600' }}>↑</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Higher engagement
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Users find what they're looking for faster and stay longer on the platform.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group" style={{ backgroundColor: '#1C1917', padding: '2rem', borderRadius: '2px', border: '1px solid rgba(217,83,79,0.3)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#D9534F' }}></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(217,83,79,0.15)' }}>
                  <span style={{ color: '#D9534F', fontSize: '1.25rem', fontWeight: '600' }}>✓</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                More conversions
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Smart comparison tools lead to faster purchase decisions.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group" style={{ backgroundColor: '#1C1917', padding: '2rem', borderRadius: '2px', border: '1px solid rgba(217,83,79,0.3)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#D9534F' }}></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(217,83,79,0.15)' }}>
                  <span style={{ color: '#D9534F', fontSize: '1.25rem', fontWeight: '600' }}>→</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Intuitive navigation
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Visual search and natural language make the platform more accessible.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group" style={{ backgroundColor: '#2563EB', padding: '2rem', borderRadius: '2px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <span style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '600' }}>📊</span>
                </div>
              </div>
              <h4 className="font-serif mb-3" style={{ color: '#FFFFFF', fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '600' }}>
                Data-driven insights
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Real-time analytics help continuously improve the platform.
              </p>
            </div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>About OLX</h3>
          <p>
            OLX is a leading global marketplace enabling millions to buy and sell goods and services easily. Committed to simplifying transactions and fostering trust, OLX has redefined e-commerce with innovative solutions and a user-first approach.
          </p>
        </DarkBox>

        <DarkBox accentColor="blue" className="mt-8">
          <h3 className="text-xl font-serif mb-3">Want similar results?</h3>
          <p className="mb-4">
            Tell us about your challenge. We'd love to explore how AI can help your organization.
          </p>
          <Link
            to="/en/services"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
          >
            View our services
          </Link>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
