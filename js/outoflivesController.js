angular.module('app').controller('outoflivesController', function($state, $scope, myService){
  $scope.yourScore = myService.scoreFromGame;

  $scope.newGame = function(){
    $state.go('chooseCategory');
  }
  $scope.goHome = function(){
    $state.go('home');
  }
  $scope.goToPostScore = function(){
    $state.go('postScore');
  }
})
