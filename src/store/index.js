import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
  },
  mutations: { //데이터 변경 - commit로 
    setData(state, data) {
      state.data = data
    },
    addData(state, data) {
      state.data.push(data)
    },
    findData(state, data) {
      state.data.indexOf()
    }
  },
  actions: { //ajax요청 - dispatch로
    getData(context) { //action에 추가한 파라미터는 대충 $store을 뜻함`
      axios.get('http://192.168.70.212/posts').then((a) => { context.commit('setData', a.data) })
    },
    postData(context, payload) {
      context.commit('addData', payload); //입력한걸 받아 오고싶으면
      axios.post('http://192.168.70.212/posts', payload).then(response => console.log(response)).catch(err => console.log(err))
    },
    delData(_, payload) {
      axios.delete(`http://192.168.70.212/posts/${payload}`)
    },
  },

  modules: {
  }
})
