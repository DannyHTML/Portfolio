<template>
  <header id="home">
    <div class="container flex h-20 items-center justify-between text-white">
      <img src="../../assets/logo.png" class="w-40" alt="Logo Danny Jager" />

      <template v-if="isMobile">
        <button @click="open = !open">
          <FontAwesomeIcon :icon="['fas', 'bars']" class="h-6! w-6!" />
        </button>
        <MobileMenu :open="open" :items="items" @close="open = false" />
      </template>

      <template v-else>
        <DesktopMenu :items="items" />
        <!-- TODO: Upload my CV for this component -->
        <DownloadButton
          download-file-name="Danny_Jager_CV.pdf"
          :padding="'px-1.5 py-2 md:px-3 xl:px-6'"
        >
          Download CV
        </DownloadButton>
      </template>
    </div>
  </header>
  <NavigateToTop />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import DesktopMenu from './DesktopMenu.vue';
import NavigateToTop from '../NavigateToTop.vue';
import DownloadButton from '../DownloadButton.vue';

const isMobile = ref(false);
const open = ref(false);

const items = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
];

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 640;
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);
});
</script>
