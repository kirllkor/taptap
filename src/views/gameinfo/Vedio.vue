<template>
  <div>
    <back></back>
    <div class="vedio-content">
      <vedio-item v-for="(item, index) in vedioList" :gameData="item" :key="index" :length="vedioList.length" :itemIndex="index"></vedio-item>
    </div>
  </div>
</template>

<script>
import Back from '@/components/commit/Back.vue'
import VedioItem from '../../components/commit/VedioItem.vue'

export default {
  components: {
    Back,
    VedioItem
  },
  data () {
    return {
      gameName: '',
      vedioList: []
    }
  },
  methods: {
    async getVedioList () {
      const { data: res } = await this.$http.get(`/resource/vedio/${this.gameName}Vedio.json`)
      this.vedioList = res
    }
  },
  created () {
    this.gameName = this.$route.query.name
    this.getVedioList()
  }
}
</script>

<style lang="less" scoped>
.vedio-content {
  padding-top: 50px;
}
</style>
