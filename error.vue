<template>
  <div class="w-full min-h-screen overflow-x-hidden bg-[#07080F] text-white">
    <BackgroundGrid />
    <div class="fixed flex flex-col items-center justify-center z-10 w-screen h-screen">
      <h1 class="text-5xl lg:text-7xl xl:text-9xl scale-150">
        {{ error?.statusCode }}
      </h1>
      <span class="absolute translate-y-16 lg:translate-y-20 xl:translate-y-28 text-xl lg:text-2xl xl:text-3xl">
        {{ $t('err404') }}
      </span>
      <NuxtLink class="absolute translate-y-32 lg:translate-y-36 xl:translate-y-44" to="/">
        <UIButton>
          {{ $t('err404BackToHome') }}
        </UIButton>
      </NuxtLink>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { NuxtError } from '#app'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'


const { locale, t } = useI18n()


const props = defineProps({
  error: Object as () => NuxtError
})


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
  title: t('err404Title'),
  ogTitle: t('err404Title'),
  description: t('err404'),
  ogDescription: t('err404'),
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
