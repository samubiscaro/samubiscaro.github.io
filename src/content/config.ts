import { z, defineCollection } from "astro:content";
import type { CollectionEntry } from 'astro:content';

// Existing Projects Collection
const projects = defineCollection({
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

// NEW: Notes Collection
const notes = defineCollection({
    type: 'content', // This tells Astro to look for .md or .mdx files
    schema: z.object({
        title: z.string(),
        professor: z.string(),
        university: z.string(),
        year: z.string(), // e.g., "2024-2025"
        url: z.string(),  // Your Google Drive link
        badge: z.string().default("IT"),
    }),
});

// 2. Export BOTH collections here
export const collections = {
    'projects': projects,
    'notes': notes, // Add this line
};

// 3. Export the Types
export type ProjectSchema = CollectionEntry<'projects'>['data'];
export type NoteSchema = CollectionEntry<'notes'>['data']; // Added this for consistency