<template>
  <div>
    <section class="main-vedio">
      <vedio-item v-for="(item, index) in vedioList" :key="index" :gameData="item" :length="vedioList.length" :itemIndex="index"></vedio-item>
    </section>
  </div>
</template>

<script>
import VedioItem from '../commit/VedioItem.vue'
export default {
  data () {
    return {
      vedioList: [],
      scrollTop: 0
    }
  },
  async created () {
    const { data: res } = await this.$http.get('/resource/vedio/mainvedio.json')
    this.vedioList = res
  },
  components: {
    VedioItem
  },
  // 离开路由触发函数
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
  // keep-alive的activated钩子函数
  activated () {
    document.documentElement.scrollTop = this.scrollTop
  }
}
</script>

<style lang="less">
  .main-vedio {
    margin-top: 70px;
  }
</style>
