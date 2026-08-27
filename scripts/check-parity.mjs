// SEO/behaviour parity suite for the Vercel cutover (plan F3). Every line is an
// assertion against a target deployment; run it on the preview and again on
// production after the DNS flip.
//
//   node scripts/check-parity.mjs <target-base> [reference-base]
//   e.g. node scripts/check-parity.mjs https://aiheroes-website-xyz.vercel.app https://aiheroes.io
//
// Checks: (1) every netlify.toml redirect rule, (2) old-sitemap fixture, (3) live
// sitemap URLs + canonical/hreflang parity vs the reference, (4) URL shape 308s,
// (5) 404/410, (6) headers + static files, (7) no platform leakage, (8) chat API.

import { readFileSync } from 'node:fs';

const target = process.argv[2]?.replace(/\/$/, '');
const reference = (process.argv[3] ?? 'https://aiheroes.io').replace(/\/$/, '');
if (!target) {
  console.error('Usage: node scripts/check-parity.mjs <target-base> [reference-base]');
  process.exit(1);
}

let pass = 0;
let fail = 0;
const failures = [];
function check(ok, label, detail = '') {
  if (ok) pass += 1;
  else {
    fail += 1;
    failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
  }
}
const head = (url, init = {}) => fetch(url, { redirect: 'manual', ...init });

// ---------- (1) redirect matrix from netlify.toml ----------
const toml = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');
const rules = [];
const re = /\[\[redirects\]\]([\s\S]*?)(?=\n\[\[|\n\[[a-z]|$)/g;
let m;
while ((m = re.exec(toml))) {
  const body = m[1];
  const from = body.match(/^\s*from\s*=\s*"([^"]*)"/m)?.[1];
  const to = body.match(/^\s*to\s*=\s*"([^"]*)"/m)?.[1];
  const status = Number(body.match(/^\s*status\s*=\s*(\d+)/m)?.[1] ?? 301);
  if (from && to) rules.push({ from, to, status });
}
for (const rule of rules) {
  const samplePath = rule.from.replace(/\/\*$/, '/sample-page').replace(/\*$/, 'sample');
  const expectedLoc = rule.to.replace(':splat', 'sample-page');
  const res = await head(target + samplePath);
  if (rule.status === 410) {
    check(res.status === 410, `410 ${samplePath}`, `got ${res.status}`);
    continue;
  }
  const loc = res.headers.get('location') ?? '';
  const locPath = loc.startsWith('http') ? new URL(loc).pathname + new URL(loc).hash : loc;
  const okStatus = res.status === 301 || res.status === 308;
  const okLoc = locPath === expectedLoc || locPath === expectedLoc.replace(/\/$/, '');
  check(okStatus && okLoc, `301 ${samplePath} -> ${expectedLoc}`, `got ${res.status} ${loc}`);
}

// ---------- (2) old-sitemap fixture: 200 or redirect chain to 200 ----------
const fixture = readFileSync(new URL('./old-sitemap-urls.txt', import.meta.url), 'utf8')
  .split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
for (const orig of fixture) {
  const path = new URL(orig).pathname || '/';
  let url = target + path;
  let status = 0;
  for (let i = 0; i < 6; i++) {
    const res = await head(url);
    status = res.status;
    if (status === 301 || status === 308 || status === 302 || status === 307) {
      url = new URL(res.headers.get('location'), url).href;
      if (!url.startsWith(target)) url = target + new URL(url).pathname;
      continue;
    }
    break;
  }
  check(status === 200 || status === 410, `fixture ${path}`, `ended ${status}`);
}

// ---------- (3) live sitemap + canonical/hreflang parity ----------
const idx = await (await fetch(`${reference}/sitemap-index.xml`)).text();
const sitemapUrls = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]);
const pageUrls = [];
for (const sm of sitemapUrls) {
  const xml = await (await fetch(sm)).text();
  pageUrls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => new URL(x[1]).pathname));
}
const seoTags = (html) =>
  [...html.matchAll(/<link[^>]+rel="(?:canonical|alternate)"[^>]*>/g)].map((x) => x[0].replace(/\s+/g, ' ')).sort().join('\n');
for (const path of pageUrls) {
  const [a, b] = await Promise.all([fetch(target + path, { redirect: 'manual' }), fetch(reference + path)]);
  check(a.status === 200, `sitemap ${path}`, `got ${a.status}`);
  if (a.status === 200 && b.status === 200) {
    const [ha, hb] = await Promise.all([a.text(), b.text()]);
    check(seoTags(ha) === seoTags(hb), `canonical/hreflang ${path}`);
  }
}

// ---------- (4) URL shape ----------
for (const [path, expected] of [['/nl/diensten/', '/nl/diensten'], ['/nl/diensten.html', '/nl/diensten']]) {
  const res = await head(target + path);
  const loc = res.headers.get('location') ?? '';
  check(res.status === 308 && new URL(loc, target).pathname === expected, `shape ${path} -> ${expected}`, `got ${res.status} ${loc}`);
}
for (const path of ['/', '/en']) {
  const res = await head(target + path);
  check(res.status === 200, `root ${path}`, `got ${res.status}`);
}

// ---------- (5) 404 ----------
{
  const res = await head(`${target}/this-page-does-not-exist-${Date.now()}`);
  check(res.status === 404, '404 for unknown path', `got ${res.status}`);
}

// ---------- (6) headers + static files ----------
{
  const res = await fetch(target + '/');
  check((res.headers.get('link') ?? '').includes('api-catalog'), 'Link header on /');
  const cat = await fetch(`${target}/.well-known/api-catalog`);
  check((cat.headers.get('content-type') ?? '').startsWith('application/linkset+json'), 'api-catalog content-type', cat.headers.get('content-type') ?? '');
  for (const file of ['/robots.txt', '/llms.txt', '/sitemap-index.xml']) {
    const [ta, ra] = await Promise.all([fetch(target + file).then((r) => r.text()), fetch(reference + file).then((r) => r.text())]);
    check(ta.trim() === ra.trim(), `static identical ${file}`);
  }
}

// ---------- (7) no platform leakage ----------
for (const path of ['/', '/en']) {
  const html = await (await fetch(target + path)).text();
  check(!/netlify\.app/.test(html), `no netlify.app in ${path}`);
  check(/https:\/\/aiheroes\.io/.test(html), `absolute site URLs in ${path}`);
}

// ---------- (8) chat API ----------
{
  const res = await fetch(`${target}/api/warmup`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: target }, body: '{}' });
  check(res.status === 200, '/api/warmup 200', `got ${res.status}`);
  check((res.headers.get('x-vercel-id') ?? '').startsWith('fra1'), 'function served from fra1', res.headers.get('x-vercel-id') ?? 'no x-vercel-id');
}

console.log(`\nparity: ${pass} passed, ${fail} failed`);
for (const f of failures) console.log('  ✗', f);
process.exit(fail ? 1 : 0);
