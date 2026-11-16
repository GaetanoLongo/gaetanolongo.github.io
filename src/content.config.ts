import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every collection holds one folder per language: en/ and it/.
// An entry's id is "<lang>/<slug>", e.g. "en/dab-single-phase-shift".

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    maturity: z.enum(['seedling', 'growing', 'evergreen']).default('seedling'),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.string(), // e.g. "Web app", "Interactive toy", "Resource"
    url: z.string().url().optional(), // leave out until the link exists
    order: z.number().default(10),
    tags: z.array(z.string()).default([]),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    servings: z.string(), // free text: "2 loaves", "4 people"
    prep: z.string(), // "30 min"
    cook: z.string().optional(),
    tags: z.array(z.string()).default([]),
    ingredients: z.array(z.object({ q: z.string(), i: z.string() })),
  }),
});

// CV, About, Contact: plain Markdown pages.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { notes, projects, recipes, pages };
