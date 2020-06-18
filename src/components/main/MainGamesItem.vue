<template>
  <div>
    <slot></slot>
    <div class="root" @click="showGameInfo(gameData.gameid)" :class="index === length - 1 ? 'no-border' : ''">
      <p>{{gameData.sort}}</p>
      <div class="bgImg">
        <img :src="gameData.gameImg" alt="">
      </div>
      <div class="listBottom">
        <bottom :bottomData="gameData"></bottom>
      </div>
    </div>
  </div>
</template>

<script>
import Bottom from './Bottom.vue'
export default {
  props: {
    gameData: Object,
    index: Number,
    length: Number
  },
  components: {
    Bottom
  },
  methods: {
    showGameInfo (id) {
      this.$router.push(`/gameinfo/${id}`)
    }
  }
}
</script>

<style lang="less">
  .root {
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 5px;
    border-bottom: 1px solid #D0D0D0;
    p {
      font-size: 10px;
      color: darkgray;
    }
    .bgImg {
      width: 100%;
      margin-top: 5px;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .listBottom {
      .bottom {
        position: static;
        padding: 0;
        height: 40px;
        margin-bottom: 10px;
        .icon {
          width: 40px;
          height: 40px;
        }
        .introduce {
          .introduce_title {
            font-size: 16px;
            line-height: 20px;
          }
          .introduce_text{
            font-size: 12px;
          }
        }
        .evaluate {
          .score {
            line-height: 20px;
          }
          p {
            color: #48D1CC;
          }
        }
      }
    }
  }
  .no-border {
    border: none !important;
  }
</style>
