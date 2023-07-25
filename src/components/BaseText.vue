<template>
    <p class="text" :class="[`-${size} -${family} -${weight}`]"></p>
  </template>
  
  <script>
  export default {
      name:"BaseText",
      props: {
        size:{
          type: String,
        }
      },
  }
  </script>
  
  <style lang="scss" scoped>
  .text {
    font-family: $primary-font;
    font-size: $fs-md;//base 22
    font-weight: $font-regular;

    &.-xxs{
      font-size: $fs-xxs;
    } 

    &.-xs{
      font-size: $fs-xs;
    }

    &.-sm{
      font-size: $fs-sm;
    } 

    &.-md{
      font-size: $fs-lg;
    }

    &.-lg{
      font-size: $fs-xl;
    }

    &.-xl{
      font-size: $fs-xxl;
    }

    &.-xxl{
      font-size: $fs-xxxl;
    }

    &.-primary {
      font-family: $primary-font;
    }

    &.-secondary {
      font-family: $secondary-font;
    }

    &.-third {
      font-family: $third-font;
    }

    &.-medium{
      font-weight: $font-medium;
    }

    &.-bold {
      font-weight: $font-bold;
    }

    &.-extra {
      font-weight: $font-extra-bold;
    }
  }
  </style>