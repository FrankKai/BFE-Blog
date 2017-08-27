研究中间件
express是一个集成路由和中间件的网络框架，因为在框架内部有对应的最小化的函数：一个express应用实质上，就是一系列的中间件调用。
Middleware函数，有权限访问请求对象req，响应对象res，而且在请求响应循环中，有下一个中间件函数。下一个中间件函数通常被next变量替代。
中间件函数可以做以下几个任务：
    1.执行任何代码
    2.对req和res进行更改
    3.结束请求响应循环
    4.在栈里调用next函数
如果当前的中间件函数不能结束请求响应循环，必须调用next()过渡到下一个中间件函数。否则，请求将暂停。
一个express app可以使用以下几种类型的中间件：
    1.应用-级别 中间件
    2.路由-级别 中间件
    3.错误-处理 中间件
    4.构建 中间件
    5.第三方 中间件
你可以对应用中间件和路由中间件使用可选的安装路径。你可以一次性加载很多中间件，它在安装点创建了中间件系统的子堆栈。

应用-级别中间件
绑定应用级别中间件到实例，需要使用app.use()方法和app.method()方法，method()方法是处理http请求的方法，比如get,put和post方法。

这个例子展示了没有安装路径的中间件函数。每次app收到请求，这个函数都会被执行。

var app = express()
app.use(function(req,res,next){
    console.log('Time:',Date.now())
    next()
})

这个例子展示了安装路径为/user/:id的中间件函数。这个函数将在/user/:id路径执行任意类型的http请求。

app.use('/user/:id',function(req,res,next){
    console.log('Request Type:',req.method)
    next()
})

这个例子展示了一个路由和对应的处理函数组成的中间件系统。函数处理GET请求到/user/:id路径。

app.get('/user/:id',function(req,res,next){
    res.send('USER')
})

这里有一个在一个安装点加载了许多中间件函数的例子，而且给出了安装路径。它说明一个中间件子堆栈会打印任意类型的http请求给/user/:id。

app.use('/user/:id',function(req,res,next){
    console.log('Request URL:',req.originalUrl)
    next()
},function(req,res,nex){
    console.log('Request Type:',req.method)
    next()
})

路由解析器可以让我们为一个路径定义多个路由。下面这个例子为/user/:id路径的get请求定义了2个路由。第二个路由不会发生任何问题，但是他从来都不会被调用，因为第一个路由会跳出请求-响应循环。
下面这个例子将展示中间件子栈如何为/user/:id处理get请求。
app.get('/user:id/',function(req,res,next){
    console.log('ID',req.params.id)
    next()
},function(req,res,next{
    res.send('User Info')
}))

app.get('/user/:id',function(req,res,next){
    res.end(req.params.id)
})

为了跳过剩余中间件函数，可以调用next('router')来从路由器实例传出控制权。注意：next('route')只能在app.method()和app.method()方法中使用。
这个例子展示了中间件子堆栈为/user/:id 处理get请求。

app.get('user/:id',function(req,res,next){
    if(req.params.id==='0')next('route')
    else next()
},function(req,res,next){
    res.render('regular')
})
app.get('/user/:id',function(req,res,next){
    res.render('special')
})

路由-级别中间件
路由级别中间件和应用级的中间件以相同的方式工作，只要一个区别，路由级中间件一定要挂载在express.Router()
var router = express.Router()
使用router.user()或router.METHOD()方法加载路由中间件。下面的示例代码使用router级中间件复制了应用中间件。

后面的都雷同，没什么好理解的。
