<template>
  <div style="position: relative;">
    <!-- 返回按钮 -->
    <div :class="scrollTop > 60 ? 'back-fixed' : 'back'"><i @click="back"></i></div>
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
    <nav class="details" :class="scrollTop >= 345 ? 'details-fixed' : ''">
      <div :class="{details_active: this.current === 0}" @click="toggleTab(0)">详情</div>
      <div :class="{details_active: this.current === 1}" @click="toggleTab(1)">评价<span>{{gameData.evaluate | shortHand}}</span></div>
      <div :class="{details_active: this.current === 2}" @click="toggleTab(2)">社区<span>{{gameData.community | shortHand}}</span></div>
    </nav>
    <keep-alive>
      <component :is="tabCom" :gameData="gameData" :gameName="gameData.name" @toggleTab="toggleCom" :class="scrollTop >= 345 ? 'mt' : ''"></component>
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
      gameInfoId: this.$route.params.id,
      gameData: {},
      current: 0,
      // 选择子组件
      tabCom: 'Detail',
      // 用来监听back箭头
      scrollTop: 0
    }
  },
  methods: {
    // 通过路由的参数,获取id值后发送请求
    async getGameData () {
      // console.log(this.$route)
      const { data: res } = await this.$http.get(`../resource/game${this.gameInfoId}.json`)
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
      // 初始化该高度
      if (this.scrollTop > 345) {
        document.documentElement.scrollTop = 345
      }
    },
    // 监听子组件传递的参数,触发的函数
    toggleCom (val) {
      this.tabCom = val
      this.current = 1
      document.documentElement.scrollTop = 345
    }
  },
  created () {
    this.getGameData()
  },
  mounted () {
    console.log(this)
    window.onscroll = () => {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
    document.documentElement.scrollTop = 0
  },
  filters: {
    shortHand (val) {
      return val >= 10000 ? Math.floor(val / 10000) + '万+' : val
    }
  },
  // 路由离开之前触发
  beforeRouteLeave (to, from, next) {
    if (to.path.indexOf('/screenshot') !== -1 || to.path.indexOf('/vedio') !== -1) {
      // from.meta.keep = true
      from.meta.y = this.scrollTop
      // 当离开路由并且前往一级页面时,清除缓存
    } else if (to.path === '/maingames') {
      this.clearCache('GameInfo')
      from.meta.y = 0
    }
    next()
  },
  // keep-alive的钩子函数,用来滚动位置
  activated () {
    document.documentElement.scrollTop = this.$route.meta.y
    window.onscroll = () => {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
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
  .back-fixed {
    position: fixed;
    width: 100%;
    background-color: #00CACA;
    z-index: 9;
    i {
      position: relative;
      left: 5px;
      display: inline-block;
      width: 40px;
      height: 40px;
      background-image: url(/font/arrow_left.png);
      background-size: cover;
      vertical-align: middle;
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
  .details-fixed {
    position: fixed;
    top: 40px;
    width: 100%;
    background-color: white;
    z-index: 999;
  }
  .mt {
    margin-top: 35px;
  }
</style>
