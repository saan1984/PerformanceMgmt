/**
 * Created by I306335 on 12/2/2014.
 */
var performanceDirectives = angular.module("perfApp.directive",[]);

performanceDirectives.directive("performanceCard",
    [ function(){
        return {
          restrict:"E",
          templateUrl:"assets/template/directive/cardTemplate.html"
        };
}])