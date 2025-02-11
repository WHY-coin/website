<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
  >
    <div
      :class="{
        'pointer-events-none': !loaded,
        'pointer-events-auto p-4 text-center': loaded
      }"
    >
      <div
        v-if="tg && tg.initDataUnsafe.user"
      >
        Welcome, {{ tg.initDataUnsafe.user.username }}!
      </div>
      <div
        v-else-if="!tg || !tg.initDataUnsafe.user"
      >
        {{ $t('telegramNotLoaded') }}
      </div>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-[#07080F] justify-center duration-300 transition-all z-[9999]"
      :class="{
        'opacity-0 pointer-events-none': loaded,
        '': !loaded,
      }"
    >
      <NuxtImg
        :placeholder="[190, 190, 75, 0]"
        width="256"
        height="256"
        quality="75"
        loading="lazy"
        decoding="async"
        src="/icon.webp"
        alt="$WHY coin icon"
        class="animate-spin rounded-full"
      />
    </div>
  </div>
</template>


<script setup>

const { setLocale } = useI18n();

definePageMeta({
  title: '$WHY'
});

const onLoad = (tg) => {
  if (!tg.value.initDataUnsafe.user) {
    return;
  }
  const lang = tg.value.initDataUnsafe.user.language_code;
  switch (lang) {
    case 'ru':
      setLocale('ru');
      break;
    default:
      setLocale('en');
      break;
  }
};

const { tg, loaded } = useTelegram(onLoad);

</script>
