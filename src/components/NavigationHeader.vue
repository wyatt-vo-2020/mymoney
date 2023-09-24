<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rouded-full"
          >
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              size="sm"
              alt="Avatar"
              class="w-full h-auto object-cover"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">Hey {{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
