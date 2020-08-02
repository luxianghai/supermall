<template>
  <div>
    <carousel :carouselData="banner"></carousel>
  </div>
</template>

<script>
  import {Carousel} from '@components/common/swiper';
  export default {
    name: "HomeCarousel",
    props:{
      banner:Array,
    },
    components:{
      Carousel,
    }
  }
</script>

<style scoped>

</style>
