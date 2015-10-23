// Angular stuff here
angular.module('msgApp', ['ui.router', 
  'msgApp.login', 
  'msgApp.main',
  'msgApp.post',
  'msgApp.signup'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('loginPage', {
        url: '/login',
        controller: 'loginCtrl',
        templateUrl: '/App/Login/login.html'
      })
      .state('main', {
        url: '/main',
        controller: 'mainCtrl',
        templateUrl: '/App/Main/main.html'
      })
      .state('post', {
        url: '/post',
        controller: 'postCtrl',
        templateUrl: '/App/Post/post.html'
      })
      .state('signup', {
        url: '/signup',
        controller: 'signupCtrl',
        templateUrl: '/App/signup/signup.html'
      })
  }]);