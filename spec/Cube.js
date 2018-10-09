var path = require('path');
var expect = require('chai').expect;

var Cube = require(path.join(__dirname, '..', './Cube.js'));

describe('Cube()', function () {
  'use strict';

  it('exists', function () {
    expect(Cube).to.be.a('function');

  });

  it('computes the cube of 2', function () {
    expect(Math.pow([1, 2, 3, 4, 5, 6], 3)).to.equal([1, 8, 27, 64, 125, 216]);
  });
});
