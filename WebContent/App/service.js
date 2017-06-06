/**
 * You can only have one function in inside service?
 */
var talkService = angular.module('talkService',[]);
talkService.controller("myService", function ($scope,$http) {
	//http://localhost:8090/JAXRSJsonCRUDExample/rest/talk/
		
	$http({
		method: 'get', 
		url: 'http://localhost:8090/JAXRSJsonCRUDExample/rest/talk'
	}).then(function (response) {
		$scope.listTalks = response.data;
	},function (error){
		console.log(error, 'can\'t get data.');
	});
});
/*
 * the factory contains methods for talk
 */
//var talkService = angular.module('talkService',[])
//
//talkService.factory('talkDataOp', ['$http', function ($http){
//	
//	var urlBase = 'http://localhost:8090/JAXRSJsonCRUDExample/rest';
//	var talkDataOp = {};
//	
//	//Get talks
//	talkDataOp.getTalks = function($scope, $http){
//		return $http.get("http://localhost:8090/JAXRSJsonCRUDExample/rest/talk").success(function(response){
//			$cope.listTalks = response.talk;
//		});
//	};
//	
//	//Insert talk
//	talkDataOp.insert = function(talk){
//		return $http.post("http://localhost:8090/JAXRSJsonCRUDExample/rest/insert", talk);
//	}
//	
//	//Update talk
//	talkDataOp.update = function(talk){
//		return $http.put("http://localhost:8090/JAXRSJsonCRUDExample/rest/update, talk");
//	}
//	
//	//Delete talk
//	talkDataOp.deleteTalk = function(id){
//		return $http.post("http://localhost:8090/JAXRSJsonCRUDExample/rest/delete" + '/' + id);
//	}
//	
//	return talkDataOp;
//}])