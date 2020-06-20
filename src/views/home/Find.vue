<template>
  <div>
    <section class="swiper">
      <ul ref="swiper">
        <li><img src="/img/benghuai3.jpg" alt=""></li>
        <li><img src="/img/xiyang.jpg" alt=""></li>
        <li><img src="/img/nextsword.jpg" alt=""></li>
        <li><img src="/img/benghuai3.jpg" alt=""></li>
      </ul>
      <ul class="point">
        <li :class="{choose: currentPage == 0 || currentPage == 3}"></li>
        <li :class="{choose: currentPage == 1}"></li>
        <li :class="{choose: currentPage == 2}"></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      // 屏幕宽度
      vw: 0,
      // 轮播图的当前索引
      currentPage: 0
    }
  },
  // 离开路由函数
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.documentElement.scrollTop
    next()
  },
  // keep-alive的activated钩子函数
  activated () {
    document.documentElement.scrollTop = this.scrollTop
  },
  mounted () {
    // 轮播图当前索引
    this.vm = document.documentElement.offsetWidth
    var timer = setInterval(animate, 3000)
    // 一个动画的步数
    var site = 0
    // 一步走多少距离
    var step = 5
    var that = this
    // 动画函数
    function animate () {
      site = 0
      timer = setInterval(() => {
        site += step
        that.$refs.swiper.style.right = (that.currentPage * that.vm) + site + 'px'
        if (site >= that.vm) {
          clearInterval(timer)
          that.currentPage++
        }
      }, 10)
      if (that.currentPage === 3) {
        that.$refs.swiper.style.right = 0
        that.currentPage = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  // 清除图片撑大的4px
  font-size: 0;
  overflow: hidden;
  ul{
    position: relative;
    width: 400%;
    max-width: 400%;
    li {
      width: 25%;
      float: left;
      img {
        width: 100%;
      }
    }
  }
  .point {
    width: 50px;
    display: flex;
    top: -13px;
    li {
      width: 8px;
      height: 8px;
      background-color: #bfbfbf;
      border-radius: 50%;
    }
    .choose {
      background-color: white;
    }
  }
}
</style>
