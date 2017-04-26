(function() {
  'use strict';

  angular
    .module('angularTimeManager')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('About', {
        url: '/about',
        templateUrl: 'app/about/main.html'      
      });

    $urlRouterProvider.otherwise('/');
  }

})();
