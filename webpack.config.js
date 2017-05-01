const path = require('path');
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSASS = new ExtractTextPlugin('main.css');
const config = {
  entry: {
    app: './src/main.js'
    // vendors: './src/vendors.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
      ]
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
  //  resolveLoader: {
  //   root: path.join(__dirname, 'node_modules')
  // }
};
module.exports = config;
console.log('kaibaba的vue博客正在构建，请耐心等待...');