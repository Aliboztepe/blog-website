<template>
    <div class="content">
        <hr class="hr">
        <div class="user f -row -between -mb-50">
            <div class="f -row -g-16">
                <img class="user__img" src="@/assets/images/photo.png" alt="">
                <div class="f -column -center -start -g-8">
                    <p class=""><b>MIA MATIKAINEN</b></p>
                    <!-- <BaseText class="text secondary fs-xs bold">MIA MATIKAINEN</BaseText> -->
                    <p>Apr 15, 2020 · 4 min read</p>
                </div>
            </div>
            <div class="f -row">
                <a class="icon" href="#">
                    <img src="@/assets/icons/facebook.svg" alt="">
                </a>
                <a class="icon" href="#">
                    <img src="@/assets/icons/twitter.svg" alt="">
                </a>
            </div>
        </div>
        <div class="content__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
                efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis
                lacus at viverra.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
                posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>
            <p class="title">Next on the pipeline</p>
            <p>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula
                suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.</p>
            <p>Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et
                fringilla.</p>
            <div class="content__picture">
                <img src="@/assets/images/pho.png" alt="">Image caption centered this way and I'll make this a bit longer to
                indicate the amount of line-height.
            </div>
            <p>A list looks like this:</p>
            <ul class="rotated-square">
                <li>First item in the list</li>
                <li>Second item in the list lorem ipsum dolor sit amet nunc felis</li>
                <li>Third item in the list</li>
            </ul>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
                posuere ligula.</p>
            <p>Thanks for reading,<br>Mika</p>
            <div class="f -row">
                <a class="icon -with-text" href="#">
                    <img src="@/assets/icons/facebook.svg" alt="">
                    Share on Facebook
                </a>
                <a class="icon -with-text" href="#">
                    <img src="@/assets/icons/twitter.svg" alt=""> Share on Twitter
                </a>
            </div>
            <p>Tags: <u>product design</u>, <u>culture</u></p>
            <hr class="hr -dashed">
        </div>
        <div class="f -row -start -g-24 -mb-100">
            <img class="user__img" src="@/assets/images/photo.png" alt="">
            <p><b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA
                participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.</p>
        </div>
    </div>
</template>

<script>
import BaseText from "@/components/BaseText.vue";


export default {
  components: { BaseText },
    name: "Content",
    data() {
        return {
            facebookIcon: "@/assets/icons/facebook.svg",
            facebookAlt: "facebook-icon",
            twitterIcon: "@/assets/icons/twitter.svg",
            twitterAlt: "twitter-icon",
        }
    },
}
</script>

<style lang="scss">
.content {
    width: 100vh;

    &__text {
        display: flex;
        flex-direction: column;
        gap: 52px;
        text-align: start;
        font-family: $secondary-font;
        font-size: $fs-sm;
        font-weight: $font-regular;
    }

    &__picture {
        // width: 854px;
        // height: 570px;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        text-align: center;
        gap: $fs-xxs;
        font-family: $secondary-font;
        color: $black;
        font-size: $fs-xs;
        font-weight: $font-medium;
    }
}

.user {
    font-family: $secondary-font;
    &__img {
        border-radius: 50%;
    }
}

.icon {
    width: 70px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    cursor: pointer;
    gap: 16px;

    color: $black;
    text-decoration: none;

    font-family: $secondary-font;
    font-size: $fs-xs;
    font-weight: $font-medium;

    &.-with-text {
        width: 100vh;
        height: 64px;
    }

    @include border(1px, solid, $gray, $sp-xxs);
    box-shadow: 0px 1px 4px 0px rgba($color: $black, $alpha: 0.1);
}

.rotated-square {
    list-style-type: square;
    display: flex;
    flex-direction: column;
    gap: 24px;

    & li {
        position: relative;
        padding-left: 20px;

        &::before {
            position: absolute;
            left: 0;
            content: "\25AA";
            display: inline-block;
            margin-right: 5px;
            transform: rotate(45deg);
        }
    }
}
</style>