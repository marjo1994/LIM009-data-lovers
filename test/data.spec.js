global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('sorData', () => {  
  test('debería ser una función', () => {
    expect(typeof sorData).toBe('function');
  });
});


