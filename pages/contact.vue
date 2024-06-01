<script setup>
useSeoMeta({
  name: "Contact",
});

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
  <UContainer>
    <UPageHeader
      :ui="{
        wrapper: 'py-8 lg:py-16',
        title:
          'text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight',
      }"
      title=" Get in touch."
      description="Reach out to us for any inquiries or questions you may have. We are here to help!"
    />
  </UContainer>
  <UPage>
    <ULandingSection>
      <!-- Contact info -->
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!-- Contact info item -->
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          v-for="(item, i) in details"
          :key="i"
          class="flex flex-col border-l border-gray-200 dark:border-gray-800 p-6"
        >
          <span
            class="text-xl mb-1 text-gray-700 dark:text-gray-400 font-light"
            >{{ item.title }}</span
          >

          <a
            :href="item.href"
            class="text-2xl text-gray-800 dark:text-gray-300 hover:text-primary transition font-medium"
            >{{ item.info }}</a
          >
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109904.77622747935!2d-96.374061938515!3d30.590972768671175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646848619463ca3%3A0xc969c74db6bf6ac9!2sCollege%20Station%2C%20TX!5e0!3m2!1sen!2sus!4v1717237500079!5m2!1sen!2sus"
        class="aspect-[16/9] shadow-lg border border-gray-200 dark:border-gray-800 rounded"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </ULandingSection>
  </UPage>
</template>
