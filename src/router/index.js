import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

export default router
