<template>
  <div class="w-full h-20 flex justify-evenly items-center rounded-t-3xl backdrop-blur-md bg-white/5 py-4">
    <UINavigationBarItem
      icon="house"
      :active="currentPage === 'home'"
      :title="$t('appHome')"
      to="/tgapp/"
    />
    <UINavigationBarItem
      icon="user"
      :active="currentPage === 'profile'"
      :title="$t('appProfile')"
      to="/tgapp/profile"
    />
  </div>
</template>


<script setup lang="ts">

const route = useRoute()

const currentPage = ref('home')

watch(route, val => {
  
}, { deep: true, immediate: true });

</script>
