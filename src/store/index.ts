import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active_tab: "Start"
  },
  mutations: {
    setActiveTab(state, tabName) {
      state.active_tab = tabName;
    }
  },
  actions: {
  },
  modules: {
  }
})
