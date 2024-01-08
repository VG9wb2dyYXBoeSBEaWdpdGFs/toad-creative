<script>
// Scroll listener is unused right now but will be used very soon.

//const scrolled = ref(false);
//
//function handleScroll() {
//  scrolled.value = window.scrollY > 0;
//}
//
//onMounted(() => {
//  window.addEventListener("scroll", handleScroll);
//});
//
//onUnmounted(() => {
//  window.removeEventListener("scroll", handleScroll);
//});
</script>

<template>
  <header class="w-full bg-neutral-800/0">
    <!-- Inner container -->
    <u-container>
      <!--Links container: Maybe unneccessary symantically as there are only 2 links,
      one of which being a link back to '/' around the logo-->
      <nav class="flex w-full items-center py-6">
        <!-- Logo -->
        <nuxt-link class="flex items-center" to="/">
          <nuxt-img
            src="/toad-creative-logo.webp"
            class="mr-4 h-10"
            alt="Toad Creative Logo"
          />
          <span class="hidden leading-5 text-gray-300 sm:block"
            >Toad <br />
            Creative</span
          >
        </nuxt-link>

        <!-- Spacer -->
        <div class="flex-grow" />

        <!-- Contact button -->
        <u-button to="/contact"> Get in touch</u-button>
      </nav>
    </u-container>
  </header>
</template>
