<template>
  <div class="community">
    <community-item v-for="(item, index) in community" :key="item.id" :comData="item" :length="community.length" :itemIndex="index"></community-item>
  </div>
</template>

<script>
import CommunityItem from '../commit/CommunityItem.vue'
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
  components: {
    CommunityItem
  }
}
</script>

<style lang="less">
.community {
  width: 90%;
  margin-top: 10px;
  margin-bottom: 25px;
}
</style>
