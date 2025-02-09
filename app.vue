<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'

onMounted(() => {
  const lenis = new Lenis({
    autoRaf: true,
  });
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-jpg', href: '/icon.jpg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200..800;1,200..800&display=swap' },
  ],
  meta: [
    { name: 'google-site-verification', content: 'dmrePOvPNCn7YNqHGEZoBkUUFYVS20tCT1kjkBrHck0' },
  ]
})

useSeoMeta({
  title: '$WHY coin',
  ogTitle: '$WHY coin',
  description: '$WHY coin official website',
  ogDescription: '$WHY coin official website',
  ogImage: '/why.jpg',
  twitterCard: 'summary_large_image'
})

</script>

<style>


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
</style>
