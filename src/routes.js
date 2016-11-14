(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
    $stateProvider
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html'
    })
    .state('items', {
    url: '/categories/{category_name}/{category_shortName}',
      templateUrl: 'src/menuapp/templates/items.template.html'
    });
  }

})();
