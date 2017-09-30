var koa = require('koa');
var app = new koa();
var cors = require('koa-cors')
var mddata = ''
var mddataarr = []

const fs = require("fs")
// fs.readFile('../src/article/test.md','utf-8',(err,data)=>{
//     if(err){
//         throw err
//     }else{
//         mddata = data
//     }
// })
fs.readdir('../src/article',(err,files)=>{
    if(err){
        throw err
    }else{
        // console.log(files)
        // mddataarr = files
        // console.log(mddataarr)
        files.forEach((v,i,arr)=>{
            console.log(v)
            // console.log(i)
            // console.log(arr)
            let smd = '../src/article/'+ v
            console.log(smd)
            fs.readFile(smd,'utf-8',(err,data)=>{
                if(err){
                    throw err
                }else{
                    mddataarr.push(data)
                }
            })
        })
    }
})
app.use(cors())
app.use(function *(){
    this.body = mddataarr;
});

app.listen(3000);
console.log("markdown文件解析服务成功开启！")