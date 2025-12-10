<template>
  <button
    v-if="showButtonUp"
    v-motion
    type="button"
    :initial="{ opacity: 0, y: 40 }"
    :enter="{
      opacity: 1,
      y: [40, 0, -10, 5, 0], // bounce animation
      transition: { duration: 700, type: 'keyframes', easing: 'easeOut' },
    }"
    :leave="{ opacity: 0, y: 40 }"
    class="fixed right-3 bottom-3 z-50 cursor-pointer"
    @click="scrollToTop"
  >
    <FontAwesomeIcon :icon="['fas', 'circle-up']" size="2xl" class="text-accent" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButtonUp = ref(false);
let observer: IntersectionObserver | null = null;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  const skills = document.getElementById('skills');
  if (!skills) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      const rect = entry?.boundingClientRect;

      // When entire skills section is above viewport → show arrow
      showButtonUp.value = rect?.bottom ? rect.bottom < 0 : false;
    },
    { threshold: 0 }
  );

  observer.observe(skills);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
