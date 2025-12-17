<template>
  <div
    v-if="open"
    class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/70"
  >
    <!-- Modal box -->
    <div
      ref="target"
      class="bg-primary border-medium-purple relative mx-4 w-full max-w-2xl rounded-lg border-2 p-4"
    >
      <h2 class="mb-5 text-center text-4xl font-bold">Skills</h2>
      <div class="grid grid-cols-2 gap-3">
        <span
          v-for="skill in skills"
          :key="skill.title"
          class="bg-medium-purple flex h-10 w-full items-center justify-center gap-2 rounded-2xl border border-white/50 text-center whitespace-nowrap"
        >
          <img :src="skill.icon" :alt="skill.title" class="w-5" />
          {{ skill.title }}
        </span>
      </div>
      <button type="button" @click="emit('close')">
        <FontAwesomeIcon
          :icon="['fas', 'times']"
          class="absolute top-4 right-4 h-7 w-7 cursor-pointer"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

const target = useTemplateRef<HTMLElement>('target');

onClickOutside(target, () => emit('close'));

interface Skills {
  icon: string;
  title: string;
}

const { open, skills } = defineProps<{
  open: boolean;
  skills: Skills[];
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>
