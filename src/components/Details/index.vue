<template>
    <div class="blog">
        <div class="article-wrapper">
            <h1 class="title">What is Next</h1>
            <articles :column-count="3"></articles>
        </div>
    </div>
</template>

<script>
import Articles from '@/components/Blog/Articles.vue';

export default {
    name: "Details",
    components: {
        Articles
    },
    data() {
        return {
        };
    },
};
</script>

<style scoped lang="scss" scoped>
.article-wrapper {
    @include flex(column, center, center, nowrap, 30px);
}

.title {
    @include font($first-font, 44px, 700, black);
}
</style>
