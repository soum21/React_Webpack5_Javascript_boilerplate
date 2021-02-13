const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { HotModuleReplacementPlugin } = require("webpack");
const port = process.env.PORT || 3000;
var path = require('path');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          //  modules:true "import styles from './styles.css --> classname={styles.logo}"
          //  modules: false, "impot './styles.css classname="logo"
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 1, modules: false } },
          { loader: 'sass-loader', options: { sourceMap: false } },
        ],
        resolve: {
          extensions: ['.css', '.scss'],
          modules: ['node_modules']
        }
      },
    ]
  },
  plugins: [
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    host: 'localhost',
    port: port,
  },
});