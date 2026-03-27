import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { shiki as shikiThemes } from "./src/themes";

// https://astro.build/config
export default defineConfig({
	site: "https://naokoaf.com",
	output: "static",
	integrations: [
		expressiveCode({
			themes: [...Object.values(shikiThemes)],
			emitExternalStylesheet: true,
			tabWidth: 4,
		}),
		mdx(),
		sitemap(),
	],
	adapter: node({
		mode: "standalone",
	}),
});
