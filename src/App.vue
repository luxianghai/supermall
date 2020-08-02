<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>

  // 导入路由对象
  import router from './router'

 import MainTabBar from "@components/content/mainbar/MainTabBar";

  export default {
    name: 'App',
    router,
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
