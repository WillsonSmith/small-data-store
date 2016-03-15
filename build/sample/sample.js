'use strict';

var groceryStore = smallDataStore();

var fruitGroceryStore = groceryStore.new({
  'apples': 5,
  'oranges': 10,
  'bananas': 2,
  'purchased': false
});

var meatGroceryStore = groceryStore.new({
  'steak': {
    'hanger': 1
  },
  'porkchop': 5,
  'sausage': 3,
  'purchased': false
});

var sausageNumber = meatGroceryStore.get('sausage');
console.log(sausageNumber); //3

meatGroceryStore.set('bacon', 7);
console.log(meatGroceryStore.get('bacon')); // 7

meatGroceryStore.update('steak', function (grocery) {
  return grocery.tenderloin = 1;
});
console.log(meatGroceryStore.get('steak')); // {hanger: 1, tenderloin: 1}

console.log(groceryStore.storeGroup()); // [fruitStore, meatStore]
groceryStore.storeGroup().forEach(function (store) {
  return store.set('purchased', true);
});

console.log(meatGroceryStore.get('purchased')); // true
console.log(fruitGroceryStore.get('purchased')); // true

var carStore = smallDataStore({
  'ford': 15,
  'honda': 12,
  'toyota': 16
});

console.log(carStore.keys()); // ['ford', 'honda', 'toyota'];
console.log(carStore.get('ford')); // 15

//# sourceMappingURL=sample.js.map