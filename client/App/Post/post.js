var app = angular.module('msgApp.post', []);

app.controller('postCtrl', ['$scope', '$http', function($scope, $http){
  $scope.name = 'Jay';

  //TODO: Send username and message to server & then to DB
  // Mock Data
  var post = {
    title: 'Coolio',
    description: 'Wata',
    username: 'Jay'
  }



  //Sending post to server api
  $scope.postServer = function() {
    console.log("should be posting")
    $http({
      method: 'POST',
      url: '/api/posts',
      data: post
    }).then(function successCallback(response) {
      console.log("Post sent");
    }, function errorCallback(response) {
      console.log("Post failed");
    });
  };
  

}]);