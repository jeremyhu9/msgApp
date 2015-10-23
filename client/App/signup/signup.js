var app = angular.module('msgApp.signup', []);

app.controller('signupCtrl', ['$scope', '$http', function($scope, $http){
  $scope.user = {
    email: 'tempemail@tempemail.com',
    password: 'mockname'
  };

  $scope.addUser = function() {
    console.log($scope.user)
  }
}])