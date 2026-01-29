import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const ApproachEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Our Approach"
      subtitle="No PowerPoint battles. No endless reports. We come in and make it work."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          How we work
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes was born from frustration. Too many organizations pay consultants to write reports that end up in a drawer. We do things differently: we come in, work alongside your team, and make sure people can actually do something new by the end of the day.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Our principles</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Practice over theory - you learn by doing</li>
            <li>Results over reports - we measure success by what people actually apply</li>
            <li>Honesty over sales - if AI isn't the solution, we'll tell you</li>
            <li>Custom over standard - every organization is different</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Workshops that stick</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Our workshops are hands-on. After a brief introduction, you immediately start working on exercises relevant to your work. No abstract examples, but your documents, your processes, your challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Preparation</h4>
            <p className="text-sm text-stone-600">
              We speak with key stakeholders beforehand to understand what's going on. This allows us to tailor the workshop to your context.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Interactive</h4>
            <p className="text-sm text-stone-600">
              At least half the time you're working yourself. No hours of listening to slides, but direct experimentation and learning.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Follow-up</h4>
            <p className="text-sm text-stone-600">
              After the workshop, you get access to our community and materials. Questions that come up later? Just ask.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Results guarantee</h4>
            <p className="text-sm text-stone-600">
              If participants aren't satisfied, we'll talk about it. We stand behind our work.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Development partnership</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Sometimes a workshop isn't enough and you want to actually build something. We develop AI solutions together with your team. From proof-of-concept to production-ready system. Always with knowledge transfer, so you don't remain dependent on us.
        </p>

        <DarkBox accentColor="red">
          <h3>Why choose AI Heroes?</h3>
          <p>
            We are practitioners ourselves. We build with AI daily, know the possibilities and the limitations. Not theorists telling you what to do, but people who've done it themselves.
          </p>
        </DarkBox>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Pricing</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          We work with transparent pricing. For education and non-profit organizations, we offer reduced rates - AI should be accessible to everyone.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Curious what we can do for you? Get in touch for a no-obligation conversation.
        </p>
      </div>
    </PageLayout>
  );
};
