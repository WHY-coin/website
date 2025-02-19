<template>
  <div
    class="w-screen h-screen flex flex-col bg-[#07080F] text-white"
  >
    <div
      :class="{
        'w-full h-full pointer-events-none': !loaded,
        'w-full h-full pointer-events-auto p-4 text-center': loaded
      }"
    >
      <div
        v-if="initDataUnsafe && initDataUnsafe.user"
      >
        <slot />
      </div>
      <div
        class="w-full h-full flex items-center justify-center pointer-events-none"
        v-else-if="!initDataUnsafe || !initDataUnsafe.user"
      >
        {{ $t('telegramNotLoaded') }}
      </div>
    </div>
    <AppLoader v-model="loaded" />

    <UINavigationBar
      class="fixed bottom-0 left-0 right-0 transition-all duration-300"
      :class="{
        'pointer-events-none translate-y-full': !loaded,
        '': loaded,
      }"
    />
  </div>
</template>


<script setup>

const { setLocale } = useI18n();

const route = useRoute()
const currentRoute = useRouter().currentRoute

useHead({
  title: route.meta.title,
  script: [
    { src: 'https://telegram.org/js/telegram-web-app.js' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { property: 'og:title', content: route.meta.title }
  ]
})

const onLoad = async (tg, initDataUnsafe) => {
  if (!initDataUnsafe.value.user) {
    return;
  }
  const lang = initDataUnsafe.value.user.language_code;
  switch (lang) {
    case 'ru':
      setLocale('ru');
      break;
    default:
      setLocale('en');
      break;
  }

  await api.auth(initDataUnsafe.value);
};

const { tg, loaded, initDataUnsafe } = useTelegram(onLoad);
const api = useApi();


watch(currentRoute, val => {
  if (!initDataUnsafe.value.user) {
    return;
  }
  const lang = initDataUnsafe.value.user.language_code;
  switch (lang) {
    case 'ru':
      setLocale('ru');
      break;
    default:
      setLocale('en');
      break;
  }
});

</script>
