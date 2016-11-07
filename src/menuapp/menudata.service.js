(function () {
  'use strict';

  angular.module('data')
  .service("MenuDataService", MenuDataService);
  MenuDataService.$inject = ['$http'];
  function MenuDataService ($http){
    var service = this;
    service.categories = [];
    service.items = [];

    service.getAllCategories = function (){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
        params: {
          category: ''
        }
      })
      .then(function (result) {
        service.categories = result.data.categories;

        // return processed items
        return service.categories;
      })
      .catch(function (error) {
        console.log(error);
        return [];
      });
    };

    service.getItemsForCategory = function (categoryShortName, $http){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      })
      .then(function (result) {
        service.items = result.data.menu_items;
        // return processed items
        return service.items;
      })
      .catch(function (error) {
        console.log(error);
        return [];
      });
    };

  }

})();
