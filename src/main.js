import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Info from './components/info.vue'
import Hdu from './components/hdu.vue'

const routes = [
	{ path:'/info', component: Info },
	{ path:'/hdu', component: Hdu }
]
const router = new VueRouter({
	routes
})

import App from './App.vue'
// console.log(Vue);
// console.log(App);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// console.log(Vue);
// console.table(App);