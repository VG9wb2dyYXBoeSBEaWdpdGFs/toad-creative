<script setup>
import AOS from "aos";
import FOG from "vanta/dist/vanta.fog.min";

const route = useRoute();
const vanta = ref(null);

onMounted(() => {
  // Init animate on scroll (AOS)
  AOS.init();

  // Init background animation
  vanta.value = FOG({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x171717,
    midtoneColor: 0x334a26,
    lowlightColor: 0x171717,
    baseColor: 0x171717,
    blurFactor: 1,
    speed: 4.0,
  });

  //  Disable right clicking on <img>
  document.addEventListener(
    "contextmenu",
    function (e) {
      if (e.target.nodeName === "IMG") {
        e.preventDefault();
      }
    },
    false,
  );
});

onUnmounted(() => {
  document.removeEventListener("contextmenu");
});

useHead({
  title: "Toad Creative · Photography",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.png",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "We help businesses of all kinds and sizes transition into the modern era of Web, Mobile, Desktop & Cloud applications painlessly.",
    },
    {
      property: "og:url",
      content: `https://toad-creative.com`,
    },
    { name: "og:title", content: `Toad Creative · Photography` },
    {
      name: "og:description",
      content: "Professional photography in College Station, TX",
    },
    { name: "og:image", content: "/opengraph.webp" },
    {
      name: "twitter:card",
      content: "summary",
    },
    { name: "twitter:title", content: `Toad Creative · Photography` },
    {
      name: "twitter:description",
      content: "Professional photography in College Station, TX",
    },
    {
      name: "twitter:image",
      content: "/opengraph.webp",
    },
  ],
});
</script>

<template>
  <div>
    <!-- Div used to display the background animation using Three.JS -->
    <div id="vanta" class="fixed top-0 bottom-0 right-0 left-0" />

    <!-- Div used to blur the animation behind it -->
    <div class="z-10 backdrop-filter backdrop-blur-3xl bg-neutral-800/80">
      <t-nav />
      <main class="min-h-[calc(100vh-88px)]">
        <slot />
      </main>
      <t-footer />
    </div>
  </div>
</template>
