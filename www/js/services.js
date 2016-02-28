(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .factory('Meta', Meta)

    Meta.$inject = ['$http'];

    function Meta($http) {


        var service = {
            getMeta: getMeta
        };

        return service;

        function getMeta() {
            return $http.get('http://178.62.56.31:8000/status-json.xsl')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail() {
                return 'XHR Failed';
            }
        }


    }

})();






