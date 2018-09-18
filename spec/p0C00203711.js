var path = require('path');
var expect = require('chai').expect;

var p0C00203711 = require(path.join(__dirname, '..', './p0C00203711.js'));

describe('p0C00203711()', function () {
  'use strict';

  it('exists', function () {
    expect(p0C00203711).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
