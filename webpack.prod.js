const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
var path = require('path');
module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
              modules: false,
            },
          },
          'sass-loader',
        ],
        resolve: {
          extensions: ['.css','.scss'],
          modules: ['node_modules']
        }
      },
    ],
  },
  plugins: [
    //This get all our css and put in a unique file
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  // performance: {
  //   hints: 'warning',
  //   maxEntrypointSize: 400000,
  //   maxAssetSize: 100000
  // }
});