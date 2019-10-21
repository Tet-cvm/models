import Vue from 'vue'
import VueRouter from 'vue-router'
import Model from './Model.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/model',
    name: 'model',
    component: Model
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
