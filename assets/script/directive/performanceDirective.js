/**
 * Created by I306335 on 12/2/2014.
 */
var performanceDirectives = angular.module("profileApp.directive",[]);
performanceDirectives.directive("performanceCard",
    ["$scope",
    function($scope){
        return {
          template:"<h1>Sandeep</h1>"
        };

}])