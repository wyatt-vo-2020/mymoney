<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">Wellcome to your Vue.js App</div>
  <div class="mt-6" v-if="user">{{ user.displayName }}</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
