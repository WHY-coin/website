<template>
  <div class="w-full h-20 flex justify-evenly items-center rounded-t-3xl backdrop-blur-md bg-white/5 py-4">
    <UINavigationBarItem
      icon="house"
      :active="isHome"
      :title="$t('appHome')"
      to="/tgapp/"
    />
    <UINavigationBarItem
      icon="user"
      :active="isProfile"
      :title="$t('appProfile')"
      to="/tgapp/profile"
    />
  </div>
</template>


<script setup lang="ts">

const route = useRoute()

const isHome = ref(route.path.match(/^\/tgapp(\/|\/ru|)?$/ig) !== null)
const isProfile = ref(route.path.match(/^\/tgapp\/profile(\/|\/ru|)?$/ig) !== null)

watch(route, (newRoute, oldRoute) => {
  isHome.value = route.path.match(/^\/tgapp(\/|\/ru|)?$/ig) !== null
  isProfile.value = route.path.match(/^\/tgapp\/profile(\/|\/ru|)?$/ig) !== null
  console.log(newRoute, oldRoute)
})

</script>
