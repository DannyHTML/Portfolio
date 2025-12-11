<template>
  <template v-if="project.title">
    <div class="bg-medium-purple flex flex-col rounded-xl border border-gray-500 p-3">
      <h3 class="mb-4 text-center text-xl font-bold">{{ project.title }}</h3>
      <div>
        <a :href="project.linkWebsite" target="_blank" rel="noopener noreferrer">
          <img
            :src="project.image"
            :alt="`Screenshot of ${project.title}`"
            class="w-full rounded-lg object-cover"
          />
        </a>
      </div>
      <p class="bg-quaternary/30 mt-3 rounded-md border border-gray-500 p-2 font-medium">
        {{ project.description }}
      </p>
      <div class="item-center mt-2 flex flex-1 items-end justify-between">
        <ProjectButton :icon="project.iconWebsite" :link="project.linkWebsite">
          Website
        </ProjectButton>
        <ProjectButton :icon="project.iconGithub" :link="project.linkGithub">
          GitHub
        </ProjectButton>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import ProjectButton from './ProjectButton.vue';

defineProps<{
  project: {
    title: string;
    image: string;
    description: string;
    linkWebsite: string;
    linkGithub: string;
    iconWebsite: string;
    iconGithub: string;
  };
}>();
</script>
