const webpackConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    singleRun: true,
    browsers: ['PhantomJS'],
    reporters: [
      'spec',
    ],
    files: [
      { pattern: 'src/app/*.spec.js', watched: false },
      { pattern: 'src/app/**/*.spec.js', watched: false },
    ],
    preprocessors: {
      'src/app/*.spec.js': ['webpack', 'sourcemap'],
      'src/app/**/*.spec.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
    },
  });
};
