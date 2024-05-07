import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";
import purgecss from "astro-purgecss";

export default defineConfig({
  site: "https://nehru-web-demo.pages.dev",
  integrations: [preact(), pagefind(), sitemap(), robotsTxt(), playformCompress(), purgecss()]
});