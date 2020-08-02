<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        path:String,
        default:'red',
      }
    },
    data()
    {
      return {
        // isActive:'',
      };
    },
    methods:{
      itemClick()
      {
        console.log(this.path);
        this.$router.replace(this.path).catch( (err) => console.log(err));
      }
    },
    computed:{
      isActive(){
        return this.$route.path == this.path;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {};
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    /* 去除图片的默认下边距 默认3像素，改为2个像素*/
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
