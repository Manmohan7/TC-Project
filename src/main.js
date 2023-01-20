import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import Box from "./components/Box.vue"
import Button from "./components/Button.vue"
import ImageContainer from "./components/ImageContainer.vue"

// credential file
import creds from '../cred'


// global components
Vue.component('Box', Box)
Vue.component('Button', Button)
Vue.component('ImageContainer', ImageContainer)

// global functions
Vue.mixin({
  methods: {
    authenticateUser(username, password) {
      return (username === creds.user && password === creds.pass)
    }
  }
})

// main Instance
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
