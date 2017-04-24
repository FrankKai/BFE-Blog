1.重新建库，基于个人博客学vue√  
2.加入webpack工具√  
注意：vscode中的webpack插件需要先有package.json文件才能初始化，之后再npm install  
正确做法事：npm install webpack --save-dev  
3.webpack.config.js配置项目依赖  
https://doc.webpack-china.org/concepts/  
①入口文件  
Array<string>字符串数组。  
添加应用程序入口和公共库入口。  
可以有多个。  
②出口文件  
有且仅有一个。  
添加出口文件目录及出口文件。  
添加path时参考：http://www.jianshu.com/p/76966243f27f  
chunk的概念：  
chunk是使用Webpack过程中最重要的几个概念之一。在Webpack打包机制中，编译的文件包括entry（入口，可以是一个或者多个资源合并而成，由html通过script标签引入）和chunk（被entry所依赖的额外的代码块，同样可以包含一个或者多个文件）。  
为开发添加jquery和vue依赖：  
npm install jquery --save-dev  
会自动添加依赖信息到package.json文件中。  
③加载器  
加载css文件，安装css-loader。  
npm install css-loader --save-dev  
删除github上的node_modules文件：  
git rm -r --cached node_modules  
git commit -m "removing node_modules"  
git push -u origin master  
.gitignore文件  
以'#' 开始的行，被视为注释.  
忽略掉所有文件名是 foo.txt 的文件  
. foo.txt  
忽略所有生成的 html 文件, *.html  
foo.html是手工维护的，所以例外. !foo.html  
忽略所有.o 和 .a文件. *.[oa]   
若修改大部分文件，则：  
暂时不能自动提交所有已修改文件，只有git add .并且rm node_modules cache，再commit和push。  
若修改少量文件，则：  
git add 修改的文件目录或者文件名，再commit和push。  
可以使用git diff查看提交变化。   
新的解决方案： .gitignore 文件中 忽略目录时 需要加反斜杠 例如 node_modules/  
PS： 若一开始未添加.gitignore文件且add .，注意使用git rm -r --cached .清除缓存，否则add . 会将node_modules文件加载进来。  
4.插件是对loader的support  
webpack-dev-server CLI中cli是什么意思？  
command-line interface命令行界面  
babel:  
安装加载器 babel-loader 和 Babel 的 API 代码 babel-core  
npm install --save-dev babel-loader babel-core  
安装 ES2015（ES6）的代码，用于转码  
npm install babel-preset-es2015 --save-dev  
用于转换一些 ES6 的新 API，如 Generator，Promise 等  
npm install --save babel-polyfill  
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):  
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"
os":"win32","arch":"x64"})  
选择性得忽略warn是做不到的，可以设置全部忽略npm --loglevel=error install 但是不建议这么做，因为会忽略掉有用的warning提醒。  
将scss编译成css：  
两种方式：  
一种添加到bundle.js  
一种使用extract-text-webpack-plugin插件独立一个css文件出来，css文件同样在build目录下。  
5.原页面修改为vue的模块化形式，使用vue-cli学习简单的webpack中使用vue的相关配置项。  
参考vue-demo，将现有假vue项目修改为真vue项目。  
之后再参照完整版vue例子 webpack 对项目进行完善。  
额外收获：高级程序设计需要反复推敲。  
outputh的publicPath:
```
<link href="/assets/spinner.gif" />
"/assets/", // 相对于服务(server-relative)
支持es6的import语法
包：babel-core babel-loader babel-preset-latest
配置：
test:/\.js$/,
exclude: /node_modules/,
loder:'babel-loader'
vue中的render参数
箭头函数：h=>h(App)
(function (h) {
  return h(App);
});
```
调用了一个名为h的函数，并且返回对App的处理结果：
```
var h = function(x){
	console.log(x)
};
(function (h) {
  return h('App');
});
console.log(h('App'));
结果：App
```
https://segmentfault.com/q/1010000007130348
```
render: function (createElement){
    return createElement(app);
}
```
可见，在vuejs中，h函数仅是作为createElement函数之缩写
vue-loader研究单文件组件
