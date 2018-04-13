import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/containers/Home/Home.vue'
 import HotMusic from '../components/containers/HotMusic/HotMusic.vue'
export default new Router({
  routes: [
    {
      path: '', redirect: '/home'
    },
    {
      path: '/home', name: 'home',component:Home
    },
    {
      path: '/HotMhotusic', name: 'HotMhotusic', component: HotMusic
    }
  ]
})
