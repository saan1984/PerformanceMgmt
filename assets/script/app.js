/**
 * Created by I306335 on 12/2/2014.
 */
var profileApp= angular.module("perfApp", [
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngMessages",
    "ui.bootstrap",
    "perfApp.controller",
    "perfApp.directive"
]);

profileApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/template/page/homeTemplate.html'
        });
});
