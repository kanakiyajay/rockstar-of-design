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
		$scope.cost = [299,639,339,229];
	};

	$scope.isInCart = function  (text) {
		for (var i = $scope.cartDomains.length - 1; i >= 0; i--) {
			if ($scope.cartDomains[i].text === text)
			{
				return true;
			}
		}
		return false;
	};

	$scope.addToCart = function  (i) {
		$scope.cartDomains.push($scope.availableDomains[i]);
	};

	$scope.totalCost = function  () {
		var cost = 0;
		for (var i = $scope.cartDomains.length - 1; i >= 0; i--) {
			cost += $scope.cartDomains[i].cost;
		}
		return cost;
	};

	$scope.removeFromCart = function  (text) {
		for (var i = $scope.cartDomains.length - 1; i >= 0; i--) {
			if ($scope.cartDomains[i].text === text)
			{
				$scope.cartDomains.splice(i,1);
			}
		}
	};

});

App.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});