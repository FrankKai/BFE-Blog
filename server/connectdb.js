var express = require('express');
var app = express();

var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost:27017/test');
 db.connection.on('error',function(error){
     console.log("数据库连接失败："+error);
 })
 db.connection.on("open",function(error){
    console.log("++++++数据库连成功++++++");
});

//插入数据测试
//创建了一个名为Cat的模型model并规定了属性name为String
var Cat = mongoose.model('Cat', { name: String });
//一个kitty对象
var kitty = new Cat({ name: 'tinyphp' });
//存入一条记录
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('成功插入数据');
  }
});

/************/
module.exports = app;