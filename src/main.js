// require( "./scss/main.scss");
import Normalize from 'normalize.css'
import Animate from 'animate.css'
import Main from './scss/main.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Info from './components/info.vue'
import Hdu from './components/hdu.vue'
import Test1 from './components/test1.vue'
import Test2 from './components/test2.vue'

const routes = [
	{ path:'/info', component: Info },
	{ path:'/hdu', component: Hdu },
  { path:'/test1', component: Test1 },
	{ path:'/test2', component: Test2 }
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