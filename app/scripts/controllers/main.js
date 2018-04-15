'use strict';

/**
 * @ngdoc function
 * @name onlineFoodOrderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineFoodOrderApp
 */
angular.module('onlineFoodOrderApp')
  .controller('MainCtrl', function ($scope, itemFactory, $uibModal) {

    $scope.itemDetails = itemFactory.getItemDetails();
    $scope.cartDetails = [];
    $scope.showCartPage = false;
    $scope.checkoutDetails = {
      name: '',
      address: '',
      mobile: '',
      email: ''
    }
    $scope.addToCart = function(item){
      var added = 0;
      for(var cartItem in $scope.cartDetails){
        if($scope.cartDetails[cartItem].name == item.name){
          $scope.cartDetails[cartItem].quantity = $scope.cartDetails[cartItem].quantity + 1;
          added = 1;
          break;
        }
      }
      if(!added){
        $scope.cartDetails.push({name: item.name, price: item.price, quantity: 1});
      }
    }

    $scope.removeItem = function(item){
      $scope.cartDetails = $scope.cartDetails.filter(function(el) {
        return el.name !== item.name;
      });
    }

    $scope.goToCart = function(){
      $scope.showCartPage = true;
    }

    $scope.getTotal = function(){
      var total = 0;
      for(var i = 0; i < $scope.cartDetails.length; i++){
          var product = $scope.cartDetails[i];
          total += (product.price * product.quantity);
      }
      return total;
    }

    $scope.goToHome = function(){
      $scope.showCartPage = false;
    }
    $scope.checkOut = function(){
      var checkoutDetails = $scope.checkoutDetails;
      var cartDetails = $scope.cartDetails;
      
      $scope.successModal = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/checkout-success-modal.html',
        // controller: function($scope) {
        //   $scope.checkoutDetails = checkoutDetails;
        //   $scope.cartDetails = cartDetails;
        //   $scope.ok = ok;
        // }
        scope: $scope
      });
    };
    $scope.cancel = function () {
      $scope.successModal.close();
    };


    $('.navbar-nav > li').removeClass('active');
    $('.navbar-nav > li.home').addClass('active');
  });
