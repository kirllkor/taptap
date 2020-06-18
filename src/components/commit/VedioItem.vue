<template>
  <div>
    <div class="vedio-item">
      <div class="user">
        <img :src="gameData.icon" alt="">
        <div class="name">
          <p>{{gameData.name}}</p>
          <p class="time">{{gameData.time}} | {{gameData.play}}播放</p>
        </div>
      </div>
      <p class="title">{{gameData.title}}</p>
      <div class="vedio">
        <img :src="gameData.img" alt="">
      </div>
      <div class="vedio-bottom">
        <span class="support"><i></i>{{gameData.support}}</span>
        <span class="talk"><i></i>{{gameData.talk}}</span>
        <span class="share"><i></i>{{gameData.share}}</span>
      </div>
    </div>
    <div v-if="itemIndex !== length-1" class="black_line"></div>
    <div v-else style="margin-top: 20px;"></div>
  </div>
</template>

<script>
export default {
  props: {
    gameData: Object,
    length: Number,
    itemIndex: Number
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.vedio-item {
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.user {
  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .name {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    .time {
      font-size: 12px;
      color: #bfbfbf;
    }
  }
}
.title {
  margin-top: 10px;
}
.vedio {
  margin-top: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  };
}
.vedio-bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 3px;
    background-size: cover;
    vertical-align: bottom;
  }
  span {
    font-size: 12px;
    color: #bfbfbf;
    vertical-align: middle;
  }
  .support {
    i {
      background-image: url(/font/support.png);
    }
  }
  .talk {
    i {
      background-image: url(/font/talk.png);
    }
  }
  .share {
    i {
      background-image: url(/font/share.png);
    }
  }
}
</style>
