<template>
  <div
    class="flex flex-col items-center"
    @click="navigate"
  >
    <span>
      <FontAwesome
        :icon="icon"
        class="text-3xl duration-300 transition-all"
        :class="{
          'text-purple-400 scale-95': active,
          'text-white scale-105': !active,
        }"
      />
    </span>
    <span
      class="absolute transition-all duration-300 font-medium"
      :class="{
        'translate-y-16 text-white': !active,
        'translate-y-7 text-purple-400': active
      }"
    >
      {{ title }}
    </span>
  </div>
</template>


<script setup lang="ts">

const router = useRouter()
// const { locale, setLocale } = useI18n()

const props = withDefaults(defineProps<{
  active?: boolean,
  icon?: string,
  title?: string,
  to?: string,
}>(), {
  active: false,
  icon: 'house',
  title: 'Home',
  to: '/tgapp'
})


function navigate() {
  // console.log(locale);
  navigateTo(props.to);
  // setLocale(locale.value);
  // if (locale.value as string !== 'en') {
  //   navigateTo(props.to + '/' + locale.value);
  // } else {
  // }
}

</script>
