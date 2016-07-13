/**
 * Created by PKoolwijk on 12-7-2016.
 */
//Restrict: A=Attribute , E= Element , C= Class, M= comment

//SCOPE holes in isolated scope define model variable in isolated scope to connect to parent scope
// @ is for just text and one way
// =  is for object and two way binding (be careful)
// &  is for functions
weatherApp.directive("weatherComponent", function () {

    return{
        restrict:'E',
        templateUrl:'directives/weatherReport.htm',
        replace:true,
        scope:{
            weatherDay: "=",
            convertToTemp: "&",
            convertToDate: "&"

        }

    }


})