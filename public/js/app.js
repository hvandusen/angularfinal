var app = angular.module('Homeworks',[])


app.factory('Homework', function ($http) {
    return [
          {
            assignment: 'Test First JavaScript',
            url: 'http://github.com/myusername/TestFirst',
            status: 'incomplete'
          },
          {
            assignment: 'Angular Flash Cards Day 1',
            url: 'http://github.com/myusername/angularday1',
            status: 'completed'
          },
          {
            assignment: 'Angular Flash Cards Day 2',
            url: 'http://github.com/myusername/angularday2',
            status: 'completed'
          },
          {assignment: 'Angular Flash Cards Day 3',
          url: 'http://github.com/myusername/angular3',
          status: 'completed'
        }
      ];
});


app.controller('MainController', function ($scope, Homework) {
  $scope.homeworks = Homework
  $scope.current = {}
  $scope.show = function(hw){
    $scope.current = hw
  }

});
