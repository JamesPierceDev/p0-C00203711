/*! Cube v0.0.0 - MIT license */
'use strict';

var Cube = function (list) {
  // your code goes here
  for (var i = 0; i < length(list); i++)
  {
    list[i] = list[i] * list[i] * list[i];
  }
  return list;
}

if ( typeof module !== "undefined" ) {
  module.exports = Cube;
}