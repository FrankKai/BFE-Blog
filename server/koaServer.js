//开启3000端口node服务
console.log("服务器Koa3000端口已启动");
const Koa = require('koa');

const app = new Koa();
const cors = require('koa-cors');
// const router = require('koa-router')();
// router.post('/', function *(next) {
//   console.log("数据上传成功。")
// });
// const main = ctx => {
//   ctx.response.body = 'Hello World';
// };
app.use(cors());
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

const route = require('koa-route');

const about = ctx => {
  ctx.response.body = "post success";
  // ctx.response.type = 'html';
  // ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = resultData;
};

/*
const pets = {
  list: (ctx) => {
    const names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },

  show: (ctx, name) => {
    const pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};
*/ 

app.use(route.get('/', main));
app.use(route.post('/about', about));
app.use(route.get('/about', about));
// app.use(main);
app.listen(3000);


//连接mongoDB27017端口
console.log("成功连接MongoDB27017端口");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myproject');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var userSchema=new mongoose.Schema({
    user:{ username:String,
         password:String
         },
    contents:{
         title:String,
         poster:String,
         post:String,
         time:Date,
         imgs:[],
         comment:[]
     }
    });
    var User = mongoose.model('user', userSchema);
    var Frank = new User({
        user:{ username:'Frank',
            password:'12345678'
            },
    });
    console.log(Frank.user);
    Frank.save(function (err) {
        console.log('保存成功');
      });
      // var collection=db.collection("users");
    //  resultData=User.findOne({"username":"frankkai"});
    //  console.log(resultData);
      //console.log(resultData);
});
var MongoClient = require('mongodb').MongoClient,
co = require('co'),
assert = require('assert');

co(function*() {
// Connection URL
var db = yield MongoClient.connect('mongodb://localhost:27017/myproject');
console.log("Connected correctly to server");

// Insert a single document
var r = yield db.collection('inserts').insertOne({a:1});
assert.equal(1, r.insertedCount);

// Insert multiple documents
var r = yield db.collection('inserts').insertMany([{a:2}, {a:3}]);
assert.equal(2, r.insertedCount);

// Close connection
db.close();
}).catch(function(err) {
console.log(err.stack);
});