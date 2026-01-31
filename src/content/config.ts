import { z, defineCollection } from "astro:content";

// For your Research, Papers, or Coding projects
export const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(), // This maps to 'img' in your card
    url: z.string().optional(),       // This maps to 'url' in your card
    badge: z.string().optional(),
    draft: z.boolean().optional(),
});

// For CV entries (Education, TA positions, Internships)

export type ProjectSchema = z.infer<typeof projectSchema>;

export const collections = {
    'projects': defineCollection({ schema: projectSchema }),
};