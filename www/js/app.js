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
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/regions');

$stateProvider

// main page that first loads, select region page
.state('regions', {
    url: '/regions',
        templateUrl: 'templates/regions.html',
        controller: 'APICtrl'
  })
// EU page
.state('EU', {
    url: 'region/:id',
        templateUrl: 'templates/EU.html',
        controller: 'APICtrl'   
  })
// EAGM page
.state('EAGM', {
    url: '/EAGM',
        templateUrl: 'templates/EAGM.html',
        controller: 'APICtrl'  
  })
// ASPAC page
.state('ASPAC', {
    url: '/ASPAC',
        templateUrl: 'templates/ASPAC.html',
        controller: 'APICtrl'  
  })
// CHINA page
.state('CHINA', {
    url: '/CHINA',
        templateUrl: 'templates/CHINA.html',
        controller: 'APICtrl'
  })
// INDIA page
.state('INDIA', {
    url: '/INDIA',
        templateUrl: 'templates/INDIA.html',
        controller: 'APICtrl'  
  })
// LATAM page
.state('LATAM', {
    url: '/LATAM',
        templateUrl: 'templates/LATAM.html',
       controller: 'APICtrl'

  })
// USCAN page
.state('USCAN', {
    url: '/USCAN',
        templateUrl: 'templates/USCAN.html',
        controller: 'APICtrl'
  })
// ALL page
.state('ALL', {
    url: '/ALL',
        templateUrl: 'templates/all.html',
        controller: 'APICtrl'
  });
}])