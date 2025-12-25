<script setup lang="ts">
import NavBar from './components/Nav/NavBar.vue';
import HomeSection from './components/HomeSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import AboutMe from './components/AboutMe.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <main>
    <div class="backgroundImage relative min-h-screen">
      <NavBar />
      <div class="relative flex h-[calc(100dvh-80px)]">
        <div
          class="absolute inset-0 z-0 bg-linear-to-b from-black/50 via-black/50 to-black/50"
        ></div>
        <HomeSection class="relative z-10" />
      </div>
    </div>
    <SkillsSection />
    <ProjectSection />
    <AboutMe />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<style scoped>
.backgroundImage {
  background-image: url('../src/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
