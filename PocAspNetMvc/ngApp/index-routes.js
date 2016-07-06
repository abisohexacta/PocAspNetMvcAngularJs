(function () {
    'use strict';

    angular
        .module('camApp')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$httpProvider'];

    function config($urlRouterProvider, $httpProvider) {
        // the known route, with missing '/' - let's create alias
        $urlRouterProvider.when('', 'home');

        // Redirect any unmatched url to 404 view (without change location.hash)
        $urlRouterProvider.otherwise('home');
        //$routeProvider
        //     .when('/', {
        //         controller: 'HomeCtrl',
        //         controllerAs: 'HomeCtrl',
        //         templateUrl: 'ngApp/app/Home/home.tpl.html'
        //     })
        //     .otherwise({
        //         redirectTo: '/'
        //     });

        $httpProvider.defaults.cache = false;
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }
}());