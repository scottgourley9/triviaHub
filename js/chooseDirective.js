angular.module('app').directive('chooseDirective', function(myService, $state){
  return {
    retrict: 'A',

    link: function(scope, element, attrs){
      element.on('click', function(){
        if(Number(attrs.testattr) === 42){
          myService.pushDataToGameCtrl(42);
        }
        else if(Number(attrs.testattr) === 25){
          myService.pushDataToGameCtrl(25);
        }
        else if(Number(attrs.testattr) === 114){
          myService.pushDataToGameCtrl(114);
        }
        else if(Number(attrs.testattr) === 309){
          myService.pushDataToGameCtrl(309);
        }
        $state.go('game');
      })
    }

  }
})
