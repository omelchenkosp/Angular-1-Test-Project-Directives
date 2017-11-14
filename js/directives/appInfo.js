app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html',
    link: function(scope, element, attrs) { 
      scope.buttonText = "Install", 
      scope.installed = false, 

      scope.download = function() { 
        element.toggleClass('btn-active'); 
        if (scope.installed) { 
          scope.buttonText = "Install"; 
          scope.installed = false; 
        } else { 
          scope.buttonText = "Uninstall"; 
          scope.installed = true; 
        } 
      } 
    } 
  }; 
});