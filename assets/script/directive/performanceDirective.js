/**
 * Created by I306335 on 12/2/2014.
 */
var performanceDirectives = angular.module("perfApp.directive",[]);

performanceDirectives.directive("performanceCard",
    ['$log',"CommentService","$timeout",   function($log,CommentService,$timeout){
        return {
          restrict:"E",
          templateUrl:"assets/template/directive/cardTemplate.html",
          replace:true,
          scope:{
              title:"@",
              description:"@",
              comments:"=",
              goalid:"@"
          },
          link: function (scope,element,attribute) {
              scope.commentFlag=true;
          },
          controller:function($scope,$element,$attrs,CommentService,$timeout){
              $scope.doAddComment = function(){
                  $scope.commentFlag =  ! $scope.commentFlag;
              }
              $scope.saveComment = function(){
                 var commentArray =  CommentService.getCommentsByEmployeeId("I000121",$scope.goalid).$asArray();
                  $timeout(function(){
                      commentArray.$add($scope.comment).then(function(){
                          $log.log("Adding..",$scope.comment);
                          $scope.commentFlag = true;
                          $scope.comment ="";
                      });
                  },0);
              }
          }
        };
}])