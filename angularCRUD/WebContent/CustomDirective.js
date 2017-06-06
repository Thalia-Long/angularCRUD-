/**
 * TO-DO: implement isolated scope,, so that we user use the ng-app, it won't affect the ng-customer directive
 * Using one of these = @ $
 */
var app = angular.module("myApp", []);
app.directive("myDir", function(){
	return {
		restrict: "E",
	template:
		"<div>this is my custom directive </div>",
	}
})

