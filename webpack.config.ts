const path = require('path')
const htmlWebpackPlugin  = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports= {
  // entry: './src/index.js',
  // entry: {
  //   main: './src/index.js'
  // },
  entry: {
    app: './src/app.js'
  },
  output: {
    // path: path.resolve(__dirname, 'dist'), // 输出路径
    path: __dirname + '/dist',
    filename: '[name][hash:12].js' // 输出文件名称
  },
  // mode: 'production'
  module:{
    rules: [
      { test: /\.scss$/,
        include:[
          path.resolve(__dirname, 'src')
        ],
        use: ExtractTextWebpackPlugin.extract({ 
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }), 
        // loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.css$/,
      //   include:[
      //     path.resolve(__dirname, 'src')
      //   ],
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.png|.jpg|.jpeg|.gif$/,
        use: ['file-loader']
      },
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: ['babel-loader']
      },
      {
        test: /\.tsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: ['ts-loader']
      }
      // {
      //   test: /\.css$/,
      //   use: {
      //     loader: 'css-loader',
      //     options: {
      //       module: true
      //     }
      //   }
      // }
    ]
  },
  resolve:{
    modules: [
      'node_modules',
      path.resolve(__dirname , 'src')
    ],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.scss', '.vue'], // 自动解析不带后缀的扩展
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  plugins: [
    new htmlWebpackPlugin({filename: 'index.html', template: './index.html'}), 
    // 定义常量， 直接通过 PRODUCTION 来访问
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true), // const PRODUCTION = true
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // 复制文件，有些文件希望直接放到build文件夹里
    // new CopyWebpackPlugin([
    //   { from: 'src/file.txt', to: 'build/file.txt', }, // 顾名思义，from 配置来源，to 配置目标路径
    //   { from: 'src/*.ico', to: 'build/*.ico' }, // 配置项可以使用 glob
    //   // 可以配置很多项复制规则
    // ]),
    new ExtractTextWebpackPlugin('[name][hash:12].css')
  ]
  
}