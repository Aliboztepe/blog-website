<template>
    <div :class="getColumnClass()">
        <div v-for="article in articles" :key="article.id" class="article">
            <img :src="article.imageUrl" alt="" class="article-img">
            <p class="article-title">{{ article.title }}</p>
        </div>
    </div>
</template>

<script>
import { ARTICLE_LIST } from "@/datas/data";

export default {
    name: "Articles",
    props: {
        columnCount: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            articles: [],
        };
    },
    created() {
        this.articles = ARTICLE_LIST;
    },
    methods: {
        getColumnClass() {
            return `article-list -column-${this.columnCount}`;
        },
    },
};
</script>

<style lang="scss">
.article-list {
    @include flex(row, center, center, wrap, 50px);

    &.-column-2 {
        max-width: 700px;

    }

    &.-column-3 {
        max-width: 1200px;
    }

    .article {
        @media (min-width: 768px) {
            max-width: 334px;
        }

        &-title {
            margin: 10px auto;
            max-width: 270px;
            @include font($first-font, 15px, 500, black);
        }
    }
}
</style>
