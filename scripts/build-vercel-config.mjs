// Generates vercel.json from netlify.toml (cutover plan F1) so the 82 redirect rules
// and 2 header rules are translated mechanically, never by hand.
//
//   node scripts/build-vercel-config.mjs        # writes vercel.json
//
// Translation rules:
//   301  -> redirects (statusCode 301). "/prefix/*" -> "/prefix/:path*", ":splat" -> ":path*",
//           mid-segment wildcards "/foo-*" -> "/foo-(.*)". Trailing slashes are stripped
//           (Vercel's trailingSlash:false normalizes them before matching).
//   410  -> rewrites to /api/gone (vercel.json cannot emit 410 itself).
//   headers -> headers ("/*" -> "/(.*)").
// After the Netlify decommission, vercel.json becomes the source of truth and this
// script is historical.

import { readFileSync, writeFileSync } from 'node:fs';

const toml = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');

function parseBlocks(kind) {
  const blocks = [];
  const re = new RegExp(`\\[\\[${kind}\\]\\]([\\s\\S]*?)(?=\\n\\[\\[|\\n\\[[a-z]|$)`, 'g');
  let m;
  while ((m = re.exec(toml))) {
    const body = m[1];
    const get = (key) => body.match(new RegExp(`^\\s*${key}\\s*=\\s*"([^"]*)"`, 'm'))?.[1];
    const status = body.match(/^\s*status\s*=\s*(\d+)/m)?.[1];
    blocks.push({ from: get('from'), to: get('to'), for: get('for'), status: status ? Number(status) : undefined, body });
  }
  return blocks;
}

function toSource(from) {
  let s = from.replace(/\/$/, '') || '/';
  if (s.endsWith('/*')) return s.slice(0, -2) + '/:path*';
  if (s.endsWith('*')) return s.slice(0, -1) + '(.*)';
  return s;
}

function toDestination(to, from) {
  if (to.includes(':splat')) return to.replace(':splat', ':path*');
  // Regex-wildcard sources have no named param; a literal destination is fine.
  return to;
}

const redirects = [];
const rewrites = [];
for (const r of parseBlocks('redirects')) {
  if (!r.from || !r.to) continue;
  if (r.status === 410) {
    rewrites.push({ source: toSource(r.from), destination: '/api/gone' });
  } else {
    redirects.push({ source: toSource(r.from), destination: toDestination(r.to, r.from), statusCode: r.status ?? 301 });
  }
}

const headers = [];
for (const h of parseBlocks('headers')) {
  if (!h.for) continue;
  const values = [...h.body.matchAll(/^\s*([A-Za-z-]+)\s*=\s*"((?:[^"\\]|\\.)*)"/gm)]
    .filter(([, key]) => key !== 'for')
    .map(([, key, value]) => ({ key, value: value.replace(/\\"/g, '"') }));
  headers.push({ source: h.for === '/*' ? '/(.*)' : h.for, headers: values });
}

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: null,
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  cleanUrls: true,
  trailingSlash: false,
  regions: ['fra1'],
  functions: {
    'api/*.ts': { maxDuration: 60 },
    'api/chat.ts': { maxDuration: 60, supportsCancellation: true },
  },
  redirects,
  rewrites,
  headers,
  git: { deploymentEnabled: false },
};

writeFileSync(new URL('../vercel.json', import.meta.url), JSON.stringify(config, null, 2) + '\n');
console.log(`vercel.json: ${redirects.length} redirects, ${rewrites.length} rewrites (410), ${headers.length} header rules`);
