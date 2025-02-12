<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
    v-if="initDataUnsafe && initDataUnsafe.user"
  >
    Welcome, {{ initDataUnsafe.user.username }}!
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY Home',
  layout: 'telegram',
});


const { tg, loaded, initDataUnsafe } = useTelegram();

</script>
