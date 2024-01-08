<script setup>
const route = useRoute();

//Get all photos from /content/photography
const { data } = await useAsyncData(`content-all-photos`, () =>
  queryContent("/photography").find(),
);
</script>

<template>
  <!-- Heading section -->
  <header
    class="relative mb-12 flex h-[400px] items-center pt-16 sm:h-[700px] sm:pt-0"
  >
    <!-- Inner container -->
    <u-container>
      <!-- Heading text -->
      <h1
        data-aos="fade-right"
        data-aos-duration="700"
        class="leading-[50px] md:!leading-[80px] text-5xl text-neutral-200 md:text-7xl font-bold md:font-medium mt-16 md:mt-0"
      >
        Hi, I'm Todd, a
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-600"
          >professional photographer</span
        >
        in College Station, Texas.
      </h1>

      <!-- Action buttons -->
      <div class="flex py-16 space-x-4">
        <u-button
          trailing-icon="i-heroicons-arrow-long-right"
          size="lg"
          data-aos="fade-right"
          data-aos-duration="900"
          to="/contact"
          >Get in touch
        </u-button>
        <u-button
          trailing-icon="i-heroicons-arrow-long-down"
          color="black"
          size="lg"
          data-aos="fade-right"
          data-aos-duration="900"
          to="#work"
          >See some work
        </u-button>
      </div>
    </u-container>
  </header>

  <!-- Photo section -->
  <u-container>
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="1"
      id="work"
      class="max-width gap-0 columns-1 sm:columns-2 md:columns-3 gap-6"
    >
      <!-- Photo container -->
      <nuxt-link
        class="block relative mb-6"
        :to="p._path"
        v-for="(p, i) in data"
        :key="i"
      >
        <!-- Blur overlay when hovering -->
        <div
          class="group grid place-items-center hover:bg-neutral-900/20 z-50 hover:backdrop-blur-xl absolute top-0 bottom-0 right-0 left-0 rounded-lg transition"
        >
          <!-- Eye icon -->
          <svg
            class="fill-current text-white opacity-0 group-hover:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80"
            height="80"
            viewBox="0 0 50 50"
          >
            <path
              d="M 3 5 C 2.447 5 2 5.447 2 6 L 2 34 C 2 34.553 2.447 35 3 35 L 37 35 C 37.553 35 38 34.553 38 34 L 38 6 C 38 5.447 37.553 5 37 5 L 3 5 z M 4 7 L 36 7 L 36 23.585938 L 30.707031 18.292969 C 30.330031 17.915969 29.732844 17.911719 29.339844 18.261719 L 21.894531 25.707031 C 21.699531 25.902031 21.4425 26 21.1875 26 C 20.9325 26 20.675469 25.902031 20.480469 25.707031 C 20.089469 25.316031 20.089469 24.683969 20.480469 24.292969 L 23.6875 21.087891 L 14.738281 11.324219 C 14.364281 10.918219 13.734125 10.888766 13.328125 11.259766 L 4 19.738281 L 4 7 z M 30 10 A 2 2 0 0 0 28 12 A 2 2 0 0 0 30 14 A 2 2 0 0 0 32 12 A 2 2 0 0 0 30 10 z M 40 10 L 40 12 L 41 12 L 41 38 L 9 38 L 9 37 L 7 37 L 7 39 A 1.0001 1.0001 0 0 0 8 40 L 42 40 A 1.0001 1.0001 0 0 0 43 39 L 43 11 A 1.0001 1.0001 0 0 0 42 10 L 40 10 z M 45 15 L 45 17 L 46 17 L 46 43 L 14 43 L 14 42 L 12 42 L 12 44 A 1.0001 1.0001 0 0 0 13 45 L 47 45 A 1.0001 1.0001 0 0 0 48 44 L 48 16 A 1.0001 1.0001 0 0 0 47 15 L 45 15 z"
            ></path>
          </svg>
        </div>

        <!-- Photo -->
        <nuxt-img
          class="z-40 object-cover rounded-lg"
          :src="p.photos[0]"
          alt="hello"
        />
      </nuxt-link>
    </div>
  </u-container>
</template>
