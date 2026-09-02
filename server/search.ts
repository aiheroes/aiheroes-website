// In-process hybrid retrieval (SDD D5): BM25 + optional dense cosine, fused with RRF.
// The index ships inside the function bundle — no network hop, no drift.

import type { IndexChunk, KnowledgeIndex } from './index-types.js';
import { tokenize } from './tokenize.js';
import { embedQuery } from './provider.js';
// Generated at build time by scripts/build-index; a committed stub keeps dev working
// before the first real build.
import indexData from './index-data/index.json' with { type: 'json' };

const index = indexData as unknown as KnowledgeIndex;

export interface RetrievedSource {
  url: string;
  title: string;
  heading: string;
  text: string;
  score: number;
}

const K1 = 1.4;
const B = 0.75;
const RRF_K = 60;

function bm25Rank(query: string, lang: 'nl' | 'en', chunks: IndexChunk[]): IndexChunk[] {
  const stats = index.stats[lang];
  if (!stats || stats.docCount === 0) return [];
  const terms = tokenize(query, lang);
  const scored = chunks
    .map((chunk) => {
      let score = 0;
      for (const term of terms) {
        const tf = chunk.termFreqs[term] ?? 0;
        if (tf === 0) continue;
        const df = stats.df[term] ?? 0;
        const idf = Math.log(1 + (stats.docCount - df + 0.5) / (df + 0.5));
        score +=
          (idf * tf * (K1 + 1)) /
          (tf + K1 * (1 - B + (B * chunk.length) / Math.max(stats.avgLength, 1)));
      }
      return { chunk, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.map((s) => s.chunk);
}

function cosine(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) || 1);
}

/**
 * Retrieve top-k chunks for a query. Language-routed with cross-language fallback
 * (the corpus is mirrored, so an empty result in one language falls through to the other).
 */
export async function retrieve(query: string, lang: 'nl' | 'en', k = 6): Promise<RetrievedSource[]> {
  const primary = index.chunks.filter((c) => c.lang === lang);
  let ranked = await hybridRank(query, lang, primary);
  if (ranked.length === 0) {
    const other: 'nl' | 'en' = lang === 'nl' ? 'en' : 'nl';
    ranked = await hybridRank(query, other, index.chunks.filter((c) => c.lang === other));
  }
  return ranked.slice(0, k).map((chunk, i) => ({
    url: chunk.url,
    title: chunk.title,
    heading: chunk.heading,
    text: chunk.contextLine ? `${chunk.contextLine}\n${chunk.text}` : chunk.text,
    score: 1 / (i + 1),
  }));
}

async function hybridRank(
  query: string,
  lang: 'nl' | 'en',
  chunks: IndexChunk[],
): Promise<IndexChunk[]> {
  const bm25 = bm25Rank(query, lang, chunks);

  const hasVectors = index.embeddingModel && chunks.some((c) => c.embedding);
  if (!hasVectors) return bm25;

  const queryVec = await embedQuery(query);
  if (!queryVec) return bm25;

  const dense = chunks
    .filter((c) => c.embedding)
    .map((chunk) => ({ chunk, score: cosine(queryVec, chunk.embedding!) }))
    .sort((a, b) => b.score - a.score)
    .map((s) => s.chunk);

  // Reciprocal-rank fusion.
  const fused = new Map<string, { chunk: IndexChunk; score: number }>();
  const add = (list: IndexChunk[]) =>
    list.forEach((chunk, rank) => {
      const entry = fused.get(chunk.id) ?? { chunk, score: 0 };
      entry.score += 1 / (RRF_K + rank + 1);
      fused.set(chunk.id, entry);
    });
  add(bm25);
  add(dense);
  return [...fused.values()].sort((a, b) => b.score - a.score).map((e) => e.chunk);
}
