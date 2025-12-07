<template>
    <a :href="item.link" class="border py-1 text-lg font-medium px-3 rounded-2xl inline-block text-center">
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