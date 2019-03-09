const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [
      // '@babel/polyfill',
      './src/index.tsx'],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json', '.scss'],

    alias: {
      Components: path.resolve('src/components/'),
    },
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                modules: false,
              }],
            ],
          },
        },
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
        }
      },

      {
        test: /\.tsx$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },

      // Encode images files using the Base64 encoding.
      // Keep limits below 25kb
      // Example: Logo
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // Images larger than 25 KB won’t be inlined
            limit: 100 * 1024,
          },
        },
      },

      // Encode svg files using the URL encoding
      // Keep limits below 15kb
      // Example: Error page
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 100 * 1024,
          noquotes: true,
        },
      },

    ],
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.API_ROOT': JSON.stringify(process.env.API_ROOT),
      'process.env.SUPPORTED_LANG': JSON.stringify(process.env.SUPPORTED_LANG),
    }),
  ],
};
