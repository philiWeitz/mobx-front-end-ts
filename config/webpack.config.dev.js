
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.tsx', '.js', '.json'],
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      assets: false,
      chunks: false,
    },
    historyApiFallback: true,
  },

  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
      { test: /\.tsx$/, enforce: 'pre', loader: 'tslint-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!sass-loader?sourceMap', exclude: /node_modules/ },
    ],
  },

  plugins: [
    HtmlWebpackPluginConfig,

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.API_ROOT': JSON.stringify(process.env.API_ROOT),
      'process.env.SUPPORTED_LANG': JSON.stringify(process.env.SUPPORTED_LANG),
    }),
  ],
};
