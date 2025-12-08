<template>
  <div class="bg-primary py-20">
    <h2 id="skills" class="mb-6 text-center text-5xl font-bold">Skills</h2>
    <Carousel v-bind="carouselConfig" class="fade-left-and-right container">
      <Slide v-for="skill in skills" :key="skill.title">
        <SkillCard :title="skill.title" :icon="skill.icon" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import vueLogo from '../assets/vue-logo.svg';
import typescripLogo from '../assets/typescript-logo.svg';
import tailwindLogo from '../assets/tailwind-logo.svg';
import htmlLogo from '../assets/html-5-logo.svg';
import cssLogo from '../assets/css-3-logo.svg';
import magento2Logo from '../assets/magento-2-logo.svg';
import prismicLogo from '../assets/prismic-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import gitlabLogo from '../assets/gitlab-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import javascriptLogo from '../assets/javascript-logo.svg';
import apiIcon from '../assets/api-logo.svg';

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
      itemsToShow: 3.5,
    },
  },
};

const skills = [
  { title: 'Vue.js', icon: vueLogo },
  { title: 'TypeScript', icon: typescripLogo },
  { title: 'Tailwind CSS', icon: tailwindLogo },
  { title: 'HTML', icon: htmlLogo },
  { title: 'JavaScript', icon: javascriptLogo },
  { title: 'CSS', icon: cssLogo },
  { title: 'Magento 2', icon: magento2Logo },
  { title: 'Prismic', icon: prismicLogo },
  { title: 'Git', icon: gitLogo },
  { title: 'GitLab', icon: gitlabLogo },
  { title: 'GitHub', icon: githubLogo },
  { title: 'APIs', icon: apiIcon },
];
</script>
