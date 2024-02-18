<script setup>
const details = [
  {
    title: "Email",
    href: "mailto:toad@toad-creative.com",
    info: "toad@toad-creative.com",
  },
  {
    title: "Call or Text",
    href: "tel:8176023570",
    info: "(817)-602-3570",
  },
  {
    title: "Hours",
    href: "",
    info: "Monday - Friday • 9am - 5pm",
  },
];
</script>

<template>
  <!-- TODO: Fix this needing to be set to calculated height.
    A more correct and cleaner solution is possible. -->
  <div
    class="h-[calc(100vh-88px)] grid place-items-start sm:place-items-center"
  >
    <u-container class="w-full">
      <h1
        data-aos="fade-right"
        data-aos-duration="700"
        class="mb-14 leading-[50px] md:!leading-[80px] text-5xl text-neutral-200 md:text-7xl font-bold md:font-medium mt-16 md:mt-0"
      >
        Get in touch.
      </h1>

      <!-- TODO: Fix the below HTML so the Days/Hours item.info isn't an <a>.
            It is not a link but right now it's convenient & doesn't cause issues
            other than being slightly confusing to the user if they clicked it for
            some reason and being symantically incorrect. -->

      <!-- Contact info -->
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!-- Contact info item -->
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          v-for="(item, i) in details"
          :key="i"
          class="flex flex-col border-l border-gray-700 p-6"
        >
          <span class="text-xl mb-1 text-neutral-300 font-light opacity-50">{{
            item.title
          }}</span>

          <a
            :href="item.href"
            class="text-xl text-neutral-300 hover:text-primary transition"
            >{{ item.info }}</a
          >
        </div>
      </div>
    </u-container>
  </div>
</template>
