/*
* 生产环境配置文件:
*    压缩、合并和抽取 JavaScript 代码，并将项目文件打包至硬盘上的 dist 文件夹中。
* */
// 引入基础配置
const webpackBase = require('./webpack.config.base')
// 引入 webpack-merge 插件
const webpackMerge = require('webpack-merge')
// 引入 webpack
const webpack = require('webpack')
// 合并配置文件
module.exports = webpackMerge(webpackBase, {
  plugins: [
    // 代码压缩
    new webpack.optimize.UglifyJsPlugin({
      // 开启 sourceMap
      sourceMap: true
    }),
    // 提取公共 JavaScript 代码
    new webpack.optimize.CommonsChunkPlugin({
      // chunk 名为 commons
      name: 'commons',
      filename: '[name].bundle.js',
    }),
  ]
})
