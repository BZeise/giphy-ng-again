console.log( 'giphyClient loaded' );

// declare myApp
var myApp = angular.module('myApp', []);

// declare controller
myApp.controller('GiphyController', function( GiphyService ) {
  var vm = this;

  vm.testFunk = function() {
    console.log( 'in testFunk' );
    vm.dataWeWant = GiphyService.testVar();
  };
});
