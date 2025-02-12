<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
  >
    Welcome, {{ tg.initDataUnsafe.user.username }}!
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY Home',
  layout: 'telegram'
});


const { tg, loaded } = useTelegram();

</script>
