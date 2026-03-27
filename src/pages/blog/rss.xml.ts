import type { APIContext } from 'astro';
import { getCollection } from "astro:content";
import { openGraph } from "../../config.ts";
import rss from "@astrojs/rss";

export async function GET(context: APIContext) {
	const posts = await getCollection("posts");
	return await rss({
		title: openGraph.blog.title,
		description: openGraph.blog.description ?? openGraph.blog.title,
		site: import.meta.env.DEV ? "http://127.0.0.1:4321" : context.site!,
		customData: `<language>en-us</language>`,
		items: posts.map(post => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.writtenAt,
			categories: post.data.tags,
			link: `/blog/${post.id}/`,
		})),
	});
}