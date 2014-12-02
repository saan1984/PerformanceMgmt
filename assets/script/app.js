/**
 * Created by I306335 on 12/2/2014.
 */
var profileApp= angular.module("profileApp", [
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngMessages",
    "ui.bootstrap",
    "profileApp.directive"
]);

profileApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/page/homeTemplate.html'
        });
});
