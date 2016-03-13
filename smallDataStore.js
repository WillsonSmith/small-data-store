function smallDataStore(instantInitiator) {

  let groupedStores = [];
  let storeActions = function storeActions(object) {
    let store = object;

    return {
      get(key) {
        return store[key];
      },
      set(key, value) {
        store[key] = value;
      },
      keys() {
        return Object.keys(store);
      },
      update(key, callback) {
        callback(store[key]);
        return store[key];
      }
    }
  }
  let newStore = function newStore(initial) {
      let store = initial || {};
      let actions = storeActions(store);
      groupedStores.push(actions);
      return actions;
  }

  if (instantInitiator) {
    return newStore(instantInitiator)
  }

  return {
    storeGroup() {
      return groupedStores;
    },
    new: newStore
  }
}
