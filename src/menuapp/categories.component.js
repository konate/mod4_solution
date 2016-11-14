(function () {
'use strict';
angular.module('data')
.component('categories',{

  transclude: true,
  templateUrl: 'src/menuapp/templates/categories-list.template.html',
  controller: function(MenuDataService) {
    var vm = this;
    // Called when component is ready, see below
    vm.$onInit = function() {
     MenuDataService.getAllCategories().then(function(data){
          vm.items = data;
      });
    };
  }
});

})();
