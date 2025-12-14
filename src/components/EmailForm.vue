<template>
  <div class="flex justify-center">
    <form
      class="flex w-full max-w-xl flex-col gap-4 rounded-md border border-white/60 p-4"
      @submit="handleSubmit"
    >
      <div>
        <label class="mb-1 block" for="firstName">First Name</label>
        <input
          id="firstName"
          v-model="firstName"
          class="w-full rounded-md border p-2"
          placeholder="First name..."
          type="text"
          name="firstName"
          required
        />
      </div>

      <div>
        <label class="mb-1 block" for="lastName">Last Name</label>
        <input
          id="lastName"
          v-model="lastName"
          class="w-full rounded-md border p-2"
          placeholder="Last name..."
          type="text"
          name="lastName"
        />
      </div>

      <div>
        <label class="mb-1 block" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          class="w-full rounded-md border p-2"
          placeholder="Email..."
          type="email"
          name="email"
        />
      </div>

      <div class="relative">
        <textarea
          id="message"
          v-model="message"
          name="message"
          class="min-h-32 w-full rounded-md border p-2"
          placeholder="Your message..."
          required
        ></textarea>
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >
          <div
            v-if="succeeded || errors.form"
            class="absolute -bottom-6.5 flex w-full justify-center"
          >
            <p v-if="succeeded" class="text-accent">Thank you! Your message has been sent.</p>
            <p v-else class="text-red-500">
              {{ errors.form }}
            </p>
          </div>
        </transition>
      </div>
      <!-- Honeypot field to prevent spam -->
      <input type="text" name="_gotcha" class="hidden" />

      <button
        type="submit"
        class="mt-5 cursor-pointer rounded-md bg-green-700 px-4 py-2 font-medium transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-green-500"
      >
        {{ submitting ? 'Sending...' : 'Send' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

const submitting = ref(false);
const succeeded = ref(false);
const errors = ref<{ [key: string]: string }>({});

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  submitting.value = true;
  errors.value = {};

  try {
    const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'First name': firstName.value,
        'Last name': lastName.value,
        Email: email.value,
        Message: message.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      succeeded.value = true;
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      message.value = '';

      setTimeout(() => {
        succeeded.value = false;
      }, 5000);
    } else {
      // Formspree validation errors
      if (data.errors) {
        data.errors.forEach((err: { field: string; message: string }) => {
          errors.value[err.field] = err.message;
        });
      }
    }
  } catch (err) {
    errors.value.form = 'Something went wrong. Please try again.';
  } finally {
    submitting.value = false;
  }
};
</script>
