import path from 'path';
import WebpackBar from 'webpackbar';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type webpack from 'webpack';

const isDev = process.env.NODE_ENV !== 'production';

console.log('🍎🍎🍎', process.env.NODE_ENV);

const config: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.less'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
    }),
    new WebpackBar(),
  ],
  stats: {
    hash: false,
    modules: false,
    chunks: false,
    colors: true,
  },
};

export default config;
