var app = angular.module('msgApp.login', []);

app.controller('loginCtrl', ['$scope', '$location', function($scope, $location){
  // Pass the username and pw to authentication

  $scope.routeTo = function(view) {
    $location.path('/' + view);
  }
}])
