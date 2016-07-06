(function () {

    angular
        .module('app.home')
        .service('HomeProject', HomeProject);

    HomeProject.$inject = ['$http', 'SERVICE_CONSTANTS'];

    function HomeProject($http, SERVICE_CONSTANTS) {

        var service = {
            apply: apply,
            showCapaOpaca: showCapaOpaca,
            hideCapaOpaca: hideCapaOpaca
        };

        return service;

        ////////////

        function apply(passportData) {
            showCapaOpaca();

            var crossOver = {
                CrossOverId: guid,
                Passport: {
                    Photo: { Image: passportData.image.dataURL }
                }
            };

            var params = { passportRequest: crossOver };
            return $http.post(SERVICE_CONSTANTS.APPLY, params)
                    .then(function (response) {
                        hideCapaOpaca();
                        return response;
                    });
        }

        function showCapaOpaca() {
            var capaOpaca = $("#capa-opaca");
            capaOpaca.show();
        }

        function hideCapaOpaca() {
            var capaOpaca = $("#capa-opaca");
            capaOpaca.hide();
        }
    };
})();