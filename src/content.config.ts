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

export const collections = { articles, cases };
