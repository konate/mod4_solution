(function () {
  'use strict';

  angular.module('data')
  .service("MenuDataService", MenuDataService);
  MenuDataService.$inject = ['$http','ApiBasePath'];
  function MenuDataService ($http,ApiBasePath){
    var service = this;
    service.items = [];
    service.category ='';
    service.categoryShortName='';
    //////////////////////////////////////////
    service.getAllCategories = function (){
       var categories = [];
       return  $http.get( ApiBasePath+"/categories.json").then(function (response) {
          service.items = response.data;
           return service.items;
        });
    };
////////////////////////////
    service.getItemsForCategory = function (categoryShortName){
      var foundItems = [];
      service.categoryShortName = categoryShortName;
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: ''
        }
      })
      .then(function (result) {
      //extract only this category
        foundItems = result.data.menu_items.filter(resultFilter);
        return foundItems;
      })
      .catch(function (error) {
        return [];
      });
    };
    function resultFilter (item){
      return item.short_name
        .toLowerCase().indexOf(service.categoryShortName.toLowerCase())>= 0;
    }

    return service;
  }

})();
