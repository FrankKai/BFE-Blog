const path = require('path');
const config = {
  entry: {
    app: './src/index.js',
    vendors: './src/vendors.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
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