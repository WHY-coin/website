<template>
  <div class="w-full h-20 flex justify-evenly items-center rounded-t-3xl backdrop-blur-md bg-white/5 pb-2">
    <UINavigationBarItem
      icon="house"
      :active="currentPage === '$WHY Home'"
      :title="$t('appHome')"
      to="/tgapp/"
    />
    <UINavigationBarItem
      icon="user"
      :active="currentPage === '$WHY Profile'"
      :title="$t('appProfile')"
      to="/tgapp/profile"
    />
  </div>
</template>


<script setup lang="ts">

const route = useRouter().currentRoute

const currentPage = ref<string>('$WHY Home')

watch(route, val => {
  currentPage.value = val.meta.title as string
}, { deep: true, immediate: true });

</script>
