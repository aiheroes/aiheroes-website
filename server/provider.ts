// Model routing (SDD D4): one env var decides the substrate.
//
//  CHAT_MODEL_PROVIDER=vertex     -> production: Gemini 3.5 Flash (bounded thinkingBudget)
//                                    on Vertex AI EU, with a fallback model when it is
//                                    slow to start; CHAT_USE_FRONTIER=true flips to
//                                    Claude Sonnet 5 on the same substrate.
//  CHAT_MODEL_PROVIDER=google     -> dev default: the same Gemini model via the
//                                    Gemini API (AI Studio key, no GCP project).
//                                    Not EU-guaranteed -> dev only.
//  CHAT_MODEL_PROVIDER=anthropic  -> optional dev fallback (Claude, US inference).

import { wrapLanguageModel, type LanguageModel, type LanguageModelMiddleware } from 'ai';
import { config } from './config.js';

type StreamingModel = Parameters<NonNullable<LanguageModelMiddleware['wrapStream']>>[0]['model'];

/**
 * Queue guard. Vertex holds an on-demand request until the model starts answering, and
 * the SDK's firstChunkMs timer only starts once that response is in, so a queued request
 * used to sit silent until the 50 s total timeout. Here the request gets `deadlineMs` to
 * start; after that, or on any error, it is cancelled and the same step goes to `fallback`.
 */
function withFallback(primary: StreamingModel, fallback: StreamingModel, deadlineMs: number): LanguageModel {
  return wrapLanguageModel({
    model: primary,
    middleware: {
      wrapStream: async ({ params }) => {
        const cancel = new AbortController();
        const abortSignal = params.abortSignal
          ? AbortSignal.any([params.abortSignal, cancel.signal])
          : cancel.signal;
        let timer: ReturnType<typeof setTimeout> | undefined;
        const deadline = new Promise<never>((_, reject) => {
          timer = setTimeout(() => reject(new Error(`no response within ${deadlineMs} ms`)), deadlineMs);
        });
        try {
          return await Promise.race([primary.doStream({ ...params, abortSignal }), deadline]);
        } catch (error) {
          // The visitor left or the total timeout fired: stop, do not start over.
          if (params.abortSignal?.aborted) throw error;
          cancel.abort();
          console.warn(
            `chat model ${primary.modelId} -> fallback ${fallback.modelId}:`,
            error instanceof Error ? error.message : String(error),
          );
          return fallback.doStream(params);
        } finally {
          clearTimeout(timer);
        }
      },
    },
  });
}

/**
 * Service-account credentials for Vertex from env (serverless functions have no key file).
 * GOOGLE_VERTEX_CREDENTIALS_B64 holds the base64-encoded service-account JSON —
 * one shell-safe token, no PEM quoting hazards.
 */
function vertexAuthOptions() {
  const b64 = process.env.GOOGLE_VERTEX_CREDENTIALS_B64;
  if (!b64) return {};
  try {
    const parsed = JSON.parse(Buffer.from(b64, 'base64').toString('utf8')) as {
      client_email?: string;
      private_key?: string;
    };
    if (!parsed.client_email || !parsed.private_key) return {};
    return {
      googleAuthOptions: {
        credentials: { client_email: parsed.client_email, private_key: parsed.private_key },
      },
    };
  } catch {
    return {};
  }
}

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
      ...vertexAuthOptions(),
    });
    if (config.vertex.useFrontier) {
      // Claude on Vertex speaks the Anthropic API shape via the anthropic sub-provider.
      const { createVertexAnthropic } = await import('@ai-sdk/google-vertex/anthropic');
      const anthropic = createVertexAnthropic({
        project: config.vertex.project,
        location: config.vertex.location,
        ...vertexAuthOptions(),
      });
      return {
        model: anthropic(config.vertex.frontierModel),
        costPerMTokCents: { input: 300, output: 1500 },
        maxOutputTokens: config.maxOutputTokens,
      };
    }
    const fallbackVertex = createVertex({
      project: config.vertex.project,
      location: config.vertex.fallbackLocation,
      ...vertexAuthOptions(),
    });
    return {
      model: withFallback(
        vertex(config.vertex.model),
        fallbackVertex(config.vertex.fallbackModel),
        config.vertex.firstResponseMs,
      ),
      providerOptions: {
        google: {
          // D9 layer 3: Gemini bills thinking as output — the budget stays bounded.
          thinkingConfig: { thinkingBudget: config.vertex.thinkingBudget },
        },
      },
      // Gemini 3.5 Flash on a non-global endpoint ('eu'): $1.65 / $9.90 per 1M tokens
      // (Vertex price list, 2026-10-19), counted as euro cents. The 3.8 Flash fallback is
      // cheaper ($0.825 / $4.125 to 2026-12-31, then $1.65 / $8.25), so this errs high.
      costPerMTokCents: { input: 165, output: 990 },
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
      // Same model on the Gemini API; the Vertex global price ($1.50 / $9.00) as the estimate.
      costPerMTokCents: { input: 150, output: 900 },
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
      location: config.vertex.embeddingLocation,
      ...vertexAuthOptions(),
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
    const { embedding } = await embed({
      model,
      value: query,
      providerOptions: { google: { outputDimensionality: config.vertex.embeddingDim } },
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
