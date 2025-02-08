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
    { rel: 'icon', type: 'image/x-jpg', href: '/icon.jpg' }
  ],
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
