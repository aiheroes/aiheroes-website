// Shared tokenizer for BM25 indexing and querying (build time + runtime).
// Deliberately simple: lowercase, diacritics folded, unigrams, per-language stopwords.

const STOPWORDS_NL = new Set(
  'de het een en van in op voor met aan bij is zijn was waren wordt worden dat dit die deze er niet ook naar uit over als dan wat wie waar hoe je jij u we wij ze zij ik hij men om te ten ter maar of nog wel geen al tot door na onze ons jullie hun haar zijn mijn'.split(
    ' ',
  ),
);
const STOPWORDS_EN = new Set(
  'the a an and of in on for with to at by is are was were be been being that this these those it its not also as than then what who where how you we they i he she them our your their my or but no none all until through after'.split(
    ' ',
  ),
);

export function tokenize(text: string, lang: 'nl' | 'en'): string[] {
  const stop = lang === 'nl' ? STOPWORDS_NL : STOPWORDS_EN;
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !stop.has(t));
}
