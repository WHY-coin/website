<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
    v-if="initDataUnsafe && initDataUnsafe.user"
  >
    Profile of {{ initDataUnsafe.user.username }}!
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY Profile',
  layout: 'telegram',
});


const { tg, loaded, initDataUnsafe } = useTelegram();

</script>
