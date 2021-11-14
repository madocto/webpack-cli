import path from 'path';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import type webpack from 'webpack';

const config: webpack.Configuration = {
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
      progress: true,
    },
  },
};

export default merge(config, commonConfig);
