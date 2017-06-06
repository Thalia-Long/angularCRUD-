var app = angular.module("myApp", ["ngRoute"]);
//app.controller("talkCntrl", talkCntrl);
app.controller("talkCntrl", function($scope, talkDataOp){
	$scope.status;
	$scope.students;
	getTalks();
	
	function getTalks(){
		talkDataOp.getTalks().then(function (data){
			$scope.talks = data.data;
		})
	}
	
	function update(){
		talkDataOp.update();
	}
	
	function deleteTalk(){
		talkDataOp.deleteTalk();
	}
});

function talkCntrl($scope, $http, myService) {
	myService.getTalks().then(function (data) {
		$scope.talks = data.data;
	})
	
    $http.get("http://localhost:8082/JAXRSJsonCRUDExample/rest/talk").then(function (data) {
        $scope.talks = data.data;
    });
}

//app.factory('talkDataOp', ['$http', function($http){
//	var urlBase = 'http://localhost:8090/JAXRSJsonCRUDExample/rest';
//	var talkDataOp = {};
//	talkDataOp.getTalks().then(function(data){});
//	talkDataOp.update();
//		
//	}]);

/*
*/
app.config(function ($routeProvider, $locationProvider){
	$locationProvider.hashPrefix ='';
	$routeProvider.when("/Talk", {
		template:'<h2>This is talk </h2>'
	})
	.when("/AddTalk", {
		template: '<h2> This is add talk </h2>'
	})
})