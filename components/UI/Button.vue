<template>
  <button
    :class="{
      'bg-purple-700 hover:bg-purple-600 active:bg-purple-500 text-white': color === 'purple',
      'bg-green-700 hover:bg-green-600 active:bg-green-500 text-white': color === 'green',
      'text-sm lg:text-base xl:text-lg': size === 'small',
      'text-base lg:text-lg xl:text-xl': size === 'normal',
      'text-lg lg:text-xl xl:text-2xl': size === 'big',
    }"
    class="transition-all duration-300 rounded-md px-6 py-2 font-semibold"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  color?: string,
  size?: 'small' | 'normal' | 'big',
}>(), {
  color: 'purple',
  size: 'normal'
});

</script>
