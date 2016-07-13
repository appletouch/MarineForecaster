
// ANGULAR APP WITH DEPENDENCIES
var weatherApp =angular.module('weatherApp',['ngRoute', 'ngResource'])

//ROUTES
weatherApp.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider

        .when('/',{
            templateUrl:'pages/home.htm',
            controller:'homeController'
        })

        .when('/forecast',{
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

        .when('/forecast/:days',{
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        });

        // $locationProvider.html5Mode({
        //     enabled: false,
        //     requireBase: false
        // });

        // $scope.days= $routeParams.days || 2;
}]);












