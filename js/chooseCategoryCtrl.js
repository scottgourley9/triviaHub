angular.module('app').controller('chooseCategoryCtrl', function($scope, $state, myService){

$scope.chooseTheCustom = function(){
  myService.custom = true;
  myService.catNum = 0;
  $state.go('game');

}

})
