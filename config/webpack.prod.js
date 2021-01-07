const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const config = {
  entry: path.resolve(__dirname, '../src/pages/App/index.tsx'),
  output: {
    filename: 'card.[contenthash:5].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'XXX',
    libraryTarget: 'umd'
  },
  devtool: false,
  plugins: [new CleanWebpackPlugin()],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}

module.exports = merge(config, commonConfig)
