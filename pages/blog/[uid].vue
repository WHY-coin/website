<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();

const { data: page } = await useAsyncData(
  `[testpost-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("testpost", route.params.uid as string),
);

const ogImage = computed(() => {
    const img = page.value?.data.meta_image;
    return img as string !== '' ? prismic.asImageSrc(img) : '/why.jpg'
})

useSeoMeta({
  title: `${page.value?.data.meta_title} | $WHY`,
  ogTitle: `${page.value?.data.meta_title} | $WHY`,
  description: page.value?.data.meta_description,
  ogDescription: page.value?.data.meta_description,
  ogImage,
  twitterCard: 'summary_large_image',
})

useHead({
  meta: [
    { name: 'keywords', content: page.value?.data.meta_keywords },
  ]
})

const loaded = ref(false)
onMounted(() => loaded.value = true)
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50">
    <div
      class="flex items-center justify-center"
      :class="{
        'w-full h-full pointer-events-none': !loaded,
        'w-full h-full pointer-events-auto p-4 text-center': loaded
      }"
    >
      <UICard
        class="transition duration-300 backdrop-blur-sm"
        :class="{
          'max-h-0 opacity-0': !loaded,
          'max-h-96': loaded
        }"
        :title="page?.data.meta_title"
        border-color="gray"
        :date="page?.last_publication_date"
        :source-title="page?.data.source.text"
        :source="page?.data.source.url"
      >
        <SliceZone
          wrapper="main"
          :slices="page?.data.slices ?? []"
          :components="components"
        />
      </UICard>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-[#07080F] justify-center duration-300 transition-all z-[9999]"
      :class="{
        'opacity-0 pointer-events-none': loaded,
        '': !loaded,
      }"
    >
      <NuxtImg
        :placeholder="[160, 160, 60, 0]"
        width="256"
        height="256"
        quality="60"
        loading="lazy"
        decoding="async"
        src="/icon.webp"
        alt="$WHY coin icon"
        class="animate-spin rounded-full"
      />
    </div>
  </div>
</template>
