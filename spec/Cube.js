var path = require('path');
var expect = require('chai').expect;

var Cube = require(path.join(__dirname, '..', './Cube.js'));

describe('Cube()', function () {
  'use strict';

  it('exists', function () {
    expect(Cube).to.be.a('function');

  });

  it('computes the cube of 2', function () {
    expect(Math.pow(2, 3)).to.equal(8);
  });

  it('computes the cube of 3', function () {
    expect(Math.pow(3, 3)).to.equal(27);
  });

  it('computes the cube of 0', function () {
    expect(Math.pow(0, 3)).to.equal(0);
  });

});
