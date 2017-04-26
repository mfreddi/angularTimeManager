(function() {
  'use strict';

  angular
    .module('angularTimeManager')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log, $interval, tasksFactory) {
    var vm = this;
    vm.curTime = 0;
    vm.projectName = '';
    vm.time = undefined;
    vm.timeStart = timeStart;
    vm.stopTime = stopTime;
    vm.removeTask = removeTask;
    vm.disabled = false;
    vm.searchText = '';
    vm.tasks = null;

    vm.list = [{
      time: 100,
      name: 'Test',
      date: 1493239534412
    }];
    
    refreshList();
    
    function refreshList() {
      vm.tasks = tasksFactory.getObject('tasks');
      if (vm.tasks) {
        vm.list = vm.tasks;
      }
    }      

    function clearForm() {
      vm.disabled = false;
      vm.time = undefined;
      vm.curTime = 0;
      vm.projectName = '';
    }

    function removeTask(date) {
      $log.log(date);
    }

    function stopTime () {
      $interval.cancel(vm.time);    

      var obj = {
        time: vm.curTime,
        name: vm.projectName,
        date: new Date().getTime()
      };
      
      vm.list.push(obj);

      clearForm();

      tasksFactory.setObject('tasks', vm.list);   
         
    }       

    function timeStart () {             
      vm.disabled = true;
      vm.time = $interval(function() {
        ++vm.curTime;        
      }, 1000);
    }
  }
})();
