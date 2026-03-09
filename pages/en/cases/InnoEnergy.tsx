import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const InnoEnergyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Case Study: InnoEnergy"
      subtitle="AI-powered investment intelligence platform. From vision to board-approved prototype."
      accentColor="blue"
      seoDescription="Case study InnoEnergy: AI-powered investment intelligence platform. From vision to board-approved prototype by AI Heroes."
      pillarBadge="Software & Implementation"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The challenge
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          InnoEnergy, a leading European investor in sustainable energy solutions, manages over 200 portfolio companies and a network of 1,200+ partners. With such a complex portfolio, portfolio management became increasingly challenging.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          They had a vision for an AI-powered intelligence platform but needed help translating this into a concrete product that would convince the board.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">The challenges</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Vision to product:</strong> Convert abstract idea to concrete features</li>
            <li><strong>Complex data integration:</strong> AI that recognizes patterns and predicts</li>
            <li><strong>Stakeholder buy-in:</strong> Convince the board with a compelling prototype</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The solution
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We developed a clickable prototype demonstrating the platform's core functionalities. An intelligent dashboard that doesn't just visualize data but actively helps with investment decisions.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Core features</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Intelligent Dashboard</h4>
            <p className="text-sm text-stone-600">
              Real-time overview of market trends, portfolio performance, and investment opportunities.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI-Powered Advisory</h4>
            <p className="text-sm text-stone-600">
              Built-in AI assistant for real-time analysis, recommendations, and portfolio insights.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Investment Intelligence</h4>
            <p className="text-sm text-stone-600">
              Machine learning model connecting investors to opportunities through predictive matching.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Portfolio Management</h4>
            <p className="text-sm text-stone-600">
              Clear overview of growth trajectories, funding status, and geographic distribution.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Advanced features</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="relative overflow-hidden" style={{ backgroundColor: '#2563EB', padding: '1.5rem', borderRadius: '2px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600' }}>📈</span>
              </div>
              <h4 className="font-serif mb-2" style={{ color: '#FFFFFF', fontSize: '1.125rem', lineHeight: '1.3', fontWeight: '600' }}>
                Market Intelligence
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Real-time analytics of industry trends and competitors.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden" style={{ backgroundColor: '#1C1917', padding: '1.5rem', borderRadius: '2px', border: '1px solid rgba(217,83,79,0.3)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#D9534F' }}></div>
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(217,83,79,0.15)' }}>
                <span style={{ color: '#D9534F', fontSize: '1rem', fontWeight: '600' }}>💰</span>
              </div>
              <h4 className="font-serif mb-2" style={{ color: '#FFFFFF', fontSize: '1.125rem', lineHeight: '1.3', fontWeight: '600' }}>
                Financial Health
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Cash flow monitoring, burn rate analysis, and runway projections.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden" style={{ backgroundColor: '#2563EB', padding: '1.5rem', borderRadius: '2px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600' }}>⚖️</span>
              </div>
              <h4 className="font-serif mb-2" style={{ color: '#FFFFFF', fontSize: '1.125rem', lineHeight: '1.3', fontWeight: '600' }}>
                Exit Risk Assessment
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Valuation monitoring and KPI analysis for strategic decisions.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The result
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          The prototype won enthusiastic board support and laid out a practical roadmap for modernization. We proved that sophisticated portfolio analytics and intelligent decision support can be delivered through an intuitive, user-friendly interface.
        </p>

        <DarkBox accentColor="red">
          <h3>The impact</h3>
          <p>
            This prototype shows how AI can reshape investment management - making sophisticated portfolio analysis accessible and actionable. Data-driven insights that directly lead to better investment decisions.
          </p>
        </DarkBox>

        <div className="bg-stone-50 p-6 md:p-8">
          <h3 className="text-xl font-serif text-brand-dark mb-3">About InnoEnergy</h3>
          <p className="text-stone-600 leading-relaxed">
            InnoEnergy drives Europe's sustainable energy transformation through strategic investment and innovation. They lead crucial initiatives in battery storage, green hydrogen, and solar energy. Through their educational programs, they're also developing the next generation of energy leaders, with 2,000+ master's and PhD graduates shaping the sector's future.
          </p>
        </div>

        <DarkBox accentColor="blue" className="mt-8">
          <h3 className="text-xl font-serif mb-3">Want similar results?</h3>
          <p className="mb-4">
            Tell us about your challenge. We'd love to explore how AI can help your organization.
          </p>
          <Link
            to="/en/services#software"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
          >
            View our services
          </Link>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
