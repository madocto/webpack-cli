const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const [config, plugins] = require('./webpack.common')

module.exports = {
  ...config,
  entry: path.resolve(__dirname, '../src/pages/App/index.tsx'),
  output: {
    filename: 'card.[contenthash:5].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'Card',
    libraryTarget: 'umd'
  },
  devtool: false,
  plugins: [new CleanWebpackPlugin(), ...plugins],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
