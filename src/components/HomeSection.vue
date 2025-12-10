<template>
  <div id="home" class="z-10 container flex items-center justify-center text-center">
    <div class="my-10">
      <h1 id="welcomeMessage" class="mb-8 block text-5xl font-bold md:text-6xl"></h1>

      <div
        v-motion
        :initial="{
          x: -100,
          opacity: 0,
        }"
        :enter="{
          x: [-600, 0, -10, 5, 0], // slide in → wiggle → settle
          opacity: 1,
          transition: {
            duration: 1200,
            type: 'keyframes',
            easing: 'easeOut',
            delay: 1000,
          },
        }"
        class="drop-shadow-primary text-lg font-medium drop-shadow-2xl md:text-xl"
      >
        Welcome to my portfolio! I am a passionate front-end developer. Please explore my work and
        get in touch.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const typeWrite = () => {
  const speed = 50;
  const element = document.querySelector('#welcomeMessage');
  element!.innerHTML = '';

  // Determine greeting based on time
  const hours = new Date().getHours();
  let greeting = '';
  if (hours < 12) {
    greeting = 'Good morning!';
  } else if (hours < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }

  const greetingText = 'My name is ';
  const authorText = 'Danny Jager';
  const authorColor = 'var(--color-accent)';

  let i = 0;
  let j = 0;
  let k = 0;

  function typeGreeting() {
    if (i < greeting.length) {
      element!.innerHTML += greeting.charAt(i);
      i++;
      setTimeout(typeGreeting, speed);
    } else {
      element!.innerHTML += '<br>'; // Add line break after greeting
      typeGreetingText();
    }
  }

  function typeGreetingText() {
    if (j < greetingText.length) {
      element!.innerHTML += greetingText.charAt(j);
      j++;
      setTimeout(typeGreetingText, speed);
    } else {
      // Start typing author in color
      const span = document.createElement('span');
      span.style.color = authorColor;
      element!.appendChild(span);
      typeAuthor(span);
    }
  }

  function typeAuthor(span: HTMLSpanElement) {
    if (k < authorText.length) {
      span.innerHTML += authorText.charAt(k);
      k++;
      setTimeout(() => typeAuthor(span), speed);
    } else {
      element!.innerHTML += '.';
    }
  }

  typeGreeting();
};

onMounted(() => {
  typeWrite();
});
</script>
