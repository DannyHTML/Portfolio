<script setup lang="ts">
import NavBar from './components/Nav/NavBar.vue';
import HomeSection from './components/HomeSection.vue';
import SkillsSection from './components/SkillsSection.vue';
</script>

<template>
  <main>
    <div class="min-h-screen">
      <NavBar />
      <div class="flex h-[calc(100dvh-80px)]">
        <HomeSection />
      </div>
    </div>
    <SkillsSection />
  </main>
</template>
