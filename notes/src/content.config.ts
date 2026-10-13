import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/** Essays: one Markdown file per essay in src/content/essays/. */
const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    number: z.string(), // "012" — shown as № 012
    title: z.string(),
    dek: z.string(), // one-sentence summary under the title
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    minutes: z.number(),
    subject: z.string(), // groups the essay on the index page
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'settled', 'evolving']).default('settled'),
    draft: z.boolean().default(false), // drafts are hidden from every list
    // What sits above the text: a companion video, a cover image, or nothing.
    media: z.enum(['video', 'image', 'none']).default('none'),
    video: z
      .object({
        src: z.string().optional(), // path/URL to an .mp4 (chapters sync with it)
        poster: z.string().optional(),
        duration: z.string(), // "18:40"
        chapters: z.array(
          z.object({
            title: z.string(),
            at: z.string(), // "03:48"
            anchor: z.string(), // id of the matching ## heading
          }),
        ),
      })
      .optional(),
    cover: z.object({ src: z.string().optional(), alt: z.string().default(''), caption: z.string() }).optional(),
    learn: z.array(z.object({ anchor: z.string(), text: z.string() })).optional(), // "In this essay, you'll learn"
  }),
});

/** Papers: one Markdown file per paper. Write notes in the body; leave it empty for list-only entries. */
const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string(),
    topic: z.string(),
    idea: z.string(), // one line: what the paper is about
    citation: z.string().optional(),
    read: z.coerce.date().optional(),
    minutes: z.number().optional(),
    summary: z.string().optional(), // "The paper in one paragraph"
    takeaway: z.string().optional(),
    terms: z.array(z.object({ term: z.string(), meaning: z.string() })).default([]),
    next: z.array(z.string()).default([]), // slugs of papers to read next
    essay: z.string().optional(), // slug of an essay that builds on it
  }),
});

/** Books: one JSON array in src/data/books.json. */
const books = defineCollection({
  loader: file('./src/data/books.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    shelf: z.enum(['SYS', 'LNG', 'IDE', 'NXT']),
    status: z.enum(['reading', 'finished', 'abandoned', 'wishlist']),
    onHome: z.boolean().default(false),
    progress: z.string().optional(), // e.g. "ch. 5 of 12" — shown for the book you're reading
    verdict: z.string().optional(),
  }),
});

export const collections = { essays, papers, books };
