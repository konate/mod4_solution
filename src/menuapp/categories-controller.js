(function () {
'use strict';

angular.module('data')
.controller('CategoriesController');
CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
 var ctrl = this;
 ctrl.categories = [];
 var menuDataService = MenuDataService;
 //ctrl.categories = menuDataService.getAllCategories();
 // ctrl.items = menuDataService.getItemsForCategory($ctrl.categoryShortName);
ctrl.items.push({name:"bakary"}
          .push({name:"Konate"}));
}

})();
