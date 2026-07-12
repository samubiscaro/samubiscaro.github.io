// src/content/config.ts
import { defineCollection } from "astro:content";
import type { CollectionEntry } from 'astro:content';
import { glob } from 'astro/loaders'; 
import { z } from 'astro/zod'; // Fixed deprecation: imported from 'astro/zod'

// Projects Collection
const projects = defineCollection({
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

// Lab Collection
const lab = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/lab" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        badge: z.string().default('Idea'),
        // .toLowerCase() allows you to type "Active", "WIP", or "active" in markdown without breaking
        status: z.preprocess(
            (val) => (typeof val === 'string' ? val.toLowerCase() : val),
            z.enum(['active', 'wip', 'idea'])
        ).default('idea'),
        draft: z.boolean().optional().default(false),
    }),
});

// Export ALL collections here
export const collections = {
    'projects': projects,
    'notes': notes,
    'lab': lab, // Registered here
};

// Export the Types
export type ProjectSchema = CollectionEntry<'projects'>['data'];
export type NoteSchema = CollectionEntry<'notes'>['data'];
export type LabSchema = CollectionEntry<'lab'>['data']; // Added Type helper