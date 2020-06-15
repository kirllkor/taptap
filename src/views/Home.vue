<template>
  <div>
    <div class="header">
      <div class="header_l">
        <img src="../../public/images/1494.png" alt="">
        <span>TapTap</span>
      </div>
      <div class="header_r">
        <i class="info"></i>
        <i class="search"></i>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keep"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keep"></router-view>
        <!-- <component :is="myComponent"></component> -->
        <!-- <component :is="myComponent"></component> -->
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from '@/components/home/Nav.vue'
// import Main from '../components/Main.vue'
// import Find from '../components/Find.vue'
// import Forum from '../components/Forum.vue'
// import Order from '../components/Order.vue'
// import Mine from '../components/Mine.vue'
// @ is an alias to /src
export default {
  name: 'Home',
  computed: {
    // myComponent () {
    //   return this.$store.state.myComponent
    // }
  },
  components: {
    Nav
    // Main, Find, Forum, Order, Mine
  }
  // deactivated () {
  //   window.localStorage.setItem('top', 100)
  // }
}
</script>
<style lang="less">
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: #48D1CC;
    z-index: 999;
    .header_l {
      display: inline-block;
      font-size: 0;
      height: 40px;
      line-height: 40px;
      img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
        color: white;
        vertical-align: middle;
      }
    }
    .header_r {
      float: right;
      width: 60px;
      height: 40px;
      line-height: 40px;
      font-size: 0;
      .info {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url(../../public/images/notification.png);
        background-size: contain;
        vertical-align: middle;
      }
      .search {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        background-image: url(../../public/images/search.png);
        background-size: contain;
        vertical-align: middle;
      }
    }
  }
  .content {
    margin-top: 40px;
    margin-bottom: 60px;
  }
</style>
