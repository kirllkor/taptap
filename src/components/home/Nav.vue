<template>
  <div>
    <nav class="nav">
      <div class="nav_icon" v-for="(item, index) in nav_icon" v-bind:key="item.id" @click="tooglePage(index)">
        <img v-bind:src="currentIndex === index ? item.icon_active : item.icon" alt="">
        <p>{{item.icon_msg}}</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav_icon: [
        {
          id: 1,
          icon: 'images/main.png',
          icon_active: 'images/main1.png',
          icon_msg: '首页',
          active: false,
          router: '/main',
          component: 'Main'
        },
        {
          id: 2,
          icon: 'images/find.png',
          icon_active: 'images/find1.png',
          icon_msg: '发现',
          active: false,
          router: '/find',
          component: 'Find'
        },
        {
          id: 3,
          icon: 'images/forum.png',
          icon_active: 'images/forum1.png',
          icon_msg: '论坛',
          active: false,
          router: '/forum',
          component: 'Forum'
        },
        {
          id: 4,
          icon: 'images/order.png',
          icon_active: 'images/order1.png',
          icon_msg: '排行',
          active: false,
          router: '/order',
          component: 'Order'
        },
        {
          id: 5,
          icon: 'images/mine.png',
          icon_active: 'images/mine1.png',
          icon_msg: '我的游戏',
          active: false,
          router: '/mine',
          component: 'Mine'
        }
      ]
    }
  },
  methods: {
    tooglePage (index) {
      if (this.currentIndex !== index) {
        this.$router.push(this.nav_icon[index].router)
      }
    }
  },
  created () {
  },
  computed: {
    currentIndex () {
      return this.$store.state.currentIndex
    }
  }
}
</script>

<style lang="less">
  .nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #eeeeee;
    padding-top: 8px;
    background-color: white;
    z-index: 999;
    box-shadow: 0px 0px 20px 0px #bfbfbf;
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
