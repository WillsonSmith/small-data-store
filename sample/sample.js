let groceryStore = smallDataStore();

let fruitGroceryStore = groceryStore.new({
  'apples': 5,
  'oranges': 10,
  'bananas': 2,
  'purchased': false
});

let meatGroceryStore = groceryStore.new({
  'steak': {
    'hanger': 1
  },
  'porkchop': 5,
  'sausage': 3,
  'purchased': false
});

let sausageNumber = meatGroceryStore.get('sausage');
console.log(sausageNumber); //3

meatGroceryStore.set('bacon', 7);
console.log(meatGroceryStore.get('bacon')); // 7

meatGroceryStore.update('steak', (grocery) => grocery.tenderloin = 1);
console.log(meatGroceryStore.get('steak')); // {hanger: 1, tenderloin: 1}

console.log(groceryStore.storeGroup()); // [fruitStore, meatStore]
groceryStore.storeGroup().forEach((store) => store.set('purchased', true));

console.log(meatGroceryStore.get('purchased')); // true
console.log(fruitGroceryStore.get('purchased')); // true

let carStore = smallDataStore({
  'ford': 15,
  'honda': 12,
  'toyota': 16
});

console.log(carStore.keys()); // ['ford', 'honda', 'toyota'];
console.log(carStore.get('ford')); // 15
