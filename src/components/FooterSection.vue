<template>
  <footer class="container flex h-14">
    <div class="flex w-full items-center justify-between text-sm font-medium">
      <div>
        All rights
        <span class="block md:inline"> reserved. </span>
      </div>
      <div class="flex flex-col items-center">
        <span>Made by:</span>
        <a
          class="text-accent underline"
          href="https://github.com/DannyHTML"
          target="_blank"
          rel="noopener noreferrer"
          >Danny Jager</a
        >
      </div>
      <span class="z-50"> &copy; {{ currentYear }} </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
