import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    mainCurrent: 0,
    mainGamesTop: 0
  },
  mutations: {
    changePage (state, index) {
      state.currentIndex = index
    },
    changeMainCurrent (state, index) {
      state.mainCurrent = index
    },
    changeMainGamesTop (state, scrollTop) {
      state.mainGamesTop = scrollTop
    }
  },
  actions: {
  },
  modules: {
  }
})
