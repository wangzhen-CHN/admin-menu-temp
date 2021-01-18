import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuSide:[]
  },
  mutations: {
    updateState: (state, params) => {
      console.log('更新State: ', params)
      for (const key in params) {
        state[key] = params[key]
      }
    },
  },
  actions: {
    getList ({ commit }) {
      axios.get('https://api.coder.wang/top/playlist/highquality?limit=13&cat=华语')
        .then(response => {
        console.log('🍓🍓🍓 ==> response', response)
          const musicList = response.data.playlists
          commit('updateState', { musicList })
        })
    },
  },
  modules: {
  }
})
