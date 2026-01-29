import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const InnoEnergyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Case Study: InnoEnergy"
      subtitle="AI-powered investment intelligence platform. From vision to board-approved prototype."
      accentColor="blue"
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
          <div className="p-4 bg-brand-blue text-white">
            <h4 className="font-bold mb-2">Market Intelligence</h4>
            <p className="text-sm text-white/90">
              Real-time analytics of industry trends and competitors.
            </p>
          </div>
          <div className="p-4 bg-brand-dark text-white">
            <h4 className="font-bold mb-2">Financial Health</h4>
            <p className="text-sm text-white/90">
              Cash flow monitoring, burn rate analysis, and runway projections.
            </p>
          </div>
          <div className="p-4 bg-brand-blue text-white">
            <h4 className="font-bold mb-2">Exit Risk Assessment</h4>
            <p className="text-sm text-white/90">
              Valuation monitoring and KPI analysis for strategic decisions.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The result
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          The prototype won enthusiastic board support and laid out a practical roadmap for modernization. We proved that sophisticated portfolio analytics and intelligent decision support can be delivered through an intuitive, user-friendly interface.
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8 mb-8">
          <h3 className="text-xl font-serif mb-3">The impact</h3>
          <p className="text-white/90 leading-relaxed">
            This prototype shows how AI can reshape investment management - making sophisticated portfolio analysis accessible and actionable. Data-driven insights that directly lead to better investment decisions.
          </p>
        </div>

        <div className="bg-stone-50 p-6 md:p-8">
          <h3 className="text-xl font-serif text-brand-dark mb-3">About InnoEnergy</h3>
          <p className="text-stone-600 leading-relaxed">
            InnoEnergy drives Europe's sustainable energy transformation through strategic investment and innovation. They lead crucial initiatives in battery storage, green hydrogen, and solar energy. Through their educational programs, they're also developing the next generation of energy leaders, with 2,000+ master's and PhD graduates shaping the sector's future.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
