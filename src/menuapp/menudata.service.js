(function () {
  'use strict';

  angular.module('data')
  .service("MenuDataService", MenuDataService);
  MenuDataService.$inject = ['$http'];
  function MenuDataService ($http){
    var service = this;
    service.categories = [];
    service.items = [];
    /////////////////////////////////////   
     // List of shopping items
     var items = [];

     // Pre-populate a no cookie list
     items.push({
       name: "Sugar",
       quantity: "2 bags",
       description: "Sugar used for baking delicious umm... baked goods."
     });
     items.push({
       name: "flour",
       quantity: "1 bags",
       description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
     });
     items.push({
       name: "Chocolate Chips",
       quantity: "3 bags",
       description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
     });

     // Simulates call to server
     // Returns a promise, NOT items array directly
     service.getItems = function () {
       var deferred = $q.defer();

       // Wait 2 seconds before returning
       $timeout(function () {
         // deferred.reject(items);
         deferred.resolve(items);
       }, 800);

       return deferred.promise;
     };

    //////////////////////////////////////////
    //
    // service.getAllCategories = function (){
    //   return $http({
    //     method: "GET",
    //     url: (ApiBasePath + "/categories.json"),
    //     params: {
    //       category: ''
    //     }
    //   })
    //   .then(function (result) {
    //     service.categories = result.data.categories;
    //
    //     // return processed items
    //     return service.categories;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return [];
    //   });
    // };
    //
    // service.getItemsForCategory = function (categoryShortName, $http){
    //   return $http({
    //     method: "GET",
    //     url: (ApiBasePath + "/menu_items.json"),
    //     params: {
    //       category: categoryShortName
    //     }
    //   })
    //   .then(function (result) {
    //     service.items = result.data.menu_items;
    //     // return processed items
    //     return service.items;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return [];
    //   });
    // };

  }

})();
