<template>
  <div>
    <div class="detail">
      <p>
        <span class="detail_title">简介</span>
        <span class="detail_official">官方入驻</span>
      </p>
      <section v-html="introduction" class="detail-introdcuct fold" ref="introduction"></section>
      <div class="more" ref="more"><span class="clear" @click="moreIntroduction">更多</span></div>
      <div class="screen_vedio_evaluate_title">
        <p>游戏截图</p>
        <p class="all" @click="checkScreenShot($route.params.id)">全部&nbsp;{{gameData.screenshot}}</p>
      </div>
      <section class="screen_shot_img">
        <ul>
          <li><img :src="gameData.gameImg" alt=""></li>
          <li><img :src="gameData.gameImg" alt=""></li>
          <li><img :src="gameData.gameImg" alt=""></li>
          <li><img :src="gameData.gameImg" alt=""></li>
          <li><img :src="gameData.gameImg" alt=""></li>
        </ul>
      </section>
      <div class="screen_vedio_evaluate_title">
        <p>视频</p>
        <p class="all" @click="checkVedio($route.params.id)">全部&nbsp;{{gameData.vedio}}</p>
      </div>
      <section class="vedio">
        <ul class="vedio_ul">
          <li class="vedio_li">
            <img :src="gameData.gameImg" alt="">
            <span>00:08</span>
            <p>风之女神</p>
            <p class="play">2天前 | 744播放</p>
          </li>
          <li class="vedio_li">
            <img :src="gameData.gameImg" alt="">
            <span>00:08</span>
            <p>新服装情报|真红骑士·月蚀服装|即将登场即将登场</p>
            <p class="play">05-29 | 15555播放</p>
          </li>
          <li class="vedio_li">
            <img :src="gameData.gameImg" alt="">
            <span>00:08</span>
            <p>新服装情报|真红骑士·月蚀服装|即将登场即将登场</p>
            <p class="play">05-29 | 15555播放</p>
          </li>
          <li class="vedio_li">
            <img :src="gameData.gameImg" alt="">
            <span>00:08</span>
            <p>新服装情报|真红骑士·月蚀服装|即将登场即将登场</p>
            <p class="play">05-29 | 15555播放</p>
          </li>
          <li class="vedio_li">
            <img :src="gameData.gameImg" alt="">
            <span>00:08</span>
            <p>新服装情报|真红骑士·月蚀服装|即将登场即将登场</p>
            <p class="play">05-29 | 15555播放</p>
          </li>
        </ul>
      </section>
      <div class="screen_vedio_evaluate_title">
        <p>评价</p>
        <p class="all" @click="checkAll">全部</p>
      </div>
      <section class="evaluate">
        <div class="evaluate_item" v-for="item in evaluate" :key="item.id">
          <div class="evaluate_user">
            <img src="/images/1494.png" alt="">
            <div class="start_time">
              <p>{{item.userName}}</p>
              <span class="start">
                <i :class="item.start >= 1 ? 'have_start' : 'not_start'"></i>
                <i :class="item.start >= 2 ? 'have_start' : 'not_start'"></i>
                <i :class="item.start >= 3 ? 'have_start' : 'not_start'"></i>
                <i :class="item.start >= 4 ? 'have_start' : 'not_start'"></i>
                <i :class="item.start >= 5 ? 'have_start' : 'not_start'"></i>
              </span>
              <span class="time">游戏时长 {{item.time}}</span>
            </div>
            <div class="evaluate_text">
              <p v-html="stringWrap(item.evaluate)"></p>
            </div>
          </div>
        </div>
        <div class="check_all" @click="checkAll">
          <span>查看全部评论</span>
          <i></i>
        </div>
      </section>
      <div class="screen_vedio_evaluate_title">
        <p>详细信息</p>
      </div>
      <section class="information">
        <p>简体中文</p>
        <span>语言</span>
        <div class="msg">
          <div>
            <p class="blue">{{gameData.firm}}</p>
            <span>厂商</span>
          </div>
          <div class="msg_right">
            <p class="blue">官网</p>
            <span>开发者网站</span>
          </div>
          <div>
            <p class="blue">88888888</p>
            <span>TapTap玩家交流群</span>
          </div>
          <div class="msg_right">
            <p>{{gameData.download | shortHand}}</p>
            <span>下载量</span>
          </div>
          <div>
            <p>4.0.0</p>
            <span>当前版本</span>
          </div>
          <div class="msg_right">
            <p>1.07GB</p>
            <span>大小</span>
          </div>
        </div>
      </section>
    </div>
    <div class="black_line"></div>
    <section class="detail game_about">
      <p class="game_about_title">相关游戏</p>
      <section class="about_item">
        <ul>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园2</p><span class="start"><i></i></span><span class="score">7.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园3</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>元神</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>元神2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>原神2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
          <li><img src="/img/benghuai3icon.png" alt=""><p>崩坏学园2</p><span class="start"><i></i></span><span class="score">6.2</span></li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    gameData: Object,
    gameName: String
  },
  data () {
    return {
      introduction: '',
      evaluate: []
    }
  },
  methods: {
    // 处理文本换行
    stringWrap (str) {
      // console.log(1)
      // 第一种办法,indexOf查找\n
      // var res = ''
      // while (str.indexOf('\n') !== -1) {
      //   res = res + str.slice(0, str.indexOf('\n') + 1) + '<br/>'
      //   str = str.slice(str.indexOf('\n') + 1)
      // }
      // return res
      // 第二种办法,replace
      // console.log(str instanceof String)
      return typeof str === 'string' && str.replace(/\n/g, '<br/>')
    },
    // 查看全部评论
    checkAll () {
      this.$emit('toggleTab', 'Evaluate')
    },
    // 查看全部截图
    checkScreenShot (id) {
      // this.$route.meta.y = document.documentElement.scrollTop
      this.$router.push({ path: '/screenshot', query: { id: this.gameData.gameid, name: this.gameName } })
    },
    // 查看全部视屏
    checkVedio (id) {
      this.$router.push({ path: '/vedio', query: { id: this.gameData.gameid, name: this.gameName } })
    },
    // 查看更多介绍
    moreIntroduction () {
      this.$refs.introduction.classList.remove('fold')
      this.$refs.more.style.display = 'none'
    }
  },
  watch: {
    async gameData () {
      this.introduction = this.stringWrap(this.gameData.introduction)
      const { data: res } = await this.$http.get(`../resource/evaluate/${this.gameData.name}Evaluate.json`)
      this.evaluate = res.splice(0, 4)
    }
  },
  filters: {
    shortHand (val) {
      return val >= 10000 ? Math.floor(val / 10000) + '万+次下载' : val + '次下载'
    }
  }
}
</script>

<style lang="less">
.detail {
  width: 90%;
  margin-top: 10px;
  margin-bottom: 20px;
  .detail_title {
    font-weight: bold;
    vertical-align: bottom;
  }
  .detail_official {
    display: inline-block;
    background-color: #ECFFFF;
    margin-left: 10px;
    padding: 0 5px;
    font-size: 12px;
    color: #00E3E3;
    font-weight: 200;
    line-height: 21px;
    border-radius: 2px;
  }
  .detail-introdcuct {
    margin-top: 10px;
    font-size: 14px;
    color: #7B7B7B;
  }
  // 折叠效果
  .fold {
    height: 115px;
    overflow: hidden;
  }
  .more {
    font-size: 14px;
    color: #00E3E3;
    span {
      float: right;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .screen_vedio_evaluate_title {
    margin-top: 20px;
    p {
      display: inline;
      font-weight: bold;
    }
    .all {
      float: right;
      font-size: 12px;
      color: #00E3E3;
      line-height: 21px;
    }
  }
  .screen_shot_img, .vedio{
    overflow: auto;
    margin-top: 10px;
    ul {
      max-width: 1200px;
      width: 1040px;
      list-style: none;
      li {
        float: left;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        img {
          border-radius: 5px;
          width: 200px;
          height: 100px;
        }
      }
    }
    .vedio_ul {
      max-width: 1540px;
      width: 1540px;
      .vedio_li {
        width: 300px;
        position: relative;
        span {
          position: absolute;
          top: 120px;
          left: 10px;
          padding: 2px 2px;
          font-size: 12px;
          color: white;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 5px;
        }
        p {
          margin-bottom: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .play {
          font-size: 12px;
          color: #BEBEBE;
        }
      }
      img {
        width: 300px;
        height: 150px;
      }
    }
  }
  .evaluate {
    padding: 15px 15px 10px;
    background-color: #F0F0F0;
    margin-top: 10px;
    border-radius: 5px;
    .evaluate_item {
      margin-bottom: 10px;
      .evaluate_user {
        img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          vertical-align: top;
        }
        .start_time {
          height: 42px;
          margin-left: 5px;
          display: inline-block;
          vertical-align: middle;
          p {
            font-weight: bold;
            font-size: 14px;
          }
          span {
            font-weight: 200;
            font-size: 12px;
            &.time {
              color: #8a8a8a;
              margin-left: 5px;
            }
            i {
              display: inline-block;
              margin-right: 2px;
              width: 12px;
              height: 12px;
            }
            .have_start {
              background-image: url(/font/start1.png);
              background-size: cover;
            }
            .not_start {
              background-image: url(/font/start.png);
              background-size: cover;
            }
          }
          .start {
            vertical-align: middle;
          }
        }
      }
      .evaluate_text {
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #bebebe;
        p {
          font-size: 14px;
          max-height: 76px;
          color: #8a8a8a;
          overflow: hidden;
        }
      }
    }
    .check_all {
      font-size: 0;
      span {
        font-size: 14px;
        color: #8a8a8a;
      }
      i {
        display: inline-block;
        float: right;
        width: 18px;
        height: 18px;
        background-image: url(/font/arrowRight.png);
        background-size: cover;
      }
    }
  }
  .information {
    padding: 15px 15px 10px;
    margin-top: 10px;
    background-color: #F0F0F0;
    border-radius: 5px;
    p {
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
    .msg {
      display: flex;
      flex-wrap: wrap;
      div {
        flex: 50%;
        margin-top: 15px;
      }
      .msg_right {
        border-left: 1px solid #D0D0D0;
        box-sizing: border-box;
        padding-left: 15px;
      }
    }
    .blue {
      color: #00E3E3;
    }
  }
}
.game_about {
  margin-bottom: 40px;
  .game_about_title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .about_item {
    overflow: auto;
    ul {
      width: 900px;
      list-style: none;
      li {
        float: left;
        margin-right: 10px;
        img {
          display: block;
          width: 80px;
          height: 80px;
          margin-bottom: 5px;
        }
        p {
          font-size: 14px;
          margin-bottom: 3px;
        }
        .start {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 3px;
          background-color: #00E3E3;
          vertical-align: middle;
          text-align: center;
          border-radius: 50%;
          i {
            position: relative;
            display: inline-block;
            width: 10px;
            height: 10px;
            background-image: url(/font/whitestart.png);
            background-size: cover;
            // left: 50%;
            // top: 50%;
            // transform: translate(-50%, -50%);
            top: -25%;
          }
        }
        .score {
          font-size: 12px;
          color: #00E3E3;
        }
      }
    }
  }
}
</style>
