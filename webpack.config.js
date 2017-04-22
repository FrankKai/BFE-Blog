const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSASS = new ExtractTextPlugin('main.css');
const config = {
  entry: {
    app: './src/index.js'
    // vendors: './src/vendors.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: extractSASS.extract({
        //   {
        //     loader: "style-loader" // 从JS字符串生成样式节点
        // }, {
        //     loader: "css-loader" // 将CSS转化成CommonJS
        // }, {
        //     loader: "sass-loader" // 将Sass编译成CSS
        // }
          fallback: 'style-loader',
          use: ["css-loader",'sass-loader']
        })
    }]
  },
  plugins: [
    extractSASS
  ]
  // module: {
  //   rules: [{
  //     test: /.jsx?$/,
  //     include: [
  //       path.resolve(__dirname, 'app')
  //     ],
  //     exclude: [
  //       path.resolve(__dirname, 'node_modules'),
  //       path.resolve(__dirname, 'bower_components')
  //     ],
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['es2015']
  //     }
  //   }]
  // },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx', '.css']
  // },
  // devtool: 'source-map'
};
module.exports = config;