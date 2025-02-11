<template>
  <div
    class=" text-white border-[1px] p-4 flex flex-col gap-2 rounded-xl"
    :class="{
      'bg-[#04060C] border-white/25': borderColor === 'white',
      'bg-green-950/25 border-green-500/25': borderColor === 'green',
      'bg-red-950/25 border-red-500/25': borderColor === 'red',
      'bg-orange-950/25 border-orange-500/25': borderColor === 'orange',
      'bg-yellow-950/25 border-yellow-500/25': borderColor === 'yellow',
    }"
  >
    <template v-if="!title">
      <slot name="title"></slot>
    </template>
    <template v-else>
      <h3>
        {{ title }}
      </h3>
    </template>

    <div class="text-lg">
      <slot/>
    </div>

    <span
      class="w-full h-full flex items-end justify-end text-sm opacity-75"
      v-if="date"
    >
      {{ date }}
    </span>
  </div>
</template>


<script setup lang="ts">

withDefaults(defineProps<{
  title?: string,
  date?: string,
  borderColor?: string
}>(),{
  title: '',
  date: '',
  borderColor: 'white'
})

</script>
