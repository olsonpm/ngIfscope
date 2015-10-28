var app = angular.module('myApp', []);
app.controller('C1', function($scope){
	$scope.name = "Jacob";
});

app.directive('directive', function() {
  return {
    restrict: 'E',
    transclude: true,
      templateUrl: 'directive.html',
    scope: {
      name: '@'
    },
    controller:['$scope', function($scope){
        
    
        
        $scope.name = $scope.$parent.name;
        
        // Two way watching keeps both parent and directive scopes updated.
        $scope.$watch('name', function(){
            console.log("directive scope.name: " + name);
            $scope.$parent.name = $scope.name;
        });
        $scope.$parent.$watch('name', function(){
            console.log("directive scope.name: " + name);
            $scope.name = $scope.$parent.name;
        });  
    }]
  }});
