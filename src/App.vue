<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <h1> {{name}} </h1>
        <ul v-for="item in items">
          <li>
            <router-link to="/info">{{item.categoryOne}}</router-link>
          </li>
          <li>
            <router-link to="/hdu">{{item.categoryTwo}}</router-link>
          </li>
          <li>
            <router-link to="/test1">{{item.categoryThree}}</router-link>
          </li>
          <li>
            <router-link to="/test2">{{item.categoryFour}}</router-link>
          </li>
        </ul>
        <input v-model="name"></input>
        <p>{{time}}</p>
        <p v-on:click="showinfo">{{test}}</p>
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
      test: 'fuck you',
      items:[{categoryOne:"个人简历"},{categoryTwo:"我的大学"},{categoryThree:"成长之路"},{categoryFour:"博客技术"}]
    }
  },
  // props:['test'],
  mounted() {
    //     Jsonp('http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=7EoCx4LHg0PF1XpXMybxM8KYCxk542X0', null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     // console.log($test);
    //     console.log(test);        
    //     $test=data.message;
    //     console.log(data);
    //   }
    // })
    // Axios({
    //   method: 'get',
    //   url: 'http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=7EoCx4LHg0PF1XpXMybxM8KYCxk542X0'
    // }).then((response) => {
    //   console.log(response);
    //   this.test = response.data.message;
    // })
  },
  methods:{
      showinfo:function(){
            Axios({
      method: 'get',
      url: 'http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=7EoCx4LHg0PF1XpXMybxM8KYCxk542X0',
      // headers: {'X-Requested-With': 'XMLHttpRequest'},
      // withCredentials: true
    }).then((response) => {
      console.log(response);
      this.test = "输出:"+response.data.message+",获取百度api，跨域成功";
    })
  }
}
}
</script>
