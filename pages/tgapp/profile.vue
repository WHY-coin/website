<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
  >
    Profile of {{ tg.initDataUnsafe.user.username }}!
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY Profile',
  layout: 'telegram'
});


const { tg, loaded } = useTelegram();

</script>
