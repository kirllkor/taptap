<template>
  <div class="evaluate_page">
    <div class="grade">
      <div class="gard_left">
        <div style="font-size: 0;">
          <span class="start">
          </span>
          <span class="score">7.6</span>
        </div>
        <p>TapTap 评分</p>
      </div>
      <div class="gard_right">
        <div>
          <span class="scroll">
            <span style="width: 55%;"></span>
          </span>
          <span>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
        <div>
          <span class="scroll">
            <span style="width: 15%;"></span>
          </span>
          <span>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
        <div>
          <span class="scroll">
            <span style="width: 10%;"></span>
          </span>
          <span>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
        <div>
          <span class="scroll">
            <span style="width: 5%;"></span>
          </span>
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <div>
          <span class="scroll">
            <span style="width: 15%;"></span>
          </span>
          <span>
            <i></i>
          </span>
        </div>
      </div>
      <p><span>最新版本</span> 7.4 <span>/</span> <span>最新7天</span> 7.4 </p>
    </div>
    <div class="my_eva">
      <p>我的评价</p>
      <div>
        <div class="my_icon">
          <img src="/images/1494.png" alt="">
        </div>
        <div class="eva_start">
          <!-- <i @click="grade(1)"></i>
          <i @click="grade(2)"></i>
          <i @click="grade(3)"></i>
          <i @click="grade(4)"></i>
          <i @click="grade(5)"></i> -->
          <i v-for="(item, index) in 5" :key="index" @click="grade(index + 1)" :class="{choose_start: start > index}"></i>
        </div>
        <div class="alt">轻点发布我的评价</div>
      </div>
    </div>
    <div class="player_eva">
      <p>玩家评价</p>
      <div class="player_item" v-for="item in evaluate" :key="item.id">
        <div>
          <!-- 头像 -->
          <img class="player_icon" src="/images/1494.png" alt="">
          <div class="player_name">
            <!-- 用户名 -->
            <p>{{item.userName}}</p>
            <!-- 评论时间 -->
            <p class="eva_time">4tianqian</p>
          </div>
        </div>
        <!-- 评分和游戏时长 -->
        <div>
          <span class="start">
            <i :class="{choose: item.start >= 1}"></i>
            <i :class="{choose: item.start >= 2}"></i>
            <i :class="{choose: item.start >= 3}"></i>
            <i :class="{choose: item.start >= 4}"></i>
            <i :class="{choose: item.start >= 5}"></i>
          </span>
          <!-- 游戏时长 -->
          <span class="game_time">游戏时长 {{item.time}}</span>
        </div>
        <!-- 评论 -->
        <div class="eva_text">
          <p>{{item.evaluate}}</p>
        </div>
        <!-- 点赞评论信息 -->
        <div class="eva_msg">
          <span>来自OPPO A5</span>
          <span>{{item.talk | initNum}}</span>
          <i class="talk"></i>
          <span>{{item.stamp | initNum}}</span>
          <i class="stamp"></i>
          <span>{{item.support | initNum}}</span>
          <i class="support"></i>
          <span>{{item.fun | initNum}}</span>
          <i class="fun"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameData: Object,
    gameName: String
  },
  data () {
    return {
      start: 0,
      evaluate: []
    }
  },
  methods: {
    grade (score) {
      this.start = score
    },
    // 获取评论数据
    getEvaluate () {
      this.$http.get(`../resource/${this.gameName}Evaluate.json`).then(res => {
        this.evaluate = res.data
      })
    }
  },
  created () {
    // console.log(this.gameData)
    this.getEvaluate()
    // console.log(this.evaluate)
  },
  filters: {
    initNum (val) {
      if (val === 0) {
        return ''
      } else {
        return val
      }
    }
  }
}
</script>

<style lang="less">
.evaluate_page {
  width: 90%;
  padding: 20px 0;
  .grade {
    padding: 0 5% 20px;
    border-bottom: 1px solid #E0E0E0;
    .gard_left {
      display: inline-block;
      height: 55px;
      .start{
        display: inline-block;
        width: 26px;
        height: 26px;
        margin-right: 5px;
        background-color: #00E3E3;
        border-radius: 50%;
        vertical-align: bottom;
        background-image: url(/images/whitestart.png);
        background-repeat: no-repeat;
        background-position: center;
      }
      .score {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        font-size: 26px;
        font-weight: bold;
        color: #00E3E3;
        // background-color: antiquewhite;
      }
      p {
        margin-top: 10px;
        color: #00E3E3;
        font-size: 12px;
        font-weight: bold;
      }
    }
    .gard_right {
      display: inline-block;
      float: right;
      div {
        height: 11px;
        font-size: 0;
        &>span {
          float: right;
          display: inline-block;
          height: 8px;
          i {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-left: 3px;
            background-image: url(/images/start.png);
            background-size: cover;
          }
        }
        .scroll {
          position: relative;
          top: 2px;
          display: inline-block;
          height: 5px;
          width: 130px;
          margin-left: 5px;
          background-color: #E0E0E0;
          span {
            display: inline-block;
            height: 5px;
            background-color: #00CACA;
          }
        }
      }
    }
    &>p {
      margin-top: 10px;
      text-align: center;
      font-size: 14px;
      span {
        color: #BEBEBE;
      }
    }
  }
  .my_eva {
    p {
      font-weight: bold;
      margin: 10px 0;
    }
    &>div {
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: #F0F0F0;
      text-align: center;
      border-radius: 5px;
      .my_icon {
        img {
          display: block;
          width: 40px;
          height: 40px;
          vertical-align: middle;
          border-radius: 50%;
        }
      }
      .eva_start {
        margin-top: 15px;
        width: 200px;
        display: flex;
        justify-content: space-between;
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url(/images/start.png);
          background-size: cover;
        }
        .choose_start {
          background-image: url(/images/start1.png)
        }
      }
    }
    .alt {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 200;
      color: #ADADAD;
    }
  }
  .player_eva {
    padding-top: 20px;
    p {
      font-weight: bold;
    }
    .player_item {
      margin-top: 10px;
      padding: 10px 10px;
      background-color: #F0F0F0;
      border-radius: 5px;
      .player_icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .player_name {
        display: inline-block;
        margin-left: 10px;
        vertical-align: middle;
        p {
          font-size: 15px;
        }
        .eva_time {
          font-size: 12px;
          font-weight: 200;
          color: #BEBEBE;
        }
      }
      span {
        vertical-align: middle;
      }
      // 评分
      .start {
        margin-right: 5px;
        i {
          margin-right: 2px;
          display: inline-block;
          width: 12px;
          height: 12px;
          background-image: url(/images/start.png);
          background-size: cover;
          &.choose {
            background-image: url(/images/start1.png);
          }
        }
      }
      // 游戏时长
      .game_time {
        font-size: 12px;
        color: #BEBEBE;
        line-height: 20px;
      }
      .eva_text {
        padding: 10px 0;
        p {
          font-size: 14px;
          color: #8E8E8E;
          font-weight: 400;
        }
      }
      .eva_msg {
        font-size: 0;
        & :first-child{
          float: none;
          margin: 0;
        }
        i, span {
          font-size: 14px;
          float: right;
          vertical-align: middle;
          color: #8E8E8E;
        }
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        span {
          margin-left: 5px;
        }
        i {
          display: inline-block;
          height: 15px;
          width: 15px;
          margin-left: 20px;
          background-size: cover;
        }
        .talk {
          background-image: url(/font/talk.png);
        }
        .stamp {
          background-image: url(/font/stamp.png);
        }
        .support {
          background-image: url(/font/support.png);
        }
        .fun {
          background-image: url(/font/fun.png);
        }
      }
    }
  }
}
</style>
