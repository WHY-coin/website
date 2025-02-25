<script setup lang="ts">
import { components } from "~/slices";
import type { FilledLinkToWebField } from "@prismicio/client";

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

const pageDate = new Date(Date.parse(page.value?.last_publication_date!))

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
        :date="pageDate.toLocaleDateString()"
        :source-title="page?.data.source.text"
        :source="(page?.data.source as FilledLinkToWebField).url"
      >
        <SliceZone
          wrapper="main"
          :slices="page?.data.slices ?? []"
          :components="components"
        />
      </UICard>
    </div>
    <AppLoader v-model="loaded" />
  </div>
</template>
