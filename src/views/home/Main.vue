<template>
  <div>
    <div class="main_nav">
      <span :class="{ active: !current }" @click="toogleTab(0)">游戏</span>
      <span :class="{ active: current }" @click="toogleTab(1)">视频</span>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keep"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keep"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      router: [
        { path: '/maingames' },
        { path: '/mainvideo' }
      ],
      gameId: 0
    }
  },
  computed: {
    // 当前选项卡
    current () {
      return this.$store.state.mainCurrent
    }
  },
  methods: {
    toogleTab (index) {
      if (this.current !== index) {
        this.$router.push(this.router[index].path)
        console.log(this.current)
      }
    }
  }
}
</script>

<style lang="less">
  .main_nav {
    position: fixed;
    top: 40px;
    width: 100%;
    height: 30px;
    display: flex;
    z-index: 998;
    background-color: white;
    span {
      display: inline-block;
      text-align: center;
      line-height: 30px;
    }
  }
  .active {
    color: #48D1CC;
    border-bottom: 3px solid #48D1CC;
  }
</style>
