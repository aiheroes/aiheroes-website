// Knowledge-index builder (SDD D5). Runs after `astro build` in the same Netlify build,
// so the index is a build artifact of the same commit that ships the site: content and
// knowledge cannot drift apart.
//
//   extract (dist/*.html + shareable docs) -> heading-aware chunks -> BM25 stats
//   -> [optional, needs Vertex creds] contextual lines + embeddings
//   -> server/index-data/index.json (bundled into the chat function)
//
// Confidentiality (SDD D12): sources are ONLY the rendered public site and the files
// in SHAREABLE_DOCS below. Never add internal documents here.

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'node-html-parser';
import type { IndexChunk, KnowledgeIndex, LangStats } from '../../server/index-types';
import { tokenize } from '../../server/tokenize';

const ROOT = join(import.meta.dirname, '..', '..');
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, 'server', 'index-data', 'index.json');
const SITE = 'https://aiheroes.io';

const SHAREABLE_DOCS: { path: string; title: string; url: string }[] = [
  { path: 'docs/company-profile.md', title: 'AI Heroes company profile', url: `${SITE}/nl/over-ons` },
];

const TARGET_CHUNK_CHARS = 2600; // ~650 tokens
const MIN_CHUNK_CHARS = 200;

interface Section {
  heading: string;
  text: string;
}

interface PageDoc {
  url: string;
  lang: 'nl' | 'en';
  title: string;
  sections: Section[];
}

function* htmlFiles(dir: string): Generator<string> {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* htmlFiles(full);
    else if (entry.endsWith('.html')) yield full;
  }
}

function routeFor(file: string): string {
  let rel = relative(DIST, file).replace(/\\/g, '/');
  rel = rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  rel = rel.replace(/\/$/, '');
  return rel === '' ? SITE : `${SITE}/${rel}`;
}

function extractPage(file: string): PageDoc | null {
  const html = readFileSync(file, 'utf8');
  const root = parse(html);
  const robots = root.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '';
  if (robots.includes('noindex')) return null; // legal pages etc. stay out

  const url = routeFor(file);
  const path = url.replace(SITE, '');
  let lang: 'nl' | 'en';
  if (path === '' || path === '/' || path.startsWith('/nl')) lang = 'nl';
  else if (path === '/en' || path.startsWith('/en/')) lang = 'en';
  else return null; // 404 catch-all, hanze lander, other specials

  const title = (root.querySelector('title')?.text ?? '').split('|')[0].trim();
  const main = root.querySelector('main') ?? root.querySelector('body');
  if (!main) return null;
  main
    .querySelectorAll('nav, footer, header, script, style, noscript, form, svg, button')
    .forEach((n) => n.remove());

  const sections: Section[] = [];
  let current: Section = { heading: '', text: '' };
  for (const el of main.querySelectorAll('h1, h2, h3, p, li, blockquote, figcaption, td, th, dt, dd')) {
    const text = el.text.replace(/\s+/g, ' ').trim();
    if (!text) continue;
    if (/^h[1-3]$/i.test(el.tagName ?? '')) {
      if (current.text.length > 0) sections.push(current);
      current = { heading: text, text: '' };
    } else {
      current.text += (current.text ? ' ' : '') + text;
    }
  }
  if (current.text.length > 0) sections.push(current);
  if (sections.length === 0) return null;
  return { url, lang, title: title || url, sections };
}

function detectLang(text: string): 'nl' | 'en' {
  const nlHits = (text.match(/\b(de|het|een|en|voor|met|niet|ook|wij|onze)\b/gi) ?? []).length;
  const enHits = (text.match(/\b(the|and|for|with|not|also|our|we|of|to)\b/gi) ?? []).length;
  return nlHits >= enHits ? 'nl' : 'en';
}

function extractMarkdownDoc(doc: (typeof SHAREABLE_DOCS)[number]): PageDoc | null {
  const full = join(ROOT, doc.path);
  if (!existsSync(full)) return null;
  const md = readFileSync(full, 'utf8');
  const sections: Section[] = [];
  let current: Section = { heading: '', text: '' };
  for (const line of md.split('\n')) {
    const h = line.match(/^#{1,3}\s+(.*)/);
    if (h) {
      if (current.text.trim()) sections.push(current);
      current = { heading: h[1].trim(), text: '' };
    } else {
      const clean = line.replace(/[*_`>#|-]/g, ' ').replace(/\s+/g, ' ').trim();
      if (clean) current.text += (current.text ? ' ' : '') + clean;
    }
  }
  if (current.text.trim()) sections.push(current);
  if (sections.length === 0) return null;
  const lang = detectLang(md);
  return { url: doc.url, lang, title: doc.title, sections };
}

function splitAtSentences(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const sentences = text.match(/[^.!?]+[.!?]+\s*|[^.!?]+$/g) ?? [text];
  const parts: string[] = [];
  let buf = '';
  for (const s of sentences) {
    if (buf.length + s.length > maxChars && buf) {
      parts.push(buf.trim());
      buf = '';
    }
    buf += s;
  }
  if (buf.trim()) parts.push(buf.trim());
  return parts;
}

function chunkPage(page: PageDoc): IndexChunk[] {
  // Merge small adjacent sections, split oversized ones at sentence boundaries.
  const merged: Section[] = [];
  for (const section of page.sections) {
    const last = merged[merged.length - 1];
    if (last && last.text.length + section.text.length < TARGET_CHUNK_CHARS && !section.heading) {
      last.text += ' ' + section.text;
    } else if (
      last &&
      last.text.length < MIN_CHUNK_CHARS &&
      last.text.length + section.text.length < TARGET_CHUNK_CHARS
    ) {
      last.heading = last.heading || section.heading;
      last.text += ' ' + section.text;
    } else {
      merged.push({ ...section });
    }
  }

  const chunks: IndexChunk[] = [];
  for (const section of merged) {
    if (section.text.length < 80) continue;
    for (const part of splitAtSentences(section.text, TARGET_CHUNK_CHARS)) {
      const tokens = tokenize(part, page.lang);
      const termFreqs: Record<string, number> = {};
      for (const t of tokens) termFreqs[t] = (termFreqs[t] ?? 0) + 1;
      // Heading terms boost findability of short sections.
      for (const t of tokenize(`${page.title} ${section.heading}`, page.lang)) {
        termFreqs[t] = (termFreqs[t] ?? 0) + 1;
      }
      const hash = createHash('sha256').update(part).digest('hex').slice(0, 16);
      chunks.push({
        id: `${page.url}#${hash}`,
        url: page.url,
        lang: page.lang,
        title: page.title,
        heading: section.heading,
        text: part,
        hash,
        length: tokens.length || 1,
        termFreqs,
      });
    }
  }
  return chunks;
}

function computeStats(chunks: IndexChunk[], lang: 'nl' | 'en'): LangStats {
  const docs = chunks.filter((c) => c.lang === lang);
  const df: Record<string, number> = {};
  let totalLength = 0;
  for (const doc of docs) {
    totalLength += doc.length;
    for (const term of Object.keys(doc.termFreqs)) df[term] = (df[term] ?? 0) + 1;
  }
  return {
    docCount: docs.length,
    avgLength: docs.length ? totalLength / docs.length : 0,
    df,
  };
}

// --- main ---

if (!existsSync(DIST)) {
  console.error('build-index: dist/ not found. Run `astro build` first.');
  process.exit(1);
}

const pages: PageDoc[] = [];
for (const file of htmlFiles(DIST)) {
  const page = extractPage(file);
  if (page) pages.push(page);
}
for (const doc of SHAREABLE_DOCS) {
  const page = extractMarkdownDoc(doc);
  if (page) pages.push(page);
}

const chunks = pages.flatMap(chunkPage);

// Optional enrichment (contextual lines + embeddings) requires Vertex creds at build
// time; without them we ship BM25-only and SAY SO — no silent capability downgrade.
const vertexReady = Boolean(process.env.GOOGLE_VERTEX_PROJECT);
if (!vertexReady) {
  console.log(
    'build-index: no GOOGLE_VERTEX_PROJECT — shipping BM25-only index (no embeddings, no contextual lines).',
  );
}
// TODO(M0, needs GCP): hash-diffed contextual-retrieval lines + embedMany via Vertex EU.

const indexOut: KnowledgeIndex = {
  builtAt: new Date().toISOString(),
  embeddingModel: null,
  chunks,
  stats: { nl: computeStats(chunks, 'nl'), en: computeStats(chunks, 'en') },
};

writeFileSync(OUT, JSON.stringify(indexOut));
const bytes = statSync(OUT).size;
console.log(
  `build-index: ${pages.length} pages -> ${chunks.length} chunks (nl ${indexOut.stats.nl.docCount} / en ${indexOut.stats.en.docCount}), ${(bytes / 1024).toFixed(0)} KB`,
);
