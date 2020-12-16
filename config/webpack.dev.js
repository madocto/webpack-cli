const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const [config, plugins] = require('./webpack.common')

module.exports = {
  ...config,
  entry: path.resolve(__dirname, '../src/index.tsx'),
  devtool: false,
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      module: true,
      columns: true
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    overlay: true, // 把错误信息显示出来
    quiet: false, // 输出没用的信息
    stats: 'none'
  }
}
