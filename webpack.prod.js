const merge = require('webpack-merge');
const commonGenerator = require('./webpack.common.js');

module.exports = (env) => {
  const common = commonGenerator(env);

  const htmlRule = common.module.rules.find(rule => String(rule.test) === '/\\.html$/');
  const htmlLoader = htmlRule.use.find(use => use.loader === 'html-loader');
  htmlLoader.options.minimize = true;

  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
  });
};

// Used by postcss setting the 'env' parameter
process.env.NODE_ENV = 'production';
