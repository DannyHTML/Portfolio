<template>
  <div id="skills" class="bg-primary">
    <div class="relative container py-20">
      <h2 class="mb-6 text-center text-5xl font-bold">Skills</h2>
      <Carousel v-bind="carouselConfig" class="fade-left-and-right">
        <Slide v-for="skill in skills" :key="skill.title">
          <SkillCard :title="skill.title" :icon="skill.icon" />
        </Slide>
      </Carousel>
      <button
        type="button"
        class="bg-medium-purple absolute top-5 right-5 flex transform cursor-pointer items-center gap-2 rounded-2xl border border-black px-3 py-2 text-center text-lg font-medium shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:px-6"
        @click="openModal = true"
      >
        <span>
          <FontAwesomeIcon :icon="['fas', 'expand']" class="h-5 w-5" />
        </span>
        See All Skills
      </button>
    </div>
  </div>

  <!-- TODO: I NEED TO ADD MORE SKILLS, like Responsvise Design for example etc.... -->
  <!-- TODO: Need to find a better logo for Responsive Web Design, text also to long -->

  <!-- Pop-up modal -->
  <Transition
    enter-active-class="transition ease-out duration-150"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <PopUpModal v-if="openModal" :open="openModal" :skills="skills" @close="openModal = false" />
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
import SkillCard from './SkillCard.vue';
import vueLogo from '../assets/vue-logo.svg';
import typescripLogo from '../assets/typescript-logo.svg';
import viteLogo from '../assets/vite-logo.svg';
import npmLogo from '../assets/npm-logo.svg';
import tailwindLogo from '../assets/tailwind-logo.svg';
import responsiveWebDesignLogo from '../assets/responsive-web-design-logo.svg';
import htmlLogo from '../assets/html-5-logo.svg';
import cssLogo from '../assets/css-3-logo.svg';
import magento2Logo from '../assets/magento-2-logo.svg';
import prismicLogo from '../assets/prismic-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import gitlabLogo from '../assets/gitlab-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import javascriptLogo from '../assets/javascript-logo.svg';
import apiLogo from '../assets/api-logo.svg';
import piniaLogo from '../assets/pinia-logo.svg';
import PopUpModal from './PopUpModal.vue';

const openModal = ref(false);

const carouselConfig = {
  itemsToShow: 2,
  gap: 12,
  wrapAround: true,
  mouseDrag: true,
  mouseWheel: true,
  pauseAutoplayOnHover: true,
  autoplay: 1000,
  breakpoints: {
    768: {
      itemsToShow: 2.5,
    },
    1000: {
      itemsToShow: 5.5,
    },
  },
};

const skills = [
  { title: 'Vue.js', icon: vueLogo },
  { title: 'Pinia', icon: piniaLogo },
  { title: 'TypeScript', icon: typescripLogo },
  { title: 'Responsive', icon: responsiveWebDesignLogo },
  { title: 'Vite', icon: viteLogo },
  { title: 'NPM', icon: npmLogo },
  { title: 'Tailwind CSS', icon: tailwindLogo },
  { title: 'HTML', icon: htmlLogo },
  { title: 'JavaScript', icon: javascriptLogo },
  { title: 'CSS', icon: cssLogo },
  { title: 'Magento 2', icon: magento2Logo },
  { title: 'Prismic', icon: prismicLogo },
  { title: 'Git', icon: gitLogo },
  { title: 'GitLab', icon: gitlabLogo },
  { title: 'GitHub', icon: githubLogo },
  { title: 'APIs', icon: apiLogo },
];
</script>
