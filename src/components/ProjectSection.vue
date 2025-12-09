<template>
  <div class="container my-20">
    <h2 id="projects" class="mb-6 text-center text-5xl font-bold">Projects</h2>
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import weatherNowImage from '../assets/weather-now.png';
import bookmarkImage from '../assets/bookmark-image.png';
import eCommerceImage from '../assets/e-commerce-image.png';
import jobListingImage from '../assets/job-listing-image.png';

const projects = [
  {
    title: 'Weather now',
    link: weatherNowImage,
    description: 'This is a description of Project Two.',
    id: 1,
  },
  {
    title: 'Bookmark landing page',
    link: bookmarkImage,
    description:
      'This project was built using Vite, Vue 3, TypeScript, and Tailwind CSS. The landing page featuresa fully responsive design, including an elegant mobile navigation menu. The “Features” section is implemented using Vue Router, and the extensions and FAQs are managed through a JSON file rather than being hard-coded, making them easier to maintain and update.',
    id: 2,
  },
  {
    title: 'E-commerce',
    link: eCommerceImage,
    description:
      'This project was built using Vite, Vue 3, TypeScript, and Tailwind CSS. The landing page features a fully responsive design with an intuitive mobile menu. It includes a functional photo gallery with a lightbox on larger screens, as well as a working shopping cart that calculates the total cost and allows users to clear their cart.',
    id: 3,
  },
  {
    title: 'Job-listing',
    link: jobListingImage,
    description:
      'This project was built using Vite, Vue 3, TypeScript, and Tailwind CSS. It’s a responsive job-filter application where selecting one or more tags automatically displays a filter bar and updates the job listings. Tags can be removed individually, and the “Clear” button resets the entire search.',
    id: 4,
  },
];
</script>
