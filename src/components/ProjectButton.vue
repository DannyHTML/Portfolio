<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-primary/70 flex transform items-center gap-2 rounded-2xl border border-black px-3 py-2 text-center text-lg font-medium shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:px-6"
  >
    <slot />
    <img :src="icon" alt="icon" class="w-5" />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string;
  icon: string;
}>();
</script>
