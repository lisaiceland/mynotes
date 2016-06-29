
var app = angular.module('starter', ['ionic']);

app.controller('listCtrl', function($scope){

  $scope.notes = [
  {
    title: 'first note',
    description: 'first description'
  },
  {
    title: 'second note',
    description: 'second description'
  }
];
});

// config will go inside the app controller as the last step to deal with the app view states:
app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });
  $stateProvider.state('edit', {
    url: '/edit',
    templateUrl: 'templates/edit.html'
  });

  // if url doesn't match any of the states, then go to the default state:
  $urlRouterProvider.otherwise('/list');

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
