import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const MeduxEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Case Study: Medux"
      subtitle="Voice-to-voice AI customer service. 70% cost reduction, 80% of calls automated."
      accentColor="red"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The challenge
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Medux, a leading Dutch healthcare organization for people with mobility disabilities, faced a challenge. Their customer base consists largely of elderly individuals who prefer calling over online booking. With a growing number of clients, scaling customer service without exploding costs became increasingly difficult.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          A chatbot wasn't an option - many customers aren't comfortable with digital interfaces. Medux needed a solution that respects human contact while being scalable and cost-efficient.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">The opportunities</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Scale without costs:</strong> Handle high call volumes efficiently</li>
            <li><strong>Employee wellbeing:</strong> Remove repetitive tasks to prevent burnout</li>
            <li><strong>24/7 availability:</strong> Enable service outside office hours</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The solution
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We developed a voice-to-voice AI solution that can conduct natural phone conversations. The system sounds human, understands context, and can independently schedule appointments, answer questions, and process forms.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Natural conversations</h4>
            <p className="text-sm text-stone-600">
              AI that sounds human and understands context. Customers often don't realize they're talking to a system.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Multilingual</h4>
            <p className="text-sm text-stone-600">
              Support for multiple languages, eliminating language barriers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Smart handoffs</h4>
            <p className="text-sm text-stone-600">
              Complex or urgent questions are automatically transferred to human agents.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Complete logging</h4>
            <p className="text-sm text-stone-600">
              Every conversation is transcribed for compliance and quality control.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The results
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-brand-red text-white p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">70%</div>
            <div className="text-sm text-white/90">cost reduction</div>
          </div>
          <div className="not-prose bg-brand-dark text-white p-6 rounded-lg border-l-4 border-brand-red text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">80%</div>
            <div className="text-sm text-white/90">calls via AI</div>
          </div>
          <div className="bg-brand-red text-white p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">7.8</div>
            <div className="text-sm text-white/90">customer satisfaction</div>
          </div>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          The AI now handles about 4,000 calls monthly. Customers appreciate shorter wait times and the fact they can be helped outside office hours. Employees now focus on complex cases that truly need human attention.
        </p>

        <div className="not-prose bg-brand-dark text-white p-6 md:p-8 rounded-lg border-l-4 border-brand-red">
          <h3 className="text-xl font-serif mb-3">About Medux</h3>
          <p className="text-white/90 leading-relaxed">
            Medux is a leading Dutch healthcare innovation company specializing in medical aids and healthcare technology. As a trusted partner to healthcare institutions and individuals, they make healthcare more accessible and affordable across the Netherlands.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
