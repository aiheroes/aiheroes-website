import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const CopilotBasicsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Copilot Basics"
      subtitle="The fastest way to become productive with Microsoft Copilot. From beginner to power user in an afternoon."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Get more out of Microsoft Copilot
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Microsoft Copilot is integrated into the tools you already use: Word, Excel, Outlook, Teams. But most people only use a fraction of its capabilities. In this hands-on workshop, you'll learn techniques that make you immediately more productive.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">What you'll learn</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Effective prompting within Microsoft 365</li>
            <li>Copilot in Word: writing and editing documents</li>
            <li>Copilot in Excel: analyzing data and generating formulas</li>
            <li>Copilot in Outlook: writing and summarizing emails</li>
            <li>Copilot in Teams: summarizing meetings and action items</li>
            <li>Privacy and security: what to share and what not to</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">From basics to advanced</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We start with the basics and quickly build up to advanced techniques. Whether you're working with Copilot for the first time or already use it regularly - you'll learn new things you can apply immediately in your daily work with Microsoft 365.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Prompting Techniques</h4>
            <p className="text-sm text-stone-600">
              Learn how to effectively instruct Copilot for better results in every Microsoft app.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Practical Use Cases</h4>
            <p className="text-sm text-stone-600">
              Writing emails, creating presentations, analyzing data, summarizing meetings and more.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Knowing Limitations</h4>
            <p className="text-sm text-stone-600">
              Understand where Copilot excels and where you should remain critical.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Microsoft 365 Integration</h4>
            <p className="text-sm text-stone-600">
              Leverage the power of Copilot across your entire Microsoft environment.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Format</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          This workshop lasts half a day (3-4 hours) and can be given on-site or online. Participants work on their own laptop with a Microsoft 365 Copilot license.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">3-4 hours</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duration</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">5-15</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Participants</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-red mb-2">Hands-on</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Own laptop</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Suitable for</h3>
        <p className="text-stone-600 leading-relaxed">
          This workshop is meant for professionals who work with Microsoft 365 and want to use Copilot in their daily work. No technical background needed - just curiosity and the will to learn.
        </p>
      </div>
    </PageLayout>
  );
};
