(function () {
    'use strict';

    angular
      .module('app.home')
      .config(config);

    function config($stateProvider) {
        $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: '/ngApp/app/home/home.tpl.html',
              controller: 'HomeCtrl',
              controllerAs: 'vm',
              params: {}
          });
    }
}());