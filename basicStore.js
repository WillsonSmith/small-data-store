function basicStore() {

  let arrayPool = function arrayPool(size) {
    let pool = [];
    for (let i = 0; i < size; i++) {
      pool[i] = '';
    }

    return {
      push(value) {
        pool.unshift(pool.pop());
        pool[0] = value;
      },
      current() {
        return pool.slice(0);
      }
    };
  }
  let globalHistory = arrayPool(20);

  return {
    history() {
      return globalHistory.current();
    },
    new(initial) {
      let store = initial || {};
      let localHistory = arrayPool(10);
      function updateHistory(key) {
        globalHistory.push(key);
        localHistory.push(key);
      }
      return {
        get(key) {
          return store[key];
        },
        set(key, value) {
          store[key] = value;
          updateHistory(key);
        },
        keys() {
          return Object.keys(store);
        },
        update(key, callback) {
          callback(store[key]);
          updateHistory(key);
          return store[key];
        },
        history() {
          return localHistory.current();
        }
      }
    }
  }
}
