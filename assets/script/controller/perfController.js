/**
 * Created by I306335 on 12/3/2014.
 */

var performanceController = angular.module("perfApp.controller",[]);

performanceController.controller("HomeController",
    ["$scope","$log","EmployeeService","$location", "$rootScope","$timeout",
        function($scope,$log,EmployeeService,$location,$rootScope,$timeout){
            $scope.employee ={};
           var ref= EmployeeService.getEmployeeDetailById("I000121");
            ref.on("value", function(snapshot) {
                $timeout(function(){
                    $scope.employee = snapshot.val();
                });
            }, function (errorObject) {
                $log.log("The read failed: " , errorObject.code);
            });

            $scope.doLogin = function () {
                $location.path("/home");
                $rootScope.loginClass=true;
            }

}]);
performanceController.controller("HeaderController",
   ["$scope","$log","EmployeeService","$location","$rootScope", function($scope,$log,EmployeeService,$location,$rootScope){
       $scope.doLogout = function () {
           $rootScope.loginClass=false;
           $location.path("/");
       }
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

performanceController.controller('GoalInstanceCtrl',
    ["$scope", "$timeout","$modalInstance","GoalService","$log",
    function ($scope, $timeout,$modalInstance,GoalService,$log) {

    $scope.ok = function ($event) {
            var syncGoalArray = GoalService.getGoalById("I000121").$asArray();
        $log.log("$scope.goalDescription",$scope.goalDescription)
            var anewGoal = {
                "GoalTitle":$scope.goalTitle,
                "Goaldescription":$scope.goalDescription,
                "Starttime":$scope.goalStartTime,
                "Endtime":$scope.goalEndTime,
                "Goalid": syncGoalArray.length+1,
                "Rating": 0
            };
        $timeout(function(){
            syncGoalArray.$add(anewGoal).then(function(){
                $modalInstance.close();
            });
        },0);
    };
    $scope.cancel = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
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
}]);
