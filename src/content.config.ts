import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const home = defineCollection({
	loader: glob({ base: "src/content/home", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		order: z.int().optional().default(0),
		title: z.string(),
		icon: z.string(),
	}),
});

const posts = defineCollection({
	loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			writtenAt: z.coerce.date(),
			editedAt: z.coerce.date().optional(),
			image: image(),
			tags: z.array(z.string()),
			unlisted: z.boolean().optional().default(false),
		}),
});

const projects = defineCollection({
	loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			releasedAt: z.coerce.date(),
			writtenAt: z.coerce.date(),
			editedAt: z.coerce.date().optional(),
			image: image(),
			links: z.array(
				z.object({
					text: z.string(),
					icon: z.string(),
					link: z.url(),
				}),
			),
			unlisted: z.boolean().optional().default(false),
		}),
});

export const collections = {
	home,
	posts,
	projects,
};
