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

      <div>
        <textarea
          id="message"
          v-model="message"
          name="message"
          class="min-h-32 w-full rounded-md border p-2"
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      <!-- Honeypot field to prevent spam -->
      <input type="text" name="_gotcha" class="hidden" />

      <button
        type="submit"
        class="cursor-pointer rounded-md bg-green-700 px-4 py-2 font-medium transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-green-500"
      >
        {{ submitting ? 'Sending...' : 'Send' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const FORM_ID = 'mgvgqzrv';

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
        email: email.value,
        message: message.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      succeeded.value = true;
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      message.value = '';
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
