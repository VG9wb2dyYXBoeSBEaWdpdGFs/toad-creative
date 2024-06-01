export default defineNuxtConfig({
  site: {
    url: "https://toad-creative.com",
  },
  ui: {
    safelistColors: ["frogger", "neutral", "gray"],
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxthq/studio",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  robots: {
    rules: {
      UserAgent: "*",
      Allow: "/",
    },
  },
});
