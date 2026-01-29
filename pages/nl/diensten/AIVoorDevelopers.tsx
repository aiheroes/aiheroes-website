import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const AIVoorDevelopersNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI voor Developers"
      subtitle="Van API integratie tot custom model fine-tuning. Leer AI bouwen, niet alleen gebruiken."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          AI integreren in je development workflow
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Als developer wil je niet alleen tools gebruiken - je wilt ze bouwen. In deze technische workshop leer je hoe je LLMs integreert in je applicaties, van simpele API calls tot complexe RAG pipelines.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onderwerpen</h3>
          <ul className="space-y-2 text-stone-600">
            <li>OpenAI, Anthropic en open-source model APIs</li>
            <li>Prompt engineering voor developers</li>
            <li>Function calling en structured outputs</li>
            <li>Embeddings en vector databases</li>
            <li>RAG (Retrieval Augmented Generation) implementeren</li>
            <li>Fine-tuning en when (not) to do it</li>
            <li>Cost optimization en rate limiting</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hands-on coding</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Dit is geen PowerPoint workshop. Je schrijft code, debugt issues en bouwt werkende prototypes. We werken met Python en/of JavaScript, afhankelijk van je team's stack.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">API Integratie</h4>
            <p className="text-sm text-stone-600">
              Leer de ins en outs van de OpenAI en Anthropic APIs. Streaming, tokens, context windows en meer.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Vector Search</h4>
            <p className="text-sm text-stone-600">
              Bouw een RAG systeem met Pinecone, Weaviate of Chroma. Van embeddings tot similarity search.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Production Ready</h4>
            <p className="text-sm text-stone-600">
              Error handling, caching, monitoring en andere patterns voor productie-waardige AI features.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Agent Architectuur</h4>
            <p className="text-sm text-stone-600">
              Bouw AI agents met tools, memory en planning. Van LangChain basics tot custom implementations.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Vereisten</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Je hebt ervaring nodig met Python of JavaScript/TypeScript. Kennis van REST APIs en basis cloud concepts is handig. We zorgen voor sandbox environments en API keys.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1-2 dagen</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">4-12</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Developers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Code</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Repo mee naar huis</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Custom tracks beschikbaar</h3>
          <p>
            We kunnen de workshop aanpassen op jullie tech stack en use cases. Of het nu gaat om een chatbot voor klantenservice, document processing, of iets heel anders - we bouwen het samen.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};
