console.log("服务器Koa3000端口已启动");
const Koa = require('koa');
const app = new Koa();
var insertData;
/*跨域*/
const cors = require('koa-cors');
app.use(cors());
/*解析request*/
const koaBody = require('koa-body');
app.use(koaBody());
/*路由*/
const about = ctx => {
  ctx.response.body = users;
  insertData = ctx.request.body;
  //console.log(insertData);
  db.collection('users').insertOne(insertData);
};
const main = ctx => {
  ctx.response.body = 'Hello World';
};
const route = require('koa-route');
app.use(route.post('/about', about));
app.use(route.get('/main', main));
/*启动服务*/
app.listen(3000);

/*数据库服务，增删改查*/
console.log("成功连接MongoDB27017端口");
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');
co(function* () {
  var db = yield MongoClient.connect('mongodb://localhost:27017/myproject');
  console.log("Connected correctly to server");
  var col = db.collection('users');
  users = yield col.find({
    "user.username": "Frank"
  }).limit(2).toArray();
}).catch(function (err) {
  console.log(err.stack);
});


/*数据模型，数据结构*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myproject');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  var userSchema = new mongoose.Schema({
    user: {
      username: String,
      password: String
    },
    contents: {
      title: String,
      poster: String,
      post: String,
      time: Date,
      imgs: [],
      comment: []
    }
  });
  var User = mongoose.model('user', userSchema);
  var Frank = new User({
    user: {
      username: 'Frank',
      password: '12345678'
    },
  });
  Frank.save(function (err) {
    console.log('保存成功');
  });
});