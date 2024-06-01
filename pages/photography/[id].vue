<script setup>
useSeoMeta({
  name: "Gallery",
});
const route = useRoute();

//Get the set of photos according to the route path
const { data } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne();
});
</script>

<template>
  <div>
    <UCarousel
      :items="data.photos"
      :ui="{
        indicators: {
          wrapper: 'w-ful overflow-x-scroll rounded-xl',
        },
        item: 'basis-full h-full',
        container: 'rounded-lg h-full pb-36 pt-12',
      }"
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: '-left-12',
      }"
      :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-12',
      }"
      arrows
      class="w-3/4 lg:w-1/2 h-[85vh] mx-auto"
      indicators
    >
      <template #default="{ item }">
        <NuxtImg
          class="mx-auto h-full object-contain my-auto"
          :src="item"
          alt="photo"
        />
      </template>
      <template #indicator="{ onClick, page, active }">
        <NuxtImg
          @click="onClick(page)"
          mt-12
          :class="{ '!opacity-100': active, 'opacity-50': !active }"
          class="hover:cursor-pointer h-16 rounded-xl object-cover aspect-[16/9] opacity-50 transition hover:opacity-100 w-auto"
          :src="data.photos[page - 1]"
        />
      </template>
    </UCarousel>
  </div>
</template>
