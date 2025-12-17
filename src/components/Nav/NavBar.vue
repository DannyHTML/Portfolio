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
        <DownloadButton
          :download-link="'/cv/Danny_Jager_CV_2025.pdf'"
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
import { ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import DesktopMenu from './DesktopMenu.vue';
import NavigateToTop from '../NavigateToTop.vue';
import DownloadButton from '../DownloadButton.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const activeBreakpoint = useBreakpoints(breakpointsTailwind);

const open = ref(false);
const isMobile = activeBreakpoint.smaller('md');

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
</script>
