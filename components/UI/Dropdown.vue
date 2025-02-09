<template>
  <div
    class="fixed top-0 right-0 left-0 bottom-0 z-[1000] bg-black/50 duration-300 transition-all"
    :class="{
      '': shown,
      'opacity-0 pointer-events-none': !shown,
    }"
    @click="shown = !shown"
  >
  </div>
  <div
    :class="{
      'bg-purple-700 hover:bg-purple-600 active:bg-purple-500 text-white': color === 'purple' && !flat,
      'bg-green-700 hover:bg-green-600 active:bg-green-500 text-white': color === 'green' && !flat,
      'bg-black/75 text-white font-medium border-[1px] border-white/25': flat,
      'font-semibold': !flat,
      'text-sm lg:text-base xl:text-lg': size === 'small',
      'text-base lg:text-lg xl:text-xl': size === 'normal',
      'text-lg lg:text-xl xl:text-2xl': size === 'big',
    }"
    class="relative flex items-center justify-center cursor-pointer select-none transition-all duration-300 rounded-md px-6 py-2"
    @click="shown = !shown"
  >
    <div
      class="top-full left-0 mt-2 absolute rounded-md border-[1px] border-white/15 backdrop-blur-md p-2 z-[9999] duration-300 transition-all overflow-hidden"
      :class="{
        'max-h-20': shown,
        'opacity-0 pointer-events-none max-h-0': !shown,
      }"
      @click.stop
    >
      <div
        class="text-xl cursor-pointer px-6"
        v-for="(value, valueIndex) in values"
        :key="valueIndex"
        @click="$emit('select', valueIndex, value.value)"
        :class="{

        }"
      >
        {{ value.title }}
      </div>
    </div>
    <slot />
  </div>
</template>


<script setup lang="ts">

const selected = ref<number>(0);

const props = withDefaults(defineProps<{
  color?: string,
  size?: 'small' | 'normal' | 'big',
  flat?: boolean,
  values: Array<{title: string, value: string}>,
}>(), {
  color: 'purple',
  size: 'normal',
  flat: true
});

const emit = defineEmits<{
  select: [id: number, value: string],
}>()

const shown = ref<boolean>(false);


function select(id: number) {
  emit('select', id, props.values[id].value);
}

function selectByValue(value: string) {
  for (let i = 0; i < props.values.length; i++) {
    if (props.values[i].value === value) {
      emit('select', i, props.values[i].value);
    }
  }
}

defineExpose({
  select,
  selectByValue
})

</script>


<style scoped>
</style>
