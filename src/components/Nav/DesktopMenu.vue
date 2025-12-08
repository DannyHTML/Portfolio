<template>
  <ul
    class="bg-medium-purple/80 border-medium-purple flex gap-4 rounded-2xl border-2 px-5 py-2 text-lg font-medium md:gap-10 md:px-10 lg:text-xl"
  >
    <li v-for="item in items" :key="item.title">
      <a
        :href="item.link"
        class="after:bg-accent hover:text-accent relative after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:transition-all after:duration-150 hover:after:w-full hover:after:-translate-x-1/2"
        >{{ item.title }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Item {
  title: string;
  link: string;
}

const { items } = defineProps<{ items: Item[] }>();
</script>
