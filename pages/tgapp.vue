<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
  >
    <div
      v-show="tg && tg.initDataUnsafe.user"
    >
      Welcome, {{ tg.initDataUnsafe.user.username }}!
    </div>
    <div
      v-show="!tg || !tg.initDataUnsafe.user"
    >
      Oops! Something went wrong!
    </div>
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY'
})


useHead({
  script: [
    { src: 'https://telegram.org/js/telegram-web-app.js?56' }
  ]
})


const isLoading = ref(false);

const tg = undefined;


onMounted(() => {
  if (window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
  }
})

</script>
