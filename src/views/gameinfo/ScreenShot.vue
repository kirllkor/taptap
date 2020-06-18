<template>
  <div class="screen-shot">
    <back></back>
    <div class="screen-ul">
      <ul>
        <li v-for="(item, index) in leftList" :key="index">
          <div class="li-item">
            <img :src="item.img" alt="">
            <div class="li-item-bottom">
              <p class="title">{{item.title}}</p>
              <img class="li-item-icon" :src="item.icon" alt=""><span>{{item.name}}</span>
              <div>
                <span>{{item.talk | numFit}}</span>
                <i class="talk"></i>
                <span>{{item.support | numFit}}</span>
                <i></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li v-for="(item, index) in rightList" :key="index">
          <div class="li-item">
            <img :src="item.img" alt="">
            <div class="li-item-bottom">
              <p class="title">{{item.title}}</p>
              <img class="li-item-icon" :src="item.icon" alt=""><span>{{item.name}}</span>
              <div>
                <span>{{item.talk | numFit}}</span>
                <i class="talk"></i>
                <span>{{item.support | numFit}}</span>
                <i></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Back from '../../components/commit/Back.vue'
export default {
  data () {
    return {
      gameId: 0,
      name: '',
      leftList: [],
      rightList: []
    }
  },
  created () {
    this.gameId = this.$route.query.id
    this.name = this.$route.query.name
    this.getScreenShot()
  },
  mounted () {
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    // 获取截图数据函数
    async getScreenShot () {
      const { data: left } = await this.$http.get(`../resource/screenshot/${this.name}ScreenShotLeft.json`)
      this.leftList = left
      const { data: right } = await this.$http.get(`../resource/screenshot/${this.name}ScreenShotRight.json`)
      this.rightList = right
    }
  },
  filters: {
    numFit (val) {
      return val === 0 ? '' : val
    }
  },
  components: {
    Back
  }
}
</script>

<style lang="less">
  .screen-shot {
    .screen-ul {
      display: flex;
      justify-content: space-between;
      width: 90%;
      position: relative;
      top: 50px;
      ul {
        list-style: none;
        li {
          width: 90%;
          .li-item {
            border-radius: 5px;
            overflow: hidden;
            font-size: 0;
            margin-bottom: 20px;
            box-shadow: 0 1px 10px 0px #bfbfbf;
            img {
              width: 100%;
            }
            .li-item-bottom {
              padding: 5px 5px 10px;
              border-radius: 0 0 5px 5px;
              .title {
                font-size: 14px;
                margin-bottom: 5px;
              }
              .li-item-icon {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                vertical-align: middle;
              }
              span {
                font-size: 12px;
                vertical-align: middle;
              }
              div {
                float: right;
                position: relative;
                top: 3px;
                display: inline-block;
                height: 20px;
                vertical-align: middle;
                span, i {
                  float: right;
                  color: #bfbfbf;
                  vertical-align: middle;
                  margin-left: 3px;
                }
                i {
                  position: relative;
                  top: 1px;
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background-image: url(/font/support.png);
                  background-size: cover;
                  &.talk {
                    background-image: url(/font/talk.png);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
