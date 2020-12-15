const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: "./src/index.tsx",
  stats: 'none',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash:5].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Card',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: 'iDD_[local]--[hash:base64:5]'
              }
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".less"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    overlay: true, // 把错误信息显示出来
    quiet: false   // 输出没用的信息
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: 'Webpack',
      color: 'orange',
      reporters: ['fancy']
    }),
    new HtmlWebpackPlugin()
  ],
  // 性能提示
  performance: {
    hints: "warning", // dev warning  prod error
    maxAssetSize: 30000000, // 单个资产大小（以字节为单位）
    maxEntrypointSize: 50000000, // 最大入口点（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
}