<template>
  <div
    class="w-screen h-screen flex flex-col p-2"
    v-if="initDataUnsafe && initDataUnsafe.user"
  >
    <!-- Welcome, {{ initDataUnsafe.user.username }}! -->

    <h1 class="text-left">
      {{ $t('appHome') }}
    </h1>

    <h4 class="text-left">
      {{ $t('actualCourse') }}
    </h4>
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY Home',
  layout: 'telegram',
});


const { tg, loaded, initDataUnsafe } = useTelegram();

</script>
