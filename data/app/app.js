var app = angular.module("pWebsite", ['ngRoute','angular.filter','ui.bootstrap']);






app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
     .when('/main',{
        templateUrl : "data/partials/main.html",
        controller : "MainCtrl"
      })
      .when('/sidebar',{
        templateUrl : "data/partials/sidebar.html",
        controller : "SidebarController"
      })
      // .when('/presentation',{
      //   templateUrl : "partials/presentation.html",
      //   controller : "ohCtrl"
      // })
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