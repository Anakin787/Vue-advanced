import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
  },
  mutations: { //데이터 변경 - commit로
    setData(state, data) {
      state.data = data
    },
    addData(state, data) {
      state.data.push(data)
    }
  },
  actions: { //ajax요청 - dispatch로
    getData(context) { //action에 추가한 파라미터는 대충 $store을 뜻함`
      axios.get('http://192.168.70.212/posts').then((a) => { context.commit('setData', a.data) })
    }
  },
  modules: {
  }
})
