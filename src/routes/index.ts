import Vue from 'vue'
import Router from 'vue-router'
import WebsiteIndex from '../pages/index.vue'

Vue.use(Router)
const router: any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'WebsiteIndex',
      component: WebsiteIndex
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login/login.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../pages/admin/index.vue'),
      children:[
        {
          path: '/admin/default',
          name: 'adminDefault',
          component: () => import('../pages/admin/default.vue'),
        }
      ]
    },
  ]
})
export default router;
