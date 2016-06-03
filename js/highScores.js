angular.module('app').controller('highScores', function($scope, myService){
  $scope.users = myService.userArr;
})
