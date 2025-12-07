<template>
    <a :href="item.link" class="
      inline-block
      px-6 py-2
      text-lg font-medium
      rounded-2xl
      border border-black
      shadow-[4px_4px_0_0_rgba(0,0,0,1)]
      transform
      transition
      hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]
      active:translate-y-0 active:shadow-[4px_4px_0_0_rgba(0,0,0,1)]
      text-center bg-medium-purple
    ">
      {{ item.title }}
    </a>
</template>

<script setup lang="ts">

interface Item {
    title: string;
    link: string;
};

const { item } = defineProps<{item: Item;}>();
</script>