// 开发环境使用的配置
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  devServer: {
    hot: true // dev server 的配置要启动 hot，或者在命令行中带参数开启
  },
  module: {

  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin(),// Hot Module Replacement 的插件
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]
})