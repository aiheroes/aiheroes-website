import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog / resource articles. Authored as Markdown/MDX in src/content/articles/.
// One file per language. Hreflang pairs are derived from the slug map in src/data/i18n.ts;
// the optional `alternateSlug` frontmatter is informational only.
const articles = defineCollection({
  // The glob loader would otherwise use the frontmatter `slug` as the entry id, so an
  // NL/EN pair sharing a slug (eu-ai-act-compliance) collapsed into one entry and the
  // English page was never built. Derive the id from the file path instead.
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['nl', 'en']),
    slug: z.string(),
    alternateSlug: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    seoTitle: z.string().optional(),
    description: z.string(),
    accentColor: z.enum(['red', 'blue']).default('blue'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('AI Heroes'),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    // Optional FAQ; rendered visibly below the article and emitted as FAQPage JSON-LD.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

// Case studies. Slugs are identical across languages (medux, olx, …) so files live
// in nl/ and en/ subfolders; hreflang is derived from the path (cases is language-neutral).
const cases = defineCollection({
  // Slugs repeat across languages (nl/olx, en/olx), so derive a unique id from the
  // full relative path including the lang subfolder — the default basename id collides.
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/cases',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['nl', 'en']),
    slug: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    seoTitle: z.string().optional(),
    description: z.string(),
    accentColor: z.enum(['red', 'blue']).default('red'),
    // Which of the three entries the case proves; shown as the card eyebrow and hero badge.
    entry: z.enum(['nieuw', 'vervangen', 'eigen-beheer']).default('nieuw'),
    // Work by the current team (since the end of 2025) or by the earlier AI Heroes.
    era: z.enum(['huidig', 'eerder']).default('huidig'),
    client: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// ---------- Relaunch collections (docs/relaunch/02-bouwplan.md §4.3) ----------
// New names so the legacy collections keep building until the launch removes them.

const FOUNDER = z.enum(['frans-hoorn', 'david-homan', 'jan-brusse']);
const ENTRY = z.enum(['nieuw', 'vervangen', 'eigen-beheer']);
const FAQ = z.array(z.object({ q: z.string(), a: z.string() })).default([]);
const byPath = ({ entry }: { entry: string }) => entry.replace(/\.(md|mdx)$/, '');

// Cases in one template (docs/relaunch/pages/C0-case-mal.md). The MDX body is the longer story.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies', generateId: byPath }),
  schema: z.object({
    lang: z.enum(['nl', 'en']),
    slug: z.string(),
    client: z.string(),
    /** Name-free description, used where `anonymous` says so (Medux on the homepage). */
    anonymousLabel: z.string().optional(),
    anonymous: z.object({ home: z.boolean().default(false), overview: z.boolean().default(false), page: z.boolean().default(false) }).default({ home: false, overview: false, page: false }),
    sector: z.enum(['zorg', 'e-commerce', 'mkb-administratie', 'energie-en-investeren', 'publieke-sector', 'sport', 'software', 'overig']),
    /** Can be more than one: IC Commerce replaced WooCommerce and got new pipelines. */
    entry: z.array(ENTRY).min(1),
    /** Work by the current team (since the end of 2025): order and the "inbegrepen" block, never shown as a label. */
    currentTeam: z.boolean(),
    /** Landing slugs that show this case as proof. */
    landings: z.array(z.string()).default([]),
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    /** Heading in the house style; " | " marks hand-set breaks. */
    headline: z.string(),
    lede: z.string(),
    stats: z.array(z.object({ value: z.number(), decimals: z.number().default(0), suffix: z.string().default(''), label: z.string() })).default([]),
    question: z.string().optional(),
    built: z.array(z.string()).default([]),
    timeline: z.array(z.object({ step: z.string(), text: z.string() })).default([]),
    standard: z.array(z.enum(['business-case', 'compliance', 'training', 'vendor'])).default([]),
    quote: z.object({ text: z.string(), author: z.string(), role: z.string().optional(), approved: z.boolean().default(false) }).optional(),
    photo: z.object({ src: z.string(), alt: z.string(), w: z.number(), h: z.number(), pos: z.string().optional(), standIn: z.boolean().default(true), shot: z.boolean().default(false), duo: z.boolean().default(true) }).optional(),
    liveUrl: z.string().url().optional(),
    year: z.number().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// SEO landings (docs/relaunch/pages/L00-landing-template.md): one question of a buyer, fixed blocks.
const landings = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/landings', generateId: byPath }),
  schema: z.object({
    lang: z.enum(['nl', 'en']),
    slug: z.string(),
    /** Plan id, e.g. "L01" or "T1". */
    plan: z.string(),
    group: z.enum(['kern', 'training']),
    /** Entry colour and pillar; "plaats" and "alle" for L14–L16. */
    entry: z.enum(['nieuw', 'vervangen', 'eigen-beheer', 'alle', 'plaats', 'training']),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    /** The buyer's question as the H1, one *punch* word. */
    question: z.string(),
    lede: z.string(),
    author: FOUNDER,
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    /** "Wat we bouwen": 3–5 things the system does. */
    build: z.object({ title: z.string(), intro: z.string().optional(), items: z.array(z.object({ title: z.string(), text: z.string(), icon: z.string().optional() })) }),
    /** What the start sprint yields for this question. */
    sprint: z.object({ title: z.string().optional(), text: z.string(), outcome: z.string() }),
    /** Case slugs (case-studies) shown as proof; empty means the way of working is the proof. */
    cases: z.array(z.string()).default([]),
    proofText: z.string().optional(),
    standardExtra: z.string().optional(),
    forWhom: z.object({ yes: z.array(z.string()), no: z.array(z.string()) }).optional(),
    compare: z.object({ title: z.string(), head: z.array(z.string()), rows: z.array(z.array(z.string())) }).optional(),
    pills: z.object({ title: z.string(), items: z.array(z.string()) }).optional(),
    related: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    faq: FAQ,
    /** Training landings use the training chip on the form. */
    training: z.boolean().default(false),
    photo: z.object({ src: z.string(), alt: z.string(), w: z.number(), h: z.number(), pos: z.string().optional(), duo: z.enum(['red', 'blue']).optional() }).optional(),
    draft: z.boolean().default(false),
  }),
});

// Knowledge articles, listicles and guides (docs/relaunch/pages/B0-blog-template.md).
const kennis = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kennis', generateId: byPath }),
  schema: z.object({
    lang: z.enum(['nl', 'en']),
    slug: z.string(),
    plan: z.string(),
    kind: z.enum(['artikel', 'listicle', 'gids']),
    group: z.enum(['compliance', 'kern', 'training', 'overig']),
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    /** The answer in two or three sentences, at the top (GEO). */
    answer: z.string(),
    author: FOUNDER,
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    /** The pillar this article leads to (soft CTA). */
    pillar: z.object({ label: z.string(), href: z.string(), text: z.string() }),
    related: z.array(z.string()).default([]),
    faq: FAQ,
    /** Listicles: the ranked or grouped items, for ItemList JSON-LD. */
    items: z.array(z.object({ name: z.string(), url: z.string().optional() })).default([]),
    /** K3: the template download form. */
    download: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, cases, caseStudies, landings, kennis };
