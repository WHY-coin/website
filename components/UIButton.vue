<template>
  <button
    :class="{
      'bg-purple-600 hover:bg-purple-500 active:bg-purple-400 text-[#04060C]': color === 'purple',
      'bg-green-600 hover:bg-green-500 active:bg-green-400 text-[#04060C]': color === 'green',
      'text-sm lg:text-base xl:text-lg': size === 'small',
      'text-base lg:text-lg xl:text-xl': size === 'normal',
      'text-lg lg:text-xl xl:text-2xl': size === 'big',
    }"
    class="transition-all duration-200 rounded-xl px-6 py-2 font-semibold"
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
