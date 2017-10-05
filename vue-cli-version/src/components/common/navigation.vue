<template>
  <div class="navigation">
  <!-- <p>123</p>
      <div class="row">
        <div class="col-md-3">首页</div>
        <div class="col-md-3">分类</div>
        <div class="col-md-3">归档</div>
        <div class="col-md-3">标签</div>
      </div> -->
  <!-- <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu> -->
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-purple"><a href="http://localhost:8080/#/blog">博客</a></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"><a href="http://localhost:8080/#/category">目录</a></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"><a href="http://localhost:8080/#/record">归档</a></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"><a href="http://localhost:8080/#/tag">标签</a></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"><a href="http://localhost:8080/#/home">返回封面</a></div></el-col>
  </el-row>
  </div>
</template>

<script>
// import Jquery from 'jquery'
export default {
  name: 'navigation',
  template:'<navigation/>',
  data() {
      return {
        // activeIndex: '1',
        // activeIndex2: '1'
      };
    },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  /* min-height: 36px; */
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
