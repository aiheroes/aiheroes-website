// Pre-cutover insurance: every URL that was in the live site's sitemap
// (snapshot in old-sitemap-urls.txt) must answer 200 or redirect (301/308)
// to a 200 on the new Astro deploy, so no indexed URL dies at cutover.
//
// Usage: node scripts/check-redirect-parity.mjs <base-url>
//   e.g. node scripts/check-redirect-parity.mjs https://deploy-preview--aiheroes.netlify.app

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const base = process.argv[2]?.replace(/\/$/, '');
if (!base) {
  console.error('Usage: node scripts/check-redirect-parity.mjs <base-url>');
  process.exit(1);
}

const fixture = join(dirname(fileURLToPath(import.meta.url)), 'old-sitemap-urls.txt');
const urls = (await readFile(fixture, 'utf8'))
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean);

const REDIRECT_OK = new Set([301, 308]);
let failures = 0;

const results = await Promise.all(
  urls.map(async (orig) => {
    const path = new URL(orig).pathname || '/';
    try {
      // Follow redirects manually so we can report the chain.
      let url = base + path;
      let hops = [];
      for (let i = 0; i < 5; i++) {
        const res = await fetch(url, { redirect: 'manual' });
        if (REDIRECT_OK.has(res.status)) {
          const loc = res.headers.get('location');
          hops.push(`${res.status} -> ${loc}`);
          url = new URL(loc, url).href;
          continue;
        }
        return { path, status: res.status, chain: hops.join(' ; '), ok: res.status === 200 };
      }
      return { path, status: 'loop', chain: hops.join(' ; '), ok: false };
    } catch (err) {
      return { path, status: 'ERR', chain: String(err.message ?? err), ok: false };
    }
  }),
);

for (const r of results.sort((a, b) => Number(a.ok) - Number(b.ok) || a.path.localeCompare(b.path))) {
  if (!r.ok) failures++;
  const mark = r.ok ? 'OK  ' : 'FAIL';
  console.log(`${mark} ${String(r.status).padEnd(4)} ${r.path}${r.chain ? `   [${r.chain}]` : ''}`);
}

console.log(`\n${results.length - failures}/${results.length} old URLs resolve to 200 on ${base}`);
process.exit(failures ? 1 : 0);
