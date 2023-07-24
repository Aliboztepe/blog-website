<template>
  <div id="app">
    <TheContainer>
      <TheHeader />
      <router-view />
      <TheNewsletter />
    </TheContainer>
  </div>
</template>

<script>
import TheHeader from "@/components/Header";
import TheContainer from "@/components/shared/TheContainer.vue";
import TheNewsletter from "@/components/newsletterCard";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContainer,
    TheNewsletter,
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
