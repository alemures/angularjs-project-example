const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const htmlRule = common.module.rules.find(rule => String(rule.test) === '/\\.html$/');
const htmlLoader = htmlRule.use.find(use => use.loader === 'html-loader');
const cssRule = common.module.rules.find(rule => String(rule.test) === '/\\.css$/');
const cssLoader = cssRule.use.find(use => use.loader === 'css-loader');
htmlLoader.options.minimize = true;
cssLoader.options.minimize = true;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
