angular.module('app').controller('createQuizCtrl', function($scope, myService, $state){
myService.custom = false;
  $scope.createQuestion = function(){
    $scope.customeQuestion = {
      category: {
        title: $scope.userCat
      },
      value: $scope.userValue,
      question: $scope.userQuestion,
      answer: $scope.userAnswer
    };
    myService.createQuizArr($scope.customeQuestion);
    $scope.userCat = '';
    $scope.userValue = '';
    $scope.userQuestion = '';
    $scope.userAnswer = '';
  }
  $scope.finalizeQuiz = function(){
    $state.go('chooseCategory')

  }
  $scope.pageReload = function(){
    myService.startBrandNewQuiz();
  }
})
