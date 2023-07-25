<template>
  <div id="app">
    <TheContainer>
      <TheHeader />
      <router-view />
    </TheContainer>
  </div>
</template>

<script>
import TheHeader from "@/components/Header";
import TheContainer from "@/components/shared/TheContainer.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContainer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
