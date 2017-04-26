'use strict';
/**
 * @ngdoc service
 * @name angularTimeManager.tasks
 * @description
 * # tasks
 * Factory in the angularTimeManager.
 */
angular.module('angularTimeManager')
  .factory('tasksFactory', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = angular.toJson(value);
      },
      getObject: function(key) {
        return angular.fromJson($window.localStorage[key] || null);
      }
    }
});
