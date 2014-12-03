/**
 * Created by I306335 on 12/3/2014.
 */

var performanceController = angular.module("perfApp.controller",[]);

performanceController.controller("MainController",
    ["$scope","$modal","$log",function($scope,$modal,$log){

    $scope.createGoal = function(){
        var modalInstance = $modal.open({
            templateUrl: 'goalModalContent.html',
            controller: 'GoalInstanceCtrl',
            size: 'md'
        });
    }
}]);

performanceController.controller('GoalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.ok = function () {
        console.log($scope.goalName);
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.openStartTime = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.sopened = true;
    };
    $scope.openEndTime = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.eopened = true;
    };
});
