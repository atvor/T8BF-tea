import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://tea.T8BF.com",
    image: {
        service: passthroughImageService(),
    },
    integrations: [tailwind(), mdx(), sitemap()],
});
