<template>
  <div
    class="w-full overflow-x-hidden flex flex-col items-center px-0 lg:px-8"
  >
    <!-- header -->
    <div class="absolute z-50 flex gap-4 w-3/4 justify-between">
      <img
        class="w-18 h-16 object-cover object-center"
        src="/icon.jpg"
      >
      <div class="flex gap-4 items-center">
        <UIDropdown
          :values="[{title: 'Eng', value: 'en'}, {title: 'Рус', value: 'ru'}]"
          @select="(id, val) => setLocale(val as 'en' | 'ru')"
          ref="chooseLanguage"
        >
          {{ $t("chooseLanguage") }}
        </UIDropdown>
      </div>
    </div>

    <!-- logo -->
    <div class="w-full h-screen relative flex items-center justify-center">
      <div ref="logo" class="flex flex-col justify-center items-center absolute">
        <div class="text-4xl lg:text-6xl xl:text-9xl pointer-events-none scale-150">
          $WHY COIN
        </div>
        <a class="absolute translate-y-52 lg:translate-y-16 xl:translate-y-32" target="_blank" href="https://t.me/blum/app?startapp=memepadjetton_WHY_FHLAY-ref_N6jhKl4WlB">
          <UIButton>
            {{ $t("buyWhy") }}
          </UIButton>
        </a>
        <!-- <span class="text-lg lg:text-xl font-light">
          actual course <span class="font-semibold">${{ actualCourse.toFixed(2) }}</span>
        </span> -->
      </div>
    </div>

    <!-- main content -->
    <div class="flex flex-col items-center p-6 gap-2 rounded-t-3xl bg-[#04060C80] backdrop-blur-sm border-[1px] border-white/15 w-full min-h-screen overflow-x-hidden z-40">
      <h1 class="text-5xl">
        $WHY COIN
      </h1>
      <span class="text-xl">
        {{ $t('bestTokenEver') }}
      </span>

      <hr class="text-white h-[1px] w-2/3">

      <h2 class="text-4xl">
        {{ $t('socials') }}
      </h2>
      <div class="flex gap-4 text-5xl">
        <a href="https://t.me/sowhycoin" target="_blank" title="Telegram">
          <NuxtIcon name="socials/tg" class="text-purple-500 hover:text-purple-400 active:text-purple-300 transition-all duration-300" />
        </a>
        <a href="https://twitblit.ru/tb/sowhycoin" target="_blank" title="Twitblit">
          <NuxtIcon name="socials/twitblit" class="text-purple-500 hover:text-purple-400 active:text-purple-300 transition-all duration-300" />
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { UIButton } from '#components';

const { setLocale, locale } = useI18n()

const logo = ref<HTMLElement | null>(null);
const chooseLanguage = ref();


function logoHandler() {
  const offset = window.scrollY;
  if (!logo.value)
    return;
  logo.value.style.transform = `translateY(${offset * 0.5}px) scale(${1.0 - offset * 0.00025})`;
  logo.value.style.opacity = `${1.0 - offset * 0.001}`;
}


definePageMeta({
  title: '$WHY'
})

onMounted(() => {
  window.addEventListener('scroll', logoHandler);
  chooseLanguage.value.selectByValue(locale);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logoHandler);
})

</script>
