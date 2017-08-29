**开发日志：**  
2017年4月20日
1. 重新建库，基于个人博客学vue  
2. 引入webpack并配置webpack.config.js配置项 
配置入口，出口文件，jquery和vue依赖，css加载器css-loader，babel全家桶 
3. 原页面修改为vue的模块化形式，参考demo将现有假vue项目修改为真vue项目  

2017年4月22日
1. vue-loader研究单文件组件
2. 探索import App from ./App的深层含义

2017年4月25日  
1. 主要解决npm全局安装权限的问题
别人都是点到为止，只好自问自答，学到很多
https://segmentfault.com/q/1010000009166404/a-1020000009187068  
2. 梳理了一下博客技术栈思路，过程中对独立服务器，云服务器，云虚拟主机之间的区别有了更深入的了解。

2017年4月26日
1. 腾讯云服务器30天免费使用权get
2. 用WinScp作为linux桌面环境的替代方案
3. 由于身体原因，下午研究如何让readme.md美观以及在服务器安装express环境

2017年4月30日  
1. 前段时间太拼导致扁桃体发炎，进食困难，因此搁置了几天commit
2. 期间尝试把hexo部署到腾讯云服务器，linux和git不熟，导致一步一个坑，熬到2点依然没弄出来，加上身体不适，只好请假
3. 五一小长假开始，身体不适加上兜里没钱，宅家里打游戏，边打边想项目迁移解决方案
4. 昨天晚上加今天上午，终于找到解决方案：将html拆成多个成单文件组件，一主多随从形式，保留template，复用组件化scss，使用router实现页面路由。
5. 加一句，webpack用的也越来越6了，vue-devtool今天也体验了一把，需要继续研究别人的vue demo,挖掘对自己有用的信息。
小插曲，目前vue的路由在我的页面就是选项卡功能，这样做的好处是，不用写Jquery操作DOM，其他好处继续探索。
6. 剩余功能完善：图片正常显示，css文件打包，添加剩余页面，参考大牛博客添加axios资源库，添加mock数据。

2017年5月1日  
1. 修改页面scss文件编译及引入形式
2. 导入normalize.css依赖
3. 图片正常显示
4. 添加剩余页面
5. 剩余功能完善：还原sidebar，微调图片样式，添加axios资源库。

2017年5月3日
1. sidebar还原成功，样式微调成功。
2. 引入axios到项目成功。
3. 注册聚合数据账号并用axios获取数据成功。
4. 安装cross-env开启webpack-dev-server以及热加载成功。
5. 聚合数据server端不支持跨域，需要写后端转发该请求，用代理的方式实现。
6. 发现jsonbird并尝试实现不支持跨域到支持跨域的实现。
7. 了解跨域资源共享，了解高级程序设计jsonp。
8. 解决segmentfault上的问题。
9. jsonBird还不成熟，改为请求mock数据。

2017年5月4日
1. 从stackoverflow上解决了异源跨域访问，添加chrome插件：Allow-Control-Allow-Origin: *。
2. 成功引用在线api，实现从api获取数据，实现本地数据在线更新。
3. 聚合数据就是一坨屎，百度地图api调用成功。
4. 下一步:学习跨域资源共享CORS。
5. 五四青年节，白天上班，晚上休息一波。
6. cookie学习，第二种跨域解决方案，jsonp包。
7. 结合animate.css为路由添加过渡。
8. 整理博客内容，压缩bundle.js大小，压缩图片，uglify样式代码。

2017年5月5日
1. 整理博客内容完毕
2. 取消devtool实现js压缩，后续使用插件压缩js
3. 添加animejs点击动画
4. 接下来挖掘vue全家桶中的vuex
5. 删除无关内容，新增参考文件夹
6. 找一个vue开发的项目源码，读源码进行学习
7. 翻译一篇mvvm外文博客：理解mvvm模式之外，提升英文水平

2017年5月8日
1. 2个issue辅助学习
2. 1个resposiry记录前端程序员生词
3. 购买you don't know javascript up&going 
4. 购买大漠的css3实践书籍，补html和css基础
5. 购买javascript 数据结构和算法，温故而知新
6. 学习javascript高级程序设计：String类型方法，DOM章节的element类型和text类型
7. 阅读英文版vue官网，理解vue框架的基本概念
8. 待学习内容：调查awesome-vue的用处；结合高设学习javascript数据结构和算法；补充对于html5和css3的理解。

2017年5月15日
1. 最近沉迷于segmentfault思考网友问题
2. 研究公司了可视化插件开发
3. 学习了JSON对象转换和解析
4. 发现vscode切换终端的方法
5. node连接mongodb成功
6. 区分mongo 和mongod
7. 理解node中的中间件
8. 下一步学习node基础《深入浅出nodejs》

2017年5月16日
1. 看中文版nodejs beginner入门
2. 深入浅出nodejs门槛略高
3. 加入cnode社区
4. 加入v2ex社区

2017年6月8日
1. 修改单文件组件格式为json
2. mounted()方法自动加载函数
3. 待完成：精简数据格式

2017年8月27日
1. 毕业季前后的心理动荡期暂时搁置前端，学习后端知识
2. 玩了下Ubuntu和CentOS linux命令
3. 部署CentOS7上部署Hadoop集群，并且在此基础上部署Hive
4. 部署了Hive到虚拟机，并且成功生成元数据到另一台机器上的Mysql
5. 学习了大量数据仓库维度建模的知识以及大数据数据仓库架构的东西
6. 学习React和Redux，掌握应用架构的发展历史，组件状态管理的发展历程
7. 学习MongoDB数据库，体会到MongDB对于大前端工程师的友好性
8. 学习Java，对类与对象的区别，继承以及构造函数和重载，有了深入理解
9. 初步掌握ES6的用法，并且创建SegmentFault ES 新技术圈
10. 第一次翻译纯英文文章ES8，第一次看完纯英文书YDKJ 
11. 对Chrome控制台掌握更加熟练，snippets，performance等
12. 最后总结一句，只会前端的前端不适好前端

2017年8月28日
1. 完成前端到数据库，数据库到前端关键数据传输流
    ① 前端get查询经路由转发的数据库中的数据
        get ← koa-route←mongodb
    ② 前端post提交数据经路由转发存入数据库
        post → koa-body → koa-route → mongodb
2. 七夕，不关我屌事。

2017年8月30日
1. 添加博客预览图
2. 精简Readme，新增DevLog
