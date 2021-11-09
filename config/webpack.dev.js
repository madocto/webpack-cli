const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  devtool: 'source-map',
  target: 'web',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    client: {
      overlay: true,
      logging: 'none',
      progress: true
    }
  }
}
module.exports = merge(config, commonConfig)
