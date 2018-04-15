'use strict';

/**
 * @ngdoc function
 * @name onlineFoodOrderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onlineFoodOrderApp
 */
angular.module('onlineFoodOrderApp')
  .controller('AboutCtrl', function () {
    $('.navbar-nav > li').removeClass('active');
    $('.navbar-nav > li.about').addClass('active');
  });
