import { z, defineCollection } from "astro:content";
import type { CollectionEntry } from 'astro:content'; //

// 1. Define the collection directly using the functional schema
const projects = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: image().optional(), // This now has the correct context
        imageCredit: z.string().optional(),
        url: z.string().optional(),
        badge: z.string().optional(),
        draft: z.boolean().optional(),
    }),
});

// 2. Export the collections object
export const collections = {
    'projects': projects,
};

// 3. Export the Type for use in other components
export type ProjectSchema = CollectionEntry<'projects'>['data']; //