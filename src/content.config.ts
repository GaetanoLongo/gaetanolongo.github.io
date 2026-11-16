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
    // Files hosted on Google Drive, shown as a click-to-load preview with a download button.
    // `id` is the part of the Drive URL after /d/ (file) or /folders/ (folder).
    contentLang: z.enum(['it', 'en']).optional(), // language the note's text and files are written in
    filesSoon: z.boolean().default(false), // show "files not online yet" when there are no documents
    documents: z
      .array(
        z.object({
          title: z.string(),
          id: z.string(),
          type: z.enum(['file', 'folder']).default('file'),
          resourcekey: z.string().optional(), // from the Drive link (?resourcekey=…), needed for older files/folders
          description: z.string().optional(),
        }),
      )
      .default([]),
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
    servings: z.string().optional(), // free text: "2 loaves", "4 people"
    prep: z.string().optional(), // "30 min"
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
