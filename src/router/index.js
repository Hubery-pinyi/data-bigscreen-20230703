import Vue from 'vue'
import VueRouter from 'vue-router'
import groupScreen from '../views/groupScreen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'groupScreen',
    component: groupScreen
  },
  {
    path: '/groupScreen',
    name: 'groupScreen',
    component: groupScreen
  },
  {
    path: '/changzhouscreen',
    name: 'changzhouScreen',
    component: () => import('../views/changzhouScreen')
  }, {
    path: '/hangzhouscreen',
    name: 'hangzhouScreen',
    component: () => import('../views/hangzhouScreen')
  }

]

const router = new VueRouter({
  routes
})

export default router
