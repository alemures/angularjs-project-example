const Utils = require('./e2e/protractor.conf.utils');

module.exports.config = {
  framework: 'mocha',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
  },
  onPrepare: () => {
    /* global browser */
    Utils.disableAnimations(browser);
  },
};
