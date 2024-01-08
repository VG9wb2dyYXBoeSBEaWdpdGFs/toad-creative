export default defineNuxtConfig({
  site: {
    url: 'https://toad-creative.com',
  },
  ui: {
    safelistColors: ['frogger', 'neutral', 'gray']
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxthq/studio', '@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-swiper'],
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/'
    }
  },
});


