<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
  >
    <div
      v-if="tg && tg.initDataUnsafe.user"
    >
      Welcome, {{ tg.initDataUnsafe.user.username }}!
    </div>
    <div
      v-else-if="!tg || !tg.initDataUnsafe.user"
    >
      Oops! Something went wrong!
    </div>
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY'
});


useHead({
  script: [
    { src: 'https://telegram.org/js/telegram-web-app.js?56' }
  ]
});


const isLoading = ref(false);
const tg = ref(undefined);


onMounted(() => {
  if (window.Telegram.WebApp) {
    tg.value = window.Telegram.WebApp;
    tg.value.setBottomBarColor('#04060C');
    tg.value.setHeaderColor('#04060C');
  }
})

</script>
