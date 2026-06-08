import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIAgencyNetherlandsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI Agency for the Netherlands"
      subtitle="AI Heroes is the full-service AI agency from Groningen, helping organisations across the Netherlands with training, consulting and custom software."
      seoTitle="AI Agency Netherlands | Training, Consulting & Software"
      seoDescription="Looking for an AI agency in the Netherlands? AI Heroes helps organisations with AI training, consulting and custom software. From strategy to implementation, based in Groningen."
      accentColor="blue"
      ctaLabel="Plan an intro call"
      trustedBy={["Postcode Loterij", "Banijay", "Prosus", "Medux", "Envalior"]}
    >
      <div className="prose prose-lg max-w-none">
        {/* Answer-capsule intro: a self-contained definition for search + AI answers */}
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          AI Heroes is a full-service AI agency from Groningen, active across the Netherlands. Since 2019 we have
          helped more than 50 organisations with the full AI journey: from training and strategic advice to building
          custom software. Three pillars, one partner, from change management to technical implementation.
        </p>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          What a full-service AI agency does for you
        </h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Most agencies do one thing: they train, or they advise, or they build. We do all three, under one roof.
          Nothing falls through the cracks between the advice and the delivery, and you work with a team that knows
          your organisation from start to finish.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 not-prose">
          <div className="p-6 bg-white border border-stone-200">
            <h3 className="font-serif text-xl text-brand-dark mb-2">Training</h3>
            <p className="text-sm text-stone-600 mb-4">
              Workshops and in-company training that make your team AI-capable, from leadership to developers.
            </p>
            <Link to="/en/services/ai-foundations" className="text-brand-blue text-sm font-medium underline underline-offset-2">
              View training
            </Link>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h3 className="font-serif text-xl text-brand-dark mb-2">Consulting</h3>
            <p className="text-sm text-stone-600 mb-4">
              AI-readiness scans, roadmaps and business cases that turn ambition into a concrete plan.
            </p>
            <Link to="/en/services/ai-readiness-scan" className="text-brand-blue text-sm font-medium underline underline-offset-2">
              View consulting
            </Link>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h3 className="font-serif text-xl text-brand-dark mb-2">Software</h3>
            <p className="text-sm text-stone-600 mb-4">
              Custom AI solutions that solve real business problems, from prototype to production.
            </p>
            <Link to="/en/services/custom-ai-solutions" className="text-brand-blue text-sm font-medium underline underline-offset-2">
              View software
            </Link>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Across the Netherlands, based in Groningen
        </h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Our clients are spread across the country, from the Randstad to the north. We work on-site and remote, and
          deliver training wherever your team is. Our home base is Groningen, the AI capital of Europe, with the AI
          Fabriek and a growing ecosystem of AI talent on our doorstep.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 not-prose">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">50+</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Organisations helped</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1,000+</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Professionals trained</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Since 2019</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">AI in practice</div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Results at Dutch organisations
        </h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          We would rather show what we do than promise it. A few examples:
        </p>
        <ul className="mb-8">
          <li>
            <Link to="/en/cases/medux" className="text-brand-blue underline underline-offset-2">Medux</Link>: 70% lower costs on a labour-intensive process.
          </li>
          <li>
            <Link to="/en/cases/trabu" className="text-brand-blue underline underline-offset-2">Trabu</Link>: from idea to working prototype in 6 days.
          </li>
          <li>
            <Link to="/en/cases/innoenergy" className="text-brand-blue underline underline-offset-2">InnoEnergy</Link>: from AI strategy to board approval.
          </li>
        </ul>

        <DarkBox accentColor="red">
          <h3>Looking for an AI agency in the Netherlands?</h3>
          <p>
            Plan a no-obligation intro call. We will think along about where AI creates value for your organisation,
            whether you want to start with training, a{' '}
            <Link to="/en/services/ai-readiness-scan" className="text-white underline underline-offset-2 hover:text-white/80">
              readiness scan
            </Link>{' '}
            , or to build something straight away.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
