<template>
    <ul class="flex gap-4 bg-medium-purple/80 py-2 text-lg lg:text-xl font-medium px-5 md:px-10 rounded-2xl">
        <li v-for="item in items" :key="item.title">
            <a :href="item.link"  class="relative after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-150 hover:after:-translate-x-1/2 hover:after:w-full">{{ item.title }} </a>
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