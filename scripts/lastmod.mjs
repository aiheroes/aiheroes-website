// Last-modified date per site path, for <lastmod> in the sitemap (search engines and Bing, which
// feeds ChatGPT, use it to decide what to recrawl first). One `git log` over the whole history
// gives each source file's latest commit date; a page takes the date of its own source:
//   src/pages/**.astro            -> its path (index.astro is the folder)
//   src/content/<collection>/...  -> the route the collection renders, later of git date and the
//                                    frontmatter updatedDate/publishDate
//   jobs (vacatures/careers)      -> src/data/jobs.ts
// Needs full git history (actions/checkout fetch-depth: 0); with a shallow clone every file gets
// the same date, which is harmless. Returns an empty map when git is unavailable.

import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

function gitDates() {
  const dates = new Map();
  let out = '';
  try {
    out = execSync('git log --format=%x00%cI --name-only -- src/pages src/content src/data', {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return dates;
  }
  for (const block of out.split('\0')) {
    const [date, ...files] = block.trim().split('\n');
    if (!date) continue;
    for (const f of files) if (f && !dates.has(f)) dates.set(f, date.trim()); // newest first
  }
  return dates;
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const posix = (p) => p.split(sep).join('/');
const later = (...ds) => ds.filter(Boolean).sort().at(-1);

function frontmatter(file) {
  const src = readFileSync(file, 'utf8');
  const head = src.startsWith('---') ? src.slice(3, src.indexOf('\n---', 3)) : '';
  const get = (k) => head.match(new RegExp(`^${k}:\\s*["']?([^"'\\n]+)`, 'm'))?.[1]?.trim();
  return { slug: get('slug'), updated: get('updatedDate'), published: get('publishDate') };
}

/** Map of site path ("/nl/startsprint", "/" for home) to an ISO date. */
export function lastmodByPath() {
  const dates = gitDates();
  const map = new Map();
  if (dates.size === 0) return map;

  for (const file of walk('src/pages')) {
    const rel = posix(relative('src/pages', file));
    if (!/\.(astro|md|mdx)$/.test(rel) || rel.includes('[')) continue;
    const route = '/' + rel.replace(/\.(astro|md|mdx)$/, '').replace(/(^|\/)index$/, '');
    const d = dates.get(posix(file));
    if (d) map.set(route === '/' ? '/' : route.replace(/\/$/, ''), d);
  }

  const collections = [
    ['src/content/case-studies', (lang, slug) => `/${lang}/cases/${slug}`],
    ['src/content/landings', (lang, slug) => `/${lang}/${slug}`],
    ['src/content/kennis', (lang, slug) => (lang === 'nl' ? `/nl/kennis/${slug}` : `/en/insights/${slug}`)],
  ];
  for (const [dir, route] of collections) {
    for (const file of walk(dir)) {
      const rel = posix(relative(dir, file));
      const m = rel.match(/^(nl|en)\/(.+)\.mdx?$/);
      if (!m) continue;
      const fm = frontmatter(file);
      const d = later(dates.get(posix(file)), fm.updated, fm.published);
      if (d) map.set(route(m[1], fm.slug ?? m[2]), d);
    }
  }

  const jobs = dates.get('src/data/jobs.ts');
  if (jobs) map.set('prefix:/nl/vacatures/', jobs).set('prefix:/en/careers/', jobs);
  return map;
}

/** The site path a source file renders, or null (dynamic route templates, data, styles, ...). */
export function routeForFile(file) {
  const f = posix(file);
  let m = f.match(/^src\/pages\/(.+)\.(astro|md|mdx)$/);
  if (m && !m[1].includes('[')) {
    const route = '/' + m[1].replace(/(^|\/)index$/, '');
    return route === '/' ? '/' : route.replace(/\/$/, '');
  }
  m = f.match(/^src\/content\/(case-studies|landings|kennis)\/(nl|en)\/(.+)\.mdx?$/);
  if (m) {
    let slug = m[3];
    try { slug = frontmatter(f).slug ?? slug; } catch { /* deleted file: keep the file name */ }
    if (m[1] === 'case-studies') return `/${m[2]}/cases/${slug}`;
    if (m[1] === 'landings') return `/${m[2]}/${slug}`;
    return m[2] === 'nl' ? `/nl/kennis/${slug}` : `/en/insights/${slug}`;
  }
  return null;
}

/** The date for one site path, honouring the prefix fallbacks. */
export function lastmodFor(map, path) {
  if (map.has(path)) return map.get(path);
  for (const [k, v] of map) if (k.startsWith('prefix:') && path.startsWith(k.slice(7))) return v;
  return undefined;
}
