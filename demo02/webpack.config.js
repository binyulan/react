var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  
  plugins: [
    new uglifyJsPlugin({
        compress: {
        warnings: false
      }
    })/*
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    })*/
  ]
};