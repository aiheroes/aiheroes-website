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
  }),
});

export const collections = { articles };
