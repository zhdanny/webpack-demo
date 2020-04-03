// 测试环境使用的配置
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  module: {

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]
})