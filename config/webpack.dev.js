const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const config = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  devtool: false,
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    overlay: true, // 把错误信息显示出来
    quiet: false, // 输出没用的信息
    stats: 'none'
  }
}
module.exports = merge(config, commonConfig)
