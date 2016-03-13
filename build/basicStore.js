'use strict';

function basicStore() {

  var arrayPool = function arrayPool(size) {
    var pool = [];
    for (var i = 0; i < size; i++) {
      pool[i] = '';
    }

    return {
      push: function push(value) {
        pool.unshift(pool.pop());
        pool[0] = value;
      },
      current: function current() {
        return pool.slice(0);
      }
    };
  };
  var globalHistory = arrayPool(20);

  return {
    history: function history() {
      return globalHistory.current();
    },
    new: function _new(initial) {
      var store = initial || {};
      var localHistory = arrayPool(10);
      function updateHistory(key) {
        globalHistory.push(key);
        localHistory.push(key);
      }
      return {
        get: function get(key) {
          return store[key];
        },
        set: function set(key, value) {
          store[key] = value;
          updateHistory(key);
        },
        keys: function keys() {
          return Object.keys(store);
        },
        update: function update(key, callback) {
          callback(store[key]);
          updateHistory(key);
          return store[key];
        },
        history: function history() {
          return localHistory.current();
        }
      };
    }
  };
}

//# sourceMappingURL=basicStore.js.map