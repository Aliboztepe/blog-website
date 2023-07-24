<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TheContainer",
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @include desktop(){
    width: 1196px;
  }
}
</style>