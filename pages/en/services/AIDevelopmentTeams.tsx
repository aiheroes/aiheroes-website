import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIDevelopmentTeamsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Dedicated Teams"
      subtitle="Dedicated AI development capacity. Our developers work alongside your team. Flexibly scalable."
      seoDescription="AI Development Teams: dedicated AI development capacity. Team augmentation, technical leadership and flexibly scalable dev capacity. By AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementation"
      ctaLabel="Discuss your project"
      trustedBy={["OLX Poland", "iFood Brazil", "Prosus"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Your team, reinforced with AI expertise
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Not every company needs a full AI team, but they do need AI capacity. Our developers work alongside your existing team — or independently if you don't have development capacity yet. Flexibly scale up and down, with technical leadership included.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Working models</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Augmentation:</strong> Our developers join your team and processes</li>
            <li><strong>Dedicated team:</strong> We provide a complete team with tech lead</li>
            <li><strong>Hybrid:</strong> Mix of our specialists and your people</li>
            <li><strong>Project basis:</strong> Team for a defined project or sprint</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">What you get</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI specialists</h4>
            <p className="text-sm text-stone-600">
              Developers experienced in LLMs, RAG pipelines, computer vision and ML integration.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Technical leadership</h4>
            <p className="text-sm text-stone-600">
              A tech lead who makes architecture decisions and ensures quality.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Flexible scaling</h4>
            <p className="text-sm text-stone-600">
              Scale up and down as needed. No long-term contracts required.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Knowledge transfer</h4>
            <p className="text-sm text-stone-600">
              We don't just build — we ensure your team learns and can continue independently.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">How it works</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-brand-dark">Discovery</h4>
              <p className="text-stone-600 text-sm">We understand your project, tech stack and team dynamics.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-brand-dark">Matching</h4>
              <p className="text-stone-600 text-sm">We assemble the right team based on skills and fit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-brand-dark">Onboarding</h4>
              <p className="text-stone-600 text-sm">Fast start: productive in your codebase within a week.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold text-brand-dark">Delivery</h4>
              <p className="text-stone-600 text-sm">Agile sprints with regular demos. Transparent about progress.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-5 devs</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Team size</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1 week</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Ramp-up time</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Flexible</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Scale up and down</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>More than just development</h3>
          <p>
            Besides development capacity, we also offer{' '}
            <Link to="/en/services/ai-integration" className="text-white underline underline-offset-2 hover:text-white/80">
              AI Integration
            </Link>{' '}
            for specific integration work and{' '}
            <Link to="/en/services/ai-for-developers" className="text-white underline underline-offset-2 hover:text-white/80">
              developer training
            </Link>{' '}
            to upskill your own team.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
