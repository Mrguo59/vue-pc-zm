<template>
  <div>
    <Header />
    <!-- 加载显示当前路由组件 -->
    <router-view></router-view>
    <!-- 当不是登录或者注册时就显示 -->
    <!-- 第一种方式 -->
    <Footer v-if="!$route.meta.isFooterShow" />
    <!-- 第二种方式 -->
    <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" /> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
