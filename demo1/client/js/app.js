'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.restServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/peoples', {templateUrl: 'partials/people-list.html', controller: 'PeopleListCtrl'});
    $routeProvider.when('/peoples/:peopleId', {templateUrl: 'partials/people-detail.html', controller: 'PeopleDetailCtrl'});
    $routeProvider.when('/peoples/:peopleId/taxyearreports', {templateUrl: 'partials/taxyearreport-list.html', controller: 'TaxYearReportListCtrl'});
    $routeProvider.when('/companies/:companyId/:yearId', {templateUrl: 'partials/companies-list.html', controller: 'CompaniesReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/peoples'});
}]);