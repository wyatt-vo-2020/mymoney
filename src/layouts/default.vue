<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <navigation-header />
  <slot />
  <navigation-bottom />
</template>
<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
  components: { NavigationBottom, NavigationHeader },
};
</script>
