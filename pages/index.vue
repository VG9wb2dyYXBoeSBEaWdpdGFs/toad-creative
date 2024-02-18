<script setup lang="ts">
const route = useRoute();

definePageMeta({
  colorMode: "dark",
});

//Get all photos from /content/photography
const { data: photography } = await useAsyncData(`content-all-photos`, () =>
  queryContent("/photography").find(),
);

const { data: aiArt } = await useAsyncData(`content-all-ai-art`, () =>
  queryContent("/ai").find(),
);
const isPhotography = ref<boolean>(false);
</script>

<template>
  <u-container>
    <ULandingHero
      title="Photography Pro & AI Artist"
      description=" Explore the realm of AI-powered art generation and photography as we unveil a mesmerizing fusion of creativity and digital precision. "
      links=""
    >
      <template #headline>
        <UBadge
          color="gray"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            to="/"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          Based in College Station, TX
        </UBadge>
      </template>
      <nuxt-img
        src="/uploads/fire-girl.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </ULandingHero>
  </u-container>

  <!-- Photo section -->
  <u-container>
    <div class="flex items-center justify-center mb-12">
      <u-pricing-toggle
        left="AI Art"
        right="Photography"
        v-model="isPhotography"
        class="max-w-xs"
      />
    </div>

    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="1"
      id="work"
      class="max-width gap-0 columns-1 sm:columns-2 md:columns-3 gap-6"
    >
      <!-- Photo container -->

      <t-photo
        v-if="isPhotography"
        v-for="(p, i) in photography"
        :path="p._path"
        :photo-url="p.photos[0]"
        ::key="i"
      ></t-photo>
      <t-photo
        v-else
        v-for="(a, i) in aiArt"
        :path="a._path"
        :photo-url="a.photos[0]"
        ::key="i"
      ></t-photo>
    </div>
  </u-container>
</template>
