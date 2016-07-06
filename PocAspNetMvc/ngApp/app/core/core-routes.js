(function () {
    'use strict';

    angular
      .module('app.core')
      .config(config);

    function config($stateProvider) {
        $stateProvider
          .state('404', {
              url: '/404',
              templateUrl: '/ngApp/app/core/404.tpl.html',
              controller: 'CoreCtrl',
              controllerAs: 'vm',
              params: {}
          });
    }
}());