// Audit the generated site after npm run build. No requests or changes to external services.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { parse } from 'node-html-parser';

const origin = 'https://aiheroes.io';
if (!existsSync('dist/index.html')) throw new Error('Run npm run build before the site audit.');
// /deck is a standalone, noindexed slide deck with its own document structure.
const files = readdirSync('dist', { recursive: true }).filter((f) => f.endsWith('.html') && f !== 'deck.html');
const pages = new Map(files.map((f) => [f, parse(readFileSync(`dist/${f}`, 'utf8'))]));
const ids = new Map([...pages].map(([f, doc]) => [f, new Set(doc.querySelectorAll('[id]').map((e) => e.id))]));
const titles = new Map();
const descriptions = new Map();
const errors = new Set();
let links = 0;
let imageCandidates = 0;
const fail = (file, message) => errors.add(`${file}: ${message}`);
const resolve = (pathname) => {
  const path = decodeURIComponent(pathname).replace(/^\//, '') || 'index.html';
  return [path, `${path}.html`, `${path}/index.html`].find((p) => existsSync(`dist/${p}`) && statSync(`dist/${p}`).isFile());
};

for (const [file, doc] of pages) {
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href');
  const indexable = !doc.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex');
  const title = doc.querySelector('title')?.text.trim();
  const description = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
  if (!title || !description || !canonical) fail(file, 'Missing title, description or canonical.');
  // The shared 404 contains an English block that is hidden on its Dutch default render.
  if (doc.querySelectorAll('h1').filter((h) => !h.closest('[hidden]')).length !== 1) fail(file, 'Expected one visible h1.');
  if (canonical && resolve(new URL(canonical).pathname) !== file) fail(file, 'Canonical points to a different page.');
  for (const [value, seen, label] of [[title, titles, 'title'], [description, descriptions, 'description']]) {
    if (!indexable || !value) continue;
    if (seen.has(value)) fail(file, `Duplicate ${label} with ${seen.get(value)}.`);
    seen.set(value, file);
  }
  for (const script of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { JSON.parse(script.text); } catch { fail(file, 'Invalid JSON-LD.'); }
  }
  for (const el of doc.querySelectorAll('a[href], link[href], img[src], script[src], iframe[src]')) {
    const raw = el.getAttribute('href') ?? el.getAttribute('src');
    const url = new URL(raw, canonical ?? origin);
    if (url.origin !== origin) continue;
    links++;
    const target = resolve(url.pathname);
    if (!target) { fail(file, `Missing internal target ${raw}.`); continue; }
    if (url.hash && ids.has(target) && !ids.get(target).has(decodeURIComponent(url.hash.slice(1)))) {
      fail(file, `Missing fragment ${raw}.`);
    }
    const lang = el.getAttribute('hreflang');
    if (lang && lang !== 'x-default' && pages.get(target)?.querySelector('html')?.getAttribute('lang') !== lang) {
      fail(file, `Language alternate ${raw} does not match ${lang}.`);
    }
  }
  for (const img of doc.querySelectorAll('img')) {
    if (!img.hasAttribute('alt')) fail(file, `Missing alt attribute on ${img.getAttribute('src')}.`);
    if (img.getAttribute('srcset') && !img.getAttribute('sizes')) fail(file, `Missing sizes on ${img.getAttribute('src')}.`);
    for (const entry of (img.getAttribute('srcset') ?? '').split(',').filter(Boolean)) {
      const [src] = entry.trim().split(/\s+/);
      const url = new URL(src, canonical ?? origin);
      imageCandidates++;
      if (url.origin === origin && !resolve(url.pathname)) fail(file, `Missing image variant ${src}.`);
    }
  }
}

console.log(`Site audit: ${pages.size} pages, ${links} internal references, ${imageCandidates} responsive image candidates.`);
if (errors.size) {
  console.error([...errors].join('\n'));
  process.exitCode = 1;
} else {
  console.log('Passed: metadata, headings, JSON-LD, internal targets, fragments, language alternates and images.');
}
