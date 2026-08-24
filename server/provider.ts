// Model routing (SDD D4): one env var decides the substrate.
//
//  CHAT_MODEL_PROVIDER=vertex     -> production: Gemini 3.7 Flash (medium thinking,
//                                    bounded thinkingBudget) on Vertex AI EU;
//                                    CHAT_USE_FRONTIER=true flips to Claude Sonnet 5
//                                    on the same substrate.
//  CHAT_MODEL_PROVIDER=google     -> dev default: the same Gemini model via the
//                                    Gemini API (AI Studio key, no GCP project).
//                                    Not EU-guaranteed -> dev only.
//  CHAT_MODEL_PROVIDER=anthropic  -> optional dev fallback (Claude, US inference).

import type { LanguageModel } from 'ai';
import { config } from './config';

export interface ModelRoute {
  model: LanguageModel;
  providerOptions?: Record<string, Record<string, unknown>>;
  /** rough €-cents per 1M input/output tokens, for the spend breaker */
  costPerMTokCents: { input: number; output: number };
  /**
   * Effective per-response token ceiling. On Gemini, THINKING TOKENS COUNT toward
   * maxOutputTokens — the ceiling must be answer budget + thinkingBudget, or the
   * model burns the whole allowance on thoughts and emits zero visible text.
   */
  maxOutputTokens: number;
}

export async function getModel(): Promise<ModelRoute> {
  if (config.provider === 'vertex') {
    const { createVertex } = await import('@ai-sdk/google-vertex');
    const vertex = createVertex({
      project: config.vertex.project,
      location: config.vertex.location,
    });
    if (config.vertex.useFrontier) {
      // Claude on Vertex speaks the Anthropic API shape via the anthropic sub-provider.
      const { createVertexAnthropic } = await import('@ai-sdk/google-vertex/anthropic');
      const anthropic = createVertexAnthropic({
        project: config.vertex.project,
        location: config.vertex.location,
      });
      return {
        model: anthropic(config.vertex.frontierModel),
        costPerMTokCents: { input: 300, output: 1500 },
        maxOutputTokens: config.maxOutputTokens,
      };
    }
    return {
      model: vertex(config.vertex.model),
      providerOptions: {
        google: {
          // D9 layer 3: Gemini bills thinking as output — the budget stays bounded.
          thinkingConfig: { thinkingBudget: config.vertex.thinkingBudget },
        },
      },
      // Post-promo Gemini 3.7 Flash pricing (promo halves this through 2026-12-31).
      costPerMTokCents: { input: 150, output: 750 },
      maxOutputTokens: config.maxOutputTokens + config.vertex.thinkingBudget,
    };
  }

  if (config.provider === 'google') {
    const { createGoogleGenerativeAI } = await import('@ai-sdk/google');
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });
    return {
      model: google(config.vertex.model),
      providerOptions: {
        google: { thinkingConfig: { thinkingBudget: config.vertex.thinkingBudget } },
      },
      costPerMTokCents: { input: 150, output: 750 },
      maxOutputTokens: config.maxOutputTokens + config.vertex.thinkingBudget,
    };
  }

  const { createAnthropic } = await import('@ai-sdk/anthropic');
  const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return {
    model: anthropic(config.anthropicDevModel),
    costPerMTokCents: { input: 500, output: 2500 },
    maxOutputTokens: config.maxOutputTokens,
  };
}

/**
 * Embedding model on the active substrate: Vertex EU in production, Gemini API in dev.
 * Returns null when neither is configured.
 */
export async function getEmbeddingModel() {
  if (config.provider === 'vertex' && config.vertex.project) {
    const { createVertex } = await import('@ai-sdk/google-vertex');
    const vertex = createVertex({
      project: config.vertex.project,
      location: config.vertex.location,
    });
    return vertex.embeddingModel(config.vertex.embeddingModel);
  }
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    const { createGoogleGenerativeAI } = await import('@ai-sdk/google');
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });
    return google.embeddingModel(config.vertex.embeddingModel);
  }
  return null;
}

/** Embed a query for hybrid retrieval. Returns null when no embedding provider is configured. */
export async function embedQuery(query: string): Promise<number[] | null> {
  try {
    const model = await getEmbeddingModel();
    if (!model) return null;
    const { embed } = await import('ai');
    const { embedding } = await embed({ model, value: query });
    return embedding;
  } catch {
    return null; // degrade to BM25-only rather than failing the request
  }
}

/** Convert model usage to euro cents for the spend counters. */
export function usageToCents(
  route: ModelRoute,
  usage: { inputTokens?: number; outputTokens?: number } | undefined,
): number {
  if (!usage) return 0;
  const input = ((usage.inputTokens ?? 0) / 1_000_000) * route.costPerMTokCents.input;
  const output = ((usage.outputTokens ?? 0) / 1_000_000) * route.costPerMTokCents.output;
  return Math.ceil(input + output);
}
