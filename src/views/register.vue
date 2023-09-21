<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="iMoney..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="abc@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder=""
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-primary text-white font-bold rouded"
            type="submit"
          >
            Sign Up
          </button>
          <button
            v-else
            class="py-3 text-center w-full text-white font-bold rouded bg-gray-800 cursor-not-allowed"
            type="button"
            disable
          >
            Loading
          </button>
        </div>
      </form>
      <!-- Start Error -->
      <div v-if="error" class="text-left text-red mt-6">
        <span>The email address is already in use by another account</span>
      </div>
      <!-- Start Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'login', param: {} }"
            class="text-primary font-bold"
            >Sign In
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signup } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signup(email.value, password.value, fullName.value);
    }
    return { fullName, email, password, error, isPending, onSubmit };
  },
};
</script>
