(function () {
    'use strict';

    /* @ngdoc object
     * @name camApp
     * @description
     *
     */
    angular
      .module('app', [
        /*
         * Angular modules
         */
         'ngAnimate',
        /*
         * 3rd Party modules
         */
         'ui.bootstrap',
         'ui.router',
         'ngCroppie',
        /*
         * Feature areas
         */
        'app.home',
        'app.core'
      ]);
}());
