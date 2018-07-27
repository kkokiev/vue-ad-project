import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Login from '@/components/pages/Auth/Login'
import Registration from '@/components/pages/Auth/Registration'
import Ad from '@/components/pages/Ads/Ad'
import AdList from '@/components/pages/Ads/AdList'
import NewAd from '@/components/pages/Ads/NewAd'
import Orders from '@/components/pages/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'Ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'List',
      component: AdList
    },
    {
      path: '/new',
      name: 'NewAd',
      component: NewAd
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }
  ],
  mode: 'history'
})
