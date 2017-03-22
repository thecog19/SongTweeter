var SP = SP || {}
SP.app = angular.module('app',[]);

SP.app.controller('QueueCtrl', ['$scope',
  function($scope) {
    console.log("here")
    $scope.test = "THIS IS A TEST"
  }])