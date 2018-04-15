import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/containers/Home/Home.vue'
 import HotMusic from '../components/containers/HotMusic/HotMusic.vue'
 import Geren from '../components/containers/geren/geren.vue'
 import Bofang from '../components/containers/bofang/bofang.vue'
export default new Router({
  routes: [
    {
      path: '', redirect: '/home'
    },
    {
      path: '/home', name: 'home',component:Home
    },
    {
      path: '/hotmusic', name: 'hotmusic', component: HotMusic
    },
    {
      path: '/geren', name: 'geren', component: Geren
    },
    {
      path: '/bofang/:id', name: 'bofang', component: Bofang, props: true
    }
  ]
})
