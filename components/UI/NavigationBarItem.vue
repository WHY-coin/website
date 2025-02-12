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
          'text-purple-400': active,
          'text-white': !active,
        }"
      />
    </span>
    <span
      class="absolute transition-all duration-300 font-medium"
      :class="{
        'translate-y-16 text-white': !active,
        'translate-y-8 text-purple-400': active
      }"
    >
      {{ title }}
    </span>
  </div>
</template>


<script setup lang="ts">

const router = useRouter()

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
  navigateTo(props.to);
}

</script>
