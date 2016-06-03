angular.module('app').controller('outoflivesController', function($state, $scope){

  $scope.newGame = function(){
    $state.go('game');
  }
  $scope.goHome = function(){
    $state.go('home');
  }
  $scope.goToPostScore = function(){
    $state.go('postScore');
  }
})
