const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const htmlRule = common.module.rules.find(rule => String(rule.test) === '/\\.html$/');
const htmlLoader = htmlRule.use.find(use => use.loader === 'html-loader');
htmlLoader.options.minimize = true;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});

// Used by postcss setting the 'env' parameter
process.env.NODE_ENV = 'production';
