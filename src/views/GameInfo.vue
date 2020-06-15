<template>
  <div style="position: relative;">
    <!-- 返回按钮 -->
    <div class="back"><i @click="back"></i></div>
    <img :src="gameData.gameImg" alt="" class="gameImg">
    <!-- 游戏的简单信息 -->
    <div class="game_top">
      <div class="game_icon">
        <img :src="gameData.gameIcon" alt="">
        <p>{{gameData.sort}}</p>
      </div>
      <div class="game_title">
        <p class="name">{{gameData.gameTitle}}</p>
        <p class="firm">厂商：{{gameData.firm}}</p>
        <p>
          <span v-for="(item, index) in gameData.tag" :key="index">{{item}}</span>
        </p>
      </div>
      <div class="game_score">
        <p class="logo">TapTap</p>
        <p class="score">{{gameData.score}}</p>
      </div>
    </div>
    <div class="download">
      <span>下载</span>
      <span class="flow">＋关注</span>
    </div>
    <div class="download_data">
      <div>
        <p>#{{gameData.hot}}</p>
        <p class="line_title">热门榜</p>
      </div>
      <div class="line"></div>
      <div>
        <p>{{gameData.download | shortHand}}</p>
        <p class="line_title">下载</p>
      </div>
      <div class="line"></div>
      <div>
        <p>{{gameData.attention | shortHand}}</p>
        <p class="line_title">关注</p>
      </div>
    </div>
    <div class="black_line"></div>
    <div class="details">
      <div :class="{details_active: this.current === 0}" @click="toggleTab(0)">详情</div>
      <div :class="{details_active: this.current === 1}" @click="toggleTab(1)">评价<span>{{gameData.evaluate | shortHand}}</span></div>
      <div :class="{details_active: this.current === 2}" @click="toggleTab(2)">社区<span>{{gameData.community | shortHand}}</span></div>
    </div>
    <keep-alive>
      <component :is="tabCom" :gameData="gameData"></component>
    </keep-alive>
  </div>
</template>

<script>
import Detail from '../components/gameinfo/Detail.vue'
import Evaluate from '../components/gameinfo/Evaluate.vue'
import Community from '../components/gameinfo/Community.vue'
export default {
  name: 'GameInfo',
  data () {
    return {
      id: this.$route.params.id,
      gameData: {},
      current: 0,
      tabCom: 'Detail'
    }
  },
  methods: {
    // 通过路由的参数,获取id值后发送请求
    async getGameData () {
      // console.log(this.$route)
      const { data: res } = await this.$http.get(`../resource/game${this.id}.json`)
      this.gameData = res
      // console.log(this.gameData)
    },
    // 返回上一页的函数
    back () {
      this.$router.go(-1)
    },
    // 切换选项卡
    toggleTab (current) {
      if (current === 0) {
        this.current = current
        this.tabCom = 'Detail'
      } else if (current === 1) {
        this.current = current
        this.tabCom = 'Evaluate'
      } else if (current === 2) {
        this.current = current
        this.tabCom = 'Community'
      }
    }
  },
  created () {
    this.getGameData()
  },
  filters: {
    shortHand (val) {
      return val >= 10000 ? Math.floor(val / 10000) + '万+' : val
    }
  },
  components: {
    Detail,
    Evaluate,
    Community
  }
}
</script>

<style lang="less">
  .back {
    position: absolute;
    top: 5px;
    left: 5px;
    i {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-image: url(/font/arrow_left.png);
      background-size: cover;
    }
  }
  .gameImg {
    width: 100%;
  }
  .game_top {
    display: flex;
    justify-content: space-around;
    width: 90%;
    align-items: center;
    margin-top: 10px;
    .game_icon {
      img {
        width: 80px;
      }
      p {
        font-size: 12px;
        text-align: center;
        color: #FF9224;
      }
    }
    .game_title {
      width: 50%;
      height: 100px;
      .name {
        height: 30px;
        font-weight: bold;
      }
      .firm {
        height: 25px;
        font-size: 12px;
        color: #BEBEBE;
      }
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        display: inline-block;
        margin: 0 2px;
        padding: 3px 8px;
        font-size: 12px;
        border-radius: 2px;
        color: #00CACA;
        background-color: #BBFFFF;
      }
    }
    .game_score {
      position: relative;
      top: -20px;
      width: 60px;
      height: 60px;
      background-color: #00CACA;
      border-radius: 50%;
      p {
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: white;
      }
      .logo {
        font-size: 12px;
      }
      .score {
        font-size: 26px;
        font-weight: bold;
        line-height: 15px;
      }
    }
  }
  .download {
    margin-top: 10px;
    margin-right: 5%;
    span {
      display: inline-block;
      box-sizing: border-box;
      float: right;
      height: 24px;
      width: 55px;
      font-size: 12px;
      margin: 0 5px;
      text-align: center;
      line-height: 24px;
      background-color: #00CACA;
      color: white;
      border-radius: 4px;
    }
    .flow {
      position: relative;
      top: 0;
      border: 1px solid #00CACA;
      background-color: white;
      color: #00CACA;
    }
    // 清除浮动
    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }
  .download_data {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    p {
      text-align: center;
    }
    .line_title {
      color: #BEBEBE;
      font-size: 12px;
    }
    .line {
      width: 1px;
      height: 20px;
      background-color: #BEBEBE;
    }
  }
  .black_line {
    width: 100%;
    height: 10px;
    background-color: #E0E0E0;
  }
  .details {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #BEBEBE;
    div {
      padding: 5px 0;
      color: #9D9D9D;
      font-weight: bold;
      span {
        margin-left: 5px;
        font-size: 12px;
        font-weight: 400;
        color: #D0D0D0;
      }
    }
    .details_active {
      color: #00CACA;
      border-bottom: 3px solid #00CACA;
    }
  }
</style>
