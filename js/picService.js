angular.module('app').service('picService', function(){
  var picArr = [
    'images/lives.png',
    'images/lives.png',
    'images/lives.png'
  ]
  this.getPicData = function(){

    return picArr;
  }
  this.remove = function(n){
    if(n){
      picArr.splice(0);
      for(var i = 0; i < 3; i++){
        picArr.push('images/lives.png');
      }
    }
    else {
      picArr.splice(0, 1);
      if(picArr.length === 0){
        for(var i = 0; i < 3; i++){
          picArr.push('images/lives.png');
        }
      }

    }


  }


})
