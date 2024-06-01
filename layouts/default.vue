<script setup>
import AOS from "aos";

const route = useRoute();

onMounted(() => {
  // Init animate on scroll (AOS)
  AOS.init();

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
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <NuxtLink class="flex items-center" to="/">
        <NuxtImg
          src="/toad-creative-logo.webp"
          class="mr-4 h-11"
          alt="Toad Creative Logo"
        />
        <span class="hidden leading-5 text-gray-900 dark:text-gray-200 sm:block"
          >Toad <br />
          Creative</span
        >
      </NuxtLink>
    </template>

    <template #right>
      <UButton
        icon="i-heroicons-envelope"
        size="lg"
        color="frogger"
        to="/contact"
      >
        Get in touch
      </UButton>
    </template>
  </UHeader>
  <UMain>
    <slot />
  </UMain>
  <TFooter />
</template>
