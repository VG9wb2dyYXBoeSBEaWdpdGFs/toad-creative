<script setup lang="ts">
useSeoMeta({
  name: "Home",
});

const route = useRoute();

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
  <UContainer>
    <ULandingHero
      :ui="{
        title:
          'min-h-20 !bg-clip-text !text-transparent !bg-gradient-to-r !from-frogger-500 via-frogger-400  !to-frogger-300 h-max',
        description: 'max-w-3xl mx-auto',
      }"
      title="Photography Pro & AI Artist"
      description=" Explore the realm of AI-powered art generation and photography as we unveil a mesmerizing fusion of creativity and digital precision. "
      links=""
    >
      <template #headline>
        <UBadge
          color="primary"
          variant="soft"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <UIcon class="mr-2 size-4" name="i-heroicons-map-pin" dynamic />

          Based in College Station, TX
        </UBadge>
      </template>
    </ULandingHero>
  </UContainer>
  <UPage>
    <!-- Photo section -->
    <div class="flex items-center justify-center mb-12">
      <UPricingToggle
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
      class="max-width gap-0 columns-1 sm:columns-2 md:columns-3 gap-6 px-4"
    >
      <!-- Photo container -->

      <TPhoto
        v-if="isPhotography"
        v-for="(p, i) in photography"
        :path="p._path"
        :photo-url="p.photos[0]"
        ::key="i"
      ></TPhoto>
      <TPhoto
        v-else
        v-for="(a, i) in aiArt"
        :path="a._path"
        :photo-url="a.photos[0]"
        ::key="i"
      ></TPhoto>
    </div>
  </UPage>
</template>
