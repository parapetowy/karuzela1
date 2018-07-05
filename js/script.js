"use strict";


var flkty = new Flickity( '.main-carousel', {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
 });

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonReset = document.querySelector('.buttonReset');

buttonReset.addEventListener( 'click', function( event ) {
   flkty.select( 0 );
});