/**
 * Created by I306335 on 12/2/2014.
 */
var perfApp= angular.module("perfApp", [
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngMessages",
    "ui.bootstrap",
    "perfApp.service",
    "perfApp.controller",
    "perfApp.directive"
]);

perfApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/template/page/homeTemplate.html',
            controller:"HomeController"
        });
});
