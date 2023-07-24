<template>
  <div class="card -hero">
    <img :src="imageSrc" alt="hero card image" />
    <p class="title">{{ title }}</p>
    <p class="title -sub">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: {
    title: String,
    subTitle: String,
    imageSrc: String,
  },
};
</script>
<style></style>
