import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
  },

  mutations: {
    setLoading(state, value) {
      state.loading = value
    },
  },

  getters: {
    getLoading(state) {
      return state.loading
    },
  },
})
