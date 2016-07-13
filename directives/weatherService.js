/**
 * Created by PKoolwijk on 12-7-2016.
 */
/*calling the raw API
 There are a couple ways to make cross domain requests from a client browser. One method is called Jsonp or Json with padding.
 The AngularJs library makes this really simple.

 First of all, your Jsonp request will be worth nothing if the server you’re requesting data from does not support it.
 Jsonp requests require explicit support on the server side. This is because the data that’s returned is formatted differently.
 The ‘p’ in Jsonp stands for padding.

 Json data is really wrapped in a Javascript function.
 This function is then evaluated as a script, passing the data into a callback to be saved by your client program

 The client script also requires that we specify the callback to send data to.
 AngularJs has its own callback pattern, so it would follow that it has a pattern to handle Jsonp callbacks.
 It does. The callback is always called JSON_CALLBACK.

 $resource(url, [paramDefaults], [actions=  { 'get':    {method:'GET'},], options);
 */

weatherApp.service('weatherService',['$resource', function($resource) {


    this.GetWeather =function (city, days) {


        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
            {callback: "JSON_CALLBACK"},
            {get: { method: "JSONP" }}
        );

        //calling the API with object to query API
        return weatherAPI.get({
            q:city,
            cnt:days,
            appid:"bf859d6da67fd0496a2045b509675bbe"
        });

        //console.log($scope.weatherResult);


    }
}]);
