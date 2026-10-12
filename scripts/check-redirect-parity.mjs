// Pre-cutover insurance: every URL that was in the live site's sitemap
// (snapshot in old-sitemap-urls.txt) must answer 200 or redirect (301/308)
// to a 200 on the new Astro deploy, so no indexed URL dies at cutover.
//
// Usage: node scripts/check-redirect-parity.mjs <base-url>
//   e.g. node scripts/check-redirect-parity.mjs https://aiheroes-website-xyz.vercel.app

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const base = process.argv[2]?.replace(/\/$/, '');
if (!base) {
  console.error('Usage: node scripts/check-redirect-parity.mjs <base-url>');
  process.exit(1);
}

// Two fixtures: the old sitemap, and every aiheroes.io URL with impressions in Search Console
// (2026-04-07 to 2026-10-09), so the relaunch's new URLs never strand an indexed page.
const here = dirname(fileURLToPath(import.meta.url));
const read = async (f) => (await readFile(join(here, f), 'utf8')).split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
const urls = [...new Set([...(await read('old-sitemap-urls.txt')), ...(await read('gsc-urls.txt'))])];

const REDIRECT_OK = new Set([301, 308]);
// Protected Vercel previews: pass the project's bypass secret as VERCEL_BYPASS.
const headers = process.env.VERCEL_BYPASS ? { 'x-vercel-protection-bypass': process.env.VERCEL_BYPASS } : {};
let failures = 0;

const results = await Promise.all(
  urls.map(async (orig) => {
    const path = new URL(orig).pathname || '/';
    try {
      // Follow redirects manually so we can report the chain.
      let url = base + path;
      let hops = [];
      for (let i = 0; i < 5; i++) {
        const res = await fetch(url, { redirect: 'manual', headers });
        if (REDIRECT_OK.has(res.status)) {
          const loc = res.headers.get('location');
          hops.push(`${res.status} -> ${loc}`);
          url = new URL(loc, url).href;
          continue;
        }
        // 410 is a deliberate answer for retired pages (api/gone); more than one hop is a chain.
        const ok = res.status === 200 || res.status === 410;
        return { path, status: res.status, chain: hops.join(' ; '), ok, multi: hops.length > 1 };
      }
      return { path, status: 'loop', chain: hops.join(' ; '), ok: false };
    } catch (err) {
      return { path, status: 'ERR', chain: String(err.message ?? err), ok: false };
    }
  }),
);

for (const r of results.sort((a, b) => Number(a.ok) - Number(b.ok) || a.path.localeCompare(b.path))) {
  if (!r.ok) failures++;
  const mark = !r.ok ? 'FAIL' : r.multi ? 'HOPS' : 'OK  ';
  console.log(`${mark} ${String(r.status).padEnd(4)} ${r.path}${r.chain ? `   [${r.chain}]` : ''}`);
}

const multi = results.filter((r) => r.ok && r.multi).length;
console.log(`\n${results.length - failures}/${results.length} old URLs resolve to 200 or 410 on ${base}; ${multi} via more than one hop`);
process.exit(failures ? 1 : 0);
