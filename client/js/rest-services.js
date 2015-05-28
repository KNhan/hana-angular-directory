'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('People', ['$resource',
        function ($resource) {
            return $resource('./../server/rest/people.xsjs/?peopleId=:peopleId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('./../server/rest/peopletaxreports.xsjs/?peopleId=:peopleId', {});
        }])
    .factory('Company', ['$resource',
        function ($resource) {
            return $resource('./../server/rest/company.xsjs?company=:companyId', {});
        }]);