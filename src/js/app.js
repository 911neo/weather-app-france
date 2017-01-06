'use strict';

var app = angular.module('app',['ui.router'])
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url:         '/',
                templateUrl: '/src/views/home/home.html',
                controller:  'homeCtrl'
            });



    }
]);
