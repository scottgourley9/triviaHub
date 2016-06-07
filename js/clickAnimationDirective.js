angular.module('app').directive('clickAnimationDirective', function($document){
  return {

    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).click(function(){
          $(this).addClass('animated shake');
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated shake');
          });



      })
    }
  }
})
