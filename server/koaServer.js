const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const main = ctx => {
  ctx.response.body = 'Hello World';
  
};
app.use(cors());
app.use(main);
app.listen(3000);
console.log("服务已启动");