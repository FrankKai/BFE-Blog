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
import Axios from 'axios'
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    Axios.get('http://v.juhe.cn/nba/top5.php?key=1e98013a680418427fcf0f93b9973324')
    .then(function(response){
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });
    axios({
        method:'POST',//方法
        url:'http://v.juhe.cn/nba/top5.php?key=1e98013a680418427fcf0f93b9973324',//地址
        headers: {
        'Access-Control-Allow-Origin': '*'
        }
        // data:{//参数
        //     firstName:'Fred',
        //     lastName:'Flintstone'
        // }
    }).then(function(response){
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });
    // Axios.get("http://v.juhe.cn/nba/top5.php?key=1e98013a680418427fcf0f93b9973324").then(response => {this.test = response.reason})
  //   axios.get('http://v.juhe.cn/nba/all_team_info.php?key=1e98013a680418427fcf0f93b9973324')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  }
})
// console.log(Vue);
// console.table(App);