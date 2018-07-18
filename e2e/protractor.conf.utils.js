class ProtractorUtils {
  static disableAnimations(browser) {
    const disableNgAnimate = function () {
      /* global angular */
      angular
        .module('disableNgAnimate', [])
        .run(['$animate', function ($animate) {
          $animate.enabled(false);
        }]);
    };

    const disableCssAnimate = function () {
      angular
        .module('disableCssAnimate', [])
        .run(() => {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = '* {'
            + '-webkit-transition: none !important;'
            + '-moz-transition: none !important'
            + '-o-transition: none !important'
            + '-ms-transition: none !important'
            + 'transition: none !important'
            + '}';
          document.getElementsByTagName('head')[0].appendChild(style);
        });
    };

    browser.addMockModule('disableNgAnimate', disableNgAnimate);
    browser.addMockModule('disableCssAnimate', disableCssAnimate);
  }
}

module.exports = ProtractorUtils;
