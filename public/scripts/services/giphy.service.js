console.log( 'giphy.service.js loaded!' );

myApp.service( 'GiphyService', function( $http ) {
  var sv = this;

  sv.getRandom = function () {
    return $http.get ('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC' ).then( function( response ){
      sv.randomGif = response.data.data.image_url;
    });
  }; // end getRandom

  sv.getSearch = function(searchFor) {
    // assemble search term from ng-model "searchInput"
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
    // target search input
    searchUrl += searchFor;
    searchUrl += "&api_key=dc6zaTOxFJmzC";
    console.log( 'searching for: ', searchUrl);

    return $http.get( searchUrl ).then( function( response ){
      console.log( 'response is: ', response);

      // since we only display one image...
      // ...choose a random one in results to display
      var randomIndexToSearch = Math.floor(Math.random() * 25);
      sv.searchGif = response.data.data[randomIndexToSearch].images.downsized.url;
    });
  };

});
