global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('sorData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof sorData, 'function');
  });

  it('debería retornar "ASC"', () => {
    assert.equal(sorData(), 'example');
  });
})
