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

const notes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        professor: z.string(),
        university: z.string(),
        year: z.string(),
        url: z.string(),
        badge: z.string().optional(),
        draft: z.boolean().optional(), // <-- Aggiungi questa riga
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