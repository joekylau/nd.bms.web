'use strict';
function b2bTable(){
  return {
    restrict: 'A',
    scope: {
      rows: '=data'
    },
    templateUrl: require('./b2b-table.html'),
    link: function(scope, element, attrs, controller, transcludeFn){
      var unwatch = scope.$watch('rows', (nv, ov) => {
        if ( !!nv ) {
          unwatch();
          launch();
        }
      })
      function launch() {
        scope.headers = scope.rows.shift();
        console.log(scope.headers, scope.rows)
      }
    }
  }
}

angular.module('b2b')
  .directive('b2bTable', b2bTable)

module.exports = {
  name: 'b2bTable',
  directive: b2bTable
}

