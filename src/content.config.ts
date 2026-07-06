import { z, defineCollection } from "astro:content";
import type { CollectionEntry } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Added the glob loader import

// Projects Collection
const projects = defineCollection({
    // 2. Added loader to find project files
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: image().optional(),
        imageCredit: z.string().optional(),
        url: z.string().optional(),
        badge: z.string().optional(),
        draft: z.boolean().optional(),
    }),
});

// Notes Collection
const notes = defineCollection({
    // 3. Replaced type: 'content' with the glob loader
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/notes" }),
    schema: z.object({
        title: z.string(),
        professor: z.string(),
        university: z.string(),
        year: z.string(),
        url: z.string(),
        badge: z.string().optional(),
        draft: z.boolean().optional(),
    }),
});

// Export BOTH collections here
export const collections = {
    'projects': projects,
    'notes': notes,
};

// Export the Types
export type ProjectSchema = CollectionEntry<'projects'>['data'];
export type NoteSchema = CollectionEntry<'notes'>['data'];