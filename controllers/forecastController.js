/**
 * Created by PKoolwijk on 12-7-2016.
 */
weatherApp.controller('forecastController', ['$scope', '$routeParams','$filter','cityService','weatherService',function ($scope,$routeParams, $filter,cityService,weatherService) {

    //model variabel in scope of controller
    $scope.city = cityService.city;

    //detemine if there is a parameter in the url or use the service value for days (extra for demo purpose and see how this works in angular 2
    if ($routeParams.days){
        cityService.days=$routeParams.days;
        console.log('number of days requested via URL: '+ $routeParams.days);
    }
    $scope.days = cityService.days || 1;
    console.log('number of days in scope: '+ cityService.days);


    $scope.weatherResult= weatherService.GetWeather($scope.city, $scope.days);


    //UTILS FUNCTIONS
    //Util function to covert temp to Fahrenheit as it is return in KELVIN
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    //Util function to covert temp to degrees as it is return in KELVIN
    $scope.convertToDegrees =function (degK) {
        tempInDegrees=degK-273.15;
        return (tempInDegrees.toFixed(1));
    };

    //Util function for date as the full date time is returned
    // multiple  1000 as time is coming back from api in milisecs
    $scope.convertToDate = function(dt) {

        var formatedDate =  $filter('date')(new Date(dt * 1000), ' d MMM, y');
        return formatedDate;

    };
}]);