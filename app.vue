<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

useHead({
  link: [
    { rel: 'icon', type: 'image/x-jpg', href: '/icon.jpg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swa' },
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
}
</style>
