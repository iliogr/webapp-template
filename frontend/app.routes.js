iliogr.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
   $urlRouterProvider.otherwise("/main");
   $stateProvider
   .state('main', {
      url: "/main",
      views:{
         'main': {
            templateUrl: "../html/main.html",
            controller: "mainController"
         }
      }
   });
   $locationProvider.html5Mode(true);
}]);