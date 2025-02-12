import { onMounted, ref } from "vue";

export const useTelegram = (onLoaded) => {
  
  const loaded = ref(false);
  const tg = ref(undefined);

  useHead({
    script: [
      { src: 'https://telegram.org/js/telegram-web-app.js?56' }
    ],
    meta: [
      { name: 'viewport', content: 'width=720px, initial-scale=1, user-scalable=0' }
    ]
  });

  onMounted(() => {
    if (window.Telegram.WebApp) {
      tg.value = window.Telegram.WebApp;
      tg.value.setBottomBarColor('#04060C');
      tg.value.setBackgroundColor('#04060C');
      tg.value.setHeaderColor('#04060C');
      loaded.value = true;
      if (onLoaded)
        onLoaded(tg);
    }
  });

  return { tg, loaded };
}
