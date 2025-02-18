<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-[#07080F] justify-center duration-300 transition-all z-[9999]"
    :class="{
      'opacity-0 pointer-events-none': loaded,
      '': !loaded,
    }"
  >
    <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" transform="rotate(360 12 12)"/></svg>
  </div>
</template>

<script setup lang="ts">

const loaded = defineModel<boolean>()

</script>
