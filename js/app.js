var app =angular.module('CAMPUS360',[]);

app.controller("dashboardcontroller",function($scope){


    $scope.collegename = "campus360";
      $scope.totalstudents = 1200;
      $scope.totalfaculty = 85;
    

    console.log  ("dashboard controller is loaded");
      $scope.students=[
        "shahid","jhon","allen","shaun"

      ];
       
      $scope.addstudent=function(){
          
        $scope.totalstudents++;
        

      };
});
