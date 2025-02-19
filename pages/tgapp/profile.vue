<template>
  <div
    class="w-full h-full flex flex-col justify-center"
    v-if="initDataUnsafe && initDataUnsafe.user"
  >
    <h1>
      {{ initDataUnsafe.user.username }}
    </h1>
    <span>
      Your score is: {{ api.score }}
    </span>
  </div>
</template>


<script setup>

definePageMeta({
  title: '$WHY Profile',
  layout: 'telegram',
});


const { tg, loaded, initDataUnsafe } = useTelegram();
const api = reactive(useApi());

</script>
