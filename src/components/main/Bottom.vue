<template>
  <div>
    <div class="bottom">
      <img class="icon" :src="bottomData.gameIcon" alt="">
      <div class="introduce">
        <p class="introduce_title">{{bottomData.gameTitle}}</p>
        <p class="introduce_text">{{bottomData.gameIntroduce}}</p>
      </div>
      <div class="evaluate">
        <p class="score">{{bottomData.score}}</p>
        <p>{{bottomData.scoreNumber}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bottomData: Object
  }
}
</script>

<style lang="less">
  .bottom {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    bottom: 5px;
    // background-color: antiquewhite;
    .icon {
      position: relative;
      width: 50px;
      height: 50px;
      z-index: 1;
    }
    .introduce {
      width: 55%;
      .introduce_title {
        font-size: 20px;
        font-weight: bold;
        line-height: 30px;
      }
      .introduce_text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 20px;
      }
    }
    .evaluate {
      width: 85px;
      text-align: center;
      .score {
        font-size: 16px;
        line-height: 30px;
        font-weight: bold;
      }
      p {
        line-height: 20px;
      }
    }
  }
</style>
