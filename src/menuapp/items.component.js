(function () {
'use strict';
angular.module('data')
.component('items', {
  templateUrl: 'src/menuapp/templates/items-list.template.html',
bindings:{
  menuName:'@',
  categoryItems:'<'
},
  controller: function ItemsController($stateParams, MenuDataService) {
    var vm = this;
  //  Called when component is ready
    vm.$onInit = function() {
       MenuDataService.getItemsForCategory($stateParams.category_shortName)
     .then(function(data){
       vm.menuName = $stateParams.category_name;
       vm.categoryItems = data;
      });
    };
  }
});

})();
