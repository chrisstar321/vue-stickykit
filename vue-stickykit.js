/*!
 * Vue-Stickykit.js v1.0.1
 * (c) 2018 Imfaber <imfaberdev@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueStickykit = factory());
}(this, (function () { 'use strict';

var index = {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install: function (Vue) {
    Vue.directive('stick-in-parent', {
      bind(el, binding) {
        window.jQuery = require('jquery');
        require('sticky-kit/dist/sticky-kit.js');
        jQuery(document).ready(function () {
          jQuery(el).stick_in_parent(binding.value);
        });
      }
    });
  }
};

return index;

})));
