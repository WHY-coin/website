<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const { locale, t } = useI18n()

onMounted(() => {
  const lenis = new Lenis({
    autoRaf: true,
  });
})

useHead({
  htmlAttrs: {
    lang: locale
  },
  link: [
    { rel: 'icon', type: 'image/x-jpg', href: '/icon.webp' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
    { rel: 'preload', as: 'style', onload: "this.onload=null;this.rel='stylesheet'", href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200..800;1,200..800&display=swap' },
  ],
  meta: [
    { name: 'google-site-verification', content: 'dmrePOvPNCn7YNqHGEZoBkUUFYVS20tCT1kjkBrHck0' },
  ]
})

useSeoMeta({
  title: '$WHY coin',
  ogTitle: '$WHY coin',
  description: t('appDesc'),
  ogDescription: t('appDesc'),
  ogImage: '/why.jpg',
  twitterCard: 'summary_large_image'
})

</script>

<style>
@tailwind base;
@tailwind utilities;
@tailwind components;

* {
  font-family: "Montserrat", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* {
  scroll-behavior: smooth;
}

h1 {
  @apply text-3xl lg:text-4xl xl:text-5xl;
}

h2 {
  @apply text-2xl lg:text-3xl xl:text-4xl;
}

h3 {
  @apply text-xl lg:text-2xl xl:text-3xl;
}

hr {
  @apply text-white opacity-25 h-[1px] w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 my-6;
}
</style>
