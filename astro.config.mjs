import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
// import starlight from "@astrojs/starlight";
import pagefind from "astro-pagefind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en", // All urls that don't contain language prefix will be treated as default locale
    locales: [
      "en",
      {
        path: "ml", // no slashes included
        codes: ["ml", "ml-IN"],
      },
    ],
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain language prefix will be treated as default locale
        locales: [
          "en",
          {
            path: "ml", // no slashes included
            codes: ["ml", "ml-IN"],
          },
        ],
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
    pagefind(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
