<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Start Info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt="Profile Image"
            size="xs"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">Le Van A</div>
        <p class="font-semibold text-gray-400 mt-1">levana@gmail.com</p>
      </div>
    </div>
  </div>
  <!-- Start Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              v-for="(profileOption, index) in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "home",
          params: {},
        },
      },
      {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
          name: "home",
          params: {},
        },
      },
      {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "home",
          params: {},
        },
      },
      {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "home",
          params: {},
        },
      },
      {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "home",
          params: {},
        },
      },
    ]);
    return { profileOptions };
  },
};
</script>
