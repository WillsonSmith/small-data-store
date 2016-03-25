'use strict';

var _smallDataStore = require('../build/smallDataStore.js');

var _smallDataStore2 = _interopRequireDefault(_smallDataStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_smallDataStore2.default);
var assert = require('assert');

var dataStore = (0, _smallDataStore2.default)();

describe('smallDataStore()', function () {

  it('should return two functions', function () {
    assert.equal(dataStore.hasOwnProperty('storeGroup'), true);
    assert.equal(dataStore.hasOwnProperty('new'), true);
  });

  it('should create a new store if called with an object', function () {
    var newStore = (0, _smallDataStore2.default)({});
    hasStoreProperties(newStore);
  });

  it('should have an array of grouped stores with .storeGroup()', function () {
    var newStore = dataStore.new({});
    var newStore2 = dataStore.new({});
    assert.equal(dataStore.storeGroup().length, 2);
  });
});

describe('smallDataStore.new()', function () {

  it('should have a get, set, keys, and update function', function () {
    var newStore = dataStore.new();
    hasStoreProperties(newStore);
  });

  it('should set a value when using .set() and get a value with .get()', function () {
    var newStore = dataStore.new();
    assert.equal(newStore.set('testValue', true), true);
  });

  it('should update a value using .update()', function () {
    var newStore = dataStore.new({
      'value': [1, 2, 3, 4]
    });
    assert.deepEqual(newStore.update('value', function (value) {
      value.push(5);
    }), [1, 2, 3, 4, 5]);
  });

  it('should retrieve all keys of store with .keys()', function () {
    var newStore = dataStore.new({
      'test1': 1,
      'test2': 2
    });
    assert.deepEqual(['test1', 'test2'], newStore.keys());
  });
});

function hasStoreProperties(store) {
  assert.equal(store.hasOwnProperty('get'), true);
  assert.equal(store.hasOwnProperty('set'), true);
  assert.equal(store.hasOwnProperty('update'), true);
  assert.equal(store.hasOwnProperty('keys'), true);
}

//# sourceMappingURL=smallDataStoreTest.js.map