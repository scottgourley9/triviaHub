angular.module('app').controller('homeCtrl', function($scope, $document, $state){

$('.triviaLetters').addClass('animated slideInLeft')
  $('.hubLetters').addClass('animated slideInRight')


$scope.goToTriviaSelection = function(){
  $state.go('chooseCategory');
}


})
