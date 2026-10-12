// IndexNow: tell Bing (which feeds ChatGPT search and Copilot) and the other IndexNow engines
// (Yandex, Seznam, Naver) which pages changed, so they recrawl them within minutes.
//
//   node scripts/indexnow.mjs --since <git-sha>   pages whose sources changed since that commit
//                                                 (all pages when a sitewide source changed)
//   node scripts/indexnow.mjs --all               every URL in the live sitemap
//   node scripts/indexnow.mjs <url> [url ...]     just these
//   add --dry-run to print the selection without submitting
//
// Runs in the deploy workflow after each production deploy (--since the previous master).
// The key is the one public/<32 hex>.txt file; it must be live before a submission validates.
// Only URLs in the live sitemap are sent (no noindex or redirected paths).

import { execSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { routeForFile } from './lastmod.mjs';

const SITE = 'https://aiheroes.io';
const HOST = 'aiheroes.io';

const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('indexnow: no public/<key>.txt found');
const KEY = readFileSync(`public/${keyFile}`, 'utf8').trim();

async function sitemapUrls() {
  const get = async (u) => (await (await fetch(u)).text());
  const index = await get(`${SITE}/sitemap-index.xml`);
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const m of maps) urls.push(...[...(await get(m)).matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
  return urls;
}

// Sources that appear on every page: a change there touches all of them.
const SITEWIDE = /^(src\/layouts\/|src\/components\/hs\/.+\.(astro|ts)$|src\/data\/(nav|site|ui|team|i18n|schema|seo)\.ts$|constants\.ts$)/;

function changedPaths(since) {
  const files = execSync(`git diff --name-only ${since} HEAD`, { encoding: 'utf8' }).split('\n').filter(Boolean);
  if (files.some((f) => SITEWIDE.test(f))) return { all: true, files };
  const paths = new Set();
  for (const f of files) {
    const route = routeForFile(f);
    if (route) paths.add(route);
    if (f === 'src/data/jobs.ts') paths.add('prefix:/nl/vacatures/').add('prefix:/en/careers/');
    if (f === 'src/data/salon.ts') paths.add('/nl/ai-salon').add('/en/ai-salon');
    if (f === 'src/data/campaigns.ts') paths.add('/nl/de-ai-storm').add('/en/de-ai-storm');
    if (/^src\/pages\/(nl|en)\/(vacatures|careers)\/\[slug\]/.test(f)) paths.add('prefix:/nl/vacatures/').add('prefix:/en/careers/');
    if (/^src\/pages\/(nl|en)\/cases\/\[slug\]/.test(f)) paths.add('prefix:/nl/cases/').add('prefix:/en/cases/');
    if (/^src\/pages\/(nl\/kennis|en\/insights)\/\[slug\]/.test(f)) paths.add('prefix:/nl/kennis/').add('prefix:/en/insights/');
    if (/^src\/pages\/(nl|en)\/\[landing\]/.test(f)) return { all: true, files }; // landings sit at the root
  }
  return { all: false, paths, files };
}

const dryRun = process.argv.includes('--dry-run');
const args = process.argv.slice(2).filter((a) => a !== '--dry-run');
const live = await sitemapUrls();
const pathOf = (u) => new URL(u).pathname.replace(/\/$/, '') || '/';
let urls = [];
if (args[0] === '--all') urls = live;
else if (args[0] === '--since') {
  const since = args[1];
  if (!since || /^0+$/.test(since)) urls = live;
  else {
    const c = changedPaths(since);
    console.log(`indexnow: ${c.files.length} changed files since ${since.slice(0, 7)}${c.all ? ' (sitewide)' : ''}`);
    urls = c.all ? live : live.filter((u) => {
      const p = pathOf(u);
      return c.paths.has(p) || [...c.paths].some((k) => k.startsWith('prefix:') && p.startsWith(k.slice(7)));
    });
  }
} else urls = args.filter((u) => live.includes(u));

if (urls.length === 0) {
  console.log('indexnow: nothing to submit');
  process.exit(0);
}
if (dryRun) {
  console.log(`indexnow (dry run): ${urls.length} URL(s)`);
  for (const u of urls.slice(0, 12)) console.log(`  ${u}`);
  if (urls.length > 12) console.log('  ...');
  process.exit(0);
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${keyFile}`, urlList: urls.slice(0, 10000) }),
});
// 200 = received, 202 = received and the key is still being validated.
console.log(`indexnow: submitted ${urls.length} URL(s), HTTP ${res.status}${res.ok ? '' : ` ${await res.text()}`}`);
if (!res.ok) process.exit(1);
