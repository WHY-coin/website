<template>
  <div class="w-full min-h-screen overflow-x-hidden bg-white text-black">
    <slot/>
  </div>
</template>

<script setup>

const route = useRoute()

useHead({
  title: route.meta.title,
  meta: [{ property: 'og:title', content: route.meta.title }]
})

</script>
