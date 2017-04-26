(function() {
  'use strict';

  angular
    .module('angularTimeManager')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
