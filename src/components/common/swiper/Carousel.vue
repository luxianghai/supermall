<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in carouselData">
<!--        {{item.link}}-->
        <a :href="item.link">
          <img :src="item.image" alt="无法显示">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    props:{
      carouselData:Array,
    },
    created()
    {
      // console.log(this.carouselData);
      console.log(this.carouselData);
    }
  }
</script>

<style scoped>
  img {
    height: 100%;
    width: auto;
  }
</style>
