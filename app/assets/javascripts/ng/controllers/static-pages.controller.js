var SP = SP || {}
SP.app = angular.module('app',[]);

SP.app.controller('QueueCtrl', ['$scope',
  function($scope) {

    $scope.tweet = {}

    $scope.tweet.value = ""

    $scope.addTweet = function(){
      if(validateTweet().valid){
        submitTweet()
      }
      else{
        
        $scope.error = validateTweet().error
      }
    }

    $scope.colorizePanel = function(){
      if(validateTweet().valid){
        $scope.error = ""
        return "panel-primary"
      }else{
        $scope.error = validateTweet().error
        return "panel-danger"
      }

    }

    var submitTweet = function(){
      console.log("tweet!")
    }

    //move this to a service
    //add date validation too (can't be in the past)
    var validateTweet = function(){
      return_object = {}
      if ($scope.tweet.value.length <= 0){
        return_object.valid = false
        return_object.error = "tweet is too short"
      }else if($scope.tweet.value.length > 140){
        return_object.valid = false
        return_object.error = "tweet is too long"
      }else{
        return_object.valid = true
      }
      return return_object
    }
  }])