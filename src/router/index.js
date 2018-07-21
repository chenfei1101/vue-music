import Vue from 'vue'
import Router from 'vue-router'

import Login from 'view/Login/index.vue'
let routes = [{
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    title: 'login'
  }
}, {
  path: '/',
  component: Login
}]
// import { Router as LoginRouter } from './Login/index'
// LoginRouter.forEach(item => routes.push(item))

Vue.use(Router)
const router = new Router({
  routes: routes
})
export default router
