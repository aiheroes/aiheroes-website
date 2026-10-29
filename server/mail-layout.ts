// Mail in the AI Heroes house style. Mail clients ignore most CSS, so this is the old-fashioned
// way: tables, inline styles, no web fonts (Inter where installed, else the system sans), no
// images (often blocked), light only. The four brand colours from DESIGN.md; the coloured square
// before the label follows the accent semantics (blue consulting/explaining, red people, dark
// software). Every mail also gets a plain-text version.

import { escapeHtml } from './mail.js';

const FONT = "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";
const C = {
  dark: '#1C1917',
  body: '#292524',
  muted: '#78716C',
  line: '#E7E5E4',
  panel: '#F5F5F4',
  page: '#FDFCF8',
  blue: '#2563EB',
  red: '#D9534F',
};
export type Accent = 'blue' | 'red' | 'dark';

const esc = (s: string) => escapeHtml(s).replace(/\r?\n/g, '<br>');
const accentColor = (a: Accent) => (a === 'blue' ? C.blue : a === 'red' ? C.red : C.dark);

function page(title: string, preheader: string, inner: string, footer: string): string {
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><title>${escapeHtml(title)}</title><style>@media (max-width:480px){.px{padding-left:20px!important;padding-right:20px!important}.lbl{width:96px!important}}</style></head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page};"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#FFFFFF;border:1px solid ${C.line};border-radius:2px;">
${inner}
</table>
<p style="margin:16px 0 0;font-family:${FONT};font-size:12px;line-height:1.5;color:${C.muted};">${footer}</p>
</td></tr></table>
</body></html>`;
}

const row = (html: string, pad = '0 32px 24px') => `<tr><td class="px" style="padding:${pad};font-family:${FONT};">${html}</td></tr>`;
const label = (text: string) =>
  `<p style="margin:0 0 8px;font-family:${FONT};font-size:11px;line-height:1.4;letter-spacing:0.14em;text-transform:uppercase;font-weight:600;color:${C.muted};">${escapeHtml(text)}</p>`;
const textBox = (text: string, bg = C.panel) =>
  `<div style="background:${bg};border:1px solid ${C.line};border-radius:2px;padding:14px 16px;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.body};">${esc(text)}</div>`;
const button = (href: string, text: string) =>
  `<a href="${escapeHtml(href)}" style="display:inline-block;background:${C.dark};color:#FFFFFF;font-family:${FONT};font-size:14px;font-weight:600;line-height:1;padding:13px 20px;border-radius:4px;text-decoration:none;">${escapeHtml(text)}</a>`;

// --- Meldingen aan het team ------------------------------------------------------

export interface Fact {
  label: string;
  value: string;
  href?: string;
}

export interface TeamMail {
  /** Label above the title, e.g. "Contactformulier". */
  kind: string;
  accent: Accent;
  title: string;
  subtitle?: string;
  facts: Fact[];
  blocks?: { label: string; text: string }[];
  transcript?: { role: 'user' | 'assistant'; text: string }[];
  /** "Beantwoorden" button; the mail's reply-to points at the same person. */
  reply?: { email: string; subject: string };
  /** Small grey lines under the card. */
  notes?: string[];
}

export function teamMail(m: TeamMail): { html: string; text: string } {
  const facts = m.facts.filter((f) => f.value);
  const factRows = facts
    .map(
      (f) => `<tr>
<td class="lbl" valign="top" style="padding:7px 16px 7px 0;width:128px;font-family:${FONT};font-size:13px;line-height:1.5;color:${C.muted};">${escapeHtml(f.label)}</td>
<td valign="top" style="padding:7px 0;font-family:${FONT};font-size:15px;line-height:1.5;color:${C.dark};">${
        f.href ? `<a href="${escapeHtml(f.href)}" style="color:${C.blue};text-decoration:none;">${escapeHtml(f.value)}</a>` : esc(f.value)
      }</td></tr>`,
    )
    .join('');
  const header = `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td style="width:10px;height:10px;background:${accentColor(m.accent)};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding-left:10px;font-family:${FONT};font-size:11px;line-height:1;letter-spacing:0.14em;text-transform:uppercase;font-weight:600;color:${C.muted};">${escapeHtml(m.kind)}</td>
</tr></table>
<h1 style="margin:16px 0 0;font-family:${FONT};font-size:22px;line-height:1.3;font-weight:700;color:${C.dark};">${escapeHtml(m.title)}</h1>
${m.subtitle ? `<p style="margin:4px 0 0;font-family:${FONT};font-size:15px;line-height:1.5;color:${C.muted};">${escapeHtml(m.subtitle)}</p>` : ''}`;
  const transcript = m.transcript?.length
    ? label('Gesprek') +
      m.transcript
        .map(
          (t) =>
            `<p style="margin:12px 0 4px;font-family:${FONT};font-size:12px;line-height:1.4;font-weight:600;color:${t.role === 'user' ? C.dark : C.muted};">${t.role === 'user' ? 'Bezoeker' : 'Assistent'}</p>${textBox(t.text, t.role === 'user' ? C.panel : '#FFFFFF')}`,
        )
        .join('')
    : '';
  const inner = [
    row(header, '28px 32px 20px'),
    facts.length ? row(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};">${factRows}</table>`) : '',
    ...(m.blocks ?? []).filter((b) => b.text.trim()).map((b) => row(label(b.label) + textBox(b.text))),
    transcript ? row(transcript) : '',
    m.reply ? row(button(`mailto:${m.reply.email}?subject=${encodeURIComponent(m.reply.subject)}`, 'Beantwoorden'), '4px 32px 32px') : '',
  ].join('\n');
  const notes = (m.notes ?? []).map(escapeHtml).join('<br>');
  const preheader = [m.subtitle, m.blocks?.find((b) => b.text.trim())?.text.split('\n')[0]].filter(Boolean).join(' · ').slice(0, 140);

  const text = [
    m.kind.toUpperCase(),
    m.title + (m.subtitle ? ` · ${m.subtitle}` : ''),
    '',
    ...facts.map((f) => `${f.label}: ${f.value}`),
    ...(m.blocks ?? []).filter((b) => b.text.trim()).flatMap((b) => ['', `${b.label}:`, b.text]),
    ...(m.transcript?.length ? ['', 'Gesprek:', ...m.transcript.map((t) => `${t.role === 'user' ? 'Bezoeker' : 'Assistent'}: ${t.text}`)] : []),
    ...(m.notes?.length ? ['', ...m.notes] : []),
  ].join('\n');
  return { html: page(`${m.kind}: ${m.title}`, preheader, inner, notes), text };
}

// --- Brief aan een bezoeker ------------------------------------------------------

export interface Letter {
  greeting: string;
  paragraphs: string[];
  links?: { label: string; url: string }[];
  closing?: string[];
  signature: string[];
}

export function letterMail(l: Letter): { html: string; text: string } {
  const p = (t: string) => `<p style="margin:0 0 16px;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.body};">${esc(t)}</p>`;
  const links = l.links?.length
    ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 20px;"><tr>${l.links
        .map((k, i) => `<td style="padding:0 ${i < l.links!.length - 1 ? '8px' : '0'} 0 0;">${button(k.url, k.label)}</td>`)
        .join('')}</tr></table>`
    : '';
  const inner = row(
    [
      p(l.greeting),
      ...l.paragraphs.map(p),
      links,
      ...(l.closing ?? []).map(p),
      `<p style="margin:8px 0 0;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.dark};">${l.signature.map((s, i) => (i === 0 ? `<strong>${escapeHtml(s)}</strong>` : escapeHtml(s))).join('<br>')}</p>`,
    ].join('\n'),
    '32px 32px 32px',
  );
  const text = [l.greeting, '', ...l.paragraphs.flatMap((t) => [t, '']), ...(l.links ?? []).map((k) => `${k.label}: ${k.url}`), ...(l.links?.length ? [''] : []), ...(l.closing ?? []).flatMap((t) => [t, '']), ...l.signature].join('\n');
  return { html: page(l.paragraphs[0] ?? l.greeting, l.paragraphs[0] ?? '', inner, 'AI Heroes · Aarhusweg 4-16, 9723 JJ Groningen · aiheroes.io'), text };
}

// --- Kleine hulpjes -------------------------------------------------------------

/** Path of the page the form was sent from (the Referer), for the mail and the hub. */
export function pageOf(request: Request): string | null {
  try {
    return new URL(request.headers.get('referer') ?? '').pathname;
  } catch {
    return null;
  }
}

const EN = new Set(['the', 'and', 'you', 'is', 'are', 'what', 'how', 'can', 'my', 'for', 'with', 'i', 'do', 'your', 'have']);
const NL = new Set(['de', 'het', 'een', 'en', 'je', 'is', 'wat', 'hoe', 'kan', 'mijn', 'voor', 'met', 'ik', 'jullie', 'heb', 'niet']);

/** Rough language guess for the reply subject: more English than Dutch function words. */
export function looksEnglish(text: string): boolean {
  let en = 0;
  let nl = 0;
  for (const w of text.toLowerCase().match(/[a-z]+/g) ?? []) {
    if (EN.has(w)) en++;
    if (NL.has(w)) nl++;
  }
  return en > nl;
}
