import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// 清除缓存组件方法
Vue.prototype.clearCache = function (key) {
  // 清除keep-alive缓存
  const vnode = this.$vnode
  const parentVnode = vnode && vnode.parent
  if (parentVnode && parentVnode.componentInstance && parentVnode.componentInstance.cache) {
    this.$destroy()
    const cache = parentVnode.componentInstance.cache
    cache[key] = null
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
