'use strict';

// Declare app level module which depends on views, and components

angular.module('dummyAppIconApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .otherwise({redirectTo: '/dashboard'});
    }])