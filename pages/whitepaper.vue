<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none flex items-center justify-center">
    <div class="flex flex-col gap-2 text-4xl" v-if="!route.query.secret_code">
      {{ $t('whitepaperError') }}
      <span class="opacity-5 text-sm">
        ?secret_code=secret
      </span>
    </div>
    <div class="text-4xl" v-else-if="route.query.secret_code === 'buywhy'">
      <NuxtImg
        :placeholder="[720, 360, 75, 2]"
        src="/stonks.jpg"
        width="720"
        height="360"
        quality="100"
        class="rounded-xl"
      />
    </div>
    <div class="text-4xl" v-else-if="route.query.secret_code === 'why'">
      <NuxtImg
        :placeholder="[1080, 864, 75, 2]"
        src="/why_moo.jpg"
        width="1080"
        height="864"
        quality="100"
        class="rounded-xl"
      />
    </div>
    <div class="text-4xl" v-else-if="route.query.secret_code === 'secret'">
      {{ $t('whitepaperError1') }}
    </div>
    <div class="flex flex-col gap-2 text-4xl" v-else>
      {{ $t('whitepaperError') }}
      <span class="opacity-5 text-sm">
        ?secret_code=secret
      </span>
    </div>
  </div>
</template>


<script setup lang="ts">

const route = useRoute()

definePageMeta({
  'title': '$WHY TOP  SECRET'
})

</script>
