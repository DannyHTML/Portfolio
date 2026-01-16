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
import roomHomepageImage from '../assets/room-homepage-image.png';
import bookmarkImage from '../assets/bookmark-image.png';
import eCommerceImage from '../assets/e-commerce-image.png';
import jobListingImage from '../assets/job-listing-image.png';
import linkRedirectIcon from '../assets/link-redirect-icon.svg';
import githubIcon from '../assets/github-logo.svg';
import multiStepFormImage from '../assets/multi-step-form.png';

const projects = [
  {
    title: 'Weather now',
    image: weatherNowImage,
    description:
      'Developed a modern, responsive weather application using Vue 3 and TypeScript with Vite for fast development and optimized builds. Implemented global state management with Pinia and styled the interface using TailwindCSS. The app consumes real-time meteorological data from the Open-Meteo API, offering current weather, forecasts, and a user-friendly layout across all devices. Emphasis was placed on clean architecture, component reusability, and accessibility.',
    linkWebsite: 'https://dannyhtml.github.io/Weather-app/',
    linkGithub: 'https://github.com/DannyHTML/Weather-app',
    iconWebsite: linkRedirectIcon,
    iconGithub: githubIcon,
    id: 1,
  },
  {
    title: 'Multi-step form',
    image: multiStepFormImage,
    description:
      'Built a dynamic, responsive multi-step subscription form using Vue 3 and TypeScript, with Vite for fast, optimized development. Styled with TailwindCSS for a clean, mobile-first design and implemented Pinia with persisted state, ensuring users’ progress is saved across page reloads. Utilized Vue Router with route guards and clean URLs for smooth navigation between steps, enhancing the user experience. The project emphasizes accessibility, interactive form validation, and a maintainable, component-based architecture.',
    linkWebsite: 'https://dannyhtml.github.io/Multi-step-form/signup/select-plan',
    linkGithub: 'https://github.com/DannyHTML/Multi-step-form',
    iconWebsite: linkRedirectIcon,
    iconGithub: githubIcon,
    id: 2,
  },
  {
    title: 'Room homepage',
    image: roomHomepageImage,
    description:
      'Developed a modern, responsive Room homepage using Vue 3 and TypeScript, with Vite for fast builds and optimized development. Styled the interface with TailwindCSS for a clean, responsive design. Implemented component-based architecture with a focus on reusability and maintainability. For the first time, integrated unit and component tests using Vitest, ensuring reliability and quality. The project emphasizes accessibility, modern best practices, and a smooth user experience across devices.',
    linkWebsite: 'https://dannyhtml.github.io/Room-homepage/',
    linkGithub: 'https://github.com/DannyHTML/Room-homepage',
    iconWebsite: linkRedirectIcon,
    iconGithub: githubIcon,
    id: 3,
  },
  {
    title: 'Bookmark landing page',
    image: bookmarkImage,
    description:
      'This project was built using Vite, Vue 3, TypeScript, and Tailwind CSS. The landing page features a fully responsive design, including an elegant mobile navigation menu. The “Features” section is implemented using Vue Router, and the extensions and FAQs are managed through a JSON file rather than being hard-coded, making them easier to maintain and update.',
    linkWebsite: 'https://dannyhtml.github.io/Bookmark-landing-page',
    linkGithub: 'https://github.com/DannyHTML/Bookmark-landing-page',
    iconWebsite: linkRedirectIcon,
    iconGithub: githubIcon,
    id: 4,
  },
  {
    title: 'E-commerce',
    image: eCommerceImage,
    description:
      'This project was built using Vite, Vue 3, TypeScript, and Tailwind CSS. The landing page features a fully responsive design with an intuitive mobile menu. It includes a functional photo gallery with a lightbox on larger screens, as well as a working shopping cart that calculates the total cost and allows users to clear their cart.',
    linkWebsite: 'https://dannyhtml.github.io/E-commerce/',
    linkGithub: 'https://github.com/DannyHTML/E-commerce',
    iconWebsite: linkRedirectIcon,
    iconGithub: githubIcon,
    id: 5,
  },
  {
    title: 'Job-listing',
    image: jobListingImage,
    description:
      "This project was built using Vite, Vue 3, TypeScript, and Tailwind CSS. It's a responsive job-filter application where selecting one or more tags automatically displays a filter bar and updates the job listings. Tags can be removed individually, and the “Clear” button resets the entire search.",
    linkWebsite: 'https://dannyhtml.github.io/Job-listings/',
    linkGithub: 'https://github.com/DannyHTML/Job-listings',
    iconWebsite: linkRedirectIcon,
    iconGithub: githubIcon,
    id: 6,
  },
];
</script>
