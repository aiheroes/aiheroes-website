import React from 'react';
import { PageLayout } from '../../../components/PageLayout';

export const AIForDevelopersEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="AI for Developers"
      subtitle="From API integration to custom model fine-tuning. Learn to build AI, not just use it."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Integrating AI into your development workflow
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          As a developer, you don't just want to use tools - you want to build them. In this technical workshop, you'll learn how to integrate LLMs into your applications, from simple API calls to complex RAG pipelines.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Topics</h3>
          <ul className="space-y-2 text-stone-600">
            <li>OpenAI, Anthropic and open-source model APIs</li>
            <li>Prompt engineering for developers</li>
            <li>Function calling and structured outputs</li>
            <li>Embeddings and vector databases</li>
            <li>Implementing RAG (Retrieval Augmented Generation)</li>
            <li>Fine-tuning and when (not) to do it</li>
            <li>Cost optimization and rate limiting</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hands-on coding</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          This is not a PowerPoint workshop. You'll write code, debug issues and build working prototypes. We work with Python and/or JavaScript, depending on your team's stack.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">API Integration</h4>
            <p className="text-sm text-stone-600">
              Learn the ins and outs of the OpenAI and Anthropic APIs. Streaming, tokens, context windows and more.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Vector Search</h4>
            <p className="text-sm text-stone-600">
              Build a RAG system with Pinecone, Weaviate or Chroma. From embeddings to similarity search.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Production Ready</h4>
            <p className="text-sm text-stone-600">
              Error handling, caching, monitoring and other patterns for production-grade AI features.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Agent Architecture</h4>
            <p className="text-sm text-stone-600">
              Build AI agents with tools, memory and planning. From LangChain basics to custom implementations.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Requirements</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          You need experience with Python or JavaScript/TypeScript. Knowledge of REST APIs and basic cloud concepts is helpful. We provide sandbox environments and API keys.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-2 days</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duration</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">4-12</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Developers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Code</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Repo to take home</div>
          </div>
        </div>

        <div className="not-prose bg-brand-dark text-white/85 p-6 md:p-8 rounded-lg border-l-4 border-brand-red">
          <h3 className="text-xl font-serif mb-3">Custom tracks available</h3>
          <p className="text-white/80 leading-relaxed">
            We can customize the workshop to your tech stack and use cases. Whether it's a chatbot for customer service, document processing, or something entirely different - we build it together.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
