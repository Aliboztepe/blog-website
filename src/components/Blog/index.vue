<template>
    <div class="blog">
        <Content></Content>
    </div>
</template>

<script>
import Content from '@/components/content';

export default {
    components: { Content },
    name: 'Blog',
}
</script>

<style scoped lang="scss">
.blog {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>