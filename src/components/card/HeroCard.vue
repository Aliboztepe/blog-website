<template>
  <div :class="checkURL">
    <img :src="imageSrc" alt="hero card image" class="card__image" />
    <p class="title">{{ title }}</p>
    <p class="title -sub">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  computed: {
    checkURL() {
      const hasDetails = window.location.href.includes("details");
      return `card -hero ${hasDetails ? "-details" : ""}`;
    },
  },
  props: {
    title: String,
    subTitle: String,
    imageSrc: String,
  },
};
</script>
<style></style>
