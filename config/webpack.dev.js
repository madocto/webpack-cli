const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    overlay: true,
    quiet: false,
    stats: 'none'
  }
}
module.exports = merge(config, commonConfig)
