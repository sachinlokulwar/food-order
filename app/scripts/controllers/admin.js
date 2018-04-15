'use strict';

/**
 * @ngdoc function
 * @name onlineFoodOrderApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the onlineFoodOrderApp
 */
angular.module('onlineFoodOrderApp')
  .controller('AdminCtrl', function ($scope, itemFactory) {
    $scope.itemDetails = angular.copy(itemFactory.getItemDetails());
    console.log($scope.itemDetails);

    $scope.resetPrice = function(){
        $scope.itemDetails = itemFactory.getItemDetails();
    }

    $scope.updatePrice = function(){
        itemFactory.changeItemDetails($scope.itemDetails);
    }
    
    $('.navbar-nav > li').removeClass('active');
    $('.navbar-nav > li.admin').addClass('active');

  });
