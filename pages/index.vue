<template>
  <div
    class="w-full overflow-x-hidden flex flex-col items-center text-5xl"
  >
    <div class="w-full h-[64rem] relative flex items-center justify-center">
      <div ref="logo" class="absolute text-9xl h-32 text">
        $WHY COIN
      </div>
    </div>
    <div class="flex flex-col gap-2 rounded-t-3xl bg-neutral-950 w-full min-h-screen overflow-x-hidden z-50">

    </div>
  </div>
</template>


<script lang="ts" setup>


const logo = ref(null);


function logoHandler() {
  const offset = window.pageYOffset;
  logo.value.style.transform = `translateY(${offset * 0.5}px) scale(${1.0 - offset * 0.0001})`;
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
    background-position: 100% 0;
  }
  50% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.text {
  display: inline-block;
  background: linear-gradient(90deg, #ffffff, #9a9a9a);
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradientAnimation 1500ms ease infinite;
}
</style>
