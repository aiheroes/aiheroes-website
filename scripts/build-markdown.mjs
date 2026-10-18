// Markdown for agents (runs after `astro build`): every indexable page also as dist/<path>.md,
// plus dist/llms-full.txt with all of them. Agents (coding and research assistants, browser
// agents) read Markdown far more reliably than HTML; llms.txt points here. Headings, lists,
// FAQs, figures and links survive; navigation, footer, forms and decorative parts do not.
// The .md files are served with X-Robots-Tag: noindex (vercel.json) so they never compete with
// the HTML pages in search.

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parse } from 'node-html-parser';

const SITE = 'https://aiheroes.io';
const DIST = 'dist';

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

const clean = (t) =>
  t
    .replace(/­/g, '')
    .replace(/‑/g, '-')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const abs = (href) => {
  if (!href || href.startsWith('#') || href.startsWith('javascript:')) return null;
  try {
    return new URL(href, SITE).href.replace(/\/$/, '');
  } catch {
    return null;
  }
};

const SKIP = new Set(['nav', 'footer', 'script', 'style', 'noscript', 'form', 'svg', 'button', 'img', 'picture', 'video', 'iframe', 'template']);
const BLOCK = /^(h[1-6]|p|ul|ol|li|dl|dt|dd|table|blockquote|details|summary|section|article|div|header|aside|figure|figcaption|main)$/i;

/**
 * The children's inline Markdown, with `sep` between two elements that touch: card parts are
 * spans laid out by CSS (kicker, title, figure), and joined bare they would run together.
 */
function joined(node, sep) {
  let out = '';
  let afterElement = false;
  for (const child of node.childNodes) {
    const text = inline(child);
    if (child.nodeType === 1) {
      if (!text.trim()) continue;
      if (afterElement && out.trim() && !/\s$/.test(out)) out += sep;
      afterElement = true;
    } else if (child.nodeType === 3 && text.trim()) afterElement = false;
    out += text;
  }
  return out;
}

/** Inline Markdown for an element: text with links. */
function inline(node) {
  if (node.nodeType === 3) return node.rawText ? decode(node.rawText) : '';
  const tag = (node.tagName || '').toLowerCase();
  if (SKIP.has(tag) || hidden(node)) return '';
  const inner = tag === 'a' ? joined(node, ' · ') : tag === 'span' ? joined(node, ' ') : node.childNodes.map(inline).join('');
  if (tag === 'a') {
    const href = abs(node.getAttribute('href'));
    const text = clean(inner);
    return href && text ? `[${text}](${href})` : inner;
  }
  if (tag === 'strong' || tag === 'b') return clean(inner) ? `**${clean(inner)}**` : '';
  if (tag === 'br') return ' ';
  return inner;
}

const decode = (t) =>
  t.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));

function hidden(node) {
  if (!node.getAttribute) return false;
  if (node.getAttribute('aria-hidden') === 'true' || node.hasAttribute?.('hidden')) return true;
  const cls = node.getAttribute('class') || '';
  // Also the "Read more" labels on cards (hs-card__more, hs-entry__more, hs-cc-more): the card's
  // link already carries them.
  return /\b(hs-skip|sr-only|aih-sr|hs-honey)\b|(__|-)more\b/.test(cls);
}

const hasBlockChild = (node) => node.childNodes.some((c) => c.nodeType === 1 && BLOCK.test(c.tagName || ''));
const isCard = (n) => (n.tagName || '').toLowerCase() === 'a' && hasBlockChild(n);

/** Block-level Markdown, in document order. */
function blocks(node, out, ctx = {}) {
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      const t = clean(decode(child.rawText));
      if (t) out.push(t);
      continue;
    }
    if (child.nodeType !== 1) continue;
    const tag = (child.tagName || '').toLowerCase();
    if (SKIP.has(tag) || hidden(child)) continue;
    const cls = child.getAttribute('class') || '';

    if (/^h[1-6]$/.test(tag)) {
      const text = clean(inline(child));
      if (text) out.push(`${'#'.repeat(+tag[1])} ${ctx.link ? `[${text}](${ctx.link})` : text}`);
      if (ctx.link) ctx.link = null;
      continue;
    }
    if (tag === 'a' && hasBlockChild(child)) {
      // A card: its heading becomes the link.
      const href = abs(child.getAttribute('href'));
      const sub = { link: href };
      const start = out.length;
      blocks(child, out, sub);
      if (sub.link && href && out.length > start) out.push(`[${clean(child.text).slice(0, 80)}](${href})`);
      continue;
    }
    if (tag === 'a') {
      // A button or a lone link: keep it as a Markdown link.
      const text = clean(inline(child));
      if (text) out.push(text);
      continue;
    }
    if (tag === 'p' || tag === 'figcaption') {
      const text = clean(inline(child));
      if (text) out.push(text);
      continue;
    }
    if (tag === 'blockquote') {
      const text = clean(inline(child));
      if (text) out.push(`> ${text}`);
      continue;
    }
    if (tag === 'ul' || tag === 'ol') {
      const items = child.childNodes.filter((c) => c.nodeType === 1 && c.tagName?.toLowerCase() === 'li' && !hidden(c));
      const lines = items
        .map((li, i) => {
          if (hasBlockChild(li) || li.querySelectorAll('a').some(isCard)) {
            const sub = [];
            blocks(li, sub, {});
            const text = sub.map((s) => s.replace(/^#+\s/, '')).join(' · ');
            return text ? `${tag === 'ol' ? `${i + 1}.` : '-'} ${text}` : '';
          }
          const text = clean(inline(li));
          return text ? `${tag === 'ol' ? `${i + 1}.` : '-'} ${text}` : '';
        })
        .filter(Boolean);
      if (lines.length) out.push(lines.join('\n'));
      continue;
    }
    if (tag === 'dl') {
      // Figures: the value (dd) first, its label (dt) after; elsewhere "label: value".
      const figures = /hs-stats|hs-pcover__facts/.test(cls);
      const lines = [];
      const dts = child.querySelectorAll('dt');
      for (const dtEl of dts) {
        // The matching dd: inside the same wrapper div, or the next sibling.
        const scope = dtEl.parentNode && dtEl.parentNode !== child ? dtEl.parentNode : null;
        const ddEl = scope ? scope.querySelector('dd') : dtEl.nextElementSibling;
        const dt = clean(inline(dtEl));
        const dd = ddEl ? clean(inline(ddEl)) : '';
        if (dt || dd) lines.push(figures ? `- ${dd}: ${dt}` : `- ${dt}: ${dd}`);
      }
      if (lines.length) out.push(lines.join('\n'));
      continue;
    }
    if (tag === 'details') {
      const q = clean(inline(child.querySelector('summary') ?? { childNodes: [] }));
      if (q) out.push(`### ${q}`);
      for (const c of child.childNodes) if (c.nodeType === 1 && c.tagName?.toLowerCase() !== 'summary') blocks({ childNodes: [c] }, out, {});
      continue;
    }
    if (tag === 'table') {
      const rows = child.querySelectorAll('tr').map((tr) => tr.querySelectorAll('th, td').map((c) => clean(inline(c)).replace(/\|/g, '/')));
      if (rows.length) {
        const w = Math.max(...rows.map((r) => r.length));
        const line = (r) => `| ${Array.from({ length: w }, (_, i) => r[i] ?? '').join(' | ')} |`;
        out.push([line(rows[0]), line(Array(w).fill('---')), ...rows.slice(1).map(line)].join('\n'));
      }
      continue;
    }
    blocks(child, out, ctx);
  }
  return out;
}

const pages = [];
for (const file of walk(DIST)) {
  const rel = relative(DIST, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  const root = parse(html);
  if ((root.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '').includes('noindex')) continue;
  const route = rel === 'index.html' ? '/' : '/' + rel.replace(/\.html$/, '').replace(/\/index$/, '');
  if (!(route === '/' || route === '/en' || route.startsWith('/nl/') || route.startsWith('/en/'))) continue;
  const main = root.querySelector('main');
  if (!main) continue;
  const title = clean(decode(root.querySelector('title')?.text ?? ''));
  const desc = clean(decode(root.querySelector('meta[name="description"]')?.getAttribute('content') ?? ''));
  // Drop repeats and separators left on their own (the · between two dates in a byline).
  const body = blocks(main, []).filter((b, i, arr) => b !== arr[i - 1] && !/^[·•|]$/.test(b));
  const url = route === '/' ? SITE : SITE + route;
  const meta = [`Title: ${title}`, `URL: ${url}`, desc ? `Description: ${desc}` : null].filter(Boolean).join('\n');
  const md = `${meta}\n\n${body.join('\n\n')}\n`.replace(/\n{3,}/g, '\n\n');
  const out = route === '/' ? 'index.md' : `${route.slice(1)}.md`;
  writeFileSync(join(DIST, out), md);
  pages.push({ route, url, md, lang: route === '/' || route.startsWith('/nl') ? 'nl' : 'en' });
}

// llms-full.txt: everything, Dutch then English, the core pages first.
const CORE = ['/', '/nl/startsprint', '/nl/wat-we-bouwen', '/nl/nieuwe-ai-toepassing', '/nl/software-vervangen', '/nl/eigen-beheer', '/nl/hoe-we-werken', '/nl/business-case', '/nl/compliance', '/nl/training', '/nl/over-ons', '/nl/over-ons/team', '/nl/cases',
  '/en', '/en/start-sprint', '/en/what-we-build', '/en/new-ai-tool', '/en/replace-software', '/en/self-hosted', '/en/how-we-work', '/en/business-case', '/en/compliance', '/en/training', '/en/about', '/en/about/team', '/en/cases'];
const rank = (p) => (CORE.includes(p.route) ? CORE.indexOf(p.route) : 100 + (p.lang === 'nl' ? 0 : 1000));
pages.sort((a, b) => rank(a) - rank(b) || a.route.localeCompare(b.route));
const head = `# AI Heroes: all pages as Markdown\n\nAI Heroes B.V. (Groningen) builds AI tools teams use every day. This file holds the full text of every public page on https://aiheroes.io, Dutch first, then English. Each page is also available on its own: add .md to its URL (the homepage is /index.md). Index: https://aiheroes.io/llms.txt\n`;
writeFileSync(join(DIST, 'llms-full.txt'), [head, ...pages.map((p) => `\n---\n\n${p.md}`)].join('\n'));
console.log(`build-markdown: ${pages.length} pages as .md, llms-full.txt ${Math.round(Buffer.byteLength(pages.map((p) => p.md).join('')) / 1024)} KB`);
