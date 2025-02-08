<template>
  <div class="w-full min-h-screen overflow-x-hidden bg-neutral-900 text-white">
    <slot/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  title: route.meta.title,
  meta: [{ property: 'og:title', content: route.meta.title }]
})

</script>
