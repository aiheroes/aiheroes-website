import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const AIFoundationsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI Foundations"
      subtitle="Our core workshop. We come in and work with your team until everyone gets it."
      accentColor="red"
      seoDescription="AI Foundations workshop: teach your team to work effectively with ChatGPT, Claude and other AI tools. Practical 1-day training by AI Heroes."
      pillarBadge="Training"
      ctaLabel="Book a workshop"
      trustedBy={["Postcode Loterij", "Banijay Benelux", "Prosus", "Hanze"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Understanding and applying AI
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          The AI Foundations workshop is designed for teams who want to understand AI and apply it directly in their work. No fluffy theory, but concrete tools and techniques you can use the very next day.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What you'll learn</h3>
          <ul className="space-y-2 text-stone-600">
            <li>How generative AI works and what's possible</li>
            <li>Effective prompting for better results</li>
            <li>Choosing and evaluating AI tools for your work</li>
            <li>Avoiding pitfalls and staying critical</li>
            <li>Directly applicable workflows for your daily tasks</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who is it for?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          This workshop is suitable for everyone, regardless of technical background. Whether you work in marketing, HR, finance, or operations - you'll learn how AI can improve your work. We adapt the examples and exercises to your industry.
        </p>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Practical approach</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We believe in learning by doing. After a short introduction, you'll immediately start working on exercises relevant to your work. You leave the workshop with concrete skills and a plan to integrate AI into your daily routine.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">1 day</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duration</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">8-20</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Participants</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">On-site</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Or online</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">After the workshop</h3>
        <p className="text-stone-600 leading-relaxed">
          You receive a reference guide with all covered concepts, prompts and tools. Plus access to our online community where you can ask questions and share experiences with other participants.
        </p>

        <DarkBox accentColor="blue">
          <h4 className="text-xl font-serif text-white mb-3">Ready for the next step?</h4>
          <p className="text-white/85">
            After training, your team knows what AI can do. Next step? Discover where AI adds the most value in your organization.
          </p>
          <Link to="/en/services#consulting" className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 hover:no-underline mt-3">
            Explore AI Consulting →
          </Link>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
