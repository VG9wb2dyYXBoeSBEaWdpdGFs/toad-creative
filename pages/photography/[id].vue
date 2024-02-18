<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const route = useRoute();

definePageMeta({
  colorMode: "dark",
});

//Get the set of photos according to the route path
const { data } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne();
});
</script>

<template>
  <Swiper
    :modules="[
      SwiperPagination,
      SwiperNavigation,
      SwiperAutoplay,
      SwiperEffectCreative,
    ]"
    class="h-[calc(100vh-88px)]"
    :pagination="true"
    :navigation="true"
  >
    <swiper-slide v-for="p in data.photos" :key="p">
      <nuxt-img class="mx-auto h-full object-contain" :src="p" alt="photo" />
    </swiper-slide>
  </Swiper>
</template>
