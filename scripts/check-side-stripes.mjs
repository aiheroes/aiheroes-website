#!/usr/bin/env node
// Fails when a coloured side stripe (border-l-4, border-left: 4px …) comes back.
// Side stripes read as an "AI-generated site" tell; the site uses solid colour blocks
// with white text instead (docs/plan-zijlijnen-2026-09-29.md). Runs in `npm run check`,
// which gates every deploy.
//
// A 1px left border (`border-l`, `border-left: 1px`) is a divider, not a stripe, and
// is allowed. For a deliberate exception add `side-stripe-ok` on the same line.

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const SCAN = ['*.astro', '*.tsx', '*.ts', '*.jsx', '*.mdx', '*.md', '*.css', '*.html'];
// Archives and docs that quote old markup; not rendered on the site.
const SKIP = [/^migration\//, /^docs\//, /^showreel\//, /^scripts\/check-side-stripes\.mjs$/, /(^|\/)AGENTS\.md$/, /(^|\/)CLAUDE\.md$/, /^AUDIT/, /README\.md$/];

const RULES = [
  { re: /\bborder-(?:l|s)-(?:[2-9]|\[)/, what: 'Tailwind side stripe (border-l-2…8 / border-l-[…])' },
  { re: /\bborder-l-(?:brand|red|blue|stone|black|white|orange|green|amber|yellow)/, what: 'coloured left border' },
  { re: /border-(?:left|inline-start)\s*:\s*(?:[2-9]|\d{2})\s*px/i, what: 'CSS side stripe (border-left ≥ 2px)' },
  { re: /border-(?:left|inline-start)-width\s*:\s*(?:[2-9]|\d{2})\s*px/i, what: 'CSS side stripe (border-left-width ≥ 2px)' },
  { re: /borderLeft\s*:\s*[`'"]\s*(?:[2-9]|\d{2})\s*px/, what: 'inline-style side stripe (borderLeft ≥ 2px)' },
];

const files = execFileSync('git', ['ls-files', '--', ...SCAN], { encoding: 'utf8' })
  .split('\n')
  .filter((f) => f && !SKIP.some((re) => re.test(f)));

const hits = [];
for (const file of files) {
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    continue; // deleted in the working tree
  }
  text.split('\n').forEach((line, i) => {
    if (line.includes('side-stripe-ok')) return;
    for (const { re, what } of RULES) {
      if (re.test(line)) {
        hits.push(`${file}:${i + 1}  ${what}\n    ${line.trim().slice(0, 140)}`);
        break;
      }
    }
  });
}

if (hits.length) {
  console.error(`check-side-stripes: ${hits.length} side stripe(s) found. Use a solid block instead`);
  console.error('(Callout, `solid-block bg-brand-…`, `table-block`; see docs/plan-zijlijnen-2026-09-29.md).\n');
  console.error(hits.join('\n'));
  process.exit(1);
}
console.log(`check-side-stripes: ${files.length} files clean.`);
