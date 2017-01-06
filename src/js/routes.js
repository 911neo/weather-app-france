'use strict';

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
        $stateProvider

        $urlRouterProvider.otherwise('/');

            .state('home', {
                url:         '/home',
                templateUrl: 'views/home/home.html',
                controller:'homeCtrl',

            });



    }
]);
