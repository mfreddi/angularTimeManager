'use strict';
/**
 * @ngdoc filter
 * @name angularTimeManager.filter:secToTime
 * @function
 * @description
 * # secToTime
 * Filter in the angularTimeManager.
 */
angular.module('angularTimeManager')
  .filter('secToTime', function (moment) {
    return function (seconds) {
      return moment.utc(seconds*1000).format("HH:mm:ss");
    };
  });
