/**
 * Created by I306335 on 12/4/2014.
 */
var performanceService = angular.module("perfApp.service",["firebase"]);

performanceService.factory("PerformanceService",
  ["$firebase",
       function($firebase){
           var ref = new Firebase("https://performancetool.firebaseio.com/");
           var sync = $firebase(ref);
         return {
             "sync":sync
         };
       }
  ]);

performanceService.factory("EmployeeService",
  ["$firebase", function($firebase){
      return{
          getEmployeeDetailById : function(id){
              return new Firebase("https://performancetool.firebaseio.com/"+id)
          }
      }
    }
  ]);

performanceService.factory("GoalService",
   ["$firebase", function($firebase){
    return{
            getGoalById : function(id){
                var ref= new Firebase("https://performancetool.firebaseio.com/"+id+"/Goals");
                var sync = $firebase(ref);
                return sync;
            }
        }
    }
 ]);
performanceService.factory("CommentService",
  ["$firebase", function($firebase){
      return{
          getCommentsByEmployeeId : function(id,index){
              var ref= new Firebase("https://performancetool.firebaseio.com/"+id+"/Goals/"+index+"/Comment");
              var sync = $firebase(ref);
              return sync;
            }
          }
    }
  ]);