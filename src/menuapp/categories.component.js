(function () {
'use strict';

function CategoriesController(){

}
angular.module('data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  // controller: CategoriesController,
  bindings: {
    categories: '<'
  }
});

})();
