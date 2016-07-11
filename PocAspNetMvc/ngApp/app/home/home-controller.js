(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope'];

    function HomeCtrl($scope) {
        var vm = this;

        // Global Controller Variables

        // Controller Functions

        // Main Function
        //initialize();

        //function initialize() {
        //    handleFileSelect();
        //}

        $scope.doubleWrap = "{{outputImage}}";

        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.theImage1 = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

        $scope.onUpdate = function (data) {
            //console.log(data)
        }
    }

})();