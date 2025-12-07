<template>
  <transition
    enter-active-class="transition-all duration-150 ease-out"
    leave-active-class="transition-all duration-150 ease-in"
    enter-from-class="-translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-full opacity-0"
  >
    <div
      v-if="open"
      class="bg-secondary fixed top-0 left-0 flex h-1/2 w-full flex-col items-center justify-center font-medium text-white"
    >
      <ul class="space-y-5 text-center text-xl">
        <li class="border-b-2" v-for="item in items" :key="item.title">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
      <button @click="close" class="absolute top-6 right-3">
        <FontAwesomeIcon :icon="['fas', 'times']" class="h-6! w-6! text-white" />
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Item {
  title: string;
  link: string;
}

const { items, open } = defineProps<{ items: Item[]; open: boolean }>();

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>
