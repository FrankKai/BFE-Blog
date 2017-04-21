1.重新建库，基于个人博客学vue√
2.加入webpack工具√
注意：vscode中的webpack插件需要先有package.json文件才能初始化，之后再npm install。
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
删除github上的文件：
git rm -r --cached node_modules
git commit -m "removing node_modules"
123