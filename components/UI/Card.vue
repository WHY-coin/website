<template>
  <div
    class="text-white border-[1px] p-4 flex flex-col gap-2 rounded-xl duration-150"
    :class="{
      'bg-[#04060C] border-white/25': borderColor === 'white',
      'bg-green-950/25 border-green-500/25 hover:border-green-500/50': borderColor === 'green',
      'bg-red-950/25 border-red-500/25 hover:border-red-500/50': borderColor === 'red',
      'bg-orange-950/25 border-orange-500/25 hover:border-orange-500/50': borderColor === 'orange',
      'bg-yellow-950/25 border-yellow-500/25 hover:border-yellow-500/50': borderColor === 'yellow',
      'bg-gray-950/25 border-gray-500/25 hover:border-gray-500/50': borderColor === 'gray',
    }"
  >
    <template v-if="!title">
      <slot name="title"></slot>
    </template>
    <template v-else>
      <h3 class="cursor-default select-none">
        {{ title }}
      </h3>
    </template>

    <div class="text-lg cursor-default select-none">
      <slot />
    </div>

    <div class="w-full h-full flex justify-between items-end self-end" v-if="source || date">
      <a
        class="text-nowrap h-full flex text-sm opacity-75 hover:opacity-100 cursor-default select-none duration-150"
        :href="source"
        target="_blank"
        v-if="source"
      >
        {{ $t('postSource') }}: {{ sourceTitle ? sourceTitle : source }}
      </a>
  
      <span
        class="w-full h-full flex justify-end items-end text-sm opacity-75 cursor-default select-none text-right"
        v-if="date"
      >
        {{ date }}
      </span>
    </div>

  </div>
</template>


<script setup lang="ts">
import * as prismic from "@prismicio/client";

withDefaults(defineProps<{
  title?: string | prismic.KeyTextField,
  date?: string,
  borderColor?: string,
  source?: string,
  sourceTitle?: string | prismic.KeyTextField,
}>(),{
  title: '',
  date: '',
  borderColor: 'white',
  source: '',
  sourceTitle: '',
})

</script>
