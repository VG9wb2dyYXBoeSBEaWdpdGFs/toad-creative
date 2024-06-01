<script setup lang="ts">
const route = useRoute();

useHead({
  title: () => `Toad Creative · ${route.meta.title}`,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: "#000000" },
  ],
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    { rel: "preconnect", href: "https://unpkg.com" },
    {
      rel: "preload",
      href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
      as: "style",
      onload: "this.onload=null;this.rel='stylesheet'",
    },

    {
      rel: "stylesheet",
      href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
      media: "print",
      onload: "this.media='all'",
    },
    { rel: "apple-touch-icon", href: "/apple-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
    },
  ],
});

const title = () => `Toad Creative · ${route.name}`;
const description =
  "Explore the realm of AI-powered art generation and photography as we unveil a mesmerizing fusion of creativity and digital precision.";
const defaultImage = "/opengraph.webp";

useSeoMeta({
  title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: "toad-creative.com",
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
