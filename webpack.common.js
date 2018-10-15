const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJson = require('./package.json');

module.exports = {
  entry: {
    app: './src/app/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        include: path.resolve(__dirname, 'src/app'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {},
        }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(packageJson.version),
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/assets/index.ejs'),
      favicon: path.resolve(__dirname, 'src/assets/images/favicon.ico'),
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /\/(node_modules)\//,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
