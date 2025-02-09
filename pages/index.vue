<template>
  <div
    class="w-full overflow-x-hidden flex flex-col items-center text-5xl px-0 lg:px-8"
  >
    <div class="w-full h-[64rem] relative flex items-center justify-center">
      <div ref="logo" class="flex flex-col justify-center items-center pointer-events-none absolute h-32">
        <div class="text-4xl lg:text-6xl xl:text-9xl text">
          $WHY COIN
        </div>
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

const interval = undefined;


definePageMeta({
  title: '$WHY'
})

onMounted(() => {
  window.addEventListener('scroll', logoHandler);
  // setInterval(logoHandler, 5);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logoHandler);
  // clearInterval(logoHandler);
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
  background: linear-gradient(45deg, #7700ff, #ffffff, #ffffff, #ffffff, #7700ff);
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradientAnimation 5s linear infinite;
}
</style>
