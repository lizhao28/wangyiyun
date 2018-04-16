import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/containers/Home/Home.vue'
import HotMusic from '../components/containers/HotMusic/HotMusic.vue'
import Geren from '../components/containers/geren/geren.vue'
import SearchInput from '../components/containers/SearchInput/SearchInput'
import Bofang from '../components/containers/bofang/bofang.vue'
import LoginR from '../components/commons/LoginR/LoginR'
import PhoneLogin from '../components/containers/PhoneLogin/PhoneLogin'
import PhoneRegister from '../components/containers/PhoneRegister/PhoneRegister'
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
    },
    {
      path: '/SearchInput', name: 'SearchInput', component: SearchInput
    },
    {
      path: '/LoginR', name: 'LoginR', component: LoginR
    },
    {
      path: '/PhoneLogin', name: 'PhoneLogin', component: PhoneLogin
    },
    {
      path: '/PhoneRegister', name: 'PhoneRegister', component: PhoneRegister
    },
    
  ]
})
