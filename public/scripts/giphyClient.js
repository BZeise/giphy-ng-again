console.log( 'giphyClient loaded' );

// declare myApp
var myApp = angular.module('myApp', []);

// declare controller
myApp.controller('GiphyController', function( GiphyService ) {
  var vm = this;

  vm.showRandom = function() {
    console.log( 'in showRandom' );
    GiphyService.getRandom().then(function(response){
      console.log('in GiphyService.getRandom, response it:', response);
      vm.gifToShow = GiphyService.randomGif;
    });
  }; // end showRandom

  vm.showSearch = function() {
    console.log( 'in showSearch' );
    GiphyService.getSearch(vm.searchInput).then(function(response){
      console.log('in GiphyService.getSearch, response it:', response);
      vm.gifToShow = GiphyService.searchGif;

    });
  };

});
