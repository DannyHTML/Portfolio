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
        <DesktopMenu :items="menuItems" />
        <ContactButton :item="contactButton!" />
      </template>
    </div>
  </header>
  <NavigateToTop />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import DesktopMenu from './DesktopMenu.vue';
import ContactButton from './ContactButton.vue';
import NavigateToTop from '../NavigateToTop.vue';

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

const contactButton = items.find((i) => i.title === 'Contact');
const menuItems = items.filter((i) => i.title !== 'Contact');

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 640;
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);
});
</script>
