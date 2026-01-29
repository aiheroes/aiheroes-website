import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const AIMediaLiteracyEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI Media Literacy"
      subtitle="Deepfakes, AI-generated content and disinformation. Learn to recognize what's real and what's not."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Critical thinking in the AI era
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI makes it increasingly easy to create convincing fake content. From deepfake videos to AI-generated news articles - the line between real and fake is blurring. In this workshop, you'll learn how to recognize AI content and stay critical.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Topics</h3>
          <ul className="space-y-2 text-stone-600">
            <li>How deepfakes and face reenactments work</li>
            <li>Recognizing AI-generated images</li>
            <li>Text detection: was this written by AI?</li>
            <li>Audio deepfakes and voice cloning</li>
            <li>Disinformation and manipulation patterns</li>
            <li>Verification tools and techniques</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hands-on detection</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We show you how easy it is to create convincing fake content. Not to teach you to manipulate, but to arm you. You'll learn to recognize the telltale signs and use tools to verify content.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Visual Detection</h4>
            <p className="text-sm text-stone-600">
              Learn to recognize artifacts in AI images: hands, text, backgrounds and more.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Video Analysis</h4>
            <p className="text-sm text-stone-600">
              Deepfake detection techniques: lip-sync issues, lighting inconsistencies, etc.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Text Verification</h4>
            <p className="text-sm text-stone-600">
              Using AI detection tools and understanding their limitations.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Source Research</h4>
            <p className="text-sm text-stone-600">
              Reverse image search, metadata analysis and other verification techniques.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Why this matters</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          AI-generated content is becoming increasingly convincing. For organizations, this means risks in reputation, fraud and internal communications. For individuals, it's about media literacy and the ability to make informed decisions.
        </p>

        <div className="bg-brand-dark text-white p-6 md:p-8 mb-8">
          <h3 className="text-xl font-serif mb-3">Case: Mark Rutte Deepfake</h3>
          <p className="text-white/90 leading-relaxed">
            We show you how we created a convincing deepfake of Mark Rutte - and what signs could have helped you recognize it. A practical example of how this technology works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">2-3 hours</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duration</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">10-30</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Participants</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Interactive</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Live demos</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Who is it for?</h3>
        <p className="text-stone-600 leading-relaxed">
          This workshop is suitable for everyone: from communications professionals and journalists to HR teams and management. Media literacy is a skill everyone needs in the AI era.
        </p>
      </div>
    </PageLayout>
  );
};
