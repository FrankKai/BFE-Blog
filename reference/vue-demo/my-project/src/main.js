import Vue from 'vue'
import App from './App.vue'
console.log(Vue);
console.log(App);
new Vue({
  el: '#app',
  render: h => h(App)
})
console.log(Vue);
console.table(App);