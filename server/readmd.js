var koa = require('koa');
var app = new koa();
var cors = require('koa-cors')
var mddata = ''
var mddataarr = [[],[]]
var obj={
    title:'',
    content:'',
    birthtime:''
}
var categories = {
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

//读取每个目录下的文章
fs.readdir('../vue-cli-version/src/article/categories',(err,files)=>{
    if(err){
        throw err
    }else{
        files.forEach((v,i,arr)=>{
            console.log(v)
            let cat = '../vue-cli-version/src/article/categories/'+ v
            console.log(cat)
            fs.readdir(cat,(err,files)=>{
                files.forEach((v,i,arr)=>{
                    // categories.name = v
                    // categories.num = files.length
                    let smd = cat + "/" + v
                    fs.readFile(smd,'utf-8',(err,data)=>{
                        if(err){
                            throw err
                        }else{
                            obj.title = v.slice(0,-3)
                            obj.content = data
                            let stat = fs.statSync(smd)
                            obj.birthtime = stat.birthtime
                            mddataarr[0].push(obj)
                            obj = {}
                        }
                    })
                    // mddataarr.push(categories)
                })
            })
        })
    }
})
//统计目录文件数目
fs.readdir('../vue-cli-version/src/article/categories',(err,files)=>{
    if(err){
        throw err
    }else{
        console.log(files)
        files.forEach((v,i,arr)=>{
            fs.readdir('../vue-cli-version/src/article/categories/'+v,(err,files)=>{
                console.log(files)
                categories.name = v
                categories.num = files.length
                mddataarr[1].push(categories)
                categories = {}
            })
        })
    }
})
app.use(cors())
app.use(function *(){
    this.body = mddataarr;
});

app.listen(3001);
console.log("markdown文件解析服务成功开启！")