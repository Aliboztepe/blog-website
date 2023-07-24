<template>
  <div class="blog">
    <h1>This is a blog page.</h1>
    <hero-card
      :image-src="heroCard.imageSrc"
      :title="heroCard.title"
      :sub-title="heroCard.subTitle"
    />
  </div>
</template>

<script>
import HeroCard from "@/components/card/HeroCard.vue";

export default {
  name: "Blog",
  components: {
    HeroCard,
  },
  data() {
    return {
      heroCard: {
        imageSrc: "https://picsum.photos/seed/picsum/200/300",
        title: "this is hero title",
        subTitle: "this is sub title",
      },
    };
  },
};
</script>

<style scoped lang="scss" scoped></style>
