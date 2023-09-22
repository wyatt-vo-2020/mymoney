<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <slot />
  <navigation-bottom />
</template>
<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
export default {
  components: { NavigationBottom },
};
</script>
