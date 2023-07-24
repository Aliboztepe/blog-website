<template>
    <div class="blog">
        <hero-card :image-src="heroCard.imageSrc" :title="heroCard.title" :sub-title="heroCard.subTitle" />

        <div class="article-wrapper">
            <h1 class="title">All Articles</h1>
            <articles :column-count="2"></articles>
        </div>
    </div>
</template>

<script>
import Articles from './Articles.vue'
import HeroCard from "@/components/card/HeroCard.vue";

export default {
    name: "Blog",
    components: {
        HeroCard,
        Articles
    },
    data() {
        return {
            heroCard: {
                imageSrc:
                    "https://s3-alpha-sig.figma.com/img/cd03/6c26/e7e1275cacd73edc67b4afe128d222d5?Expires=1691366400&Signature=EsNQ~aC3v3u3x4cxBIlonGW6jqc56qEQyCrkHneN6wmJqhhAXwwawXxwSvVnqld1gKTvamu7XydDUky7yssP97wHmS9gIYctlSOcVHuMzZNsOOeEqKtP9FzimPjtze4F6WIeDzI6S8LZv-MaKKMalivJrtjZUDJumY9DEb3KmzoGKuRaloD~Ijxy61Z-XcIUoYHHG5kUURInYhu3uuvcORbmbHMdtpszSJsUbtnl6~ii3nc8P7di8fBdetUqjmCNhIueyc6vVrSh8MXlyl3-M8C3QIjrCK1aH4ueC4lZb7BJ0jqyGIaf8oZ-KLqEGpjhT2EA-1g0wp4Hy7nC9RP5VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                title:
                    "A few words about this blog platform, Ghost, and how this site was made",
                subTitle:
                    "Why Ghost (& Figma) instead of Medium, WordPress or other options?",
            },
        };
    },
};
</script>

<style scoped lang="scss" scoped>
.article-wrapper {
    @include flex(column, center, center, nowrap, 30px);
}

.title {
    @include font(New York Extra Large, 44px, 700, black);
}
</style>
