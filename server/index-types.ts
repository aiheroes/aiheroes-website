// Shared types between the build-time index builder and the runtime search (SDD D5).

export interface IndexChunk {
  id: string;
  url: string;
  lang: 'nl' | 'en';
  title: string;
  heading: string;
  text: string;
  /** Anthropic contextual-retrieval situating line; added when an aux model is configured. */
  contextLine?: string;
  /** sha256 of text — drives incremental context/embedding builds. */
  hash: string;
  /** Token count approximation used for BM25 length normalization. */
  length: number;
  termFreqs: Record<string, number>;
  /** Query-embedding vector; present only when an embedding provider ran at build time. */
  embedding?: number[];
}

export interface LangStats {
  docCount: number;
  avgLength: number;
  /** document frequency per term */
  df: Record<string, number>;
}

export interface KnowledgeIndex {
  builtAt: string;
  embeddingModel: string | null;
  chunks: IndexChunk[];
  stats: Record<'nl' | 'en', LangStats>;
}
