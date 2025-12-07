<template>
  <a
    :href="item.link"
    class="bg-medium-purple inline-block transform rounded-2xl border border-black px-6 py-2 text-center text-lg font-medium shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
  >
    {{ item.title }}
  </a>
</template>

<script setup lang="ts">
interface Item {
  title: string;
  link: string;
}

const { item } = defineProps<{
  item: Item;
}>();
</script>
