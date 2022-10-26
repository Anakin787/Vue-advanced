import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import detail from '../views/detail.vue'
import create from '../views/create.vue'
import modify from '../views/modify.vue'
import comment from '../views/comment.vue'

Vue.use(VueRouter)

//라우터 순서 중요!
const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/new',
    component: create
  },
  {
    path: '/:id',
    component: detail
  },
  {
    path: '/mod/:id',
    component: modify
  },
  {
    path: '/comment',
    component: comment
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
