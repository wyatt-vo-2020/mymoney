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
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="abc@gmail.com"
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
            />
          </label>
        </div>
        <div class="row">
          <button
            class="py-3 text-center w-full bg-primary text-white font-bold rouded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <!-- Start Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new member</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'register', param: {} }"
            class="text-primary font-bold"
            >Register
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
