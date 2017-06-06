var app = angular.module("myApp", []);
app.controller("myController", function($scope) {
    $scope.msg = "Hello, this is my first AngularJS application";
    
    $scope.Emp =[{id:1, Name:'Tom'},
                 {id:2, Name:'John'},
                 {id:3, Name:'Chris'}];
             
    $scope.Show = function() {
        alert("Hello");
    };
});
