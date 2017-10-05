var koa = require('koa');
var app = new koa();
var cors = require('koa-cors')
// var mddata = ''
var mddataarr = []
// var obj={
//     title:'',
//     content:'',
//     birthtime:''
// }
var obj = {
    name: '',
    num: 0
}

const fs = require("fs")
// fs.readFile('../src/article/test.md','utf-8',(err,data)=>{
//     if(err){
//         throw err
//     }else{
//         mddata = data
//     }
// })
fs.readdir('../vue-cli-version/src/article/categories',(err,files)=>{
    if(err){
        throw err
    }else{
        console.log(files)
        files.forEach((v,i,arr)=>{
            fs.readdir('../vue-cli-version/src/article/categories/'+v,(err,files)=>{
                console.log(files)
                obj.name = v
                obj.num = files.length
                mddataarr.push(obj)
                obj = {}
            })
            // console.log(mddataarr)
        })
    }
})
// console.log(mddataarr)
app.use(cors())
app.use(function *(){
    this.body = mddataarr;
});

app.listen(3002);
console.log("目录！")