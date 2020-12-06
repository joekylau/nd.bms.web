'use strict';
var angular = require('angular');

require('../css/login.css')

function loginCtrl($scope, $sessionStorage, $state, $filter, $cookies, LoginSvc) {
  $scope.progress = false;
  $scope.title = 'nd.tr.pos.web.client'
  $scope.copyrightYear = new Date().getFullYear();
  //LoginSvc.logout();
  $scope.submitForm = function(isValid){
    if ( isValid ) {
      $cookies.put('username', $scope.username);
      $scope.progress = true;
      window.location.href = 'booking';
    }
  }
}

var stateConfig = {
  name: 'login',
  url: '/login',
  templateUrl: require('./login.html'),
  controller: 'loginCtrl'
};

loginCtrl.$inject = [
  '$scope',
  '$sessionStorage',
  '$state',
  '$filter',
  '$cookies',
  'LoginSvc'
]

function routeConfig($stateProvider) {
  $stateProvider.state(stateConfig)
}

angular.module('b2b')
  .controller('loginCtrl', loginCtrl)
  .config([ '$stateProvider', routeConfig ])

module.exports = stateConfig;
