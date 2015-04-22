'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('People', ['$resource',
        function ($resource) {
            return $resource('/p1940088139trial/i058153/demo_server/rest/people.xsjs/?peopleId=:peopleId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('/p1940088139trial/i058153/demo_server/rest/peopletaxreports.xsjs/?peopleId=:peopleId', {});
        }])
    .factory('Company', ['$resource',
        function ($resource) {
            return $resource('/p1940088139trial/i058153/demo_server/rest/company.xsjs?company=:companyId', {});
        }]);