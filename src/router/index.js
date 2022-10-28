import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Detail from '../views/ViewData.vue'
import Create from '../views/CreateNewList.vue'
import Modify from '../views/ModifyList.vue'

Vue.use(VueRouter)

//라우터 순서 중요!
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'Create',
    component: Create
  },
  {
    path: '/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/mod/:id',
    name: 'Modify',
    component: Modify
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
