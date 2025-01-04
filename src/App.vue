<template>
  <navcomponent />
  <router-view />
  <LoadingComponent />
</template>

<script>
import navcomponent from "./components/global/navcomponent.vue";
import LoadingComponent from "./components/global/LoadingComponent.vue";

export default {
  name: "app-page",
  components: {
    navcomponent,
    LoadingComponent,
  },
};
</script>

<style lang="scss"></style>
