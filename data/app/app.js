var app = angular.module("pWebsite", ['ngRoute','ui.bootstrap']);






app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
     .when('/main',{
        templateUrl : "data/partials/main.html",
        controller : "MainCtrl"
      })
  
      //  .when('/howBout',{
      //   templateUrl : "partials/howBout.html",
      //   controller : "howBoutCtrl"
      // })
      //   .when('/main',{
      //   templateUrl : "partials/main.html",
      //   controller : "mainCtrl"
      // })
      //   .when('/win',{
      //   templateUrl : "partials/win.html",
      //   controller : "winCtrl"
      // })
      .otherwise({
        redirectTo: '/main'
      });
   
  }
  ]);