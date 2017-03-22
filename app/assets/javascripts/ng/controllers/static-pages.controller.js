var SP = SP || {}
SP.app = angular.module('app',[]);

SP.app.controller('QueueCtrl', ['$scope', "$http",
  function($scope, $http) {

    $scope.tweet = {}
    $scope.tweet.value = ""

    $scope.date = new Date().toDateString()
    $scope.time = new Date().toLocaleTimeString();

    $scope.sent = false

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
      $.ajax({ url: '/tweets.json',
      type: 'POST',
      beforeSend: $.rails.CSRFProtection,
      headers: {
        'X-CSRF-Token': '<%= form_authenticity_token.to_s %>'
      },
      data: $scope.tweet,
      success: function(response) {
        $scope.tweet = {}
        $scope.tweet.value = ""
        $scope.sent = true
      }
    });
    }

    $scope.getQueue = function(){
      $.ajax({ 
        url: '/tweets.json',
        type: 'get',
        success: function(response){
          console.log(response)
        }
      })
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
      }else if(!$scope.tweet.hours){
        return_object.valid = false
        return_object.error = "You must select a time to publish!"
      }else{
        return_object.valid = true
      }
      return return_object
    }
  }])