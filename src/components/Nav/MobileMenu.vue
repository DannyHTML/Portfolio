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
      class="bg-secondary drop-shadow-medium-purple fixed top-0 left-0 z-50 flex h-1/2 w-full flex-col items-center justify-center rounded-b-3xl font-medium text-white drop-shadow-lg"
    >
      <ul class="space-y-5 text-center text-xl">
        <li v-for="item in items" :key="item.title" class="border-b-2">
          <a :href="item.link" @click="close">{{ item.title }}</a>
        </li>
        <DownloadButton :download-link="'/path/to/cv.pdf'"> Download CV </DownloadButton>
      </ul>
      <button class="absolute top-6 right-3" @click="close">
        <FontAwesomeIcon :icon="['fas', 'times']" class="h-6! w-6! text-white" />
      </button>
    </div>
  </transition>
  <div
    :class="[
      'fixed top-0 right-0 z-40 h-screen w-screen bg-black/80 transition duration-150',
      open ? 'opacity-100' : 'pointer-events-none opacity-0',
    ]"
  ></div>
</template>

<script setup lang="ts">
import DownloadButton from '../DownloadButton.vue';

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
