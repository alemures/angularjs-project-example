import angular from 'angular';
import template from './about.html';

import './about.css';
import angularImage from '../../../assets/images/angularjs.png';

class aboutComponent {
  /* @ngInject */
  constructor($log) {
    this.$log = $log;
    $log.log('aboutComponent');
  }

  $onInit() {
    this.angularImage = angularImage;
  }
}

export default angular.module('aboutComponent', []).component('aboutComponent', {
  template,
  controller: aboutComponent,
}).name;
