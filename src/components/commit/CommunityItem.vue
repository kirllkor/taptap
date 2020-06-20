<template>
  <section :class="length - 1 > itemIndex ? 'community-item' : 'community-item-nobord'" >
    <!-- 用户信息 -->
    <section class="user">
      <img src="/images/1494.png" alt="">
      <div>
        <p class="name">{{comData.username}}</p>
        <p class="time">{{comData.time}}</p>
      </div>
    </section>
    <!-- 帖子内容 -->
    <section class="content">
      <p class="title">{{comData.title}}</p>
      <p class="text">{{comData.text}}</p>
      <div class="img" v-if="comData.img"><img :src="comData.img" alt=""></div>
      <!-- 点赞回复 -->
      <div class="proto">
        <div class="support"><i></i><span>{{comData.supprot | filtSup}}</span></div>
        <div class="talk"><i></i><span>{{comData.talk | filtTalk}}</span></div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props:
  {
    comData: Object,
    length: Number,
    itemIndex: Number
  },
  data () {
    return {}
  },
  filters: {
    filtSup (val) {
      return val === 0 ? '点赞' : val
    },
    filtTalk (val) {
      return val === 0 ? '评论' : val
    }
  }
}
</script>

<style lang="less" scoped>
  .community-item {
    border-bottom: 1px solid #bfbfbf;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .community-item-nobord {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .user {
    font-size: 0;
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
    div {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      .name {
        font-size: 14px;
      }
      .time {
        font-size: 12px;
        color: #9D9D9D;
      }
    }
  }
  .content {
    margin: 10px 0 0;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .text {
      margin-top: 5px;
      font-size: 14px;
      color: #9D9D9D;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    // 图片
    .img {
      padding: 10px 0 0;
      img {
        box-sizing: border-box;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #bfbfbf;
      }
    }
    .proto {
      margin-top: 10px;
      display: flex;
      color: #bfbfbf;
      .support {
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url(/font/support.png);
          background-size: cover;
          vertical-align: middle;
        }
      }
      .talk {
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url(/font/talk.png);
          background-size: cover;
          vertical-align: middle;
        }
      }
      span {
        margin-left: 5px;
        font-size: 14px;
        line-height: 24px;
        vertical-align: middle;
      }
    }
  }
</style>
