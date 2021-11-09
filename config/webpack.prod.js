const path = require('path')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const commonConfig = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/pages/App/index.tsx'),
  output: {
    filename: '[name].[contenthash:5].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  devtool: false,
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}

module.exports = merge(config, commonConfig)
