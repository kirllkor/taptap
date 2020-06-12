<template>
  <div>
    <div class="main_nav">
      <span :class="{ active: !current }" @click="toogleTab(0)">游戏</span>
      <span :class="{ active: current }" @click="toogleTab(1)">视频</span>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 当前选项卡
      current: 0,
      router: [
        { path: '/maingames' },
        { path: '/mainvideo' }
      ]
    }
  },
  methods: {
    toogleTab (index) {
      if (this.current !== index) {
        this.current = index
        this.$router.push(this.router[this.current].path)
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
      width: 100%;
      text-align: center;
      line-height: 30px;
    }
  }
  .active {
    color: #48D1CC;
    border-bottom: 1px solid #48D1CC;
  }
</style>
