<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keep" :key="$route.name"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keep" :key="$route.name"/>
  </div>
</template>

<script>
export default {
  mounted () {
  }
}
</script>

<style lang="less">
  *{
   margin: 0 auto;
   padding: 0;
   max-width: 900px;
  }
  body {
    min-width: 350px;
  }
  [v-cloak] {
    display: none;
  }
  // 当图片的src为空时,透明度为0
  img:not([src]) {
    opacity: 0;
  }
</style>
