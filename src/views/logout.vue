<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2>Logout Page</h2>
</template>
<script>
import { useLogOut } from "@/composables/useLogOut";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogOut();
    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "login", params: {} });
    }
    onLogout();
    return {};
  },
};
</script>
