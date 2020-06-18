<template>
  <div class="back-row"><i @click="back"></i></div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.back-row{
  position: fixed;
  height: 40px;
  width: 100%;
  background-color: #00CACA;
  z-index: 9;
  i {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url(/font/arrow_left.png);
    background-size: cover;
  }
}
</style>
