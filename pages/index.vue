<template>
  <div
    class="w-full overflow-x-hidden flex flex-col items-center text-5xl px-0 lg:px-8"
  >
    <div class="w-full h-screen relative flex items-center justify-center">
      <div ref="logo" class="flex flex-col justify-center items-center absolute">
        <div class="text-4xl lg:text-6xl xl:text-9xl pointer-events-none text scale-150">
          $WHY COIN
        </div>
        <a class="absolute translate-y-52 lg:translate-y-16 xl:translate-y-32" target="_blank" href="https://t.me/blum/app?startapp=memepadjetton_WHY_FHLAY-ref_N6jhKl4WlB">
          <UIButton>
            buy $WHY
          </UIButton>
        </a>
        <!-- <span class="text-lg lg:text-xl font-light">
          actual course <span class="font-semibold">${{ actualCourse.toFixed(2) }}</span>
        </span> -->
      </div>
    </div>
    <div class="flex flex-col items-center p-6 gap-2 rounded-t-3xl bg-[#04060C80] backdrop-blur-sm border-[1px] border-white/15 w-full min-h-screen overflow-x-hidden z-50">
      <h1 class="text-5xl">
        $WHY COIN
      </h1>
      <span class="text-xl">
        The best token ever
      </span>

      <hr class="text-white h-[1px] w-2/3">

      <h2 class="text-4xl">
        Socials
      </h2>
      <div class="flex gap-8">
        <a href="https://t.me/sowhycoin" target="_blank">
          <NuxtIcon name="socials/tg" class="text-purple-600 hover:text-purple-500 active:text-purple-400 transition-all duration-300" />
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>


const logo = ref<HTMLElement | null>(null);
// const actualCourse = ref(1.0);

// const api = useApi();

// const tokenInformation = await api({
//   method: 'get',
//   url: '/jetton/s/WHY_FHLAY/information',
// });


function logoHandler() {
  const offset = window.scrollY;
  if (!logo.value)
    return;
  logo.value.style.transform = `translateY(${offset * 0.5}px) scale(${1.0 - offset * 0.00025})`;
  logo.value.style.opacity = `${1.0 - offset * 0.001}`;
}

// const interval = undefined;


definePageMeta({
  title: '$WHY'
})

onMounted(() => {
  window.addEventListener('scroll', logoHandler);
  // setInterval(logoHandler, 5);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logoHandler);
  // clearInterval(interval);
})

</script>


<style scoped>
@keyframes gradientAnimation {
  0% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0% 0;
  }
}

.text {
  background: linear-gradient(90deg, #a250ff, #ffffff, #a250ff);
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradientAnimation 10s linear infinite;
}
</style>
