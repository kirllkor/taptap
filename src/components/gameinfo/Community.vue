<template>
  <div class="community">
    <div class="community_item" v-for="item in community" :key="item.id">
      <!-- 用户信息 -->
      <div class="user">
        <img src="/images/1494.png" alt="">
        <div>
          <p class="name">{{item.username}}</p>
          <p class="time">{{item.time}}</p>
        </div>
      </div>
      <!-- 帖子内容 -->
      <div class="content">
        <p class="title">{{item.title}}</p>
        <p class="text">{{item.text}}</p>
        <div class="img" v-if="item.img"><img :src="item.img" alt=""></div>
        <!-- 点赞回复 -->
        <div class="proto">
          <div class="support"><i></i><span>{{item.supprot | filtSup}}</span></div>
          <div class="talk"><i></i><span>{{item.talk | filtTalk}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameName: String
  },
  data () {
    return {
      community: []
    }
  },
  created () {
    this.getCommunity()
  },
  methods: {
    // 获取评论
    async getCommunity () {
      const { data: res } = await this.$http.get(`/resource/community/${this.gameName}Community.json`)
      this.community = res
    }
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

<style lang="less">
.community {
  width: 90%;
  margin-top: 10px;
  margin-bottom: 25px;
  .community_item {
    border-bottom: 1px solid #bfbfbf;
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
}
</style>
