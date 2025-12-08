<template>
  <!-- TODO: Make sure every component using the correct and same TS runtime check as down below -->
  <div
    class="bg-medium-purple flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/50 p-2 text-center whitespace-nowrap"
  >
    <img :src="icon" class="w-6 md:w-7" :alt="`icon of ${title}`" />
    <h2 class="text-lg font-medium lg:text-xl">{{ title }}</h2>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

const { title, icon } = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  icon: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>
