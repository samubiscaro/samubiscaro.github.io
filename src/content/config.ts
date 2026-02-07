import { z, defineCollection } from "astro:content";

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

// 2. Export the collections object (Astro looks for this specifically)
export const collections = {
    'projects': projects,
};

// 3. Export the schema and types for your other components
export const projectSchema = projects.schema;
export type ProjectSchema = z.infer<ReturnType<typeof projects.schema>>;