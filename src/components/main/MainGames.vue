<template>
  <div>
    <div class="hot" :style="{ backgroundImage: 'url(' + hotData.gameImg + ')' }" @click="showGameInfo(hotData.gameid)">
      <p>{{hotData.sort}}</p>
      <p class="hot_title">{{hotData.update}}</p>
      <!-- 把底部数据组件抽离出去 -->
      <!-- <div class="hot_bottom">
        <img class="icon" :src="hotData.gameIcon" alt="">
        <div class="introduce">
          <p class="introduce_title">{{hotData.gameTitle}}</p>
          <p class="introduce_text">{{hotData.gameIntroduce}}</p>
        </div>
        <div class="evaluate">
          <p class="score">{{hotData.score}}</p>
          <p>{{hotData.scoreNumber}}</p>
        </div>
      </div> -->
      <bottom :bottomData="hotData"></bottom>
      <div class="bgImg"></div>
    </div>
    <main-games-item v-for="item in gamesList" :key="item.gameid" :gameData="item"></main-games-item>
  </div>
</template>

<script>
import MainGamesItem from './MainGamesItem.vue'
import Bottom from './Bottom.vue'
export default {
  data () {
    return {
      hotData: {},
      gamesList: []
    }
  },
  computed: {
    top () {
      return this.$store.state.mainGamesTop
    }
  },
  created () {
    this.getHotData()
    this.getGamesList()
    // console.log(this.$route)
  },
  mounted () {
  },
  // keep-alive的钩子函数，设置滚动条的高度
  activated () {
    document.documentElement.scrollTop = this.top
  },
  methods: {
    // 获取热门游戏数据
    async getHotData () {
      const { data: res } = await this.$http.get('../resource/headLines.json')
      this.hotData = res
    },
    // 获取游戏列表数据
    async getGamesList () {
      const { data: res } = await this.$http.get('../resource/gamesList.json')
      this.gamesList = res
      // console.log(this.gamesList)
    },
    // 跳转到详细页面
    showGameInfo (id) {
      this.tik++
      this.$router.push(`/gameinfo/${id}`)
    }
  },
  // 离开路由生命周期函数,把当前滚动条高度添加到vuex中
  beforeRouteLeave (to, from, next) {
    this.$store.commit('changeMainGamesTop', document.documentElement.scrollTop)
    // console.log(this.top)
    next()
  },
  // 注册组件
  components: {
    MainGamesItem,
    Bottom
  }
}
</script>

<style lang="less">
  .hot {
    box-sizing: border-box;
    position: relative;
    width: 90%;
    height: 250px;
    margin-top: 80px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding-top: 10px;
    overflow: hidden;
    // background-image: url(../../../public/img/benghuai3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    p {
      position: relative;
      color: ghostwhite;
      font-size: 10px;
      margin-left: 10px;
      z-index: 1;
      &.hot_title {
        font-weight: bold;
        font-size: 20px;
        margin-top: 5px;
      }
    }
    .bgImg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: gray;
      opacity: 0.3;
      z-index: 0;
    }
  }
</style>
