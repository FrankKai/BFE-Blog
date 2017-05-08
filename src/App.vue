<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <h1> {{name}} </h1>
        <ul>
          <li>
            <router-link to="/info">个人简历</router-link>
          </li>
          <li>
            <router-link to="/hdu">我的大学</router-link>
          </li>
          <li>
            <router-link to="/test1">成长之路</router-link>
          </li>
          <li>
            <router-link to="/test2">博客技术</router-link>
          </li>
        </ul>
        <input v-model="name"></input>
        <p>{{time}}</p>
        <p>{{test}}</p>
      </div>
      <div class="content">
        <transition name="bounce" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
          <router-view></router-view>
  
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Jsonp from 'jsonp'
import anime from 'animejs'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '趁你还年轻',
      time: '最后加载时间为：' + new Date(),
      test: 'fuck you'
    }
  },
  mounted() {
    //     Jsonp('http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=7EoCx4LHg0PF1XpXMybxM8KYCxk542X0', null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //     // $data.test=data.message;
    //   }
    // })
    Axios({
      method: 'get',
      url: 'http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=7EoCx4LHg0PF1XpXMybxM8KYCxk542X0'
    }).then((response) => {
      console.log(response);
      this.test = response.data.message;
    })
  }
}
</script>

