<template>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'app'
  }
  </script>
  
  <style>
  #app {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width:100%;
    height:100%;
    background-color: #B7F5DE;
  }
  </style>
  