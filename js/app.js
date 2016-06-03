angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: "views/home.html"

  })
  .state('game', {
    url: '/game',
    templateUrl: 'views/game.html',
    controller: 'gameCtrl'

  })
  .state('highscores', {
    url: '/highscores',
    templateUrl: 'views/highscores.html',
    controller: 'highScores'
  })
  .state('outoflives', {
    url: '/outoflives',
    templateUrl: 'views/outoflives.html',
    controller: 'outoflivesController'
  })
  .state('correct', {
    url: '/correct',
    templateUrl: 'views/correct.html'
  })
  .state('howToPlay', {
    url: '/howToPlay',
    templateUrl: 'views/howToPlay.html'
  })
  .state('postScore', {
    url: '/postScore',
    templateUrl: 'views/postScore.html',
    controller: 'postScore'
  })
  .state('chooseCategory', {
    url: '/chooseCategory',
    templateUrl: 'views/chooseCategory.html',
    controller: 'chooseCategoryCtrl'

  })


});
