<template>
    <ul class="flex gap-4">
        <li v-for="item in items" :key="item.title">
            <a :href="item.link">{{ item.title }}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">
interface Item {
    title: string;
    link: string;
}


const { items } = defineProps<{items: Item[]}>();
</script>