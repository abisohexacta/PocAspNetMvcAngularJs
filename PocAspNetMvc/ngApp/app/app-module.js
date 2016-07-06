(function () {
    'use strict';

    /* @ngdoc object
     * @name camApp
     * @description
     *
     */
    angular
      .module('camApp', [
        /*
         * Angular modules
         */
         'ngAnimate',
        /*
         * 3rd Party modules
         */
         'ui.bootstrap',
         'ui.router',
         'imageupload',
        /*
         * Feature areas
         */
        'app.home',
        'app.core'
      ]);
}());
