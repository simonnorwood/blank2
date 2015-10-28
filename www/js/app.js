angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
   });
})

// states for each page
.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/app');

$stateProvider

// main page that first loads, select region page
.state('app', {
    url: '/app',
        templateUrl: 'templates/regions.html',
        controller: 'regionCTRL'
  })
// EU page
.state('app.EU', {
    url: '/EU',
        templateUrl: 'templates/EU.html',
        controller: 'APICtrl'  
  })
// USCAN page
.state('app.USCAN', {
    url: '/USCAN',
        templateUrl: 'templates/USCAN.html',
        controller: 'APICtrl'
  });
});