var koa = require('koa');
var app = new koa();
var cors = require('koa-cors')
var mddata = '';

const fs = require("fs")
fs.readFile('../src/article/test.md','utf-8',(err,data)=>{
    if(err){
        throw err
    }else{
        mddata = data
    }
})
app.use(cors())
app.use(function *(){
    this.body = mddata;
});

app.listen(3000);
console.log("markdown文件解析服务成功开启！")