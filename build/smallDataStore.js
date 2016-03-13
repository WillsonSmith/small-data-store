"use strict";

function smallDataStore(instantInitiator) {

  var groupedStores = [];
  var storeActions = function storeActions(object) {
    var store = object;

    return {
      get: function get(key) {
        return store[key];
      },
      set: function set(key, value) {
        store[key] = value;
      },
      keys: function keys() {
        return Object.keys(store);
      },
      update: function update(key, callback) {
        callback(store[key]);
        return store[key];
      }
    };
  };
  var newStore = function newStore(initial) {
    var store = initial || {};
    var actions = storeActions(store);
    groupedStores.push(actions);
    return actions;
  };

  if (instantInitiator) {
    return newStore(instantInitiator);
  }

  return {
    storeGroup: function storeGroup() {
      return groupedStores;
    },

    new: newStore
  };
}

//# sourceMappingURL=smallDataStore.js.map