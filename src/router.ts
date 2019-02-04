import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/loginreg/login.vue')
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      component: () => import('./pages/admin/home.vue')
    }
  ]
})
