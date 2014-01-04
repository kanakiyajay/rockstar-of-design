/*!
** Example App
** Licensed under the Apache License v2.0
** http://www.apache.org/licenses/LICENSE-2.0
** Built by Jay Kanakiya ( @techiejayk )
**/

"use strict";

var App = angular.module("rockstar",[]);

App.controller("RckCtrl",function  ($scope) {

	/* Will persist via LocalStorage */
	$scope.cartDomains = [];

	$scope.availableDomains = [];

	$scope.search = function  () {
		var dText = $scope.searchText;
		$scope.availableDomains = [];
		$scope.availableDomains.splice(0,0,{text : dText+".net" , cost : 299 },{text : dText+".com" , cost : 639 },{text : dText+".org" , cost : 339 },{text : dText+".biz" , cost : 229 });
	};

	$scope.addToCart = function  (i) {
		$scope.cartDomains.push($scope.availableDomains[i]);
	};

});