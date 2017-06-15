console.log( 'giphy.service.js loaded!' );

myApp.service( 'GiphyService', function( $http ) {
  var sv = this;

  sv.testVar = function() {
    return "it's a test!!!";
  };
});
