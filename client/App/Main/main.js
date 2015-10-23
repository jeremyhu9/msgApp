var app = angular.module('msgApp.main', []);

app.controller('mainCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){
  $scope.postsPage = function(view) {
    $location.path('/' + view);
  }

  //TODO: Fetch posts from DB

  $http({
    method: 'GET',
    url: '/api/posts'
  }).then(function(response){
    console.log(response.data)

    $scope.posts = response.data;
  })

}]);