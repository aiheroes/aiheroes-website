import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog / resource articles. Authored as Markdown/MDX in src/content/articles/.
// One file per language; `alternateSlug` links the NL<->EN pair for hreflang.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
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
    pillarBadge: z.string().optional(),
    client: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, cases };
