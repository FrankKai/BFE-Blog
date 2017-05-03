<template>
  <div id="app"> 
    <div class="main">
      <div class="sidebar">
          <h1> {{name}} </h1>   
          <ul>
              <li><router-link to="/info">个人简历</router-link></li>
              <li><router-link to="/hdu">我的大学</router-link></li>
              <li><router-link to="/test1">成长之路</router-link></li>
              <li><router-link to="/test2">博客技术</router-link></li>
          </ul>
          <input v-model="name"></input>
          <p>{{time}}</p>
          <p>{{test}}</p>
       </div> 
        <div class="content">
          <router-view></router-view>
        </div>
     </div> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '趁你还年轻',
		  time: '最后加载时间为：' + new Date(),
      test: 'fuck you'
    }
  }
}
</script>

<style lang="scss">

// html,body,p,ul,li,h1,h2,h3,h4{padding: 0;margin:0;}
// ul{list-style: none;}

// $fontSize:20px;
// $white:#fff;
// .main {
//   width: 100%;
// }
// html{background:#FBE8D3;}
// @keyframes bounce {
//   60%, 80%, to {
//     transform: translateY(300px);
//     animation-timing-function: ease;
//   }
//   70% { transform: translateY(200px); }
//   90% { transform: translateY(260px); }
// }

// @mixin beveled-corners($bg,$tl:0,$tr:$tl,$br:$tl,$bl:$tr){
// 	background:$bg;
// 	background:
// 		linear-gradient(135deg,transparent $tl,$bg 0) top left,
// 		linear-gradient(225deg,transparent $tl,$bg 0) top right,
// 		linear-gradient(-45deg,transparent $tl,$bg 0) bottom right,
// 		linear-gradient(45deg,transparent $tl,$bg 0) bottom left;
// 	background-size: 51% 51%;
// 	background-repeat: no-repeat;
// }

// .sidebar {
//   position: fixed;
//   top:50px;
//   width: 20%;
//   text-align: center;
//   @include beveled-corners(#70A1D7,20px,5px);
//   padding:40px 0;
// }
// .todos {
//   height: 30px;
//   @include beveled-corners(#F47C7C,15px,5px);
// }
// .sidebar {
//   li { 
//     position:relative;
//     font-size:24px;
//     margin: 10px;
//     cursor:pointer;
//     color:$white;
//   }
//   h1{ 
//     width:80%;
//     padding:20px;
//     margin:auto;
//     @include beveled-corners(#F7F48B,15px,5px);
//   }
//   input{
//     line-height:2;
//     text-align:center;
//   }
// }
// .content {
//   width: 80%;
//   margin-top:50px;
//   margin-left: 20%;
//   margin-bottom:50px;
//   background: rgba(0, 0, 255, .1);
//   @include beveled-corners(#A1DE93,20px,5px);
// }
// .content {
//   h3{
//     color:#283739;
//     padding:10px;
//     background:#F7F48B;
//     border-radius:10px;
//   }
//   li{
//     font-weight:bold;
//     color:#6C7A89;
//   }
// }

</style>
