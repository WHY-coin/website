<template>
  <div
    class="w-full overflow-x-hidden flex flex-col items-center px-0 lg:px-8"
  >
    <!-- header -->
    <div class="absolute z-50 flex gap-4 w-3/4 justify-between">
      <NuxtImg
        :placeholder="[64, 64, 75, 2]"
        width="64"
        height="64"
        quality="25"
        loading="lazy"
        src="/icon.webp"
        alt="$WHY coin icon"
      />
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
      <div ref="logo" class="w-full flex flex-col justify-center items-center absolute">
        <div class="text-4xl lg:text-7xl xl:text-9xl pointer-events-none scale-150">
          $WHY COIN
        </div>
        <span
          class="opacity-70 text-center absolute translate-y-16 lg:translate-y-16 xl:translate-y-24 text-base lg:text-lg font-light"
        >
          {{ $t(`why${Math.floor(Math.random() * (3 - 1 + 1))}`) }}
        </span>
        <a class="absolute translate-y-32 lg:translate-y-28 xl:translate-y-36" target="_blank" href="https://t.me/blum/app?startapp=memepadjetton_WHY_FHLAY-ref_N6jhKl4WlB">
          <UIButton>
            {{ $t("buyWhy") }}
          </UIButton>
        </a>
      </div>
    </div>

    <!-- main content -->
    <div class="flex flex-col items-center p-6 gap-2 rounded-t-3xl bg-[#04060C80] backdrop-blur-sm border-[1px] border-white/15 w-full min-h-screen overflow-x-hidden z-40">
      <h1>
        $WHY COIN
      </h1>
      <span class="text-xl">
        {{ $t('bestTokenEver') }}
      </span>

      <hr>
      
      <h2>
        {{ $t('goals') }}
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-2 w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3">
        <UICard :title="$t('goal1Title')" border-color="green" date="11.02.2025">
          {{ $t('goal1Desc') }}
        </UICard>
        <UICard :title="$t('goal4Title')" border-color="yellow" :date="$t('notSoon')">
          {{ $t('goal4Desc') }}
        </UICard>
        <UICard :title="$t('goal3Title')" border-color="yellow" :date="$t('notSoon')">
          {{ $t('goal3Desc') }}
        </UICard>
        <UICard :title="$t('goal2Title')" border-color="yellow" :date="$t('notSoon')">
          {{ $t('goal2Desc') }}
        </UICard>
      </div>
      
      <hr>

      <h2>
        {{ $t('socials') }}
      </h2>

      <div class="flex gap-4 text-5xl">
        <a href="https://t.me/sowhycoin" target="_blank" title="Telegram">
          <NuxtIcon name="socials/tg" class="text-purple-500 hover:text-purple-400 active:text-purple-300 transition-all duration-300" />
        </a>
        <a href="https://x.com/sowhycoin" target="_blank" title="X">
          <NuxtIcon name="socials/x" class="text-purple-500 hover:text-purple-400 active:text-purple-300 transition-all duration-300" />
        </a>
        <a href="https://twitblit.ru/tb/sowhycoin" target="_blank" title="Twitblit">
          <NuxtIcon name="socials/twitblit" class="text-purple-500 hover:text-purple-400 active:text-purple-300 transition-all duration-300" />
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
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
