const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')

const config = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
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
                localIdentName: 'iDD_[local]-[hash:base64:5]'
              }
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.less', '.svg']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  performance: {
    hints: 'warning', // dev warning  prod error
    maxAssetSize: 30000000, // 单个资产大小（以字节为单位）
    maxEntrypointSize: 50000000, // 最大入口点（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  }
}

const plugins = [
  new WebpackBar({
    name: 'Webpack',
    color: 'orange',
    reporters: ['fancy']
  })
]

module.exports = [config, plugins]
