import path from 'path'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import commonConfig from './webpack.common'

const plugins: (((this: webpack.Compiler, compiler: webpack.Compiler) => void) | webpack.WebpackPluginInstance)[] = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash:5].css'
  })
]

if (process.env.ANALYZE === '1') {
  plugins.push(new BundleAnalyzerPlugin())
}

const config: webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/pages/App/index.tsx'),
  output: {
    filename: '[name].[contenthash:5].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  devtool: false,
  plugins,
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
}

export default merge(config, commonConfig)
