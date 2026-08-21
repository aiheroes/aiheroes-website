// Model routing (SDD D4): one env var decides the substrate.
//
//  CHAT_MODEL_PROVIDER=vertex     -> production: Gemini 3.7 Flash (medium thinking,
//                                    bounded thinkingBudget) on Vertex AI EU;
//                                    CHAT_USE_FRONTIER=true flips to Claude Sonnet 5
//                                    on the same substrate.
//  CHAT_MODEL_PROVIDER=anthropic  -> dev only (first-party API processes in the US;
//                                    never production — SDD D4).

import type { LanguageModel } from 'ai';
import { config } from './config';

export interface ModelRoute {
  model: LanguageModel;
  providerOptions?: Record<string, Record<string, unknown>>;
  /** rough €-cents per 1M input/output tokens, for the spend breaker */
  costPerMTokCents: { input: number; output: number };
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
    };
  }

  const { createAnthropic } = await import('@ai-sdk/anthropic');
  const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return {
    model: anthropic(config.anthropicDevModel),
    costPerMTokCents: { input: 500, output: 2500 },
  };
}

/** Embed a query for hybrid retrieval. Returns null when no embedding provider is configured. */
export async function embedQuery(query: string): Promise<number[] | null> {
  if (config.provider !== 'vertex' || !config.vertex.project) return null;
  try {
    const { createVertex } = await import('@ai-sdk/google-vertex');
    const { embed } = await import('ai');
    const vertex = createVertex({
      project: config.vertex.project,
      location: config.vertex.location,
    });
    const { embedding } = await embed({
      model: vertex.embeddingModel(config.vertex.embeddingModel),
      value: query,
    });
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
