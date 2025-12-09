<template>
  <template v-if="project.title">
    <div class="bg-medium-purple rounded-xl border border-gray-500 p-3">
      <h3 class="mb-4 text-center text-xl font-bold">{{ project.title }}</h3>
      <div>
        <!-- TODO: Could do either an iframe or a screenshot -->
        <img
          :src="project.link"
          :alt="`Screenshot of ${project.title}`"
          class="w-full rounded-lg object-cover"
        />
        <!-- <iframe :src="project.link" class="h-96 w-full rounded-lg border-4 bg-white"></iframe> -->
      </div>
      <p class="bg-quaternary/30 mt-3 rounded-md border border-gray-500 p-2 font-medium">
        {{ project.description }}
      </p>
    </div>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    link: string;
    description: string;
  };
}>();
</script>
