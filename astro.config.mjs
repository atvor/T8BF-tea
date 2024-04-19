import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://tea.T8BF.com",
    image: {
        service: squooshImageService(),
    },
    integrations: [tailwind(), mdx(), sitemap()],
});
