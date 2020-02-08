import Vue from 'vue'
import VueRouter from 'vue-router'
import Send from '../views/Send.vue'
import Claim from '../views/Claim.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/send',
    name: 'send',
    component: Send
  },
  {
    path: '/claim',
    name: 'claim',
    component: Claim
  },
  {
    path: '*',
    name: 'send',
    component: Send
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router