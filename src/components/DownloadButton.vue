<template>
  <a
    :href="downloadLink"
    download
    class="bg-medium-purple inline-block transform cursor-pointer rounded-2xl border border-black text-lg font-medium shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
    :class="padding"
  >
    <FontAwesomeIcon :icon="['fas', 'download']" class="mr-1 inline-block h-5 w-5" />
    <slot />
  </a>
</template>

<script setup lang="ts">
const { downloadLink, padding } = defineProps({
  downloadLink: {
    type: String,
    required: true,
  },
  padding: {
    type: String,
    required: false,
    default: 'px-6 py-2',
  },
});
</script>
