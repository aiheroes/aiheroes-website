// Helpers for the house-style experiment (/nl/experiment/huisstijl).

/**
 * The icon set: IconPark (ByteDance, Apache 2.0, iconpark.oceanengine.com), Outline theme. Paths
 * from its source SVGs on the 48 grid; paint, stroke 4, square ends and mitred joins come from CSS
 * (.hs-icon). Each path draws itself (pathLength=1).
 */
export const ICONS = {
  'arrow-right': ['M41.9999 24H5.99994', 'M30 12L42 24L30 36'],
  'arrow-up-right': ['M19 11H37V29', 'M11.5439 36.4559L36.9997 11'],
  pause: ['M16 12V36', 'M32 12V36'],
  play: ['M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z'],
  menu: ['M7.94971 11.9497H39.9497', 'M7.94971 23.9497H39.9497', 'M7.94971 35.9497H39.9497'],
  close: ['M8 8L40 40', 'M8 40L40 8'],
  'chart-line': ['M6 6V42H42', 'M14 34L22 18L32 27L42 6'],
  protect: ['M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z', 'M15 23L22 30L34 18'],
  peoples: ['M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z', 'M32.6077 7C34.6405 8.2249 36.0001 10.4537 36.0001 13C36.0001 15.5463 34.6405 17.7751 32.6077 19', 'M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z', 'M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721'],
  switch: ['M42 19H5.99998', 'M30 7L42 19', 'M6.79897 29H42.799', 'M6.79895 29L18.799 41'],
} as const;

export type IconName = keyof typeof ICONS;

/** The four items of "Bij elke bouw inbegrepen", in copy order. */
export const STANDARD_ICONS: IconName[] = ['chart-line', 'protect', 'peoples', 'switch'];

/**
 * Headlines in constants.ts mark two words (<red>, <blue>). The house style allows one punch
 * per headline: keep the chosen tag as a no-wrap punch span, drop the other tag's markup.
 */
export function punch(src: string, keep: 'red' | 'blue'): string {
  const drop = keep === 'red' ? 'blue' : 'red';
  return src
    .replace(new RegExp(`<${drop}>(.*?)</${drop}>`, 'g'), '$1')
    .replace(new RegExp(`<${keep}>(.*?)</${keep}>`, 'g'), '<span class="punch">$1</span>');
}

export function plain(src: string): string {
  return src.replace(/<\/?(red|blue)>/g, '');
}

/* ---------- Dutch line breaking ----------
   A typesetter never ends a line on an article, preposition, conjunction or possessive, never
   splits a number from its unit, never strands the first word of a sentence at a line end and
   never leaves a single word alone on the last line. zet() encodes that with non-breaking
   spaces; the browser then only breaks where a typesetter would. A cap per glued group keeps
   lines from overflowing narrow columns. */

const NBSP = String.fromCharCode(160);

/** Words that belong to the word after them. */
const FORWARD = new Set([
  'de', 'het', 'een', "'t", 'en', 'of', 'maar', 'dat', 'die', 'wat', 'hoe', 'als', 'om', 'te', 'tot',
  'van', 'voor', 'in', 'op', 'aan', 'bij', 'met', 'naar', 'uit', 'door', 'over', 'vanaf', 'binnen',
  'zonder', 'onder', 'tussen', 'je', 'jouw', 'ons', 'onze', 'hun', 'uw', 'elke', 'iedere', 'geen', 'zo', 'er',
  'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'heel', 'én',
]);

/** Articles and possessives bind hardest: a line never ends on "de", "een" or "je". */
const DETERMINERS = new Set(['de', 'het', 'een', "'t", 'je', 'jouw', 'ons', 'onze', 'hun', 'uw', 'elke', 'iedere']);

/** Display headings a typesetter sets by hand: " | " marks the only allowed breaks. */
const HAND_SET: Record<string, string> = {
  'Vertel wat je wilt bouwen': 'Vertel wat je | wilt bouwen',
  'Vervangen wat niet meer voldoet': 'Vervangen | wat niet meer voldoet',
};

/** Fixed combinations that never break. */
const PHRASES = new Set([
  'ai act', 'ai heroes', 'ai fabriek', 'elke dag', 'business case', 'werkend prototype',
  'menselijk toezicht', 'technische bedrijfskunde', 'technische realisatie', 'miljoen euro', 'eigen grond',
  'eigen servers', 'europese partij', 'europese hosting', 'amerikaanse cloud', 'kortere wachttijden',
  'hands-on workshop', 'theorie én',
]);

const strip = (t: string) => t.replace(/<\/?(red|blue)>/g, '').replace(/^[^\p{L}\d€']+|[^\p{L}\d%]+$/gu, '').toLowerCase();
const endsClause = (t: string) => /[,;:·]$/.test(t.replace(/<\/?(red|blue)>/g, ''));
const endsSentence = (t: string) => /[.!?]$/.test(t.replace(/<\/?(red|blue)>/g, ''));
const isNumber = (t: string) => /^[€]?\d[\d.,\-‑]*%?$/.test(strip(t));
const visibleLength = (t: string) => t.replace(/<\/?(red|blue)>/g, '').length;

/**
 * Insert non-breaking spaces where a Dutch typesetter would not allow a line break.
 * Every gap gets a strength:
 *   +10 inside a hand-set unit (write " | " in the source to mark the only allowed breaks;
 *       inside a unit the rules below still decide where it opens if it must)
 *   6  fixed phrase, or a number with its neighbour
 *   5  an article or possessive bound to the next word ("de tekentafel", "een team")
 *   4  another function word bound to the next word ("vanaf", "met", "en"...)
 *   3  the tail of a sentence, clause or text (no lone last word)
 *   2  a short verb, pronoun or adverb leaning on the word before it
 *   1  the first word of a sentence or clause
 * A glued group longer than `cap` characters is too wide for its column, so its weakest gap
 * opens first, nearest the middle. `display` is for headings; `cap` overrides per context.
 */
export function zet(text: string, { display = false, cap }: { display?: boolean; cap?: number } = {}): string {
  const source = HAND_SET[text.trim()] ?? text;
  const units = source.trim().split(/\s+\|\s+/);
  const tokens: string[] = [];
  const unitOf: number[] = [];
  const NBHY = String.fromCharCode(0x2011);
  const hyphens = (t: string) => {
    let out = t.replace(/(^|[^\p{L}])(\p{Lu}{2,})-(?=\p{L})/gu, `$1$2${NBHY}`);
    if (visibleLength(out) <= 14) out = out.replace(/([\p{L}\d])-([\p{L}\d])/gu, `$1${NBHY}$2`);
    return out;
  };
  units.forEach((u, ui) => u.split(/\s+/).forEach((t) => { tokens.push(hyphens(t)); unitOf.push(ui); }));
  if (tokens.length < 2) return tokens.join(' ');
  const handSet = units.length > 1;
  const maxRun = cap ?? (display ? 18 : 26);
  const widowMax = display ? 16 : 24;
  const len = tokens.map(visibleLength);
  const last = tokens.length - 1;
  const strength: number[] = [];
  for (let i = 0; i < last; i++) {
    const a = tokens[i];
    const b = tokens[i + 1];
    const wa = strip(a);
    const wb = strip(b);
    let s = 0;
    if (!endsClause(a) && !endsSentence(a)) {
      const sentenceEnd = endsSentence(b) || i + 1 === last;
      const tail3 = (i + 2 <= last) && (endsSentence(tokens[i + 2]) || i + 2 === last)
        && len[i] + len[i + 1] + len[i + 2] + 2 <= 18 && !endsClause(b) && !endsSentence(b);
      if (PHRASES.has(`${wa} ${wb}`) || isNumber(a) || isNumber(b)) s = 6;
      else if (DETERMINERS.has(wa)) s = 5;
      else if (FORWARD.has(wa)) s = 4;
      else if (i + 1 === last && wa.length + wb.length + 1 <= widowMax) s = 3;
      else if (sentenceEnd && wa.length + wb.length + 1 <= 12) s = 3;
      // the last two words before a comma stay together: "gaat gebruiken,", "daar middenin,"
      else if (endsClause(b) && wa.length + wb.length + 1 <= 15) s = 3;
      else if ((endsClause(b) || endsSentence(b)) && wb.length <= 3) s = 3;
      else if (tail3) s = 3;
      // a short verb, pronoun or adverb leans on the word before it: "beter kan", "bouwen we",
      // and "je" after a verb: "voldoe je", "weet je"
      else if (wb.length <= 3 && (!FORWARD.has(wb) || wb === 'je') && !isNumber(b)) s = 2;
      // the first word of a sentence or of a clause after a comma stays with the next word
      else if ((i === 0 || endsSentence(tokens[i - 1]) || endsClause(tokens[i - 1])) && wa.length <= 12) s = 1;
      // a three-word tail glues both of its gaps
      if (s < 3 && i >= 1 && strength[i - 1] !== undefined) {
        const t0 = i - 1;
        if ((endsSentence(b) || i + 1 === last) && !endsClause(tokens[t0]) && !endsSentence(tokens[t0])
          && len[t0] + len[i] + len[i + 1] + 2 <= 18) s = 3;
      }
    }
    if (handSet) s = unitOf[i] === unitOf[i + 1] ? 10 + s : 0;
    strength.push(s);
  }
  // In running text a short sentence (up to the cap) never breaks: "Alles komt met documentatie."
  if (!display && !handSet) {
    let start = 0;
    for (let i = 0; i <= last; i++) {
      if (!endsSentence(tokens[i]) && i !== last) continue;
      let width = 0;
      for (let k = start; k <= i; k++) width += len[k] + (k > start ? 1 : 0);
      if (i > start && width <= maxRun) for (let g = start; g < i; g++) if (!endsClause(tokens[g])) strength[g] = Math.max(strength[g], 3);
      start = i + 1;
    }
  }
  const glued = strength.map((v) => v > 0);
  // Open the weakest gap of any group that is too long, until every group fits.
  for (let guard = 0; guard < tokens.length; guard++) {
    let opened = false;
    let start = 0;
    for (let i = 0; i <= glued.length; i++) {
      if (i < glued.length && glued[i]) continue;
      let width = 0;
      for (let k = start; k <= i; k++) width += len[k] + (k > start ? 1 : 0);
      if (i > start && width > maxRun) {
        let best = -1;
        let bestScore = Infinity;
        let offset = 0;
        for (let g = start; g < i; g++) {
          offset += len[g] + (g > start ? 1 : 0);
          const score = strength[g] * 10 + Math.abs(offset / width - 0.5);
          if (score < bestScore) { bestScore = score; best = g; }
        }
        glued[best] = false;
        opened = true;
        break;
      }
      start = i + 1;
    }
    if (!opened) break;
  }
  return tokens.reduce((out, t, i) => (i === 0 ? t : out + (glued[i - 1] ? NBSP : ' ') + t), '');
}

/** Inlined brand SVGs share gradient ids; make them unique per instance. */
let n = 0;
export function uniqueSvg(svg: string): string {
  const p = `hs${++n}`;
  return svg.replace(/aih-(gRight|gBottom|iRight|iBottom)/g, `${p}-$1`);
}
