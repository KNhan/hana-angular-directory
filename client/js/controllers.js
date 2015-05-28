'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('PeopleListCtrl', ['$scope', 'People', function ($scope, People) {
        $scope.peoples = People.query();
    }])
    .controller('PeopleDetailCtrl', ['$scope', '$routeParams', 'People', function ($scope, $routeParams, People) {
        $scope.people = People.get({peopleId: $routeParams.peopleId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.peoples = Report.query({peopleId: $routeParams.peopleId});    }])
        
    .controller('TaxYearReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.peoples = Report.query({peopleId: $routeParams.peopleId});    }])
 .controller('CompaniesReportListCtrl', ['$scope', '$routeParams', 'Company', function ($scope, $routeParams, Company) {
        $scope.company = Company.query({companyId: $routeParams.companyId});    }])        
        
        
        
        ;
