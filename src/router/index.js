import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'

import login from '@/components/home/login/login'
import register from '@/components/home/register/register'
import add from '@/components/home/add/add'
import bookList from '@/components/home/bookList/bookList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home,
      children: [
        // {
        //   redirect: 'bookList',
        //   component: bookList
        // },
        {
          path: 'bookList',
          component: bookList
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        },
        {
          path: 'add',
          component: add
        }
      ]
    }
  ]
})