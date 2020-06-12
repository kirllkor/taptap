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
        <router-view></router-view>
    </div>
    <div class="nav">
      <div class="nav_icon" v-for="(item, index) in nav_icon" v-bind:key="item.id" @click="tooglePage(index)">
        <img v-bind:src="item.active ? item.icon_active : item.icon" alt="">
        <p>{{item.icon_msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      currentIndex: 0,
      nav_icon: [
        {
          id: 1,
          icon: 'images/main.png',
          icon_active: 'images/main1.png',
          icon_msg: '首页',
          active: true,
          router: '/main'
        },
        {
          id: 2,
          icon: 'images/find.png',
          icon_active: 'images/find1.png',
          icon_msg: '发现',
          active: false,
          router: '/find'
        },
        {
          id: 3,
          icon: 'images/forum.png',
          icon_active: 'images/forum1.png',
          icon_msg: '论坛',
          active: false,
          router: '/forum'
        },
        {
          id: 4,
          icon: 'images/order.png',
          icon_active: 'images/order1.png',
          icon_msg: '排行',
          active: false,
          router: '/order'
        },
        {
          id: 5,
          icon: 'images/mine.png',
          icon_active: 'images/mine1.png',
          icon_msg: '我的游戏',
          active: false,
          router: '/mine'
        }
      ]
    }
  },
  created () {
    // console.log(this.$router.history.current.path !== '/main')
    if (this.$router.history.current.path !== '/maingames') {
      this.$router.push(this.nav_icon[this.currentIndex].router)
    }
  },
  components: {
  },
  methods: {
    tooglePage (index) {
      if (this.currentIndex !== index) {
        this.nav_icon[this.currentIndex].active = false
        this.nav_icon[index].active = true
        this.currentIndex = index
        this.$router.push(this.nav_icon[index].router)
      }
    }
  }
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
  .nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #eeeeee;
    padding-top: 8px;
    background-color: white;
    z-index: 999;
    box-shadow: 0px -1px 2px #888888;
    .nav_icon {
      display: inline;
      width: 20%;
      float: left;
      height: 50px;
      text-align: center;
      img {
        width: 25px;
        height: 25px;
      }
      p{
        font-size: 12px;
        color: #bfbfbf;
      }
    }
  }
</style>
