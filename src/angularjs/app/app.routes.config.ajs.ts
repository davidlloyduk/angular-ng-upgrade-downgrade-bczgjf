export const configRoutes= [
  '$routeProvider', 
  '$locationProvider', 
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider  
      .when('/angularjs', {
        template: '<ajs-app></ajs-app>'
      })
      .when('/angular', {
        template: '<app></app>'
      })
      .otherwise('angularjs');
  }
]
