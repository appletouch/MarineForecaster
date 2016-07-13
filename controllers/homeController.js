/**
 * Created by PKoolwijk on 12-7-2016.
 */
//Controllers ( one for the home route/view and one for the forecast route/view)
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', '$log',function ($scope,$location, cityService ,$log) {

    //model variables in scope of controller
    $scope.city= cityService.city;
    $scope.days= cityService.days;

    //watch if they change in the scope and update service
    $scope.$watch('city',function () {
        cityService.city = $scope.city;
    });

    $scope.$watch('days',function () {
        cityService.days= $scope.days;

        $log.info($scope.city);
    })

    $scope.submit=function () {

        $location.path("/forecast")
    }


}]);