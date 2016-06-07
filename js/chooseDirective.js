angular.module('app').directive('chooseDirective', function(myService, $state, $document){
  return {
    retrict: 'A',

    link: function(scope, element, attrs){
      element.on('click', function(){
        if(Number(attrs.testattr) === 42){
          myService.pushDataToGameCtrl(42);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 25){
          myService.pushDataToGameCtrl(25);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 114){
          myService.pushDataToGameCtrl(114);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 309){
          myService.pushDataToGameCtrl(309);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 21){
          myService.pushDataToGameCtrl(21);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 442){
          myService.pushDataToGameCtrl(442);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 67){
          myService.pushDataToGameCtrl(67);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 49){
          myService.pushDataToGameCtrl(49);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 267){
          myService.pushDataToGameCtrl(267);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 574){
          myService.pushDataToGameCtrl(574);
          myService.custom = false;
        }
        else if(Number(attrs.testattr) === 99){
          myService.pushDataToGameCtrl(99);
          myService.custom = false;
        }

        $state.go('game');
      })
    }

  }
})
