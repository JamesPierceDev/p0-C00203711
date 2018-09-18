/*! Cube v0.0.0 - MIT license */
'use strict';

var Cube = function (x) {
  // your code goes here
  return (x * x) * x;
}

if ( typeof module !== "undefined" ) {
  module.exports = Cube;
}