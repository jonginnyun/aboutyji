import { defineCollection, z } from 'astro:content';

const baseContentSchema = z.object({
  title: z.string(),
  date: z.date(),
  updated: z.date().optional(),
  lang: z.string().default('en'),
  slug: z.string().optional(),
  category: z.string().optional(),
  section: z.string().optional(),
  subsection: z.string().optional(),
  tags: z.array(z.string()).default([]),
  summary: z.string().optional(),
  math: z.boolean().default(false),
  draft: z.boolean().default(false),
  source_note: z.string().optional(),
  translation_of: z.string().optional(),
  canonical_lang: z.string().optional(),
  naver_export: z.boolean().default(false)
});

const notes = defineCollection({ type: 'content', schema: baseContentSchema });
const essays = defineCollection({ type: 'content', schema: baseContentSchema });

const projects = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    role: z.string().optional(),
    image: z.string().optional(),
    period: z.string().optional(),
    legacy_url: z.string().optional(),
    legacy_file: z.string().optional()
  })
});

const publications = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    year: z.number().optional(),
    doi_url: z.string().optional()
  })
});

export const collections = { notes, essays, projects, publications };
