/**
 * Created by I306335 on 12/3/2014.
 */

var performanceController = angular.module("perfApp.controller",[]);

/*performanceController.run("$rootScope",function($rootScope){
    $rootScope.user={
        "userId":"I306335",
        "userName":"Sandeep Kumar Patel"
    };
});*/

performanceController.controller("HomeController",
    ["$scope","$log","PerformanceService",
        function($scope,$log,PerformanceService){
}]);

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
